import {
	AiFillGithub,
	AiFillLinkedin,
	AiFillTwitterCircle,
} from 'react-icons/ai'

const SocialMedia = () => {
	const listSocialMedia = [
		{
			link: 'https://www.github.com/rajan-31',
			icon: <AiFillGithub />,
		},
		{
			link: 'https://www.linkedin.com/in/rajan-khade',
			icon: <AiFillLinkedin />,
		},
		{
			link: 'https://twitter.com/Rajan_khade',
			icon: <AiFillTwitterCircle />,
		},
	]

	return (
		<div className='rounded-lg bg-yellow-600/80 p-1 text-black text-center text-5xl flex flex-row justify-around'>
			{listSocialMedia.map((item, index) => (
				<a
					key={index}
					href={item.link}
					target='_blank'
					className='hover:bg-black/20 p-2 rounded-full transition duration-200 ease-out hover:ease-in'
				>
					{item.icon}
				</a>
			))}
		</div>
	)
}

export default SocialMedia
