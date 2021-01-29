import React from 'react'
import { graphql } from 'gatsby'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/blog-template.css'
import { Helmet } from 'react-helmet'

const BlogPostTemplate = ({ data }) => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href={`https://adambcomer.com${data.markdownRemark.frontmatter.slug}`} />

        <title>{data.markdownRemark.frontmatter.title} | Adam Comer</title>
        <meta name="description" content={data.markdownRemark.frontmatter.description} />

        <meta property="og:title" content={`${data.markdownRemark.frontmatter.title} | Adam Comer`} />
        <meta property="og:description" content={data.markdownRemark.frontmatter.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://adambcomer.com${data.markdownRemark.frontmatter.slug}`} />
        <meta property="og:image" content={`https://adambcomer.com/assets/img/${data.markdownRemark.frontmatter.image}`} />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />

        <script type="application/ld+json">{`
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": "https://adambcomer.com${data.markdownRemark.frontmatter.slug}",
            "headline": "${data.markdownRemark.frontmatter.title}",
            "image": [
                "https://adambcomer.com/assets/img/${data.markdownRemark.frontmatter.image}"
            ],
            "datePublished": "${data.markdownRemark.frontmatter.postDate}",
            "dateModified": "${data.markdownRemark.frontmatter.date}",
            "author": {
                "@type": "Person",
                "name": "Adam Comer",
                "email": "adambcomer@gmail.com",
                "url": "https://adambcomer.com/",
                "sameAs": [
                    "https://www.facebook.com/adam.comer.779",
                    "https://www.linkedin.com/in/adambcomer",
                    "https://www.instagram.com/adamcomer/",
                    "https://twitter.com/adambcomer",
                    "https://github.com/adambcomer",
                    "https://gitlab.com/adambcomer",
                    "https://knowtworthy.com/blog/author/adambcomer/"
                ]
            },
            "publisher": {
                "@type": "Organization",
                "name": "Adam Comer’s Blog",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://adambcomer.com/blog/assets/img/publisherLogo.png",
                    "width": 283,
                    "height": 60
                }
            },
            "description": "${data.markdownRemark.frontmatter.description}"
        }
        `}
        </script>
      </Helmet>
      <Navbar />
      <main className='px-6 max-w-4xl'>
        <h1 className='text-6xl font-light mt-16'>{data.markdownRemark.frontmatter.title}</h1>
        <p className='text-xl mt-16'>{data.markdownRemark.frontmatter.author}</p>
        <p className='text-xl font-light'>Updated {data.markdownRemark.frontmatter.formattedDate}</p>
        <div id='blog-content' className='my-16' dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </main>
      <Footer />
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!, $image: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        formattedDate: date(formatString: "MMM DD, YYYY")
        date
        postDate
        slug
        title
        description
        image
        author
      }
    }
    file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default BlogPostTemplate