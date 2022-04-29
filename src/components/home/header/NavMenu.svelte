<script>
	import NavMenuLink from './NavMenuLink.svelte';
	const navLinks = {
		Home: '/home',
		Shop: '/shop',
		'Best Sellers': '/best-sellers',
		'Deal of the Day': '/deal-of-the-day',
		Pages: '/pages',
		'Contact Us': '/contact-us'
	};
</script>

<div class="linksContainerStyle">
	{#each Object.entries(navLinks) as [link, to] (link)}
		<NavMenuLink {link} {to} />
	{/each}
</div>

<style lang="scss">
	.linksContainerStyle {
		display: flex;
		justify-content: center;
		align-items: center;

		@media screen and (max-width: 1200px) {
			display: none;
		}
	}
</style>
