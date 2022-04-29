<script>
	import InputSearchContainer from './InputSearchContainer.svelte';
	import SelectProductCategory from './SelectProductCategory.svelte';
</script>

<div class="searchBarContainer">
	<SelectProductCategory />
	<InputSearchContainer />
</div>

<style lang="scss">
	.searchBarContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-left: 32px;
		padding-right: 32px;
		margin-top: 24px;
		@media screen and (min-width: 1200px) {
			padding-left: 80px;
			padding-right: 80px;
		}
	}
</style>
