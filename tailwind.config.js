const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'rk-cyan': '#069D98',
				'rk-green': '#96CC45',
				'rk-gray': '#B0ABAD',
				'rk-violet': '#8F5CDB',
				'rk-pink': '#FC6876',
				'rk-yellow': '#CCB400',
				'rk-blue': '#4f84a6',
				'rk-orange': '#E94D35',
			},
			minHeight: {
				// footer1: 'calc(100vh - 339px)',
				// footer2: 'calc(100vh - 310px)',
				// footer3: 'calc(100vh - 310px)',
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
