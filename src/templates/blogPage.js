import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import PostHeader from '../components/postHeader';
import Pagination from '../components/Pationation/Pagination';

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
      <div className="content">
        {posts.map(post => (
          <ExcerptPostItem post={post} />
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
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            url
            author
            category
            featuredImage {
              id
              childImageSharp {
                fluid {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
          timeToRead
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;
