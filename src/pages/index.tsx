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
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
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
