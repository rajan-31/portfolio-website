import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiNetlify } from 'react-icons/si'

export default function Footer() {
	const getLink = (name, link, Icon) => (
		<a href={link} target='_blank' className='mx-3 inline-block'>
			<span className='font-semibold align-middle'>
				{name}
				<Icon className='inline mx-1 text-2xl' />
			</span>
		</a>
	)

	return (
		<div className='bg-gray-300 dark:bg-gray-600 dark:text-white rounded-t-md text-center py-5 text-lg mt-24'>
			<div className='responsive-width'>
				<div className='p-1'>
					<span className='italic'>Made by me with</span>
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
