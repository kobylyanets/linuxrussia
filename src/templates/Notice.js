import React from 'react';

import Layout from '../layouts/layout';
import { graphql } from 'gatsby';
import PostHeader from '../components/postHeader';
import Img from 'gatsby-image';
import SEO from '../components/SEO/SEO';
import ShareBlock from '../components/ShareBlock/ShareBlock';
import { getAbsoluteNoticeUrl } from '../utils/urlUtils';
import ExternalLink from '../components/core/ExternalLink';

function Notice(props) {
  const post = props.data.post;
  const {
    title,
    date,
    author,
    url,
  } = post.frontmatter;

  return (
    <Layout>
      <SEO
        title={title}
        description={post.excerpt}
        url={url}
        isBlogPost
      />
      <article>
        <PostHeader
          title={title}
          date={date}
          author={author}
          url={url}
          type='Notice'
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

        <ShareBlock sharedUrl={getAbsoluteNoticeUrl(url)} title={title} />

        <hr style={{ height: '4px' }} />

        <div id="mc-container" />

      </article>
    </Layout>
  );
}

export default Notice;

export const query = graphql`
  query getNoticeById($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD MMM YYYY", locale: "RU")
        url
        author
      }
      html
      excerpt
    }
  }
`;
