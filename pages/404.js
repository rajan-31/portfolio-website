import Link from 'next/link'
import Head from 'next/head'

import Heading from '../components/Heading'

export default function FourOhFour() {
    return (
        <div>
            <Head>
                <title>Error 404</title>
                <meta name='description' content='Portfolio Error 404' />
                <link rel='icon' href='/favicon.ico' />
                <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
            </Head>

            <Heading title='404' />
            <div>
                <h1 className='text-xl text-center text-gray-500 dark:text-gray-400'>
                    This page could not be found.
                </h1>
                <p className='text-sky-700 dark:text-yellow-600 text-xl text-center mt-10'>
                    <Link href='/'>
                        <a>Go Home</a>
                    </Link>
                </p>
            </div>
        </div>
    )
}
