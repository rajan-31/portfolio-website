import MyImage from './MyImage'

const Intro = () => (
	<div className='py-20'>
		{/* <div className='grid grid-cols-7 gap-4'>
			<div className='sm:col-span-4 col-span-7'>
				<div className='text-4xl mb-8 font-bold text-center sm:text-left'>
					Hey, I'm <span className=''>Rajan</span>.
				</div>

				<div className='text-xl text-justify sm:pr-7'>
					There are many variations of passages of Lorem Ipsum
					available, but the majority have suffered alteration in some
					form, by injected humour, or randomised words which don't
					look even slightly believable.
				</div>
			</div>

			<div className='col-span-7 sm:col-span-3 row-start-1 sm:row-start-auto mx-auto drop-shadow-md'>
				<MyImage />
			</div>
		</div> */}
		<div className='flex md:flex-row flex-col-reverse md:justify-between'>
			<div className=''>
				<div className='text-4xl sm:text-5xl mb-8 mt-4 sm:mt-0 font-bold text-center md:text-left'>
					Hey, I&apos;m <span className=''>Rajan</span>.
				</div>

				<div className='text-xl text-justify md:pr-10'>
					I&apos;m an undergraduate Information Technology Engineer. I love to explore new technologies and contribute to open-source projects. I write articles to teach new and emerging technologies. This website is my portfolio of learnings and projects.
				</div>
			</div>

			<div className='min-w-fit self-center
			 drop-shadow-md'>
				<MyImage />
			</div>
		</div>
	</div>
)

export default Intro
