import { GatsbyNode } from 'gatsby'
import path from 'path'

interface BlogPostsQueryResult {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          slug: string
          image: string
        }
      }
    }[]
  }
}

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
  reporter
}) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve('./src/templates/blog-post.tsx')
  const result = await graphql<BlogPostsQueryResult>(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              image
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }
  result.data?.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
        image: node.frontmatter.image
      }
    })
  })
}
