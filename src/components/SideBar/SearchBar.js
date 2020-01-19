import React, { useState } from 'react';
import { Link } from 'gatsby';
import isEmpty from 'lodash.isempty';

import { getNoticeUrl, getPostUrl } from '../../utils/urlUtils';
import { useOutside } from '@pacote/react-use-outside';

const findByLUNR = (query, lang) => {
  const { index, store } = (window.__LUNR__ && window.__LUNR__[lang]) || {};
  return query && !isEmpty(index) && !isEmpty(store) ? index.search(query).map(({ ref }) => store[ref]) : [];
};

const search = query => {
  return [...findByLUNR(query, 'ru'), ...findByLUNR(query, 'en')];
};

const isLast = (index, results, limit) => {
  const last = Math.min(limit, results.length);
  return index + 1 === last;
};

const SearchBar = ({ limit = 10 }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isActive, setActive] = useState(false);

  const ref = useOutside('click', () => {
    setActive(false)
  });

  return (
    <div ref={ref} className={`block navbar-item ${isActive ? 'is-active' : ''}`}>
      <div className="control has-icons-right" style={{ width: '100%' }}>
        <input
          className="input is-info"
          type="text"
          placeholder="Поиск по сайту..."
          onChange={event => {
            const value = event.target.value;
            setQuery(value);
            setResults(search(value));
            setActive(!!value);
          }}
          onFocus={() => {
            setActive(!!query)
          }}
        />
        <span className="icon is-small is-right">
          <i className="fas fa-search" />
        </span>
      </div>
      <div
        className="navbar-dropdown"
        style={{ maxWidth: '330px', paddingTop: '0', paddingBottom: '0' }}
      >
        {results.length > 0 ? (
          <>
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
                  <span
                    style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {result.title}
                  </span>
                </Link>
                <hr className="navbar-divider" style={{ margin: '0' }} />
              </>
            ))}
            <div className="navbar-item">
              <i>{`Показано ${Math.min(limit, results.length)} из ${
                results.length
              } найденных.`}</i>
            </div>
          </>
        ) : (
          <>
            {query && query.length > 5 ? (
              <div className="navbar-item">
                <i>{`Ничего не найдено...`}</i>
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
