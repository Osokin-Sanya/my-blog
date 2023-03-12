/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {},
  siteMetadata: {
    title: `blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-slug",
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts/`,
      },
    },
    "gatsby-plugin-sass",
  ],
};
