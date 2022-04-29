<script lang="ts">
	import Button from '@smui/button';

	export let handleDecreaseQuantity;
	export let handleIncreaseQuantity;
	export let quantity;
</script>

<div class="productQuantityContainerStyle">
	<p class="text1">Quantity:</p>
	<Button variant="outlined" on:click={handleDecreaseQuantity} class="mathSignStyle decrease"
		>-</Button
	>
	<input id="productQuantity" value={quantity} class="productQuantityInputStyle" />
	<Button
		unselectable
		variant="outlined"
		on:click={(e) => handleIncreaseQuantity(e)}
		class="mathSignStyle increase">+</Button
	>
</div>

<style lang="scss">
	.productQuantityContainerStyle {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin-top: 24px;
	}

	:global(.mathSignStyle.mdc-button) {
		color: var(--theme-text);
		border-radius: 0;
		padding: 0;
		min-width: 36px;
	}

	:global(.mathSignStyle.mdc-button.decrease) {
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
	}

	:global(.mathSignStyle.mdc-button.increase) {
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
	}

	:global(.mathSignStyle.mdc-button--outlined .mdc-button__ripple::before, .mdc-button--outlined
			.mdc-button__ripple::after) {
		background-color: var(--theme-green);
	}

	:global(.mathSignStyle.mdc-button--outlined:not(:disabled)) {
		border-color: var(--theme-borderColor1);
	}

	:global(.mathSignStyle.decrease.mdc-button--outlined .mdc-button__ripple) {
		border-radius: 0;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
	}

	:global(.mathSignStyle.increase.mdc-button--outlined .mdc-button__ripple) {
		border-radius: 0;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
	}

	.text1 {
		font-weight: 700;
		min-width: 140px;
		margin: 0;
	}

	:global(.productQuantityInputStyle.smui-text-field--standard) {
		height: 36px;
		width: 60px;
	}

	:global(.productQuantityInputStyle .mdc-text-field__input) {
		text-align: center;
	}

	input {
		outline: none;
		width: 60px;
		height: 36px;
		border: none;
		border-top: 1px solid var(--theme-borderColor1);
		border-bottom: 1px solid var(--theme-borderColor1);
		text-align: center;
		background: transparent;
		color: var(--theme-text);
		font-size: 16px;
		font-family: 'Open Sans';
	}
</style>
