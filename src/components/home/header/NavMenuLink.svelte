<script lang="ts">
	export let to: string;
	export let link: string;
</script>

<a class="linkStyle" href={to}>{link}</a>

<style lang="scss">
	.linkStyle {
		font-family: Lemonada;
		font-weight: 600;
		font-size: 14px;
		text-decoration: none;
		color: var(--theme-text);
		transition: color 0.3s;

		padding: 16px;
		padding-top: 0;
		padding-bottom: 0;
		&:hover {
			color: var(--theme-green);
			cursor: pointer;
		}
	}
</style>
