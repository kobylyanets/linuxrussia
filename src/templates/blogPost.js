import React from 'react';
import Layout from '../layouts/layout';
import { graphql } from 'gatsby';
import PostHeader from '../components/postHeader';
import Img from 'gatsby-image';
import SEO from '../components/seo';

function BlogPost(props) {
  const post = props.data.post;
  const { title, date, author, category, featuredImage } = post.frontmatter;

  return (
    <Layout>
      <SEO title={title}/>
      <article>
        {featuredImage && <Img fluid={featuredImage.childImageSharp.fluid} />}
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
      html
      timeToRead
    }
  }
`;
