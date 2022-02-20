import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface BlogPostsQuery {
  posts: BlogPosts
  image: IGatsbyImageData
}

interface BlogPosts {
  edges: Array<{
    node: {
      frontmatter: {
        slug: string
        title: string
        description: string
        imageAlt: string
        featuredImage: IGatsbyImageData
      }
    }
  }>
}

export interface BlogPostQuery {
  markdownRemark: {
    frontmatter: {
      slug: string
      title: string
      description: string
      author: string
      imageAlt: string
      postDate: string
      formattedDate: string
      date: string
    }
    html: string
  }
  image: IGatsbyImageData
}
