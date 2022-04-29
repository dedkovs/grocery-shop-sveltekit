<script lang="ts">
	export let title: string;
	export let marginTop: number = 32;
	export let id: string = title;
</script>

<div style="--margin-top: {marginTop}px" class="green-page-header-container" {id}>
	<h2 class="title">{title}</h2>
</div>

<style lang="scss">
	.green-page-header-container {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--theme-green);
		width: 100%;
		height: 100px;
		margin-top: var(--margin-top);
		min-width: 320px;
		text-align: center;
		padding: 0 32px;

		@media screen and (min-width: 1200px) {
			padding: 0 80px;
		}
	}

	.title {
		color: white;
		font-family: Lemonada;
		font-weight: 400;
		margin: 0;
	}
</style>
