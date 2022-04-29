<script lang="ts">
	import type { Product } from '../../types/Product';
	import Button from '@smui/button';

	export let active: boolean;
	export let index: number;
	export let product: Product;
	export let handleSizeChange: (index: number) => void;
</script>

<Button
	class="productSizeButton"
	on:click={() => handleSizeChange(index)}
	variant={'unelevated'}
	style="--active: {active ? 500 : 400}; --color: {active
		? '#fff'
		: 'var(--theme-text)'}; --borderColor: {active
		? 'var(--theme-green)'
		: 'var(--theme-borderColor1)'};
        --backgroundColor: {active ? 'var(--theme-green)' : 'transparent'}"
>
	{product.sizes[index]}
</Button>

<style lang="scss">
	:global(.productSizeButton) {
		text-transform: none;
		font-size: 16px;
		padding: 0 5px;
		font-weight: var(--active);
		font-family: 'Open Sans';
		border-radius: 30px;
	}

	:global(.productSizeButton.mdc-button .mdc-button__ripple) {
		border-radius: 30px;
	}

	:global(.productSizeButton.mdc-button) {
		min-width: 43px;
	}

	:global(.productSizeButton.mdc-button--unelevated:not(:disabled)) {
		color: var(--color);
		background-color: var(--backgroundColor);
		border: 1px solid;
		border-color: var(--borderColor);
	}
</style>
