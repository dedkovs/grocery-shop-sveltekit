<script lang="ts">
	import { setContext, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { presets } from './presets';

	import darkMode from '../stores/theme';
	// expose props for customization and set default values
	export let themes = [...presets];

	let darkModeLocalStorage: string | null;
	if (typeof localStorage !== 'undefined') {
		darkModeLocalStorage = localStorage.getItem('darkMode');
	}

	let _current: string;
	if (darkModeLocalStorage == null) {
		// set state of current theme's name
		_current = $darkMode ? themes[1].name : themes[0].name;
	} else {
		_current = JSON.parse(darkModeLocalStorage) ? themes[1].name : themes[0].name;
	}

	// utility to get current theme from name
	const getCurrentTheme = (name: string) => themes.find((h) => h.name === name);
	// set up Theme store, holding current theme object
	const Theme = writable(getCurrentTheme(_current));

	setContext('theme', {
		// providing Theme store through context makes store readonly
		theme: Theme,
		toggle: () => {
			// update internal state
			let _currentIndex = themes.findIndex((h) => h.name === _current);
			_current = themes[_currentIndex === themes.length - 1 ? 0 : (_currentIndex += 1)].name;
			// update Theme store
			Theme.update((t) => ({ ...t, ...getCurrentTheme(_current) }));
			setRootColors(getCurrentTheme(_current));
			darkMode.update((dark) => {
				localStorage.setItem('darkMode', JSON.stringify(!dark));
				return !dark;
			});
		}
	});

	onMount(() => {
		// set CSS vars on mount
		setRootColors(getCurrentTheme(_current));
		darkMode.update((dark) => (_current === 'dark' ? true : false));
	});

	// sets CSS vars for easy use in components
	// ex: var(--theme-background)
	const setRootColors = (theme) => {
		for (let [prop, color] of Object.entries(theme.colors)) {
			let varString = `--theme-${prop}`;
			document.documentElement.style.setProperty(varString, color as string);
		}
		document.documentElement.style.setProperty('--theme-name', theme.name);
	};
</script>

<slot>
	<!-- content will go here -->
</slot>
