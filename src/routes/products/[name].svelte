<script context="module">
	export async function load({ params, fetch, stuff }) {
		const name = params.name;
		const url = `./api/${name}`;
		const res = await fetch(url);
		if (res.ok) {
			const data = await res.json();
			return {
				props: { product: data.product }
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script lang="ts">
	import { disableScrollHandling } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { Product } from '../../types/Product';

	import GreenPageHeader from '../../components/common/GreenPageHeader.svelte';
	import ProductName from '../../components/productDetails/ProductName.svelte';
	import ProductRating from '../../components/productDetails/ProductRating.svelte';
	import ProductDescription from '../../components/productDetails/ProductDescription.svelte';
	import ProductPrice from '../../components/productDetails/ProductPrice.svelte';
	import ProductSize from '../../components/productDetails/ProductSize.svelte';
	import ProductQuantity from '../../components/productDetails/ProductQuantity.svelte';
	import ProductSubtotalPrice from '../../components/productDetails/ProductSubtotalPrice.svelte';
	import AddToCartButton from '../../components/productDetails/AddToCartButton.svelte';
	export let product: Product;
	const { image, name, rating, price, description, sizes } = product;

	let activeSize = 0;
	let quantity = 1;

	onMount(() => {
		disableScrollHandling();
		const pageHeader = document.getElementById('productDetails');
		if (pageHeader) {
			pageHeader.scrollIntoView({ behavior: 'smooth' });
		}

		setInputFilter(document.getElementById('productQuantity'), function (value) {
			return (
				/^\d*$/.test(value) && (value === '' || (parseInt(value) > 0 && parseInt(value) <= 99))
			);
		});
	});

	const handleSizeChange = (index: number) => {
		activeSize = index;
	};

	const handleDecreaseQuantity = (e) => {
		if (quantity > 1) {
			quantity = +quantity - 1;
		}
	};

	const handleIncreaseQuantity = (e) => {
		if (quantity < 99) {
			quantity = +quantity + 1;
		}
	};

	function setInputFilter(textbox, inputFilter) {
		['input', 'keydown', 'keyup', 'mousedown', 'mouseup', 'select', 'contextmenu', 'drop'].forEach(
			function (event) {
				textbox.addEventListener(event, function () {
					if (this.value === '') {
						this.value = quantity;
					}

					if (inputFilter(this.value)) {
						this.oldValue = this.value;
						this.oldSelectionStart = this.selectionStart;
						this.oldSelectionEnd = this.selectionEnd;
					} else if (this.hasOwnProperty('oldValue')) {
						this.value = this.oldValue;
						this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
					} else {
						this.value = 1;
					}

					quantity = this.value;
				});
			}
		);
	}
</script>

<GreenPageHeader title="Product" id="productDetails" />

<div class="productDetailsContainer1Style">
	<div class="productDetailsContainer2Style">
		<div class="columnStyle">
			<img src={image} alt="" />
		</div>
		<div class="columnStyle">
			<ProductName {name} />
			<ProductRating {rating} center={false} />
			<ProductDescription {description} />
			<ProductPrice {price} />
			<ProductSize {sizes} {activeSize} {product} {handleSizeChange} />
			<ProductQuantity {handleDecreaseQuantity} {handleIncreaseQuantity} {quantity} />
			<ProductSubtotalPrice {price} {quantity} {sizes} {activeSize} />
			<AddToCartButton />
		</div>
	</div>
</div>

<style lang="scss">
	.productDetailsContainer1Style {
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 320px;
		padding: 40px 32px;

		@media screen and (min-width: 1200px) {
			padding: 80px;
		}

		@media screen and (max-width: 750px) {
		}
	}

	.productDetailsContainer2Style {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		max-width: 1100px;
		flex-grow: 1;
		gap: 30px;
	}

	.columnStyle {
		display: flex;
		width: calc(50% - 30px);
		flex-direction: column;

		img {
			width: 100%;

			@media screen and (max-width: 750px) {
				max-width: 400px;
				margin: 0 auto;
			}
		}

		@media screen and (max-width: 750px) {
			width: 100%;
		}
	}
</style>
