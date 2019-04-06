import React from 'react';
import { Link } from 'gatsby';

const NoticeCard = ({
  excerpt = '',
  frontmatter: { title, url, author, date } = {},
}) => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title is-4">
          <Link to={`/notice/${url}.html`}>{title}</Link>
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
              {date}
            </p>
          </small>
        </div>
      </div>

      <footer className="card-footer">
        <Link to={`/notice/${url}.html`} className="card-footer-item">
          Читать далее <i className="fas fa-arrow-right icon" />
        </Link>
      </footer>
    </div>
  );
};

export default NoticeCard;
