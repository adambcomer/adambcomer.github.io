import React, { FC } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { BlogPostsQuery } from '../../types/blog-post'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'

const SimpleDatabasePage: FC = () => {
  const result: BlogPostsQuery = useStaticQuery(graphql`
    {
      posts: allMarkdownRemark(
        sort: { fields: frontmatter___postDate }
        filter: {
          fileAbsolutePath: { glob: "/**/pages/simple-database/**.md" }
        }
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
              description
              imageAlt
              featuredImage {
                childImageSharp {
                  gatsbyImageData(width: 800)
                }
              }
            }
          }
        }
      }
      image: file(
        relativePath: { eq: "blog/simple-database-motivation-design-cover.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920)
        }
      }
    }
  `)

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <link
          rel='canonical'
          href='https://adambcomer.com/blog/simple-database/'
        />

        <title>Build a Simple Database | Adam Comer</title>
        <meta
          name='description'
          content='Introductory tutorial to designing and building a LSM-Tree based Key-Value Store like RocksDB.'
        />

        <meta property='og:title' content='Adam Comer | Software Developer' />
        <meta
          property='og:description'
          content='Introductory tutorial to designing and building a LSM-Tree based Key-Value Store like RocksDB.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://adambcomer.com/blog/simple-database/'
        />
        <meta
          property='og:image'
          content={`https://adambcomer.com${getSrc(result.image) ?? ''}`}
        />
        <meta property='og:image:width' content='1920' />
        <meta property='og:image:height' content='1080' />
      </Helmet>
      <Navbar />
      <main className='px-6 md:px-12 mb-32 max-w-screen-2xl mx-auto'>
        <div className='mx-6 my-64 text-center'>
          <h1 className='md-display-large'>Build a Simple Database</h1>
          <p className='md-headline-medium md-color-secondary mt-6'>
            Introductory tutorial to designing and building a LSM-Tree based
            Key-Value Store like RocksDB
          </p>
        </div>

        <div>
          <h2 className='text-center md-display-small'>Posts</h2>

          <div className='grid gap-6 grid-cols-1 lg:grid-cols-12 mt-8'>
            {result.posts.edges.map(({ node }, i: number) => {
              const image = getImage(node.frontmatter.featuredImage)
              return (
                <Link to={node.frontmatter.slug} className='col-span-4' key={i}>
                  <div className='md-surface-2 p-8 rounded-[32px] overflow-hidden h-full hover:md-surface-5'>
                    {image !== undefined && (
                      <GatsbyImage
                        image={image}
                        className='-mt-8 -mx-8 aspect-video'
                        alt={node.frontmatter.imageAlt}
                      />
                    )}

                    <p className='md-body-medium md-color-secondary mt-8'>
                      Article
                    </p>
                    <h3 className='md-headline-medium font-medium line-clamp-2'>
                      {node.frontmatter.title}
                    </h3>
                    <p className='md-body-large mt-4 line-clamp-3'>
                      {node.frontmatter.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default SimpleDatabasePage
