module.exports = {
  siteMetadata: {
    title: `Gatsby Material UI Starter`,
    description: `Kick off your next, great Gatsby project with this Material UI starter. This barebones starter ships with the main Gatsby and Material UI configuration files you might need.`,
    author: `@dominicabela`,
  },
  // plugins: [`gatsby-theme-material-ui`],
  plugins: [
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Montserrat`,
                variants: [`300`, `400`, `500`, `600`],
              },
            ],
            //   custom: {
            //     families: [`GothamRounded`],
            //     urls: ['/fonts/fonts.css'],
            //   },
          },
        },
      },
    },
    // `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `fr`, `es`, `pt`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // defaultCrumb: optional To create a default crumb
        // see Click Tracking default crumb example below
        defaultCrumb: {
          location: {
            pathname: '/',
          },
          crumbLabel: 'HomeCustom',
          crumbSeparator: ' / ',
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // `gatsby-plugin-styled-components`,
    // `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //   `gatsby-plugin-offline`,
  ],
}
