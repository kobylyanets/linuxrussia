import React from 'react';
import SideBarBlock from './SideBarBlock';
import ArticlesCount from '../ArticlesCount';
import NoticesCount from '../NoticesCount';

const StatisticBlock = () => {
  return (
    <SideBarBlock title="Статистика">
      <div className="block has-text-left">
        <p className="is-size-6">Количество опубликованных статей:</p>
        <ArticlesCount />
        <p className="is-size-6">Количество опубликованных заметок:</p>
        <NoticesCount />
      </div>
    </SideBarBlock>
  );
};

export default StatisticBlock;
