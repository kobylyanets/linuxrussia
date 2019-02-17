import React from 'react';
import SearchBar from './SearchBar';
import SubscribeBlock from '../SubscribeBlock/SubscribeBlock';
import TerminalArticlesSidebarBlock from '../ArticlesSidebarBlock/TerminalArticlesSidebarBlock';
import KdeArticlesSidebarBlock from '../ArticlesSidebarBlock/KdeSidebarBlock';
import StatisticSidebarBlock from '../ArticlesSidebarBlock/StatisticSidebarBlock';

const SideBar = () => {
  return (
    <div className="column">
      <SearchBar />
      <StatisticSidebarBlock />
      <SubscribeBlock />
      <TerminalArticlesSidebarBlock />
      <KdeArticlesSidebarBlock />
    </div>
  );
};

export default SideBar;
