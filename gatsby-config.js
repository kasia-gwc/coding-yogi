/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Coding yogi',
    description: 'Coding yogi',
    url: 'https://www.kasiagawelko.me', // No trailing slash allowed!
    siteUrl: 'https://www.kasiagawelko.me',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: '6hgunsiv77we',
        accessToken: 'wIVy_OOVC1g7AaxR6P2U3aeVvIpXjWLhHxZ99TZAx50',
        host: `preview.contentful.com`,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Josefin Sans:200,300,400`, // you can also specify font weights and styles
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
    },
  ],
}
