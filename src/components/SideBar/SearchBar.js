import React from 'react';

const SearchBar = () => {
  return (
    <div className="block">
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="Поиск по сайту..."
          />
        </div>
        <div className="control">
          <a className="button is-info">
            <span className="icon">
              <i className="fas fa-search" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
