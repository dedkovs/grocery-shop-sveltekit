<script>
	import TopBarLink from './TopBarLink.svelte';
	import TopBarDivider from './TopBarDivider.svelte';
	import TopBarLinkWithText from './TopBarLinkWithText.svelte';
	import TopBarIcon from './TopBarIcon.svelte';
	import { mdiPhone } from '@mdi/js';
	import { mdiEmail } from '@mdi/js';
</script>

<div class="textLinksContainerStyle">
	<TopBarLink href="tel:0000 - 123456789"
		><TopBarLinkWithText to="0000 - 123456789"
			><TopBarIcon title="Phone number" icon={mdiPhone} /></TopBarLinkWithText
		></TopBarLink
	>

	<TopBarDivider />

	<TopBarLink href="mailto:info@example.com"
		><TopBarLinkWithText to="info@example.com"
			><TopBarIcon title="Email address" icon={mdiEmail} /></TopBarLinkWithText
		></TopBarLink
	>
</div>

<style>
	.textLinksContainerStyle {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 16px;
	}
</style>
