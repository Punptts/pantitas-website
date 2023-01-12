import path from "path";

export const createPages = async ({ graphql, actions }:any) => {
  const { data, errors } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (errors) {
    return Promise.reject(errors);
  }

  /* @ts-ignore */
  
  const { allMarkdownRemark } = data || {};

  allMarkdownRemark?.edges.forEach(({ node }:any) => {
    const { frontmatter } = node;
    const { slug } = frontmatter;

    actions.createPage({
      path: slug,
      component: path.resolve("src", "templates", "MarkdownTemplate.tsx"),
      context: {
        slug,
      },
    });
  });
};
