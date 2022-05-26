import Link from 'next/link'
import Date from './Date'

const ListItem = ({ title, id, date }) => {
	return (
		<div className='drop-shadow-md'>
			<Link href={'/articles/' + id}>
				<a>
					<div className='text-lg my-[8px] py-3 px-6 rounded-lg bg-violet-100  hover:bg-violet-200/90 dark:bg-stone-600 dark:hover:bg-stone-600/90 flex flex-row justify-between'>
						<div className='text-black dark:text-zinc-100 overflow-hidden'>
							{title}
						</div>
						<div className='float-right text-sm align-middle text-black/80 dark:text-white/60 self-center pl-2 whitespace-nowrap'>
							<Date
								dateString={date}
								formatType='LLL dd, yyyy'
								className='font-mono'
							/>
						</div>
					</div>
				</a>
			</Link>
		</div>
	)
}

export default ListItem
