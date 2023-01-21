import { useState, useEffect } from 'react'

function Switch() {
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

	const changeTheme = () => {
		setDarkTheme(!darkTheme)
		if (!darkTheme) {
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', '')
		}
	}

	return (
		<>
			<label htmlFor='toggle-switch' className=''>
				<input
					checked={darkTheme}
					onChange={changeTheme}
					type='checkbox'
					id='toggle-switch'
					className='cursor-pointer h-6 w-12 rounded-full appearance-none bg-gray-400  border-neon checked:bg-gray-700 transition duration-200 relative align-middle'
				/>
			</label>
		</>
	)
}

export default Switch
