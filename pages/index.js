import Head from 'next/head'
import Intro from '../components/intro/Intro'
import SocialMedia from '../components/SocialMedia'
import { default as ArticlesContainer } from '../components/articles/Container'
import { default as ProjectsContainer } from '../components/projects/Container'

import { getSortedArticlesData } from '../lib/articles'
import { getProjectsData } from '../lib/projects'

export async function getStaticProps() {
	const allArticlesData = getSortedArticlesData().slice(0, 5)
	const allProjectsData = getProjectsData().slice(0, 6)
	return {
		props: {
			allArticlesData,
			allProjectsData,
		},
	}
}

export default function Home({ allArticlesData, allProjectsData }) {
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
			<ArticlesContainer allArticlesData={allArticlesData} />
			<ProjectsContainer allProjectsData={allProjectsData} />
		</div>
	)
}
