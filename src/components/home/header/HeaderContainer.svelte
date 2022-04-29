<script>
	import TopBarContainer from './TopBarContainer.svelte';
	import NavBarContainer from './NavBarContainer.svelte';
	import SearchBarContainer from './SearchBarContainer.svelte';
</script>

<div class="headerContainerStyle">
	<TopBarContainer />
	<NavBarContainer />
	<SearchBarContainer />
</div>

<style>
	.headerContainerStyle {
		min-width: 320px;
	}
</style>
