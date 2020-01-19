import React, { useState } from 'react';
import { Link } from 'gatsby';
import { getNoticeUrl, getPostUrl } from '../../utils/urlUtils';

const search = query => {
  const { index, store } = window.__LUNR__ && window.__LUNR__.en;
  return query ? index.search(query).map(({ ref }) => store[ref]) : [];
};

const isLast = (index, results, limit) => {
  const last = results.length < limit ? results.length : limit;
  return (index + 1) === last;
};

const SearchBar = ({ limit = 10 }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isActive, setActive] = useState(false);

  return (
    <div className={`block navbar-item ${isActive ? 'is-active' : ''}`}>
      <div className="control has-icons-right" style={{ width: '100%' }}>
        <input
          className="input is-info"
          type="text"
          placeholder="Поиск по сайту..."
          onChange={event => {
            setQuery(event.target.value);
            setResults(search(event.target.value));
            setActive(true);
          }}
        />
        <span className="icon is-small is-right">
          <i className="fas fa-search" />
        </span>
      </div>
      {/*{isActive ? (*/}
      {/*  <ul >*/}
      {/*    {results.slice(0, limit).map((result, index) => (*/}
      {/*      <li key={index}>*/}
      {/*        <Link to={result.isNotice ? getNoticeUrl(result.url) : getPostUrl(result.url)}>*/}
      {/*          {result.title}*/}
      {/*        </Link>*/}
      {/*      </li>*/}
      {/*    ))}*/}
      {/*    <li>*/}
      {/*      Showing {limit ? `${Math.min(limit, results.length)} of` : null} {results.length}{' '}*/}
      {/*      {results.length === 1 ? 'result' : 'results'}.*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*) : null}*/}
      <div className="navbar-dropdown" style={{maxWidth: '330px'}}>
        {results.slice(0, limit).map((result, index) => (
          <>
          <Link
            key={index}
            className="navbar-item"
            to={
              result.isNotice
                ? getNoticeUrl(result.url)
                : getPostUrl(result.url)
            }
          >
            <span style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
              {result.title}
            </span>
          </Link>
            {!isLast(index, results, limit) && (
              <hr className="navbar-divider" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
