import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	// darkMode: 'selector',

	theme: {
		extend: {
			colors: {
				// DARK mode
				'tkd-background': '#121212',
				'tkd-surface': '#1e1e1e',
				'tkd-red': '#cf6679',
				'tkd-text': '#e2e2e2',
				'tkd-primary': '#b388f5',
				'tkd-focused': '#2e2e2e',

				// LIGHT mode
				'tkl-background': '#ffffff',
				'tkl-surface': '#590de5',
				'tkl-red': '#b00020',
				'tkl-text': '#212121',
			},
		}
	},


	plugins: [typography, forms, containerQueries]
} satisfies Config;
