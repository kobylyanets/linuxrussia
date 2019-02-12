import React from 'react';
import SearchBar from './SearchBar';
import SubscribeBlock from '../SubscribeBlock/SubscribeBlock';
import TerminalArticlesSidebarBlock from '../ArticlesSidebarBlock/TerminalArticlesSidebarBlock';

const SideBar = () => {
  return (
    <div className="column">
      <SearchBar />
      <SubscribeBlock />
      <TerminalArticlesSidebarBlock />
    </div>
  );
};

export default SideBar;
