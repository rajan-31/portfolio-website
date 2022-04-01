import Link from 'next/link'

const MobileNav = ({ listNavItems, listNavLinks, navOpen, closeNav }) => {
	return (
		<div
			className={`w-full z-10 fixed 
            ${navOpen ? 'display:flex' : 'hidden'} 
            flex-row bg-slate-200 dark:bg-zinc-800 dark:text-white/80 rounded-b-lg md:hidden`}
		>
			<div className='grow'>
				{listNavItems.map((item, index) => (
					<div
						key={index}
						className={`text-xl ${
							index === listNavItems.length - 1
								? ''
							: 'border-b border-slate-500/10'
						}`}
					>
						<Link href={listNavLinks[index]}>
							<a
								className='block py-2 responsive-width hover:bg-slate-300/50 dark:hover:bg-zinc-900/50 transition duration-200 ease-out hover:ease-in'
								onClick={closeNav}
							>
								{item}
							</a>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default MobileNav
