<script>
	import darkMode from '../../../stores/theme';
	import logo from '../../../assets/logo.png';
	import logoDark from '../../../assets/logo-dark.png';
</script>

<div class="logoContainerStyle">
	<a href="/">
		<img class="logoStyle" src={$darkMode ? logoDark : logo} alt="Groca logo" />
	</a>
</div>

<style lang="scss">
	.logoContainerStyle {
		display: flex;
		flex-grow: 0;

		@media screen and (max-width: 1200px) {
			flex-grow: 1;
			margin-right: 16px;
		}
	}

	.logoStyle {
		max-width: 148px;
	}
</style>
