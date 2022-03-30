import Head from 'next/head'
import Description from '../components/Description'
import Heading from '../components/Heading'

import { getSortedArticlesData } from '../lib/articles'
import List from '../components/articles/List'

export async function getStaticProps() {
	const allArticlesData = getSortedArticlesData()
	return {
		props: {
			allArticlesData,
		},
	}
}

export default function Articles({ allArticlesData }) {
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

			<List listItems={allArticlesData} />
		</div>
	)
}
