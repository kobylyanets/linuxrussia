import React from 'react';

import Layout from '../layouts/layout';
import { graphql } from 'gatsby';
import PostHeader from '../components/postHeader';
import Img from 'gatsby-image';
import SEO from '../components/SEO/SEO';
import ShareBlock from '../components/ShareBlock/ShareBlock';
import { getAbsolutePostUrl } from '../utils/urlUtils';
import ExternalLink from '../components/core/ExternalLink';

function BlogPost(props) {
  const post = props.data.post;
  const {
    title,
    date,
    author,
    category,
    featuredImage,
    url,
  } = post.frontmatter;

  return (
    <Layout>
      <SEO
        title={title}
        imageURL={featuredImage && featuredImage.publicURL}
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
          url={url}
          category={category}
        />

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <hr style={{ height: '2px' }} />
        <h4 className="title is-size-5 is-mb-3 is-uppercase">
          Если у вас возникли вопросы.
        </h4>
        <div>
          Приглашаю задавать их на сервисе вопросов и ответов:{' '}
          <ExternalLink to="https://ask.linuxrussia.com/">
            Ask.LinuxRussia.com
          </ExternalLink>
          .
        </div>
        <div>
          Там ваши вопросы не потеряются и вы быстрее получите ответ, в отличие
          от комментариев.
        </div>

        <hr style={{ height: '2px' }} />

        <ShareBlock sharedUrl={getAbsolutePostUrl(url)} title={title} />

        <hr style={{ height: '4px' }} />

        <div id="mc-container" />
        <a id="mc-link" href="http://cackle.me">
          Комментарии для сайта <b style={{ color: '#4FA3DA' }}>Cackl</b>
          <b style={{ color: '#F65077' }}>e</b>
        </a>
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
