import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { getCategoryLabel } from '../utils/categoryUtils';

const PostHeaderItem = ({ iconClasses, text }) => {
  return (
    <span className="inline">
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
}) => {
  const TitleWrap = url ? Link : React.Fragment;
  const titleWrapProps = url ? { to: `${url}.html` } : {};
  return (
    <>
      {featuredImage && <Img fluid={featuredImage.childImageSharp.fluid} />}

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
            text={getCategoryLabel(category)}
          />
        )}

        {comments && (
          <PostHeaderItem iconClasses={'far fa-comments'} text={comments} />
        )}

        <span className="inline">
          <Link className="has-text-grey" to={`${url}.html#mc-container`}>
            <i className={`far fa-comments icon`} />
            <span
              className="cackle-comment-count"
              data-cackle-url={`${url}.html`}
            />
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

export default PostHeader;
