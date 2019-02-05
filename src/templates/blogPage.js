import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import PostHeader from '../components/postHeader';
import Pagination from '../components/Pationation/Pagination';
import SEO from '../components/SEO/SEO';

const ExcerptPostItem = ({ post }) => {
  const {
    title,
    date,
    url,
    author,
    category,
    featuredImage,
  } = post.frontmatter;
  return (
    <div className="block">
      <PostHeader
        title={title}
        date={date}
        author={author}
        category={category}
        readTime={post.timeToRead}
        featuredImage={featuredImage}
        url={url}
      />
      <div className="content">{post.excerpt}</div>
      <hr style={{ height: '4px' }} />
    </div>
  );
};

const BlogPage = ({ data, ...props }) => {
  const { index, totalPages } = props.pageContext;
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node);

  return (
    <Layout>
      <SEO />
      <div className="content">
        {posts.map((post, index) => (
          <ExcerptPostItem key={index} post={post} />
        ))}
      </div>

      <Pagination {...{ index, totalPages }} />
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query ExcerptListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { status: { ne: "template" } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMM YYYY", locale: "RU")
            url
            author
            category
            featuredImage {
              id
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          timeToRead
          excerpt(pruneLength: 300, format: PLAIN)
        }
      }
    }
  }
`;
