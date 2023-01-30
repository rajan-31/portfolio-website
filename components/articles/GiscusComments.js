import Giscus from '@giscus/react'
import { useThemeContext } from '../../context/theme'

const GiscusComments = () => {
	const [darkTheme, setDarkTheme] = useThemeContext()
	return (
		<Giscus
			id='comments'
			repo='rajan-31/portfolio-website'
			repoId='R_kgDOHEs2LA'
			category='Announcements'
			categoryId='DIC_kwDOHEs2LM4CT5Pf'
			mapping='title'
			term='Comments using GitHub!'
			reactionsEnabled='1'
			emitMetadata='0'
			inputPosition='top'
			theme={darkTheme ? 'dark_dimmed' : 'light'}
			lang='en'
			loading='lazy'
		/>
	)
}

export default GiscusComments
