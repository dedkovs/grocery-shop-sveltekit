<script>
	export let title;
	export let icon;
</script>

<svg class="icon" viewBox="0 0 24 24" aria-labelledby={title} role="img">
	<title>{title}</title>
	<path class="path" d={icon} />
</svg>

<style lang="scss">
	.icon {
		height: 16px;
	}

	.path {
		fill: inherit;
	}
</style>
