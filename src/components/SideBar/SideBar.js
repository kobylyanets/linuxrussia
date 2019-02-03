import React from 'react';
import SearchBar from './SearchBar';
import SubscribeBlock from '../SubscribeBlock/SubscribeBlock';

const SideBar = () => {
  return (
    <div className="column">
      <SearchBar />
      <SubscribeBlock />
    </div>
  );
};

export default SideBar;
