module.exports = {
  siteMetadata: {
    siteUrl: 'https://linuxrussia.com',
    url: 'https://linuxrussia.com/',
    site_name: 'LinuxRussia.com',
    title: 'Статьи о Linux / Ubuntu',
    description: 'Настройка Linux / Ubuntu после установки. ' +
      'Обзоры, описание установки и настройка приложений для Linux / Ubuntu.',
    image: 'linuxrussia-logo.png',

    twitter: 'https://twitter.com/LinuxRussia',
    author: 'Edward Kobylyanets',
  },
  plugins: [
    `gatsby-plugin-remove-trailing-slashes`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/notices`,
        name: 'notices',
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
        'excerpt_separator': `<!-- more -->`,
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              maintainCase: false,
              removeAccents: false,
            },
          },
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
          'gatsby-remark-static-images',
        ]
      }
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: '20907568',
        webvisor: false,
        trackHash: true,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          '/page/*',
          '/programs',
          '/programs/page/*',
          '/guides',
          '/guides/page/*',
          '/games',
          '/games/page/*',
          '/themes',
          '/themes/page/*',
          '/articles',
          '/articles/page/*',
          '/news',
          '/news/page/*',
          '/notices',
          '/notices/page/*'
        ],
        xmlNs: 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
        
            allSitePage {
              edges {
                node {
                  path
                  context {
                    lastmod(formatString: "YYYY-MM-DD")
                  }
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            const isMainPage = edge.node.path === '/';
            const changefreq = isMainPage ? 'daily' : 'monthly';
            const priority = isMainPage ? 0.9 : 0.8;
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq,
              priority,
              lastmod: edge.node.context.lastmod
            };
          }),
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        configFile: 'src/configs/robots-txt.config.js'
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: `
                  <img 
                    src="${site.siteMetadata.siteUrl + edge.node.frontmatter.featuredImage.childImageSharp.fluid.src}" 
                    width="400px"
                    height="171px"
                    alt=""
                  />
                  ` + edge.node.excerpt,
                  author: edge.node.frontmatter.author,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.url + '.html',
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.url + '.html',
                  image_url: site.siteMetadata.siteUrl + '/icons/icon-48x48.png',
                });
              });
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: {
                  fileAbsolutePath: { regex: "/posts/" }
                  frontmatter: { status: { ne: "template" } }
                }
              ) {
                edges {
                  node {
                    excerpt
                    frontmatter {
                      title
                      date
                      url
                      author
                      featuredImage {
                        childImageSharp {
                          fluid {
                            src
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "LinuxRussia RSS Feed",
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site = {}, allMarkdownRemark = {} } = {} }) => {
              site.siteMetadata = {};
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  author: edge.node.frontmatter.author,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.url + '.html',
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.url + '.html',
                })
              })
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: {
                  fileAbsolutePath: { regex: "/notices/" }
                  frontmatter: { status: { ne: "template" } }
                }
              ) {
                edges {
                  node {
                    excerpt
                    frontmatter {
                      title
                      date
                      url
                      author
                    }
                  }
                }
              }
            }
          `,
            output: "/notices-rss.xml",
            title: "LinuxRussia Notices RSS Feed",
          },
        ],
      },
    },


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
