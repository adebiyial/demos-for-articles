module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '1l9w4fzl',
        dataset: 'production',
        watchMode: true,
        token:
          'skXTl6p80O6WJr9Sr6e2rmqbOtVsecknLPr09lL9ayWNYKBGEcGcVqBcQrsUAoDcfaJIXPX5U9O9jKkqSd3Ge3mo1hDiFIAd9dTXABeLYgAl0Yfp3OXDNlfAMFw9TyJh5nIIurCKOwSt6QYAs3Zkh3klKbXe0SaBCpCzyqPCG8zVpawC8hs2',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
