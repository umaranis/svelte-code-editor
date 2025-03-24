import { BROWSER } from 'esm-env';
import CompileWorker from './worker?worker';
import type { Compiled, File } from '../Workspace.svelte';

const callbacks = new Map<string, Map<number, (compiled: Compiled) => void>>();

let worker: Worker;

let uid = 1;

if (BROWSER) {
	worker = new CompileWorker();

	worker.addEventListener('message', (event) => {
		const { filename, id, payload } = event.data;
		const file_callbacks = callbacks.get(filename);

		if (file_callbacks) {
			const callback = file_callbacks.get(id);
			if (callback) {
				callback(payload);
				file_callbacks.delete(id);

				for (const [other_id, callback] of file_callbacks) {
					if (id > other_id) {
						callback(payload);
						file_callbacks.delete(other_id);
					}
				}

				if (file_callbacks.size === 0) {
					callbacks.delete(filename);
				}
			}
		}
	});
}

export function compile_file(
	file: File,
	version: string,
	options: { generate: 'client' | 'server'; dev: boolean }
): Promise<Compiled> {
	// @ts-ignore
	if (!BROWSER) return;

	let id = uid++;
	const filename = file.name;

	if (!callbacks.has(filename)) {
		callbacks.set(filename, new Map());
	}

	const file_callbacks = callbacks.get(filename)!;

	worker.postMessage({ id, file, version, options });

	return new Promise((fulfil) => {
		file_callbacks.set(id, fulfil);
	});
}
