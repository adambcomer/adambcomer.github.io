import { GatsbyConfig } from 'gatsby'
import path from 'path'

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: 'https://adambcomer.com'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src/images')
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'src/pages/blog'),
        name: 'markdown-pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '›'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 896,
              quality: 90,
              withWebp: true
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Adam Comer's Website",
        short_name: "Adam Comer's Website",
        start_url: '/',
        background_color: '#161616',
        theme_color: '#0062ff',
        display: 'standalone',
        icon: 'src/images/adam-comer-portrait.jpg'
      }
    }
  ]
}

export default config
