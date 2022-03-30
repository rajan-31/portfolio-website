import Footer from './Footer'
import ResponsiveNavBar from './ResponsiveNavBar'

export default function Layout({ children }) {
	return (
		<div>
			<div className='dark:bg-black/80 h-full w-auto'>
				<ResponsiveNavBar />

				<main className='dark:text-gray-100 relative min-h-footer1 footer-break:min-h-footer2 md:min-h-footer3'>
					{children}
				</main>
				<Footer />
			</div>
		</div>
	)
}
