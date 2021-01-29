import React from 'react'
import Navbar from '../../components/Navbar'
import '../../styles/blog.css'
import Footer from '../../components/Footer'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

const SimpleDatabasePage = () => {
  const result = useStaticQuery(graphql`
    {
      posts: allMarkdownRemark(sort: {fields: frontmatter___postDate}, filter: {fileAbsolutePath: {glob: "/**/pages/simple-database/**.md"}}) {
        edges {
          node {
            frontmatter {
              slug
              title
              description
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://adambcomer.com/blog/simple-database" />

        <title>Build a Simple Database | Adam Comer</title>
        <meta name="description" content="Introductory tutorial to designing and building a LSM-Tree based Key-Value Store like RocksDB." />

        <meta property="og:title" content="Adam Comer | Software Developer" />
        <meta property="og:description" content="Introductory tutorial to designing and building a LSM-Tree based Key-Value Store like RocksDB." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adambcomer.com/blog/simple-database" />
        <meta property="og:image" content="https://adambcomer.com/assets/img/simple-database-motivation-design-cover.jpg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
      </Helmet>
      <Navbar />
      <main className='w-100'>
        <div className='mx-6 my-64'>
          <h1 className='text-6xl font-light'>Build a Simple Database</h1>
          <p className='mt-6 text-lg text-1-color'>Introductory tutorial to designing and building a LSM-Tree based Key-Value Store like RocksDB</p>
        </div>

        <hr />

        <div className='grid grid-cols-1 lg:grid-cols-5 px-6 py-16 gap-x-12'>
          <div className='lg:block'>
            <p className='text-xl font-semibold'>Posts</p>
          </div>
          <div className='mt-8 lg:mt-0 lg:col-span-4'>
            {result.posts.edges.map(({ node }, i) => {
              return (
                <>
                  <div className='grid grid-cols-1 lg:grid-cols-4 mb-8'>
                    <div className='col-span-3'>
                      <Link className='hover:underline' to={node.frontmatter.slug}>
                        <h3 className='text-3xl font-light mb-6'>{node.frontmatter.title}</h3>
                      </Link>
                    </div>
                    <div className='col-span-1'>
                      <p className='text-sm font-light text-1-color'>{node.frontmatter.description}</p>
                      <Link className='hover:underline link-1-color' to={node.frontmatter.slug}>
                        <div className='flex items-center mt-4'>
                          <svg className='link-svg-fill' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <polygon points="18 6 16.57 7.393 24.15 15 4 15 4 17 24.15 17 16.57 24.573 18 26 28 16 18 6" />
                          </svg>
                          <span className='ml-4 link-1-color'>Read more</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {i !== result.posts.edges.length - 1 &&
                    <hr className='my-8' style={{ borderColor: '#6f6f6f' }} />
                  }
                </>
              )
            })}
          </div>
        </div>


      </main >
      <Footer />
    </>
  )
}

export default SimpleDatabasePage
