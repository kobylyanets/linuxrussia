import React from 'react';
import { Link } from 'gatsby';
import { getNavItems, getPrevPageUrl, getNextPageUrl } from './helpers';
import { HOME_PATH } from '../../configs/site.config';

const Pagination = ({ page, pages, pathPrefix = HOME_PATH }) => {
  const navItems = getNavItems(page, pages, pathPrefix);
  const prev = getPrevPageUrl(page, pathPrefix);
  const next = getNextPageUrl(page, pages, pathPrefix);
  return (
    <nav className="pagination is-centered">
      {prev && (
        <Link to={prev} className="pagination-previous">
          Пред.
        </Link>
      )}
      {next && (
        <Link to={next} className="pagination-next">
          След.
        </Link>
      )}
      <ul className="pagination-list">
        {navItems.map(item => (
          <li key={item.index}>
            {item.separator ? (
              <span className="pagination-ellipsis">&hellip;</span>
            ) : (
              <Link
                to={item.link}
                className={`pagination-link ${
                  item.current ? 'is-current' : ''
                }`}
                aria-label={`Перейти к странице ${item.index}`}
              >
                {item.index}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
