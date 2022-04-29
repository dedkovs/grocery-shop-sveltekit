<script lang="ts">
	import ThemeContext from '../theme/ThemeContext.svelte';
	import HeaderContainer from '../components/home/header/HeaderContainer.svelte';
</script>

<ThemeContext>
	<HeaderContainer />
	<slot />
</ThemeContext>
