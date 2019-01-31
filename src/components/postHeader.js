import React from 'react';
import { Link } from 'gatsby';

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
}) => {
  const TitleWrap = url ? Link : React.Fragment;
  const titleWrapProps = url ? { to: `${url}.html` } : {};
  return (
    <>
      <div className="title is-size-3">
        <TitleWrap {...titleWrapProps}>{title}</TitleWrap>
      </div>

      <div className="block has-text-grey post-info has-text-weight-semibold">
        {author && <PostHeaderItem iconClasses={'fas fa-user'} text={author} />}

        {date && (
          <PostHeaderItem iconClasses={'fas fa-calendar-alt'} text={date} />
        )}

        {category && (
          <PostHeaderItem iconClasses={'fas fa-hashtag'} text={category} />
        )}

        {comments && (
          <PostHeaderItem iconClasses={'far fa-comments'} text={comments} />
        )}

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
