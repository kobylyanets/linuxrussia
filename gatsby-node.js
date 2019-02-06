/**
 * Implement Gatsby's Node APIs in this file.
 *
 * @see: https://www.gatsbyjs.org/docs/node-apis/
 */
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
          date(formatString: "DD MMMM YYYY", locale: "RU")
          url
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
                  path: `${node.frontmatter.url}.html`,
                  component: blogPostTemplate,
                  context: {
                    id: node.id,
                  },
                });
              });

            })
      );
    }
  );
};
