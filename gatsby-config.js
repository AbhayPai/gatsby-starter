/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter',
    siteUrl: 'https://abhaypai.github.io/gatsby-starter',
    description: 'A simplified bare-bones starter for Gatsby with lando',
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap",
      },
    },
    'gatsby-plugin-remove-generator',
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          },
        ],
      },
    },
  ],
}
