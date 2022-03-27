import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import MobileNav from './MobileNav'
import Switch from './Switch'

const ResponsiveNavBar = () => {
	const [navOpen, setNavOpen] = useState(false)

	const onHamburgerClick = () => {
		setNavOpen(!navOpen)
	}

	const listNavItems = ['About', 'Articles', 'Projects']
	const listNavLinks = ['/about', '/articles', '/projects']

	return (
		<>
			<div
				className={`w-screen py-3 bg-cyan-500 drop-shadow-lg 
                ${navOpen ? '' : 'rounded-b-lg'}
                z-50 relative
                `}
			>
				<div className='flex justify-between text-xl responsive-width'>
					<div className='text-xl md:text-2xl'>
						<Link href='/'>
							<a>
								&#60;
								<span className='text-rose-700'>Rajan</span>
								<span className='hidden md:inline'> Khade</span>
								<span className='text-white'>/</span>&#62;
							</a>
						</Link>
					</div>

					<div className='md:flex justify-between hidden'>
						{listNavItems.map((item, index) => (
							<div key={index} className='mx-3'>
								<Link href={listNavLinks[index]}>
									<a className='p-1 rounded-lg transition-all duration-300 hover:bg-black/20 align-middle'>
										{item}
									</a>
								</Link>
							</div>
						))}
					</div>

					<div className='flex flex-row'>
						<Image
							src='/white_sun.svg'
							alt='&#8413;'
							width={25}
							height={25}
						/>
						<div className='flex-grow mx-1'>
							<Switch />
						</div>
						<Image
							src='/dark_sun.svg'
							alt='&#x25CF;'
							width={25}
							height={25}
						/>
					</div>

					<div className='md:hidden ml-7 self-center'>
						<button
							onClick={onHamburgerClick}
							className={`transition duration-300 ${
								navOpen ? 'rotate-90 md:transform-none' : ''
							}`}
						>
							&#9776;
						</button>
					</div>
				</div>
			</div>
			<MobileNav
				listNavItems={listNavItems}
				listNavLinks={listNavLinks}
				navOpen={navOpen}
			/>
		</>
	)
}

export default ResponsiveNavBar
