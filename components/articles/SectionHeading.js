import Link from 'next/link'

const SectionHeading = () => {
	return (
		<>
			<div className='flex flex-row justify-between mb-2'>
				<div className='text-4xl font-bold text-black dark:text-amber-400'>
					Latest Articles
				</div>
				<div className='text-xl hover:bg-orange-400 hover:text-zinc-100 underline underline-offset-2 decoration-orange-400 self-end'>
					<Link href='/articles'>
						<a>View All</a>
					</Link>
				</div>
			</div>

			<hr />
		</>
	)
}

export default SectionHeading
