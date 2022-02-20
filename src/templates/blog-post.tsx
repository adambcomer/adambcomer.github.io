import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'
import { BlogPostQuery } from '../types/blog-post'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'

import 'prismjs/themes/prism.css'
import '../styles/blog-template.css'

interface BlogPostTemplateProps {
  data: BlogPostQuery
}

const BlogPostTemplate: FC<BlogPostTemplateProps> = ({ data }) => {
  const image = getImage(data.image)

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <link rel='canonical' href={`https://adambcomer.com${data.markdownRemark.frontmatter.slug}`} />

        <title>{data.markdownRemark.frontmatter.title} | Adam Comer</title>
        <meta name='description' content={data.markdownRemark.frontmatter.description} />

        <meta property='og:title' content={`${data.markdownRemark.frontmatter.title} | Adam Comer`} />
        <meta property='og:description' content={data.markdownRemark.frontmatter.description} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`https://adambcomer.com${data.markdownRemark.frontmatter.slug}`} />
        <meta property='og:image' content={`https://adambcomer.com${getSrc(data.image) ?? ''}`} />
        <meta property='og:image:width' content='1920' />
        <meta property='og:image:height' content='1080' />

        <script type='application/ld+json'>{`
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": "https://adambcomer.com${data.markdownRemark.frontmatter.slug}",
            "headline": "${data.markdownRemark.frontmatter.title}",
            "image": [
                "https://adambcomer.com${getSrc(data.image) ?? ''}"
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
                    "https://stackoverflow.com/users/17834001/adambcomer",
                    "https://knowtworthy.com/blog/author/adambcomer/"
                ]
            },
            "publisher": {
                "@type": "Organization",
                "name": "Adam Comer’s Blog",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://adambcomer.com/assets/img/publisherLogo.png",
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
      <main className='px-6 max-w-screen-lg mx-auto'>
        <h1 className='md-display-large mt-32'>{data.markdownRemark.frontmatter.title}</h1>
        <p className='md-headline-small mt-16'>{data.markdownRemark.frontmatter.author}</p>
        <p className='md-headline-small !font-light'>Updated {data.markdownRemark.frontmatter.formattedDate}</p>

        {image !== undefined && <GatsbyImage image={image} alt={data.markdownRemark.frontmatter.imageAlt} className='mt-16 rounded-[32px]' />}
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
        author
        imageAlt
      }
    }
    image: file(relativePath: { eq: $image }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

export default BlogPostTemplate
