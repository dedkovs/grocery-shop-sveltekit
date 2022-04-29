<script>
	export let to;
</script>

<div class="textLinkWithIconContainerStyle">
	<slot />
	<p class="textLinkStyle">{to}</p>
</div>

<style lang="scss">
	.textLinkWithIconContainerStyle {
		display: flex;
		justify-content: center;
		align-items: center;

		.textLinkStyle {
			margin: 0;
			font-size: 14px;
			padding: 0 8px;
		}
	}
</style>
