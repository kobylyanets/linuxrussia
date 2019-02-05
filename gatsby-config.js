module.exports = {
  siteMetadata: {
    url: 'https://fervent-babbage-4c9775.netlify.com/',
    site_name: 'LinuxRussia.com',
    title: 'Статьи о Linux / Ubuntu',
    description: 'Настройка Linux / Ubuntu после установки. ' +
      'Обзоры, описание установки и настройка приложений для Linux / Ubuntu.',
    image: 'linuxrussia-logo.png',

    author: 'Edward Kobylyanets',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: 'posts',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LinuxRussia.com`,
        short_name: `linuxrussia`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        "excerpt_separator": `<!-- more -->`,
        plugins: [
          'gatsby-remark-prismjs',
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              sizeByPixelDensity: true,
            },
          },
        ]
      }
    },

    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
