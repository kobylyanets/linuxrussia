/**
 * Implement Gatsby's Node APIs in this file.
 *
 * @see: https://www.gatsbyjs.org/docs/node-apis/
 */
const { getPostUrl } =  require('./src/utils/urlUtils');
const { CategoriesInfo } = require('./src/configs/categoriesConfig');
const path = require(`path`);
// const { createFilePath } = require(`gatsby-source-filesystem`);
const util = require('util');

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
}
`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPageTemplate = path.resolve('src/templates/blogPage.js');
  const blogPostTemplate = path.resolve('src/templates/blogPost.js');
  const categoryPageTemplate = path.resolve('src/templates/CategoryPage/CategoryPage.js');

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
              const postsPerPage = 6;
              const totalPages = Math.ceil(allPosts.length / postsPerPage);
              Array.from({ length: totalPages }).forEach((_, index) => {
                createPage({
                  path: index === 0 ? '/' : `/page-${index + 1}`,
                  component: blogPageTemplate,
                  context: {
                    allPostsLength: allPosts.length,
                    totalPages,
                    index,
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
                  const totalPages = Math.ceil(postsByCategory.length / postsPerPage);
                  Array.from({ length: totalPages }).forEach((_, index) => {
                    createPage({
                      path: index === 0 ? `${categoryInfo.url}` : `${categoryInfo.url}/page-${index + 1}`,
                      component: categoryPageTemplate,
                      context: {
                        allPostsLength: postsByCategory.length,
                        totalPages,
                        index,
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

            })
      );
    }
  );
};
