require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Aluminum Associates`,
    description: `Aluminum Associates is a home renovation company specializing in Vinyl Windows, Doors, Siding, Soffit, Fascia, Eavestrough and Railing in London, Ontario`,
    author: `Alex Low`,
    siteUrl: `https://www.aluminumassociates.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.GATSBY_SANITY_ID,
        dataset: `production`,
        watchMode: process.env.GATSBY_SANITY_WATCHMODE,
        token: process.env.GATSBY_SANITY_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `@chakra-ui/gatsby-plugin`,
      options: {
        isResettingCSS: true,
        isUsingColorMode: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `aluminum-associates`,
        short_name: `aluminum`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
