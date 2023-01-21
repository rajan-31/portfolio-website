import Head from "next/head"
import Image from 'next/image'

import Heading from '../components/Heading'

export default function About() {
	return (
		<div className='responsive-width'>
			<Head>
				<title>About</title>
				<meta name='description' content='Portfolio About' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
			</Head>

			<Heading title='About' />

			<div className='flex md:flex-row flex-col-reverse md:justify-between'>
				<div className=''>
					<div className='text-xl text-justify md:pr-10'>
						I&apos;m an undergraduate information technology
						engineer. I love to explore new technologies and
						contribute to open-source projects. I write articles to
						share my knowledge and experience. This website is my
						portfolio of learning and projects.
					</div>
				</div>

				<div
					onContextMenu={(e) => e.preventDefault()}
					className='min-w-fit self-center
			 drop-shadow-md'
				>
					<Image
						priority='true'
						src='/author.jpg'
						width={300}
						height={300}
						alt='Me'
						quality={100}
						// layout='fixed'
						className='rounded-lg pointer-events-none'
					/>
				</div>
			</div>
		</div>
	)
}
