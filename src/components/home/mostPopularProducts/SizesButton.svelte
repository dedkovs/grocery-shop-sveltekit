<script lang="ts">
	import Button, { Label } from '@smui/button';

	export let label: number;
	export let index: number;
	export let active: boolean;
	export let onClick: (i: number) => void;
</script>

<div>
	<Button
		class="sizes"
		on:click={() => onClick(index)}
		variant={active ? 'unelevated' : 'outlined'}
	>
		<Label>{label}</Label>
	</Button>
</div>

<style lang="scss">
	:global(.sizes.mdc-button--unelevated:not(:disabled)) {
		background-color: var(--theme-green);
	}

	:global(.sizes.mdc-button--outlined .mdc-button__ripple::before, .sizes.mdc-button--outlined
			.mdc-button__ripple::after) {
		background-color: var(--theme-green);
	}

	:global(.sizes.mdc-button--outlined, .sizes.mdc-button--unelevated) {
		border-radius: 30px;
		font-weight: 400;
	}

	:global(.sizes.mdc-button) {
		min-width: 43px;
	}

	:global(.sizes.mdc-button .mdc-button__ripple) {
		border-radius: 30px;
	}

	:global(.sizes.mdc-button--outlined:not(:disabled)) {
		border-color: var(--theme-borderColor1);
		color: var(--theme-text);
	}

	:global(.sizes.mdc-button--outlined) {
		transition: none;
	}
</style>
