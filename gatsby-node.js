/**
 * Implement Gatsby's Node APIs in this file.
 *
 * @see: https://www.gatsbyjs.org/docs/node-apis/
 */
const { getPostUrl, getNoticeUrl } =  require('./src/utils/urlUtils');
const { CategoriesInfo } = require('./src/configs/categoriesConfig');
const fs = require('fs-extra');
const path = require(`path`);
// const { createFilePath } = require(`gatsby-source-filesystem`);
const util = require('util');
const { HOME_PATH, PAGE_PREFIX, NOTICES_PREFIX } = require('./src/configs/site.config');

const queryAllPosts = (graphql) => graphql(`
{
  posts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { status: { ne: "template" } }
      }
      sort: {order: DESC, fields: [frontmatter___date]} 
      limit: 1000
  ) {
    edges {
      node {
        id
        excerpt
        frontmatter {
          title
          date
          url
          category
        }
      }
    }
  }
  
  notices: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/notices/" }
        frontmatter: { status: { ne: "template" } }
      }
      sort: {order: DESC, fields: [frontmatter___date]} 
      limit: 1000
  ) {
    edges {
      node {
        id
        excerpt
        frontmatter {
          title
          date
          url
          category
        }
      }
    }
  }
  
}
`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPageTemplate = path.resolve('src/templates/blogPage.js');
  const blogPostTemplate = path.resolve('src/templates/blogPost.js');
  const categoryPageTemplate = path.resolve('src/templates/CategoryPage/CategoryPage.js');

  const noticesPageTemplate = path.resolve('src/templates/NoticesPage.js');
  const noticeTemplate = path.resolve('src/templates/Notice.js');

  return new Promise((resolve, reject) => {
      resolve(
        queryAllPosts(graphql)
          .then(
            result => {
              if (result.errors) {
                console.log(result.errors);
                reject(result.errors);
              }
              const allPosts = result.data.posts.edges;

              // Create paginated blog pages
              // TODO: Вынести в конфиг
              const postsPerPage = 8;
              const pages = Math.ceil(allPosts.length / postsPerPage);
              Array.from({ length: pages }).forEach((_, index) => {
                const page = index + 1;
                createPage({
                  path: index === 0 ? HOME_PATH : `${PAGE_PREFIX}${page}`,
                  component: blogPageTemplate,
                  context: {
                    allPostsLength: allPosts.length,
                    pages,
                    page,
                    limit: postsPerPage,
                    skip: index * postsPerPage
                  }
                });
              });

              // Create Pages for all posts
              allPosts.forEach(({ node }) => {
                createPage({
                  path: getPostUrl(node.frontmatter.url),
                  component: blogPostTemplate,
                  context: {
                    id: node.id,
                    lastmod: node.frontmatter.date
                  },
                });
              });

              // Create Category pages
              // const categories = Array.from(Categories).forEach(category => {
              //   console.log(category);
              //
              // });

              for (const [category, categoryInfo] of Object.entries(CategoriesInfo)) {
                // console.log(`${category} + ${categoryInfo}`);

                const postsByCategory = allPosts.reduce(
                  (acc, post) => {
                    const { frontmatter } = post.node;
                    if (!frontmatter.category) {
                      return acc;
                    }
                    if (frontmatter.category && frontmatter.category.trim() === category.trim()) {
                      return [...acc, post];
                    }
                    return acc;
                  },
                  []
                );

                // Create category pages

                if (postsByCategory.length > 0) {
                  const pages = Math.ceil(postsByCategory.length / postsPerPage);
                  Array.from({ length: pages }).forEach((_, index) => {
                    const page = index + 1;
                    const pathPrefix = categoryInfo.url;
                    createPage({
                      path: index === 0 ? `${pathPrefix}` : `${pathPrefix}${PAGE_PREFIX}${page}`,
                      component: categoryPageTemplate,
                      context: {
                        allPostsLength: postsByCategory.length,
                        pages,
                        page,
                        limit: postsPerPage,
                        skip: index * postsPerPage,
                        category,
                      }
                    });
                  });
                } else {
                  createPage({
                    path: `${categoryInfo.url}`,
                    component: categoryPageTemplate,
                    context: {
                      allPostsLength: 0,
                      totalPages: 0,
                      index: 0,
                      limit: 0,
                      skip: 0,
                      category,
                    }
                  });
                }



                // postsByCategory.forEach(post => {
                //   console.log(util.inspect(post, false, null, true /* enable colors */));
                // });
              }

              const allNotices = result.data.notices.edges;
              const noticesForPage = 10;

              if (allNotices.length > 0) {
                const pages = Math.ceil(allNotices.length / noticesForPage);
                Array.from({ length: pages }).forEach((_, index) => {
                  const page = index + 1;
                  createPage({
                    path: index === 0 ? `${NOTICES_PREFIX}` : `${NOTICES_PREFIX}${PAGE_PREFIX}${page}`,
                    component: noticesPageTemplate,
                    context: {
                      allPostsLength: allNotices.length,
                      pages,
                      page,
                      limit: noticesForPage,
                      skip: index * noticesForPage
                    }
                  });
                });
              }

              // Create Pages for all notices
              allNotices.forEach(({ node }) => {
                createPage({
                  path: getNoticeUrl(node.frontmatter.url),
                  component: noticeTemplate,
                  context: {
                    id: node.id,
                    lastmod: node.frontmatter.date
                  },
                });
              });


            })
      );
    }
  );
};

exports.onPostBuild = () => {
  // copy Authorized Digital Sellers file to root of site
  fs.copySync(path.join(__dirname, '/src/ads.txt'), path.join(__dirname, '/public/ads.txt'));
};