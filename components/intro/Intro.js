import MyImage from './MyImage'

const Intro = () => (
	<div className='py-10 md:py-20'>
		<div className='flex md:flex-row flex-col-reverse md:justify-between'>
			<div className=''>
				<div className='text-3xl sm:text-4xl mb-8 mt-4 sm:mt-0 font-bold text-center md:text-left'>
					Hey, I&apos;m <span className=''>Rajan</span>.
				</div>

				<div className='text-xl text-justify md:pr-10'>
					I&apos;m an undergraduate information technology engineer. I
					love to explore new technologies and contribute to
					open-source projects. I write articles to share my knowledge
					and experience. This website is my portfolio of learning and
					projects.
				</div>
			</div>

			<div
				onContextMenu={(e) => e.preventDefault()}
				className='min-w-fit self-center md:self-start
			 drop-shadow-md'
			>
				<MyImage />
			</div>
		</div>
	</div>
)

export default Intro
