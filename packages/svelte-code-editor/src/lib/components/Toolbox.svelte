<script lang="ts">
	import Dropdown from './Dropdown.svelte';
	import HoverMenu from './HoverMenu.svelte';
	import Icon from './Icon.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<Dropdown align="right">
	<div class="target">
		<span class="wrench" role="presentation"></span>
		<Icon name="chevron-down" />
	</div>

	{#snippet dropdown()}
		<HoverMenu>
			{@render children()}
		</HoverMenu>
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

	span.wrench {
		--icon-size: 1.8rem;
		width: 1.8rem;
		height: 1.8rem;
		z-index: 9999;
		background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23676778' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'/%3E%3C/svg%3E") no-repeat 50% 50%;
		background-size: contain;

		:root.dark & {
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23CCCCCC' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'/%3E%3C/svg%3E");
		}
	}
</style>
