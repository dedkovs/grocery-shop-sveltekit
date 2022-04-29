<script>
	import Logo from './Logo.svelte';
	import NavMenu from './NavMenu.svelte';
	import MenuButton from './MenuButton.svelte';
	import NavIconLinksContainer from './NavIconLinksContainer.svelte';
</script>

<div class="navBarContainerStyle">
	<Logo />
	<MenuButton />
	<NavMenu />
	<NavIconLinksContainer />
</div>

<style lang="scss">
	.navBarContainerStyle {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		padding: 24px 32px 0;
		row-gap: 16px;

		@media screen and (min-width: 1200px) {
			padding: 24px 80px 0;
		}
	}
</style>
