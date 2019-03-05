import React from 'react';
import SideBarBlock from './SideBarBlock';
import ArticlesCount from '../ArticlesCount';

const StatisticBlock = () => {
  return (
    <SideBarBlock title="Статистика">
      <div className="block has-text-left">
        <p className="is-size-6">Количество опубликованных статей:</p>
        <ArticlesCount />
      </div>
    </SideBarBlock>
  );
};

export default StatisticBlock;
