import Image from 'next/image'

const MyImage = () => (
	<Image
		priority='true'
		src='/disco_dingo.png'
		width={400}
		height={304}
		alt='Disco Dingo'
		quality={100}
		// layout='fixed'
		className='rounded-lg pointer-events-none'
	/>
)

export default MyImage
