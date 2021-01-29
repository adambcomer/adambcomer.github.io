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


  createRedirect({
    fromPath: '/blog/simple-database.html',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: '/blog/simple-database'
  })
  createRedirect({
    fromPath: '/blog/simple-database/motivation-design.html',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: '/blog/simple-database/motivation-design'
  })
  createRedirect({
    fromPath: '/blog/simple-database/memtable.html',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: '/blog/simple-database/memtable'
  })
  createRedirect({
    fromPath: '/blog/simple-database/wal.html',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: '/blog/simple-database/wal'
  })
  createRedirect({
    fromPath: '/blog/setup-gitlab-cicd-on-kubernetes.html',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: '/blog/install-gitlab-runner-kubernetes'
  })
}