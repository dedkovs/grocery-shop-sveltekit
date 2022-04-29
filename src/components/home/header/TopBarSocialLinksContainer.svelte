<script lang="ts">
	import TopBarLink from './TopBarLink.svelte';
	import TopBarIcon from './TopBarIcon.svelte';
	import TopBarDivider from './TopBarDivider.svelte';
	import ThemeToggle from '../../../theme/ThemeToggle.svelte';
	import SelectCurrency from './SelectCurrency.svelte';
	import { mdiTwitter } from '@mdi/js';
	import { mdiFacebook } from '@mdi/js';
	import { mdiGoogle } from '@mdi/js';
	import { mdiInstagram } from '@mdi/js';
	import { mdiLinkedin } from '@mdi/js';
</script>

<div class="socialLinksContainerStyle">
	<TopBarLink href=""><TopBarIcon title="Twitter" icon={mdiTwitter} /></TopBarLink>
	<TopBarLink href=""><TopBarIcon title="Facebook" icon={mdiFacebook} /></TopBarLink>
	<TopBarLink href=""><TopBarIcon title="Google" icon={mdiGoogle} /></TopBarLink>
	<TopBarLink href=""><TopBarIcon title="Instagram" icon={mdiInstagram} /></TopBarLink>
	<TopBarLink href=""><TopBarIcon title="LinkedIn" icon={mdiLinkedin} /></TopBarLink>
	<TopBarDivider />
	<SelectCurrency />
	<TopBarDivider />
	<ThemeToggle />
</div>

<style>
	.socialLinksContainerStyle {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		padding-left: 8px;
		padding-right: 0;
		gap: 40px;
		row-gap: 16px;
	}
</style>
