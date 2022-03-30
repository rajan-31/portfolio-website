import ListItem from './ListItem'

const List = ({ listItems }) => {
	return (
		<div className='mt-7'>
			{listItems.map((item, index) => (
				<ListItem
					key={index}
					id={item.id}
					title={item.title}
					date={item.date}
				/>
			))}
		</div>
	)
}

export default List
