/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

/**
 * Флаг, который обозначает, что скрипт комментариев добавлен в HEAD.
 * @type {boolean}
 */
let injectedCackleCommentsScript = false;

const injectCackleCommentsScript = () => {
  const mc = document.createElement('script');
  mc.type = 'text/javascript';
  mc.async = true;
  mc.src = ('https:' === document.location.protocol ? 'https' : 'http') + '://cackle.me/widget.js';
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(mc, s.nextSibling);
};

exports.onRouteUpdate = function({ location }) {
  if (!injectedCackleCommentsScript) {
    injectCackleCommentsScript();
    injectedCackleCommentsScript = true;
  }

  // Инициализация компонента комментариев нужно делать отдельно, иначе приложение упадет.
  if (document.querySelector(`#mc-container`) !== null) {
    window.cackle_widget = [];
    window.cackle_widget.push({
      widget: 'Comment',
      id: 49478,
      url: location.pathname,
      chanWithoutParams: true
    });
    initWidget();
  }

  // Инициализация дополнительных виджетов.
  window.cackle_widget = [];
  window.cackle_widget.push({ widget: 'CommentCount', id: 49478 });
  if (document.querySelector(`#mc-last`) !== null) {
    window.cackle_widget.push({ widget: 'CommentRecent', id: 49478 });
  }
  initWidget(true);
};

const initWidget = (flag = false) => {
  window.Cackle &&
  window.Cackle.bootstrap &&
  typeof window.Cackle.bootstrap === 'function' &&
  window.Cackle.bootstrap(flag);
};
