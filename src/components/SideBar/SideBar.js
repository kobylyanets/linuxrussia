import React from 'react';
import SearchBar from './SearchBar';
import SubscribeBlock from '../SubscribeBlock/SubscribeBlock';
import StatisticBlock from './StatisticBlock';
import PostsBlock from './PostsBlock';

import kdePostsConfig from './config/kde.posts.config';
import terminalPostsConfig from './config/terminal.posts.config';
import dataRecoveryPostsConfig from './config/data_recovery.posts.config';
import systemFilesPostsConfig from './config/file_system.posts.config';
import systemdPostsConfig from './config/systemd.posts.config';
import sambaPostsConfig from './config/samba.posts.config';
import LastComments from './LastComments';
import AttentionBetaBlock from './AttentionBetaBlock';

const SideBar = () => {
  return (
    <div className="column is-4">
      <SearchBar />
      <AttentionBetaBlock />
      <StatisticBlock />
      <SubscribeBlock />
      <LastComments />
      <PostsBlock config={terminalPostsConfig} />
      <PostsBlock config={systemdPostsConfig} />
      <PostsBlock config={sambaPostsConfig} />
      <PostsBlock config={dataRecoveryPostsConfig} />
      <PostsBlock config={kdePostsConfig} />
      <PostsBlock config={systemFilesPostsConfig} />
    </div>
  );
};

export default SideBar;
