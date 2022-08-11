import {NextPageWithLayout} from "./_app";
import React, {ReactElement} from "react";
import Layout from "../components/Layout/Layout";
import PageLayout from "../components/Layout/PageLayout";
import { GraphQLClient, gql } from "graphql-request"
import Project from "../components/Project/Project";

const graphcms = new GraphQLClient('https://api-us-east-1.hygraph.com/v2/cl4m60ewc7fun01z6437najgy/master');
const projectQuery = gql`
{
  projects {
    id
    slug
    title
    githubUrl
    liveDemo
    coverImage {
        url
        }
    description
    technologies
    markdown
    }
  }
`;

export async function getStaticProps() {
    const { projects } = await graphcms.request(projectQuery)

    return {
        props: {
            projects
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
            <div className="flex md:space-x-4 space-x-0 flex-wrap justify-center">
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