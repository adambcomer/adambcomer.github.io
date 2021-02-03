'use strict'

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createRedirect, createPage } = actions;

  const blogPostTemplate = require.resolve('./src/templates/blog-post.tsx')
  const result = await graphql(`
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
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
        image: node.frontmatter.image,
      },
    })
  })
}