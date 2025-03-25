<script lang="ts">
	import { Dropdown } from '$lib/components';
	import { get_repl_context } from '../context';

	let { runes }: { runes: boolean } = $props();

	const { workspace, svelteVersion } = get_repl_context();
	const majorVersion = Number(svelteVersion.split('.')[0]);
</script>

<Dropdown align="right">
	<div class="target">
		<span class="lightning" class:active={runes} role="presentation"></span>

		<span>runes</span>
	</div>

	{#snippet dropdown()}
		<div class="popup">
			{#if Number.isInteger(majorVersion) && majorVersion < 5}
				<p>
					<a href="https://svelte.dev/blog/runes">Runes</a> are available from Svelte 5 onwards, and this playground
					is using Svelte {svelteVersion}.
				</p>
			{:else if workspace.current.name.endsWith('.svelte.js')}
				<p>
					Files with a <code>.svelte.js</code> extension are always in
					<a href="https://svelte.dev/blog/runes">runes mode</a>.
				</p>
			{:else if workspace.current.name.endsWith('.js')}
				<p>
					To use <a href="https://svelte.dev/blog/runes">runes</a> in a JavaScript file, change the extension to
					<code>.svelte.js</code>.
				</p>
			{:else if workspace.current.name.endsWith('.svelte')}
				{#if runes}
					<p>
						This component is in
						<a href="https://svelte.dev/blog/runes">runes mode</a>.
					</p>
					<p>To disable runes mode, add the following to the top of your component:</p>
					<pre><code>&lt;svelte:options runes={'{false}'} /&gt;</code></pre>
				{:else}
					<p>This component is not in <a href="https://svelte.dev/blog/runes">runes mode</a>.</p>
					<p>
						To enable runes mode, either start using runes in your code, or add the following to the
						top of your component:
					</p>
					<pre><code>&lt;svelte:options runes /&gt;</code></pre>
				{/if}
			{:else}
				<p>
					Edit a <code>.svelte</code>, <code>.svelte.js</code> or <code>.js</code> file to see
					information on <a href="https://svelte.dev/blog/runes">runes mode</a>
				</p>
			{/if}
		</div>
	{/snippet}
</Dropdown>

<style>
	.target {
		text-transform: uppercase;
		font: var(--sk-font-ui-small);
		position: relative;
		display: flex;
		align-items: center;

		height: 100%;
		padding: 0 0.8rem;
		gap: 0.5rem;
		z-index: 2;
	}

	span.lightning {
		--icon-size: 1.8rem;
		width: 1.8rem;
		height: 1.8rem;
		z-index: 9999;
		background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.5 3L5 14h6l-1 7 7.5-11h-6l1-7z' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat 50% 50%;
		background-size: contain;

		:root.dark &:not(.active) {
			background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.5 3L5 14h6l-1 7 7.5-11h-6l1-7z' stroke='%23CCCCCC' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
		}

		&.active {
			background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.5 3L5 14h6l-1 7 7.5-11h-6l1-7z' stroke='%23FF3E00' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='%23FF3E00'/%3E%3C/svg%3E");
			animation: bump 0.4s;
		}
	}

	@keyframes bump {
		0% {
			background-size: var(--icon-size);
		}
		50% {
			background-size: calc(1.3 * var(--icon-size));
		}
		100% {
			background-size: var(--icon-size);
		}
	}

	.popup {
		position: absolute;
		right: -4rem;
		width: 100vw;
		max-width: 320px;
		z-index: 9999;
		background: var(--sk-bg-3);
		padding: 1em;
		border-radius: var(--sk-border-radius);

		p {
			font: var(--sk-font-ui-medium);
		}
	}

	.popup p:first-child {
		margin-top: 0;
	}

	.popup p:last-child {
		margin-bottom: 0;
	}
</style>
