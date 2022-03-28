import List from './List'
import SectionHeading from './SectionHeading'

const Container = () => {
	const listItems = [
		{
			title: 'A article about something really interesting',
			link: '/demo-1',
			date: 'Jan 2020',
		},
		{
			title: 'A article about something really interesting article about something really interesting article about something really interesting',
			link: '/demo-2',
			date: 'Jan 2020',
		},
		{
			title: 'A article about something really interesting',
			link: '/demo-3',
			date: 'Jan 2020',
		},
		{
			title: 'A article about something really interesting',
			link: '/demo-4',
			date: 'Jan 2020',
		},
		{
			title: 'A article about something really interesting',
			link: '/demo-1-5',
			date: 'Jan 2020',
		},
	]

	return (
		<section className='pt-20'>
			<div>
				<SectionHeading />
				<List listItems={listItems} />
			</div>
		</section>
	)
}

export default Container
