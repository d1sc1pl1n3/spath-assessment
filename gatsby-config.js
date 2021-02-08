/* eslint-disable prettier/prettier */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `CountriesAPI`,
        fieldName: `countries`,
        url: `https://countries-274616.ew.r.appspot.com`,
        headers: {
          // Authorization: `Bearer your-github-token`,
        },
      },
    },
    /*   {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    } */

    // eslint-disable-next-line prettier/prettier
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Simplefolio',
        short_name: 'Simplefolio',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#02aab0',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
