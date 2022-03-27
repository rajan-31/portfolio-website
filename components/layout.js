// import Footer from './footer'
import ResponsiveNavBar from './ResponsiveNavBar'

export default function Layout({ children }) {
	return (
		<div>
			<div className='dark:bg-black h-full w-full'>
				<ResponsiveNavBar />
				<main className='dark:text-white'>{children}</main>
				{/* <Footer /> */}
			</div>
		</div>
	)
}
