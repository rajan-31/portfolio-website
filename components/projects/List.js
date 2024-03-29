import ListItem from './ListItem'

export default function List({ projectsList }) {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2'>
			{projectsList.map((item, index) => (
				<ListItem key={index} item={item} />
			))}
		</div>
	)
}
