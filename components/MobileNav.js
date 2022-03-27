import Link from 'next/link'

const MobileNav = ({ listNavItems, listNavLinks, navOpen }) => {
	return (
		<div
			className={`w-screen z-10 fixed 
            ${navOpen ? 'display:flex' : 'hidden'} 
            flex-row bg-cyan-500 rounded-b-lg md:hidden`}
		>
			<div className='grow'>
				{listNavItems.map((item, index) => (
					<div
						key={index}
						className={`text-xl ${
							index === listNavItems.length - 1
								? ''
								: 'border-b border-slate-500/50'
						}`}
					>
						<Link href={listNavLinks[index]}>
							<a className='block py-2 px-7 hover:bg-gray-200/25 transition-all delay-75 transform'>
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
