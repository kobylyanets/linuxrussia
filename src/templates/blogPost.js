import React from 'react';

import Layout from '../layouts/layout';
import { graphql } from 'gatsby';
import PostHeader from '../components/postHeader';
import Img from 'gatsby-image';
import SEO from '../components/SEO/SEO';
import ShareBlock from '../components/ShareBlock/ShareBlock';

function BlogPost(props) {
  const post = props.data.post;
  const {
    title,
    date,
    author,
    category,
    featuredImage,
    excerpt,
    url,
  } = post.frontmatter;

  return (
    <Layout>
      <SEO
        title={title}
        imageURL={featuredImage.publicURL}
        description={post.excerpt}
        url={url}
        isBlogPost
      />
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

        <hr style={{ height: '2px' }} />

        <ShareBlock />

        <hr style={{ height: '4px' }} />

        <div id="mc-container" />
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
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
      excerpt
      timeToRead
    }
  }
`;
