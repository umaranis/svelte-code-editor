<script lang="ts">
	import {TabbedEditor, Workspace} from '@umaranis/svelte-code-editor';
  import type { File } from '@umaranis/svelte-code-editor';

  const file: File = {
  type: 'file',
  name: 'App.svelte',
  basename: 'App.svelte',
  contents: '',
  text: true
 };

 const workspace = new Workspace([file], {
  initial: 'App.svelte',
  svelte_version: 'latest',
  onupdate() {},
  onreset() {}
 });
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<TabbedEditor {workspace} />

