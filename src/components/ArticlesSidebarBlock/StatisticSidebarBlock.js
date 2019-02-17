import React from 'react';
import SideBarBlock from '../SideBar/SideBarBlock';
import ArticlesCount from '../ArticlesCount';
import { Link } from 'gatsby';

const StatisticSidebarBlock = () => {
  return (
    <SideBarBlock title="Внимание!">
      <div className="block has-text-justified">
        <p className="has-text-black has-text-weight-bold is-mb-2">
          Сайт находится на этапе восстановления.
        </p>
        <p className="is-mb-2">
          Именно поэтому рядом с заголовком сайта расположен ярлык{' '}
          <span className="tag is-danger">Beta</span>.
        </p>
        <p className="is-mb-2">
          В данный момент пропал почти весь контент на сайте и некоторый
          функционал (поиск, последние комментарии и тд.) не работает.
        </p>
        <p className="is-mb-2">
          Более подробно по данной ситуации расписано в статье:{' '}
          <Link to="/site-linuxrussia-return.html">
            Возвращение сайта LinuxRussia.com
          </Link>
          .
        </p>
        <p className="is-mb-2">
          Сейчас идёт активная фаза восстановления старых статей данного сайта.
          Поэтому решил разместить счётчик опубликованных статей, чтобы более
          наглядно была видна работа по восстановлению.
        </p>
        <p className="is-size-5">Количество опубликованных статей:</p>
        <ArticlesCount />
      </div>
    </SideBarBlock>
  );
};

export default StatisticSidebarBlock;
