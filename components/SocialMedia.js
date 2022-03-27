import {
	AiFillGithub,
	AiFillLinkedin,
	AiFillTwitterCircle,
} from 'react-icons/ai'

const SocialMedia = () => {
	return (
		<div className='rounded-lg bg-yellow-500 p-4 text-black text-center text-4xl flex flex-row justify-around'>
			<a href='https://www.github.com/rajan-31' target='_blank'>
				<AiFillGithub />
			</a>
			<a href='https://www.linkedin.com/in/rajan-khade' target='_blank'>
				<AiFillLinkedin />
			</a>
			<a href='https://twitter.com/Rajan_khade' target='_blank'>
				<AiFillTwitterCircle />
			</a>
		</div>
	)
}

export default SocialMedia
