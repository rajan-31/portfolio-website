import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import { HiMenu } from 'react-icons/hi'

import MobileNav from './MobileNav'
import Switch from './Switch'

const ResponsiveNavBar = () => {
	const router = useRouter()
	const [navOpen, setNavOpen] = useState(false)
	const [activeSection, setActiveSection] = useState(
		router.pathname.split('/')[1]
	)

	useEffect(() => {
		setActiveSection(router.pathname.split('/')[1])
	}, [router.pathname.split('/')[1]])

	const onHamburgerClick = () => {
		setNavOpen(!navOpen)
	}

	const onSectionClick = (currentSection) => {
		setActiveSection(currentSection)
	}

	const listNavItems = ['About', 'Articles', 'Projects']
	const listNavLinks = ['/about', '/articles', '/projects']
	const listNavIcons = [
		'/images/cv.png',
		'/images/article.png',
		'/images/code.png',
	]

	return (
		<div className='sticky top-0 z-20'>
			<div
				className={`w-auto py-3 bg-slate-300 dark:bg-zinc-800 dark:text-white/80 drop-shadow-lg 
                ${navOpen ? '' : 'rounded-b-lg'}
                z-50
                `}
			>
				<div className='flex justify-between items-center text-xl responsive-width'>
					<div className=' hover:bg-black/20 active:hover:bg-black/30 dark:hover:bg-white/10  rounded-lg'>
						<Link href='/'>
							<a
								className='inline-block py-2 pr-2'
								onClick={() => {
									setNavOpen(false)
									onSectionClick('')
								}}
							>
								&#60;
								<span className='text-rose-800 dark:text-red-700'>
									Rajan
								</span>
								<span className='hidden md:inline'> Khade</span>
								<span className='text-stone-500'>/</span>&#62;
							</a>
						</Link>
					</div>

					<div className='md:flex md:flex-row md:items-center md:justify-between hidden'>
						{listNavItems.map((item, index) => (
							<div key={index} className='mx-3 self-center'>
								<Link href={listNavLinks[index]}>
									<a
										className={`px-2 py-2 rounded-lg hover:bg-black/20 active:hover:bg-black/30 dark:hover:bg-white/10 flex flex-row align-middle ${
											activeSection ==
											listNavItems[index].toLowerCase()
												? 'bg-black/20 dark:bg-white/10'
												: ''
										}`}
										onClick={() =>
											onSectionClick(
												listNavItems[
													index
												].toLowerCase()
											)
										}
									>
										<Image
											className='inline-block'
											height={28}
											width={28}
											src={listNavIcons[index]}
											alt=''
										/>
										<div className='self-center'>
											{item}
										</div>
									</a>
								</Link>
							</div>
						))}
					</div>

					<div className='flex flex-row items-center'>
						<Image
							src='/images/sun.png'
							alt='&#8413;'
							width={28}
							height={28}
							className='pointer-events-none'
						/>
						<div className='flex-grow mx-1 pb-1'>
							<Switch />
						</div>
						<Image
							src='/images/moon.png'
							alt='&#x25CF;'
							width={28}
							height={28}
							className='pointer-events-none'
						/>
					</div>

					<div className='md:hidden ml-7 rounded-lg hover:bg-black/20 active:hover:bg-black/30 dark:hover:bg-white/10'>
						<button
							onClick={onHamburgerClick}
							className={`text-2xl p-2 transition duration-300 ${
								navOpen ? '-rotate-90 md:transform-none' : ''
							}`}
						>
							<HiMenu />
						</button>
					</div>
				</div>
			</div>
			<MobileNav
				listNavItems={listNavItems}
				listNavLinks={listNavLinks}
				navOpen={navOpen}
				closeNav={onHamburgerClick}
				activeSection={activeSection}
				onSectionClick={onSectionClick}
			/>
		</div>
	)
}

export default ResponsiveNavBar
