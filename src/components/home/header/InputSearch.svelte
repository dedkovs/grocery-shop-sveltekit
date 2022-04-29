<script lang="ts">
	import Textfield from '@smui/textfield';
	import IconButton from '@smui/icon-button';
	import Button, { Icon } from '@smui/button';

	let searchValue = '';

	$: showTrailingIcon = Boolean(searchValue);
</script>

<div class="inputSearchContainerStyle">
	<div class="inputBaseContainer">
		<div>
			<Textfield
				input$placeholder="Search..."
				class="shaped-outlined"
				variant="outlined"
				bind:value={searchValue}
				style="width: 100%; height: 50px"
				withTrailingIcon={showTrailingIcon}
			>
				<svelte:fragment slot="trailingIcon">
					{#if showTrailingIcon}
						<IconButton
							style="z-index: 2; top: -5px; right: 5px"
							class="material-icons"
							size="mini"
							on:click={() => (searchValue = '')}>close</IconButton
						>
					{/if}
				</svelte:fragment>
			</Textfield>
		</div>
	</div>

	<Button class="searchIconContainerStyle" variant="unelevated">
		<Icon
			class="material-icons"
			style="margin: 0; color: #f1f1f1; font-size: 1.5rem; top: -2px; left: -2px">search</Icon
		>
	</Button>
</div>

<style lang="scss">
	.inputSearchContainerStyle {
		font-family: inherit;
		display: flex;
		flex-grow: 1;
	}

	.inputBaseContainer {
		flex-grow: 1;
	}

	:global(.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading) {
		border: 1px solid var(--theme-borderColor1);
		border-right: none;
		transition: border-color 0.3s;
	}

	:global(.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing) {
		border: 1px solid var(--theme-borderColor1);
		transition: border-color 0.3s;
		border-left: none;
	}

	:global(.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover
			.mdc-notched-outline
			.mdc-notched-outline__leading) {
		border: 1px solid var(--theme-green);
		border-right: none;
	}

	:global(.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover
			.mdc-notched-outline
			.mdc-notched-outline__trailing) {
		border: 1px solid var(--theme-green);
		border-left: none;
	}

	:global(.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused
			.mdc-notched-outline__trailing) {
		border: 1px solid var(--theme-green);
		border-left: none;
	}

	:global(.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused
			.mdc-notched-outline__leading) {
		border: 1px solid var(--theme-green);
		border-right: none;
	}

	:global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading) {
		border-radius: 0;
		width: 28px;

		@media screen and (max-width: 767.9px) {
			border-top-left-radius: 10px;
			border-bottom-left-radius: 10px;
		}
	}

	:global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing) {
		border-radius: 0;
	}

	:global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch) {
		max-width: calc(100% - 28px * 2);
	}

	:global(.shaped-outlined.mdc-text-field--with-leading-icon:not(.mdc-text-field--label-floating)
			.mdc-floating-label) {
		left: 16px;
	}

	:global(.shaped-outlined + .mdc-text-field-helper-line) {
		padding-left: 32px;
		padding-right: 28px;
	}

	:global(.mdc-text-field__input) {
		font-family: 'Open Sans';
	}

	:global(.mdc-text-field--outlined .mdc-notched-outline) {
		background-color: var(--theme-background);
		transition: background-color 0.3s;
	}

	:global(.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input) {
		z-index: 2;
		color: var(--theme-text);
		transition: color 0.3s;
		&::placeholder {
			transition: color 0.3s;
			color: var(--theme-text);
			opacity: 0.5;
		}
	}

	:global(.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing) {
		z-index: 2;
	}

	:global(.searchIconContainerStyle.mdc-button--unelevated:not(:disabled)) {
		border-radius: 0;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		background-color: var(--theme-green);
		height: 50px;
		transition: background-color 0.3s;
		&:hover {
			background-color: var(--theme-orange);
		}
	}

	:global(.searchIconContainerStyle.mdc-button--unelevated .mdc-button__ripple) {
		border-radius: 0;
	}

	:global(.searchIconContainerStyle.mdc-button .mdc-button__ripple) {
		border-radius: 0;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}

	:global(.mdc-text-field .mdc-text-field__input) {
		caret-color: var(--theme-green);
	}

	:global(.mdc-icon-button .mdc-icon-button__ripple::before) {
		background-color: var(--theme-text);
	}
</style>
