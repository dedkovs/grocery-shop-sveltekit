<script>
	export let href;
</script>

<div class="linkContainerStyle">
	<a {href} class="linkStyle"><slot /></a>
</div>

<style lang="scss">
	.linkContainerStyle {
		color: white;
		fill: white;
		transition: color 0.3s, fill 0.3s;
		&:hover {
			color: var(--theme-black);
			fill: var(--theme-black);
			cursor: pointer;
		}
	}

	.linkStyle {
		color: inherit;
		text-decoration: none;
		display: flex;
	}
</style>
