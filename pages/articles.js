import Head from 'next/head'
import Description from '../components/Description'
import Heading from '../components/Heading'

export default function Contact() {
	return (
		<div className='responsive-width'>
			<Head>
				<title>Articles</title>
				<meta name='description' content='Portfolio Articles' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
			</Head>

			<Heading title='Articles' />
			<Description />
		</div>
	)
}
