import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function ListItem({ item }) {
	const linkStyle =
		'rounded-full py-1 px-2 mr-1 my-1 bg-white dark:bg-slate-800 border border-white dark:border-slate-800 hover:border-black/30 dark:hover:border-gray-400/80'
	let links = {
		article: (
			<Link href={item.article}>
				<a className={linkStyle}>Article</a>
			</Link>
		),
		srcCode: (
			<a
				href={item.srcCode}
				target='_blank'
				rel='noreferrer'
				className={linkStyle}
			>
				Source
				<FaExternalLinkAlt className='inline mx-1 text-xs' />
			</a>
		),
		demo: (
			<a
				href={item.demo}
				target='_blank'
				rel='noreferrer'
				className={linkStyle}
			>
				Demo
				<FaExternalLinkAlt className='inline mx-1 text-xs' />
			</a>
		),
	}

	return (
		<div className='bg-blue-100 dark:bg-slate-700 rounded-lg p-5 m-2 shadow-md hover:shadow-xl flex flex-col dark:text-gray-300'>
			<div className='text-gray-800 dark:text-amber-400'>{item.year}</div>
			<a
				href={item.srcCode}
				target='_blank'
				rel='noreferrer'
				className='text-xl font-medium hover:underline mb-2 block'
			>
				{item.name}
			</a>
			<div className='text-gray-800 dark:text-gray-400 mb-4'>
				{item.desc}
			</div>
			<div className='flex flex-wrap mt-auto'>
				{item.article ? links.article : ''}
				{item.srcCode ? links.srcCode : ''}
				{item.demo ? links.demo : ''}
			</div>
		</div>
	)
}
