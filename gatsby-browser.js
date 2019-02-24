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
  // Инициализация компонента комментариев нужно делать отдельно, иначе приложение упадет.
  window.cackle_widget = [];
  if (document.querySelector(`#mc-container`) !== null) {
    window.cackle_widget.push({
      widget: 'Comment',
      id: 49478,
      url: location.pathname,
      chanWithoutParams: true
    });
    initWidget();
  }

  if (!injectedCackleCommentsScript) {
    injectCackleCommentsScript();
    injectedCackleCommentsScript = true;
  } else {
    // При первой инициализации скрипта комментариев, никакого бутстрап нет,
    // следовательно сам скрипт инициализирует комментарии, ничего не падает.
    // Если очистить первый раз этот массив, то комментариев не будет на странице.
    window.cackle_widget = [];
  }

  // Инициализация дополнительных виджетов.

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
