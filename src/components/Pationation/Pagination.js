import React from 'react';
import { Link } from 'gatsby';

const Pagination = ({ index: currentPageIndex, totalPages }) => {
  const currentPageNumber = currentPageIndex + 1;
  const prevPageNumber = currentPageNumber - 1;
  const nextPageNumber = currentPageNumber + 1;

  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      {currentPageIndex !== 0 ? (
        <Link
          className="pagination-previous"
          to={prevPageNumber === 0 ? '/' : `/page-${prevPageNumber}`}
        >
          Пред.
        </Link>
      ) : null}

      <ul className="pagination-list">
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;

          return index === currentPageIndex ? (
            <li key={index}>
              <a
                className="pagination-link is-current"
                aria-label="Page 46"
                aria-current="page"
              >
                {pageNumber}
              </a>
            </li>
          ) : (
            <li>
              <Link
                className="pagination-link"
                aria-label="Goto page 1"
                to={index === 0 ? '/' : `/page-${pageNumber}`}
              >
                {pageNumber}
              </Link>
            </li>
          );
        })}
      </ul>

      {currentPageIndex !== totalPages - 1 ? (
        <Link className="pagination-next" to={`/page-${nextPageNumber}`}>
          След.
        </Link>
      ) : null}

    </nav>
  );
};

export default Pagination;
