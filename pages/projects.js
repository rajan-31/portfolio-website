import Head from 'next/head'

import Heading from '../components/Heading'
import List from '../components/projects/List'
import { getProjectsData } from '../lib/projects'

export async function getStaticProps() {
	const projectsList = getProjectsData()
	return {
		props: {
			projectsList,
		},
	}
}

export default function Projects({ projectsList }) {
	return (
		<div className='responsive-width'>
			<Head>
				<title>Projects</title>
				<meta name='description' content='Portfolio Projects' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
			</Head>

			<Heading title='Projects' />

			<List projectsList={projectsList} />
		</div>
	)
}
