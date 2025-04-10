<script lang="ts">
	import {TabbedEditor, Workspace} from '@umaranis/svelte-code-editor';
  import type { File } from '@umaranis/svelte-code-editor';
  import '@umaranis/svelte-code-editor/styles/index.css';

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

<h1>Welcome to svelte-code-editor</h1>

<TabbedEditor {workspace} />

