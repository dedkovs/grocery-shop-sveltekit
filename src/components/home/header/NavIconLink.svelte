<script lang="ts">
	import Tooltip, { Wrapper } from '@smui/tooltip';
	export let to: string;
	export let link: string;
	export let tooltip: string;
	export let onClick: () => void;
</script>

<Wrapper>
	<div class="linkContainerStyle">
		<a on:click={onClick} href={to}>
			<svg class="icon" viewBox="0 0 24 24" role="img">
				<path class="path" d={link} />
			</svg>
		</a>
	</div>
	<Tooltip xPos="center" yPos="above">{tooltip}</Tooltip>
</Wrapper>

<style lang="scss">
	.linkContainerStyle {
		display: flex;
		justify-content: center;
		align-items: center;
		fill: var(--theme-text);
		a {
			color: inherit;
			display: flex;
			transition: fill 0.3s;
			padding: 8px;
			text-decoration: none;
			&:hover {
				fill: var(--theme-green);
			}
		}
	}

	.icon {
		height: 20px;
	}

	.path {
		fill: inherit;
	}

	:global(.mdc-tooltip) {
		display: inline-flex;
	}
</style>
