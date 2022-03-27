import MyImage from './MyImage'

const Intro = () => (
	<div className='py-20'>
		<div className='grid grid-cols-7 gap-4'>
			<div className='sm:col-span-4 col-span-7'>
				<div className='text-4xl mb-8 font-bold'>
					Hey, I'm <span className=''>Rajan</span>.
				</div>

				<div className='text-xl text-justify sm:pr-7'>
					There are many variations of passages of Lorem Ipsum
					available, but the majority have suffered alteration in some
					form, by injected humour, or randomised words which don't
					look even slightly believable.
				</div>
			</div>

			<div className='col-span-7 sm:col-span-3 row-start-1 sm:row-start-auto'>
				{<MyImage />}
			</div>
		</div>
	</div>
)

export default Intro
