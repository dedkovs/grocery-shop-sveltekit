<script>
	import TopBarTextLinksContainer from './TopBarTextLinksContainer.svelte';
	import TopBarSocialLinksContainer from './TopBarSocialLinksContainer.svelte';
</script>

<div class="topBarContainerStyle">
	<TopBarTextLinksContainer />
	<TopBarSocialLinksContainer />
</div>

<style lang="scss">
	.topBarContainerStyle {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		min-height: 46px;
		padding: 0 32px;
		column-gap: 40px;
		row-gap: 24px;
		background-color: var(--theme-green);

		@media screen and (max-width: 767.9px) {
			min-height: 62px;
		}

		@media screen and (max-width: 990px) {
			justify-content: center;
			min-height: 52px;
			padding: 16px 32px;
		}

		@media screen and (min-width: 1200px) {
			padding-left: 80px;
			padding-right: 80px;
		}
	}
</style>
