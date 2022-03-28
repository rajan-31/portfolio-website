import Link from 'next/link'

const SectionHeading = () => {
	return (
		<>
			<div className='flex flex-row justify-between mb-2'>
				<div className='text-4xl font-bold text-amber-600'>
					Latest Articles
				</div>
				<div className='text-xl underline underline-offset-2 decoration-amber-600 self-end'>
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
