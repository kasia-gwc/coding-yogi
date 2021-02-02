/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Coding yogi',
    description:
      'A short story and professional portfolio of a yogi traveler, who discovered passion for coding.',
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
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
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
