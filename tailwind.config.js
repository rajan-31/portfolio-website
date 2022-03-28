const defaultTheme = require('tailwindcss/defaultTheme')

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
			minHeight: {
				footer1: 'calc(100vh - 292px)',
				footer2: 'calc(100vh - 263px)',
				footer3: 'calc(100vh - 265px)',
			},
			width: {
				customGlobal: '960px',
			},
		},
		screens: {
			'footer-break': '522px',
			...defaultTheme.screens,
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
