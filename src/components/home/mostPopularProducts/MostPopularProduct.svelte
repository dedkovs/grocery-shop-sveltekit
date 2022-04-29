<script lang="ts">
	import type { Product } from '../../../types/Product';
	import Card from '@smui/card';
	import SizesButton from './SizesButton.svelte';
	import CommonButton from '../../common/CommonButton.svelte';
	import ProductRating from '../../../components/productDetails/ProductRating.svelte';

	export let product: Product;
	const { id, name, rating, price, image, sizeType, sizes, quantity } = product;
	let active = 0;

	const sizeClickHandle = (index: number) => {
		active = index;
	};
</script>

<Card variant="outlined" padded class="card-container">
	<div>
		<a href="/products/{name}">
			<img class="image" src={image} alt="" />
		</a>

		<a href="/products/{name}">
			<h3 class="name">{name}</h3>
		</a>

		<ProductRating {rating} center={true} />
	</div>

	<h3 class="price">${price}</h3>

	<div class="sizes-button-container">
		{#each sizes as size, index}
			<SizesButton
				{index}
				active={index === active ? true : false}
				label={size}
				onClick={sizeClickHandle}
			/>
		{/each}
		{sizeType}
	</div>

	<div class="button-container">
		<CommonButton label="Add to Cart" />
	</div>
</Card>

<style lang="scss">
	:global(.card-container) {
		height: 100%;
		padding: 10px 10px 20px;
		border-radius: 10px;
		border-color: var(--theme-borderColor1);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		color: var(--theme-text);
		background-color: transparent;
		text-align: center;
		a {
			text-decoration: none;
			color: inherit;
			display: inline-flex;
		}

		&:hover {
			border-color: var(--theme-green);
		}
	}

	.image {
		border-radius: 8px;
		width: 100%;
		height: 300px;
		object-fit: contain;
		&:hover {
			cursor: pointer;
		}
	}

	.name {
		color: inherit;
		font-size: 24px;
		font-weight: 600;
		margin: 15px 0 0;
		transition: color 0.3s;
		text-align: center;
		&:hover {
			color: var(--theme-green);
			cursor: pointer;
		}
	}

	.price {
		font-size: 24px;
		font-weight: 600;
		color: var(--theme-green);
		margin: 10px 0 0;
	}

	.sizes-button-container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
		margin-top: 16px;
	}

	.button-container {
		margin-top: 24px;
	}
</style>
