import Image from 'next/image'

const MyImage = () => (
	<Image
		priority='true'
		src='/author.jpg'
		width={256}
		height={256}
		alt='My Image'
		quality={100}
		className='rounded-full'
	/>
)

export default MyImage
