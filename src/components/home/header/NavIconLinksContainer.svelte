<script>
	import NavIconLink from './NavIconLink.svelte';
	import { mdiAccountCircleOutline } from '@mdi/js';
	import { mdiCartVariant } from '@mdi/js';
	import { mdiCardsHeartOutline } from '@mdi/js';

	const onClick = () => {
		console.log('click');
	};
</script>

<div class="navIconLinksContainer">
	<NavIconLink to="" link={mdiAccountCircleOutline} {onClick} tooltip="Sign in" />
	<NavIconLink to="" link={mdiCartVariant} {onClick} tooltip="Shopping cart" />
	<NavIconLink to="" link={mdiCardsHeartOutline} {onClick} tooltip="Favorites" />
</div>

<style lang="scss">
	.navIconLinksContainer {
		display: flex;
		justify-content: center;
		flex-grow: 1;
		flex: none;
		gap: 8px;

		@media screen and (min-width: 600px) {
			justify-content: flex-end;
		}

		@media screen and (max-width: 475px) {
			flex: auto;
		}
	}
</style>
