import Head from 'next/head'
import Date from '../../components/articles/Date'
import Markdown from '../../components/Markdown'
import { getAllArticleIds, getArticleData } from '../../lib/articles'

export async function getStaticProps({ params }) {
	const articleData = await getArticleData(params.id)
	return {
		props: {
			articleData,
		},
	}
}

export async function getStaticPaths() {
	const paths = getAllArticleIds()
	return {
		paths,
		fallback: false,
	}
}

export default function Article({ articleData }) {
	return (
		<>
			<Head>
				<title>{articleData.title}</title>
				<meta name='description' content='Viewing an article' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
			</Head>
			<div className='responsive-width'>
				<article>
					<div className='text-5xl md:text-5xl text-center font-semibold mt-10'>
						{articleData.title}
					</div>

					{/* <div>{articleData.id}</div> */}

					<div className='text-base mt-2 mb-16 text-center'>
						<Date
							dateString={articleData.date}
							formatType='d LLLL, yyyy'
						/>
					</div>

					<Markdown content={articleData.contentHtml} />
				</article>
			</div>
		</>
	)
}
