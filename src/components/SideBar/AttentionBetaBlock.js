import React from 'react';
import SideBarBlock from './SideBarBlock';
import ArticlesCount from '../ArticlesCount';
import { Link } from 'gatsby';

const AttentionBetaBlock = () => {
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
          В данный момент не работает некоторый функционал (поиск, rss).
        </p>
        <p className="is-mb-2">
          Более подробно по данной ситуации расписано в статье (
          <i>
            в комментариях к этой статье можно задавать вопросы по работе сайта
          </i>
          ):{' '}
          <Link to="/site-linuxrussia-return.html">
            Возвращение сайта LinuxRussia.com
          </Link>
          .
        </p>
      </div>
    </SideBarBlock>
  );
};

export default AttentionBetaBlock;
