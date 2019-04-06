import React from 'react';
import { Link } from 'gatsby';
import { getNoticeUrl } from '../../utils/urlUtils';

const NoticeCard = ({
  excerpt = '',
  frontmatter: { title, url, author, date } = {},
}) => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title is-4">
          <Link to={getNoticeUrl(url)}>{title}</Link>
        </p>
        <p className="subtitle is-6">
          <span className="icon is-small">
            <i className="fas fa-at" />
          </span>
          <span className="is-ml-1">{author}</span>
        </p>
        <div className="content">
          <small>
            <p>{excerpt}</p>
            <p className="has-text-grey">
              <span className="icon is-small">
                <i className="fas fa-calendar-alt" />
              </span>
              <span className="is-ml-1">{date}</span>
            </p>
          </small>
        </div>
      </div>

      <footer className="card-footer">
        <Link to={getNoticeUrl(url)} className="card-footer-item">
          Читать далее <i className="fas fa-arrow-right icon" />
        </Link>
      </footer>
    </div>
  );
};

export default NoticeCard;
