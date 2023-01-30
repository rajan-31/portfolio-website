import { createContext, useContext, useState, useEffect } from 'react'

const Context = createContext()

export const ThemeProvider = ({ children }) => {
	const [darkTheme, setDarkTheme] = useState(false)

	useEffect(() => {
		if (
			localStorage.getItem('theme') === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
			setDarkTheme(true)
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', '')
			setDarkTheme(false)
		}
	}, [])

	return (
		<Context.Provider value={[darkTheme, setDarkTheme]}>
			{children}
		</Context.Provider>
	)
}

export const useThemeContext = () => {
	return useContext(Context)
}
