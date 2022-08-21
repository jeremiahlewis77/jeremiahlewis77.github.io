import type { ReactElement } from 'react'
import Image from 'next/image'
import light_avatar from '../public/light_avatar.png'
import {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout/Layout";
import {Badge} from "../components/ui/Badges/Badges";

const Page: NextPageWithLayout<any> = () => {
    return (
        <>
                <div className="flex flex-wrap-reverse text-gunmetal items-center justify-center p-14 gap-x-10">
                    <div className="lg:text-left text-center">
                        <h3 className="font-semibold text-3xl mb-0">Hey, I&apos;m</h3>
                        <h1 className="font-extrabold md:text-7xl text-6xl tracking-tight"><span className="text-sapphire">Jeremiah</span> <span className="font-bold">Lewis</span></h1>
                        <h3 className="font-body text-2xl">CS Graduate. Software Engineer. Graphic Designer.</h3>

                        <div className="mt-5">
                            <h3 className="sm:text-xl text-lg font-medium mb-1">Choose a section to learn more:</h3>
                            <div className="flex lg:justify-start justify-center items-center gap-2 md:gap-6">
                                <Badge isClickable href={"/about"}>👨‍💻 Read About Me</Badge>
                                <Badge isClickable href={"/projects"}>🛠️ View My Projects</Badge>
                                <Badge isClickable href={"/contact"}>👋 Contact Me</Badge>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-60 w-48 mb-5 lg:mb-0">
                        <Image src={light_avatar} alt="Avatar with dark brown hair, glasses, and a blue sweater"/>
                    </div>
                </div>
        </>
    )
}


Page.getLayout = function getLayout(page: ReactElement) {
  return (
      <>
          <Layout css="flex justify-center items-center">
              {page}
          </Layout>
      </>
  )
}

export default Page
