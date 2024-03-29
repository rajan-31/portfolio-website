import Link from 'next/link'

const MobileNav = ({
	listNavItems,
	listNavLinks,
	navOpen,
	closeNav,
	activeSection,
	onSectionClick,
}) => {
	return (
		<div
			className={`w-full z-10 absolute
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
								className={`block py-2 responsive-width hover:bg-slate-400/50 dark:hover:bg-zinc-900/50 transition duration-200 ease-out hover:ease-in ${
									activeSection ==
									listNavItems[index].toLowerCase()
										? 'bg-slate-400/50 dark:bg-zinc-900/50'
										: ''
								}`}
								onClick={() => {
									closeNav()
									onSectionClick(
										listNavItems[index].toLowerCase()
									)
								}}
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
