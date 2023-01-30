import '../styles/globals.css'
import '../styles/markdown.css'

import Layout from '../components/layout'
import { ThemeProvider } from '../context/theme'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)
}

export default MyApp
