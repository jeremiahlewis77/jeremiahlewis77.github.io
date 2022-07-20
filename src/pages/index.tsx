import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import light_avatar from '../public/light_avatar.png'

const Home: NextPage = () => {
  return (
      <>
          <div className="h-screen flex flex-col">
              <Head>
                  <title>Jeremiah Lewis</title>
                  <meta name="description" content="Portfolio website for Jeremiah Lewis"/>
              </Head>
              <Header/>
              <div className="flex flex-auto bg-snow items-center justify-center">
                  <div className="flex flex-wrap-reverse text-gunmetal items-center justify-center p-14 gap-x-10">
                      <div className="lg:text-left text-center">
                          <h3 className="font-semibold text-3xl mb-0">Hey, I&apos;m</h3>
                          <h1 className="font-extrabold md:text-7xl text-6xl tracking-tight"><span className="text-sapphire">Jeremiah</span> <span className="font-bold">Lewis</span></h1>
                          <h3 className="font-body text-2xl">CS Graduate. Software Engineer. Graphic Designer.</h3>

                          <div className="mt-5">
                              <h3 className="sm:text-xl text-lg font-medium mb-1">Choose a section to learn more:</h3>
                              <div className="flex lg:justify-start justify-center items-center gap-2 md:gap-6">
                                  <div className="bg-slate-300 rounded border-solid border-gunmetal p-2 py-1 text-center hover:bg-sapphire hover:text-snow transition ease-in-out cursor-pointer">
                                      <h3 className="sm:text-lg text-md font-medium">Professional</h3>
                                  </div>
                                  <div className="bg-slate-300 rounded border-solid border-gunmetal p-2 py-1 text-center hover:bg-sapphire hover:text-snow transition ease-in-out cursor-pointer">
                                      <h3 className="sm:text-lg text-md font-medium">Personal</h3>
                                  </div>
                                  <div className="bg-slate-300 rounded border-solid border-gunmetal p-2 py-1 text-center hover:bg-sapphire hover:text-snow transition ease-in-out cursor-pointer">
                                      <h3 className="sm:text-lg text-md font-medium">Musician</h3>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="md:w-60 w-48 mb-5 lg:mb-0">
                          <Image src={light_avatar}/>
                      </div>
                  </div>


              </div>
              <Footer/>
        </div>
      </>
  )
}

export default Home
