import Image from 'next/image'

const SocialMedia = () => {
	const listSocialMedia = [
		{
			name: 'Linkedin',
			link: 'https://www.linkedin.com/in/rajan-khade',
			icon: '/images/linkedin.png',
		},
		{
			name: 'GitHub',
			link: 'https://www.github.com/rajan-31',
			icon: '/images/github.png',
		},
		{
			name: 'Twitter',
			link: 'https://twitter.com/Rajan_khade',
			icon: '/images/twitter.png',
		},
	]

	return (
		<div className='rounded-lg bg-blue-100 dark:bg-slate-600 text-black text-center text-5xl flex flex-row justify-around drop-shadow-lg'>
			{listSocialMedia.map((item, index) => (
				<a
					key={index}
					href={item.link}
					target='_blank'
					rel='noreferrer'
					className='hover:bg-blue-200 dark:hover:bg-white/10 p-3.5 rounded-md transition duration-200 ease-out hover:ease-in flex flex-row items-center'
				>
					<Image
						src={item.icon}
						width={30}
						height={30}
						alt={item.name}
					/>
				</a>
			))}
		</div>
	)
}

export default SocialMedia
