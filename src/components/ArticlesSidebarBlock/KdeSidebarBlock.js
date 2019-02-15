import React from 'react';
import { Link } from 'gatsby';

import SideBarBlock from '../SideBar/SideBarBlock';


const KdeArticlesSidebarBlock = () => {
  return (
    <SideBarBlock title="ЦИКЛ СТАТЕЙ О KDE.">
      <div className="list">
        <Link className="list-item" to="/kde-linux-announcement.html">
          0. Анонс цикла статей о KDE.
        </Link>

        <Link className="list-item" to="/kde-ways-to-launch-programs.html">
          1. Способы запуска программ и открытия окон.
        </Link>

        <Link className="list-item" to="/kde-what-to-expect.html">
          2. Чего ждать от этой рабочей среды?
        </Link>

        <Link className="list-item" to="/kde-video-settings.html">
          3. Настройка видео.
        </Link>

        <Link className="list-item" to="/kde-activities.html">
          4. Что такое Комнаты?
        </Link>

        <Link className="list-item" to="/kde-great-plasma-widgets.html">
          5. Обзор интересных виджетов Plasma.
        </Link>

        <Link className="list-item" to="/kde-design-styles.html">
         6. Стили оформления.
        </Link>

      </div>
    </SideBarBlock>
  );
};

export default KdeArticlesSidebarBlock;
