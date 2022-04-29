<script>
	import Select, { Option } from '@smui/select';

	const categories = ['All Categories', 'Fruits', 'Vegetables', 'Cucumber', 'Coco Cookies'];

	let category = 'All Categories';
</script>

<div class="select-product-category">
	<Select bind:value={category}>
		{#each categories as category}
			<Option value={category}>{category}</Option>
		{/each}
	</Select>
</div>

<style lang="scss">
	.select-product-category {
		color: var(--theme-text);
		fill: var(--theme-text);
		transition: color 0.3s;
		display: none;

		:global(.smui-select--standard .mdc-select__anchor) {
			height: 50px;
			border: 1px solid;
			border-color: var(--theme-borderColor1);
			border-right: none;
			padding: 0 5px 0 16px;
			transition: border-color 0.3s;
			border-top-left-radius: 10px;
			border-bottom-left-radius: 10px;

			&:hover {
				border-color: var(--theme-green);
			}
		}

		:global(.mdc-select__selected-text) {
			color: inherit;
			font-family: inherit;
		}

		:global(.mdc-select) {
			min-width: 250px;
			width: 30%;
		}

		:global(.smui-select--standard .mdc-select__dropdown-icon) {
			margin-left: 0;
		}

		:global(.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon) {
			fill: inherit;
			transition: fill 0.3s;
		}

		:global(.mdc-line-ripple::before) {
			border-bottom-style: none;
		}

		:global(.mdc-line-ripple::after) {
			border-bottom-style: none;
		}

		:global(.mdc-deprecated-list) {
			font-family: inherit;
		}

		@media screen and (min-width: 768px) {
			display: block;
		}
	}
</style>
