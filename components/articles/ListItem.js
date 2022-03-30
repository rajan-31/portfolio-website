import Link from 'next/link'
import Date from './Date'

const ListItem = ({ title, id, date }) => {
	return (
		<div>
			<Link href={'/articles/' + id}>
				<a>
					<div className='text-xl my-[5px] py-3 px-6 rounded-lg bg-emerald-600/80 hover:bg-emerald-600/90 flex flex-row justify-between'>
						<div className='text-black dark:text-zinc-200 overflow-hidden'>
							{title}
						</div>
						<div className='float-right text-base align-middle text-black/80 self-center pl-2 whitespace-nowrap'>
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
