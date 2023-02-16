module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        basePath: `/content`,
        contentPath: `${__dirname}/dev-research`,
        rootNote: `/hello`,
      },
    },
  ],
  siteMetadata: {
    title: `tiff's notes`,
  },
}
