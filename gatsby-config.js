module.exports = {
  siteMetadata: {
    title: 'Coding yogi',
    description: 'Coding yogi',
    url: 'https://www.kash.com', // No trailing slash allowed!
    siteUrl: 'https://www.kash.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-theme-ui',
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
