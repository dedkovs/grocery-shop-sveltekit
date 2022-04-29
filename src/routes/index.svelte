<script context="module">
	export async function load({ params, fetch, session, stuff }) {
		const url = '/products';
		const res = await fetch(url);

		if (res.ok) {
			const data = await res.json();
			return {
				props: { mostPopularProducts: data.products }
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script lang="ts">
	import MostPopularProducts from '../components/home/mostPopularProducts/MostPopularProducts.svelte';
	export let mostPopularProducts = [];
</script>

<svelte:head>
	<title>Grocery shop</title>
</svelte:head>

<div>
	<MostPopularProducts {mostPopularProducts} />
</div>
