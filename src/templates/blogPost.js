import React from 'react';
import Layout from '../layouts/layout';
import { graphql } from 'gatsby';
import PostHeader from '../components/postHeader';

function BlogPost(props) {
  const post = props.data.post;
  const { title, date, author, category } = post.frontmatter;

  return (
    <Layout>
      <article>
        <PostHeader
          title={title}
          date={date}
          readTime={post.timeToRead}
          author={author}
          category={category}
        />

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Layout>
  );
}

export default BlogPost;

export const query = graphql`
  query getPostById($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date
        url
        author
        category
      }
      html
      timeToRead
    }
  }
`;
