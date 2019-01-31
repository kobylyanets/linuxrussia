import React from 'react';

const SideBar = () => {
  return (
    <div className="column">
      <div className="block">
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Поиск по сайту..."
            />
          </div>
          <div className="control">
            <a className="button is-info">
              <span className="icon">
                <i className="fas fa-search" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="block">
        <div className="is-size-5 is-uppercase has-text-weight-semibold side-title">
          Нравится Сайт? Подпишись!
        </div>
        <small>
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
                <a
                  className="has-text-weight-bold"
                  href="tg://resolve?domain=linuxrussia"
                >
                  @linuxrussia
                </a>
              </p>
            </div>

            <p>
              Для этого достаточно иметь Telegram на любом устройстве и пройти
              по ссылке:{' '}
              <a
                className="has-text-weight-bold"
                target="_blank"
                rel="nofollow"
                href="https://telegram.me/linuxrussia"
              >
                https://telegram.me/linuxrussia
              </a>
              .
            </p>
          </div>

          <div className="block">
            <p className="is-mb-2 has-text-weight-semibold">
              Следить за новостями сайта в Twitter:
            </p>
            <a
              className="button is-info"
              rel="nofollow"
              target="_blank"
              href="https://twitter.com/LinuxRussia"
            >
              <span className="icon">
                <i className="fab fa-twitter" />
              </span>
              <span>Читать @LinuxRussia</span>
            </a>
          </div>

          <div className="block">
            <p className="is-mb-2 has-text-weight-semibold">
              Подписывайтесь на нашу группу ВКонтакте:
            </p>
            <a
              className="button is-link"
              rel="nofollow"
              target="_blank"
              href="https://vk.com/linuxrussiacom"
            >
              <span className="icon">
                <i className="fab fa-vk" />
              </span>
              <span>Подписаться на новости</span>
            </a>
          </div>
        </small>
      </div>
    </div>
  );
};

export default SideBar;
