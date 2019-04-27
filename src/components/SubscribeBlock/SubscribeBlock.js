import React from 'react';
import SideBarBlock from '../SideBar/SideBarBlock';
import ExternalLink from '../core/ExternalLink';

const SubscribeBlock = () => {
  return (
    <SideBarBlock title="Нравится Сайт? Подпишись!">
      <p className="is-mb-3">И получай самые свежие новости с сайта!</p>

      <div className="block">
        <p className="is-mb-2 has-text-weight-semibold">
          Следить за новостями сайта в Telegram:
        </p>

        <div className="is-flex">
          <span className="icon is-large is-mr-2">
            <i className="fab fa-telegram fa-3x" />
          </span>
          <p>
            Подписывайтесь на наш канал в Telegram:{' '}
            <ExternalLink
              className="has-text-weight-bold"
              to="tg://resolve?domain=linuxrussia"
            >
              @linuxrussia
            </ExternalLink>
          </p>
        </div>

        <p>
          Для этого достаточно иметь Telegram на любом устройстве и пройти по
          ссылке:{' '}
          <ExternalLink
            className="has-text-weight-bold"
            to="https://telegram.me/linuxrussia"
          >
            https://telegram.me/linuxrussia
          </ExternalLink>
          .
        </p>
      </div>

      <div className="block">
        <p className="is-mb-2 has-text-weight-semibold">
          Следить за новостями сайта в Twitter:
        </p>
        <ExternalLink
          className="button is-info"
          to="https://twitter.com/LinuxRussia"
        >
          <span className="icon">
            <i className="fab fa-twitter" />
          </span>
          <span>Читать @LinuxRussia</span>
        </ExternalLink>
      </div>

      <div className="block">
        <p className="is-mb-2 has-text-weight-semibold">
          Подписывайтесь на нашу группу ВКонтакте:
        </p>
        <ExternalLink
          className="button is-link"
          to="https://vk.com/linuxrussiacom"
        >
          <span className="icon">
            <i className="fab fa-vk" />
          </span>
          <span>Подписаться на новости</span>
        </ExternalLink>
      </div>

      <div className="block">
        <p className="is-mb-2 has-text-weight-semibold">
          Подписывайтесь на основную RSS ленту:
        </p>

        <ExternalLink className="button is-rss" to="/rss.xml">
          <span className="icon">
            <i className="fa fa-rss" />
          </span>
          <span>Последние статьи</span>
        </ExternalLink>
      </div>

      <div className="block">
        <p className="is-mb-2 has-text-weight-semibold">
          Подписывайтесь на RSS ленту заметок:
        </p>

        <ExternalLink className="button is-rss" to="/notices-rss.xml">
          <span className="icon">
            <i className="fa fa-rss" />
          </span>
          <span>Последние заметки</span>
        </ExternalLink>
      </div>

    </SideBarBlock>
  );
};

export default SubscribeBlock;
