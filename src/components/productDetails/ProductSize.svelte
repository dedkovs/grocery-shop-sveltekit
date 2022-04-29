<script lang="ts">
	import type { Product } from '../../types/Product';
	import ProductSizeButton from './ProductSizeButton.svelte';

	export let sizes: Product['sizes'];
	export let activeSize: number;
	export let product: Product;
	export let handleSizeChange: (index: number) => void;
</script>

<div class="container1">
	<p class="text1">Size:</p>
	<div class="container2">
		{#each sizes as size, index (size)}
			<ProductSizeButton
				active={index === activeSize ? true : false}
				{index}
				{product}
				{handleSizeChange}
			/>
		{/each}
		<div class="sizeType">
			{product.sizeType}
		</div>
	</div>
</div>

<style lang="scss">
	.container1 {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin-top: 16px;
		row-gap: 8px;
	}

	.text1 {
		font-weight: 700;
		min-width: 140px;
		margin: 0;
	}

	.container2 {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
	}

	.sizeType {
		display: flex;
		align-items: center;
	}
</style>
