<script>
	import IconButton from '@smui/icon-button';
	import { getContext } from 'svelte';
	const { theme, toggle } = getContext('theme');
</script>

<div class="theme-toggle">
	<IconButton class="material-icons" on:click={toggle} size="mini"
		>{$theme.name === 'dark' ? 'light_mode' : 'nightlight_round'}</IconButton
	>
</div>

<style lang="scss">
	.theme-toggle {
		color: white;

		:global(.mdc-icon-button) {
			font-size: 20px;
		}
	}
</style>
