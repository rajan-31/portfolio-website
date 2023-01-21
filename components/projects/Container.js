import List from './List'
import SectionHeading from '../SectionHeading'

const Container = ({ allProjectsData }) => {
	return (
		<section className='pt-20'>
			<div>
				<SectionHeading heading={'Projects'} url={'/projects'} />
				<div className='mt-7'>
					<List projectsList={allProjectsData} />
				</div>
			</div>
		</section>
	)
}

export default Container
