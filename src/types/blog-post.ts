export interface BlogPostsQuery {
  posts: BlogPosts
}

interface BlogPosts {
  edges: Array<{
    node: {
      frontmatter: {
        slug: string
        title: string
        description: string
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
      image: string
      postDate: string
      formattedDate: string
      date: string
    }
    html: string
  }
}
