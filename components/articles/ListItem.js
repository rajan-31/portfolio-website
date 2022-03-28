import Link from 'next/link'

const ListItem = ({ title, link, date }) => {
	return (
		<div>
			<Link href={link}>
				<a>
					<div className='text-xl my-[5px] py-3 px-6 rounded-lg bg-emerald-600/80 hover:bg-emerald-600/90 flex flex-row justify-between'>
						<div className='text-black dark:text-white overflow-hidden'>
							{title}
						</div>
						<div className='float-right text-base align-middle text-black/80 self-center pl-2 whitespace-nowrap'>
							{date}
						</div>
					</div>
				</a>
			</Link>
		</div>
	)
}

export default ListItem
