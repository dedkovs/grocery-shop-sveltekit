<script lang="ts">
	import Select, { Option } from '@smui/select';

	const currencies = ['USD', 'EUR', 'GBP'];

	let value = currencies[0];
</script>

<div class="select-currency">
	<Select bind:value>
		{#each currencies as currency}
			<Option value={currency}>{currency}</Option>
		{/each}
	</Select>
</div>

<style lang="scss">
	.select-currency {
		color: white;
		fill: white;
		transition: color 0.3s;

		:global(.smui-select--standard .mdc-select__anchor) {
			height: 46px;
		}

		:global(.mdc-select__selected-text) {
			color: inherit;
			font-family: inherit;
		}

		:global(.mdc-select) {
			width: 70px;
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
	}

	.select-currency:hover {
		color: var(--theme-black);

		:global(.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon) {
			fill: var(--theme-black);
		}
	}
</style>
