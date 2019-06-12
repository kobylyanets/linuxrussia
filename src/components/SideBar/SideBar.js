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
import lampPostsConfig from './config/lamp.posts.config';
import openvpnPostsConfig from './config/openvpn.posts.config';
import LastComments from './LastComments';
import AttentionBetaBlock from './AttentionBetaBlock';
import LastNoticesBlock from './LastNoticesBlock';
import GoogleAd from '../advertising/Adsense';

const SideBar = () => {
  return (
    <div className="column is-4">
      <SearchBar />
      <GoogleAd />
      <AttentionBetaBlock />
      <StatisticBlock />
      <SubscribeBlock />
      <LastNoticesBlock />
      <LastComments />
      <PostsBlock config={terminalPostsConfig} />
      <PostsBlock config={systemdPostsConfig} />
      <PostsBlock config={sambaPostsConfig} />
      <PostsBlock config={openvpnPostsConfig} />
      <PostsBlock config={dataRecoveryPostsConfig} />
      <PostsBlock config={kdePostsConfig} />
      <PostsBlock config={systemFilesPostsConfig} />
      <PostsBlock config={lampPostsConfig} />
    </div>
  );
};

export default SideBar;
