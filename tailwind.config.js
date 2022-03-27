module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			borderColor: (theme) => ({
				DEFAULT: theme('colors.gray.300', 'currentColor'),
				neon: '#ccff00',
			}),
			backgroundColor: (theme) => ({
				neon: '#ccff00',
			}),
		},
	},
	variants: {
		extend: {
			backgroundColor: ['checked'],
		},
	},
	plugins: [],
	darkMode: 'class',
}
