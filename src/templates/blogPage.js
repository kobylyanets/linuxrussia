import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import PostHeader from '../components/postHeader';

const ExcerptPostItem = ({ post }) => {
  const { title, date, url, author, category } = post.frontmatter;
  return (
    <div className="block">
      <PostHeader
        title={title}
        date={date}
        author={author}
        category={category}
        readTime={post.timeToRead}
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
          }
          timeToRead
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;
