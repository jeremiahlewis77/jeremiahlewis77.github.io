import {NextPageWithLayout} from "../_app";
import React, {ReactElement} from "react";
import Layout from "../../components/Layout/Layout";
import PageLayout from "../../components/Layout/PageLayout";
import Project from "../../components/Project/Project";
import {getProjects} from "../../graphql/queries/getProjects";

export async function getStaticProps () {
    try {
        const { projects } = await getProjects()
        return {
            props: {
                projects
            },
            revalidate: 86400,
        }
    } catch (error) {
        return {
            props: {},
            revalidate: 3600,
        }
    }
}

function Header(): JSX.Element {
    return (
        <>
            <div>
                <h3>Look below to check out what I&apos;ve been working on!</h3>
            </div>
        </>
    );
}


const Projects: NextPageWithLayout<any> = ({ projects }) => {

    return (
        <>
            <div className="flex sm:space-x-4 space-x-0 flex-wrap justify-center">
                {/*
                    // @ts-ignore */}
                {projects.map(({id, title, slug, githubUrl, liveDemo, coverImage, description, technologies, markdown}) => (
                    <Project key={id} id={id} slug={slug} title={title} description={description} coverImage={coverImage} technologies={technologies} githubURL={githubUrl} liveDemo={liveDemo} markdown={markdown}/>
                ))}
            </div>
        </>
    )
}


Projects.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <Layout title="Projects">
                <PageLayout pageTitle="Projects" headerContent={Header()}  headerCSS="flex flex-col justify-center text-center" pageCSS="px-8 pb-8">
                    {page}
                </PageLayout>
            </Layout>
        </>
    )
}

export default Projects;