<script>
	import { numberWithCommas } from '../../utils/numberWithCommas';
	export let price;
	export let quantity;
	export let sizes;
	export let activeSize;
</script>

<div class="container">
	<p class="text1">Subtotal price:</p>
	<p class="text2">
		{`$${numberWithCommas(Math.round(price * quantity * sizes[activeSize] * 100) / 100)}`}
	</p>
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin-top: 16px;
	}

	.text1 {
		margin: 0;
		font-weight: 700;
		min-width: 140px;
	}

	.text2 {
		margin: 0;
		font-weight: 700;
		min-width: 140px;
		color: var(--theme-text);
	}
</style>
