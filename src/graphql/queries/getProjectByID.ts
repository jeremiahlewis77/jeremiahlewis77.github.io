import { GraphQLClient, gql } from "graphql-request"

export async function getProjectByID(id: string | string[] ) {
    const query = gql`
            {
             project(where: {slug: "${id}"}) {
                markdown
                liveDemo
                githubUrl
                description
                coverImage {
                  url
                }
                slug
                technologies
                title
                updatedAt
                createdAt
              }
            }`;

    const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL!);
    const { project } = await graphcms.request(query)

    return { project };
}

