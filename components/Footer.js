import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiNetlify } from 'react-icons/si'

export default function Footer() {
	const getLink = (name, link, Icon) => (
		<a
			href={link}
			target='_blank'
			rel='noreferrer'
			className='mx-3 inline-block'
		>
			<span className='font-semibold align-middle hover:underline decoration-blue-500'>
				{name}
				<Icon className='inline mx-1 text-2xl' />
			</span>
		</a>
	)

	return (
		<div className='bg-slate-100 dark:bg-zinc-800 dark:text-white text-center py-5 text-lg mt-24 border-t border-zinc-300 dark:border-zinc-600 '>
			<div className='responsive-width'>
				<div className='p-1'>
					<span className='italic text-base'>
						Made with ❤️ by Rajan
					</span>
				</div>
				{/* prettier-ignore */}
				<div className='flex flex-row justify-center'>
					<div>
					{getLink('React', 'https://reactjs.org/', FaReact)}
					{getLink('Next.js', 'https://nextjs.org', SiNextdotjs)}
					</div>
					<div>
					{getLink('Tailwind', 'https://tailwindcss.com', SiTailwindcss)}
					{getLink('Netlify', 'https://www.netlify.com/', SiNetlify)}
					</div>
				</div>
			</div>
		</div>
	)
}
