import List from './List'
import SectionHeading from '../SectionHeading'

const Container = ({ allArticlesData }) => {
	/*[
		{
			title: 'A article about something really interesting',
			link: '/demo-1',
			date: 'Jan 2020',
		}
	]*/

	return (
		<section className='pt-20'>
			<div>
				<SectionHeading heading={'Latest Articles'} url={'/articles'} />
				<List listItems={allArticlesData} />
			</div>
		</section>
	)
}

export default Container
