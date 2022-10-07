import { GraphQLClient, gql } from "graphql-request"

export async function getProjects() {
    const query = gql`
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

    const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL!);
    const { projects } = await graphcms.request(query)
    const projectsWithMarkdown = projects.filter((project: any) => project.markdown)


    return { projects, projectsWithMarkdown };
}
