<script lang="ts">
	import Button, { Label } from '@smui/button';

	export let label: string;
</script>

<Button variant="unelevated" class="common-button">
	<Label>
		{label}
	</Label>
</Button>

<style lang="scss">
	:global(.common-button.mdc-button--unelevated) {
		border-radius: 30px;
	}

	:global(.common-button.mdc-button--unelevated:not(:disabled)) {
		background-color: var(--theme-green);
		transition: background-color 0.3s;

		&:hover {
			background-color: var(--theme-orange);
		}
	}

	:global(.common-button.mdc-button--unelevated) {
		font-family: 'Open Sans';
		text-transform: none;
		font-weight: 400;
		letter-spacing: 1px;
	}

	:global(.common-button.mdc-button .mdc-button__ripple) {
		border-radius: 30px;
	}
</style>
