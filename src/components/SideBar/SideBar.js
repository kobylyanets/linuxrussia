import React from 'react';
import SearchBar from './SearchBar';
import SubscribeBlock from '../SubscribeBlock/SubscribeBlock';
import StatisticSidebarBlock from '../ArticlesSidebarBlock/StatisticSidebarBlock';
import PostsBlock from './PostsBlock';

import kdePostsConfig from './config/kde.posts.config';
import terminalPostsConfig from './config/terminal.posts.config';

const SideBar = () => {
  return (
    <div className="column">
      <SearchBar />
      <StatisticSidebarBlock />
      <SubscribeBlock />
      <PostsBlock config={terminalPostsConfig} />
      <PostsBlock config={kdePostsConfig} />
    </div>
  );
};

export default SideBar;
