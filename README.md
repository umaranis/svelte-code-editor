# svelte-code-editor

`svelte-code-editor` is a code editor for Svelte based on CodeMirror.

It is extracted out of the official [Svelte playground](https://svelte.dev/playground) into a component to facilitate reuse.

![alt text](https://raw.githubusercontent.com/umaranis/svelte-code-editor/refs/heads/main/docs/images/screenshot.png)

The package contains the following components:

| Component | Description |
|-----------|-------------|
| `Editor` | Core code editor component based on CodeMirror |
| `TabbedEditor` | Editor with tab support for multiple files |
| `ThemeToggle` | Toggle between light and dark themes |

## Features

- 🎨 Syntax highlighting for Svelte, JavaScript, Typescript and CSS
- ✨ Autocompletion for Svelte, JavaScript, and CSS
- 🔍 Search and replace
- ⌨️ Vim mode
- 🌓 Dark and light themes

## Installation

```bash
pnpm add @umaranis/svelte-code-editor
```

## Usage

1- Import the desired components into the page `import TabbedEditor from '$lib/TabbedEditor.svelte';`

2- Create `File` and `Workspace` objects

3- Include the component in your page `<TabbedEditor {workspace} />`

Here is  an example:

```svelte
<script lang="ts">
 import Editor from '$lib/Editor.svelte';
 import TabbedEditor from '$lib/TabbedEditor.svelte';
 import { Workspace } from '$lib/Workspace.svelte';
 import ThemeToggle from '$lib/components/ThemeToggle.svelte';
 import type { File } from '$lib/Workspace.svelte';
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

<h1>Welcome to your svelte-code-editor project</h1>

<p>Theme: <ThemeToggle /></p>

<TabbedEditor {workspace} />
```
