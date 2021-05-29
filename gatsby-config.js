module.exports = {
  siteMetadata: {
    siteUrl: 'https://adambcomer.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    `gatsby-plugin-image`,
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'G-NPWF2XR6L3',
          'UA-129077573-1'
        ],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: '›',
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 896,
              quality: 90,
              withWebp: true
            },
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Adam Comer\'s Website',
        short_name: 'Adam Comer\'s Website',
        start_url: '/',
        background_color: '#161616',
        theme_color: '#0062ff',
        display: 'standalone',
        icon: 'src/images/portrait.png'
      },
    }
  ],
}
