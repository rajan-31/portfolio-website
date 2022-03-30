const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			minHeight: {
				footer1: 'calc(100vh - 320px)',
				footer2: 'calc(100vh - 294px)',
				footer3: 'calc(100vh - 311px)',
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
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
	// corePlugins: {
	// 	preflight: false,
	// },
}
