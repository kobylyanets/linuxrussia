import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getCategoryLabel } from '../utils/categoryUtils';
import PropTypes from 'prop-types';
import { getNoticeUrl, getPostUrl } from '../utils/urlUtils';

const PostHeaderItem = ({ iconClasses, text }) => {
  return (
    <span className="is-inline-block">
      <i className={`${iconClasses} icon`} />
      <span>{text}</span>
    </span>
  );
};

const PostHeader = ({
  url,
  title,
  author,
  date,
  category,
  comments,
  readTime,
  featuredImage,
  type,
}) => {
  const postUrl = type === 'Notice' ? getNoticeUrl(url) : getPostUrl(url);

  const TitleWrap = url ? Link : React.Fragment;
  const titleWrapProps = url ? { to: postUrl } : {};
  return (
    <>
      {featuredImage && (
        <GatsbyImage
          image={featuredImage.childImageSharp.gatsbyImageData}
          alt=""
        />
      )}

      <div className="title is-size-3">
        <TitleWrap {...titleWrapProps}>{title}</TitleWrap>
      </div>

      <div className="block has-text-grey post-info has-text-weight-semibold">
        {author && <PostHeaderItem iconClasses={'fas fa-user'} text={author} />}

        {date && (
          <PostHeaderItem iconClasses={'fas fa-calendar-alt'} text={date} />
        )}

        {category && (
          <PostHeaderItem
            iconClasses={'fas fa-hashtag'}
            text={getCategoryLabel(category) || category}
          />
        )}

        {comments && (
          <PostHeaderItem iconClasses={'far fa-comments'} text={comments} />
        )}

        <span className="is-inline-block">
          <Link className="has-text-grey" to={`${postUrl}#mc-container`}>
            <i className={`far fa-comments icon`} />
            <span className="cackle-comment-count" data-cackle-url={postUrl} />
          </Link>
        </span>

        {readTime && (
          <PostHeaderItem
            iconClasses={'far fa-clock'}
            text={`${readTime} мин.`}
          />
        )}
      </div>
    </>
  );
};

PostHeader.propTypes = {
  type: PropTypes.oneOf(['Article', 'Notice']),
};

PostHeader.defaultProps = {
  type: 'Article',
};

export default PostHeader;
