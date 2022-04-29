import { writable } from 'svelte/store';

let systemDarkMode: boolean;

if (typeof window !== 'undefined') {
	systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const darkMode = writable(systemDarkMode);

export default darkMode;
