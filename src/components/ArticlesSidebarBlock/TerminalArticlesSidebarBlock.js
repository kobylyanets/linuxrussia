import React from 'react';
import { Link } from 'gatsby';

import SideBarBlock from '../SideBar/SideBarBlock';

const TerminalArticlesSidebarBlock = () => {
  return (
    <SideBarBlock title="ЦИКЛ СТАТЕЙ О ТЕРМИНАЛЕ LINUX">
      <div className="list">
        <Link className="list-item" to="/terminal-navigation.html">
          1. Терминал Linux. Команды навигации в терминале.
        </Link>

        <Link className="list-item" to="/terminal-create-delete-move-copy.html">
          2. Терминал Linux. Создание, удаление, копирование, перемещение,
          переименование файлов и директорий.
        </Link>

        <Link className="list-item" to="/save-terminal-output-to-file.html">
          3. Терминал Linux. Как сохранить в файл вывод терминала.
        </Link>

        <Link className="list-item" to="/terminal-search-files.html">
          4. Терминал Linux. Команды поиска файлов и директорий.
        </Link>

        <Link className="list-item" to="/terminal-view-text-files.html">
          5. Терминал Linux. Команды просмотра текстовых файлов.
        </Link>

        <Link className="list-item" to="/terminal-chmod-chown.html">
          6. Терминал Linux. Права доступа к каталогам и файлам в Linux, команды
          chmod и chown.
        </Link>

        <Link className="list-item" to="/terminal-alias.html">
          7. Терминал Linux. Создание alias (псевдонима) в Ubuntu.
        </Link>
      </div>
    </SideBarBlock>
  );
};

export default TerminalArticlesSidebarBlock;
