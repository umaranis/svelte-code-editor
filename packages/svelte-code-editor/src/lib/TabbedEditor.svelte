<script lang="ts">
	import { writable } from 'svelte/store';
	import { set_repl_context } from './context';
	import Editor from './Editor.svelte';
	import ComponentSelector from './Input/ComponentSelector.svelte';
	import type { ReplContext } from './types';
	import type { Workspace } from './Workspace.svelte';

	interface Props {
		workspace: Workspace;
		onchange?: () => void;
		download?: () => void;
	}

	let { workspace, onchange = () => {}, download }: Props = $props();

	let runes = $derived(
		workspace.current.name.endsWith('.svelte.js') ||
			(workspace.current_compiled?.result?.metadata.runes ?? false)
	);

	let svelteVersion = 'latest';

	const bundle: ReplContext['bundle'] = writable(null);
	const toggleable: ReplContext['toggleable'] = writable(false);

	set_repl_context({
		bundle,
		toggleable,
		workspace,
		svelteVersion
	});
</script>

<ComponentSelector {runes} {onchange} {workspace} {download} />
<Editor {workspace} />
