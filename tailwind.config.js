/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Barlow', 'Arial', 'sans-serif']
		},
		extend: {
			colors: {
				primaryBlue: '#618AFF',
				bg: {
					1: '#23252F',
					2: '#101116',
					3: '#1C1E26',
					4: '#52566E'
				}
			},
			fontSize: {
				xl: '1.375rem'
			}
		}
	},
	plugins: []
};
