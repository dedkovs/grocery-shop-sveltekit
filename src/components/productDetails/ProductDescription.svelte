<script lang="ts">
	import type { Product } from '../../types/Product';
	export let description: Product['description'];
</script>

<p>{description}</p>

<style lang="scss">
	p {
		line-height: 1.5;
		white-space: pre-line;
	}
</style>
