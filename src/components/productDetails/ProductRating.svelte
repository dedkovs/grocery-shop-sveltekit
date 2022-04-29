<script lang="ts">
	import type { Product } from '../../types/Product';
	import FiveStarsBorder from './FiveStarsBorder.svelte';
	import FiveStarsFill from './FiveStarsFill.svelte';

	export let rating: Product['rating'];
	export let center: boolean;
</script>

<div class="five-stars-border" style="--margin: {center ? '0 auto' : '0'}">
	<FiveStarsBorder />
</div>

<div
	class="rating"
	style="--rating: {rating}; --margin: {center ? '0 auto' : '0'}"
	aria-label="Rating of this product is {rating} out of 5."
>
	<FiveStarsFill />
</div>

<style lang="scss">
	.rating {
		--percent: calc(var(--rating) / 5 * 100%);
		margin: var(--margin);
		margin-top: -20px;
		width: 100px;
		height: 20px;
		-webkit-clip-path: url(#clip-five-stars);
		clip-path: url(#clip-five-stars);
		background: linear-gradient(
			90deg,
			var(--theme-text) var(--percent),
			var(--theme-background) var(--percent)
		);
	}

	.five-stars-border {
		margin: var(--margin);
		margin-top: 10px;
		width: 100px;
		height: 20px;
		background-color: var(--theme-text);
		-webkit-clip-path: url(#clip-five-stars-border);
		clip-path: url(#clip-five-stars-border);
	}
</style>
