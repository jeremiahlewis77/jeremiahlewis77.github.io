import {NextPageWithLayout} from "../_app";
import React, {ReactElement} from "react";
import Layout from "../../components/Layout/Layout";
import { ParsedUrlQuery } from 'querystring'
import {GetStaticProps} from "next";
import {serialize} from "next-mdx-remote/serialize";
import {MDXRemote} from "next-mdx-remote";
import Link from "next/link";
import {getProjects} from "../../graphql/queries/getProjects";
import {getProjectByID} from "../../graphql/queries/getProjectByID";

type Props = {
    project: any
}

interface IParams extends ParsedUrlQuery {
    slug: string | string[]
}

export async function getStaticPaths() {
    const { projectsWithMarkdown } = await getProjects()
    const paths = projectsWithMarkdown.map((project: any) => ({
       params: { id: project.slug },
    }))

    return {paths, fallback: false}
}



export const getStaticProps: GetStaticProps<Props, IParams> = async ({ params }) => {
    const { project } = await getProjectByID(params?.id!)

    const renderedContent = await serialize(project.markdown);
    return {
        props: {
            project,
            renderedContent
        },
        revalidate: 84600,
    }
}


const Project: NextPageWithLayout<any> = ({ project , renderedContent }) => {
    const created = project.createdAt.split("T")[0].split('-');
    const createdString = `${created[1]}\\${created[2]}\\${created[0]}`

    return (
        <>
            <div className="max-w-3xl mx-auto flex items-center text-sapphire-lighter hover:text-sapphire transition ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"/>
                </svg>
                <h4 className="text-lg  font-semibold">
                    <Link href="/projects" passHref={true}>
                        <a>Projects</a>
                    </Link>
                </h4>
            </div>
            <div className="max-w-3xl mx-auto mt-4 bg-white shadow-xl rounded">
                <div className="rounded">
                    <img
                        src={project.coverImage.url}
                        alt={project.title}
                        className="object-cover"
                        width={820}
                        height={314}
                    />
                </div>
                <div className="p-8">
                    <div>
                        <h1 className="page-header md:text-5xl text-4xl">{project.title}</h1>
                        <h3 className="text-md font-medium text-gray-400 inline">Created {createdString}</h3>
                    </div>

                </div>
            </div>
            <div className="max-w-3xl mx-auto mt-4 rounded p-8 mb-4">
                <div className="prose lg:prose-lg tracking-tight">
                    <MDXRemote {...renderedContent}/>
                </div>
            </div>

        </>
    )
}


Project.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <Layout title="Project">
                {page}
            </Layout>
        </>
    )
}

export default Project;