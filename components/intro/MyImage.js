import Image from 'next/image'

const MyImage = () => (
	<Image
		priority='true'
		src='/author.jpg'
		width={300}
		height={300}
		alt='Me'
		quality={100}
		// layout='fixed'
		className='rounded-lg '
	/>
)

export default MyImage
