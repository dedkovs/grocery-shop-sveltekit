<script lang="ts">
	import type { Product } from '../../types/Product';
	import { numberWithCommas } from '../../utils/numberWithCommas';

	export let price: Product['price'];
</script>

<div class="priceContainer">
	<p class="priceText">Price:</p>
	<p class="priceNumber">
		${numberWithCommas(price)}
	</p>
</div>

<style lang="scss">
	.priceContainer {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin-top: 16px;
		font-weight: 700;
	}

	.priceText {
		min-width: 140px;
		margin: 0;
	}

	.priceNumber {
		min-width: 100px;
		margin: 0;
		color: var(--theme-green);
	}
</style>
