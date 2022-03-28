import ListItem from './ListItem'

const List = ({ listItems }) => {
	return (
		<div className='mt-7'>
			{listItems.map((item, index) => (
				<ListItem
					key={index}
					title={item.title}
					link={item.link}
					date={item.date}
				/>
			))}
		</div>
	)
}

export default List
