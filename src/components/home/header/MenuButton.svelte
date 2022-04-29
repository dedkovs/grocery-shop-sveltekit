<script>
	import IconButton from '@smui/icon-button';
</script>

<div class="menuButonContainerStyle">
	<IconButton class="material-icons" style={'color: var(--theme-text)'}>menu</IconButton>
</div>

<style lang="scss">
	.menuButonContainerStyle {
		display: none;

		@media screen and (max-width: 1200px) {
			display: flex;
		}
	}
</style>
