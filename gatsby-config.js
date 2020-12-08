module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Josefin Sans`,
            varients: [`200`, `400`],
          },
        ],
      },
    }
  ],
};
