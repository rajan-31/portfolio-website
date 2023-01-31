import Link from 'next/link'

const SectionHeading = ({ heading, url }) => {
	return (
		<>
			<div className='flex flex-row justify-between mb-2'>
				<div className='text-3xl sm:text-4xl font-bold text-black dark:text-amber-400'>
					{heading}
				</div>
				<div className='text-xl hover:bg-orange-400 hover:text-zinc-100 underline underline-offset-2 decoration-orange-400 self-end'>
					<Link href={url}>
						<a>View All</a>
					</Link>
				</div>
			</div>

			<hr />
		</>
	)
}

export default SectionHeading
