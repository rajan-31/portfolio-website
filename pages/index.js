import Head from 'next/head'
import Container from '../components/articles/Container'
import Intro from '../components/intro/Intro'
import SocialMedia from '../components/SocialMedia'

import { getSortedArticlesData } from '../lib/articles'

export async function getStaticProps() {
	const allArticlesData = getSortedArticlesData().slice(0, 5)
	return {
		props: {
			allArticlesData,
		},
	}
}

export default function Home({ allArticlesData }) {
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
			<Container allArticlesData={allArticlesData} />
		</div>
	)
}
