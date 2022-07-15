import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import lightLogo from '../public/logo-light.svg'

const Home: NextPage = () => {
  return (
      <><div className="relative flex flex-col min-h-screen bg-sapphire justify-center p-6">
        <Head>
            <title>Coming Soon!</title>
            <meta name="description" content="Portfolio website for Jeremiah Lewis"/>
        </Head>
        <div className="relative bg-neutral p-8 shadow-xl ring-1 ring-sapphire sm:mx-auto sm:max-w-lg sm:rounded-lg">
            <div className="mx-auto max-w-md">
                <div className="w-[250px] my-2"><Image src={lightLogo} alt="Jeremiah L."/></div>
                <div className="text-gray-700 py-3">
                    <h2>In progress</h2>
                </div>
                <div>
                    <p>Thank you for checking in! The site is currently in progress and should be up soon. If you have any questions,
                        you can email me at <a href="mailto:jeremiahlewis55@gmail.com">jeremiahlewis55@gmail.com</a>.
                    </p>
                </div>
            </div>
        </div>
    </div></>
  )
}

export default Home
