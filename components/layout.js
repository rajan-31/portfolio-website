import Footer from './Footer'
import ResponsiveNavBar from './ResponsiveNavBar'

export default function Layout({ children }) {
	return (<>
		<div className='bg-neutral-100/10 dark:bg-neutral-700 h-full w-auto
				flex flex-col min-h-screen
				'>
				<ResponsiveNavBar />

			<main className='dark:text-zinc-200 relative min-h-footer1 footer-break:min-h-footer2 md:min-h-footer3
			grow
				'>
					{children}
				</main>

			<Footer className='' />

		</div>
	</>
	)
}
