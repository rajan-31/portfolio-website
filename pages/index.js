import Head from 'next/head'
import Container from '../components/articles/Container'
import Intro from '../components/intro/Intro'
import SocialMedia from '../components/SocialMedia'

export default function Home() {
	return (
		<div className='responsive-width'>
			<Head>
				<title>Home</title>
				<meta name='description' content='Portfolio Home' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
			</Head>

			<Intro />
			<SocialMedia />
			<Container />
		</div>
	)
}
