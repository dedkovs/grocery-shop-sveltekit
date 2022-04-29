<script lang="ts">
	import GreenPageHeader from '../../common/GreenPageHeader.svelte';
	import MostPopularProduct from './MostPopularProduct.svelte';

	export let mostPopularProducts;
</script>

<div style="min-width: 320px">
	<GreenPageHeader title="Most popular products" />
	<div class="container">
		{#each mostPopularProducts as product (product._id)}
			<MostPopularProduct {product} />
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		padding: 50px 32px;
		display: grid;
		grid-template-columns: repeat(auto-fit, 320px);
		gap: 24px;
		justify-content: center;

		@media screen and (min-width: 1200px) {
			padding: 50px 80px;
		}

		@media screen and (max-width: 888px) {
			grid-template-columns: repeat(auto-fit, minmax(256px, 320px));
		}
	}
</style>
