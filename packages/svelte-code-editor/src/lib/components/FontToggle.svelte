<script lang="ts">
	let font = $state('elegant');

	$effect(() => {
		font = localStorage.getItem('svelte:font') ?? 'elegant';
	});

	function toggle() {
		font = font === 'elegant' ? 'boring' : 'elegant';

		document.documentElement.classList.remove('font-elegant');
		document.documentElement.classList.remove('font-boring');

		document.documentElement.classList.add(`font-${font}`);
		localStorage.setItem('svelte:font', font);
	}
</script>

<button
	onclick={toggle}
	class="raised icon"
	type="button"
	aria-pressed={font === 'boring'}
	aria-label="Toggle font"
></button>

<style>
	button {
		background-size: 2rem;
	}

	button[aria-pressed='true'] {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23676778' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 7V4h16v3'%3E%3C/path%3E%3Cpath d='M9 20h6'%3E%3C/path%3E%3Cpath d='M12 4v16'%3E%3C/path%3E%3C/svg%3E");

		:global(.dark) & {
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23CCCCCC' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 7V4h16v3'%3E%3C/path%3E%3Cpath d='M9 20h6'%3E%3C/path%3E%3Cpath d='M12 4v16'%3E%3C/path%3E%3C/svg%3E");
		}
	}

	button[aria-pressed='false'] {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23676778' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 8L10 8'%3E%3C/path%3E%3Cpath d='M14 8L18 8'%3E%3C/path%3E%3Cpath d='M6 12L18 12'%3E%3C/path%3E%3Cpath d='M6 16L18 16'%3E%3C/path%3E%3C/svg%3E");

		:global(.dark) & {
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23CCCCCC' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 8L10 8'%3E%3C/path%3E%3Cpath d='M14 8L18 8'%3E%3C/path%3E%3Cpath d='M6 12L18 12'%3E%3C/path%3E%3Cpath d='M6 16L18 16'%3E%3C/path%3E%3C/svg%3E");
		}
	}
</style>
