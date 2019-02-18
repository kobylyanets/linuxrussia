import React from 'react';
import SearchBar from './SearchBar';
import SubscribeBlock from '../SubscribeBlock/SubscribeBlock';
import StatisticBlock from './StatisticBlock';
import PostsBlock from './PostsBlock';

import kdePostsConfig from './config/kde.posts.config';
import terminalPostsConfig from './config/terminal.posts.config';
import dataRecoveryPostsConfig from './config/data_recovery.posts.config';
import systemFilesPostsConfig from './config/file_system.posts.config';

const SideBar = () => {
  return (
    <div className="column">
      <SearchBar />
      <StatisticBlock />
      <SubscribeBlock />
      <PostsBlock config={terminalPostsConfig} />
      <PostsBlock config={dataRecoveryPostsConfig} />
      <PostsBlock config={kdePostsConfig} />
      <PostsBlock config={systemFilesPostsConfig} />
    </div>
  );
};

export default SideBar;
