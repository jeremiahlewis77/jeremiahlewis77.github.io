import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Header'

const Home: NextPage = () => {
  return (
      <>
          <div className="">
              <Head>
                  <title>Jeremiah Lewis</title>
                  <meta name="description" content="Portfolio website for Jeremiah Lewis"/>
              </Head>
              <Header/>
        </div>
      </>
  )
}

export default Home
