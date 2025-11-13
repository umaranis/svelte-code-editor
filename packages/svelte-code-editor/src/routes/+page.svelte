<script lang="ts">
	import Editor from '$lib/Editor.svelte';
	import TabbedEditor from '$lib/TabbedEditor.svelte';
	import { Workspace } from '$lib/Workspace.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import type { File } from '$lib/Workspace.svelte';
	import '$lib/styles/index.css';

	const dummy: File = {
		type: 'file',
		name: 'App.svelte',
		basename: 'App.svelte',
		contents: '',
		text: true
	};

	const dummy2: File = {
		type: 'file',
		name: 'App2.svelte',
		basename: 'App2.svelte',
		contents: '',
		text: true,
		hideCloseOption: true
	};

	const workspace = new Workspace([dummy, dummy2], {
		initial: 'App.svelte',
		svelte_version: 'latest',
		onupdate() {},
		onreset() {}
	});
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p>Theme: <ThemeToggle /></p>

<TabbedEditor {workspace} />
