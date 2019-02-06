/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// import '@fortawesome/fontawesome-free/scss/fontawesome.scss'

const injectCackleCommentsScript = () => {
    const mc = document.createElement('script');
    mc.type = 'text/javascript';
    mc.async = true;
    mc.src = ('https:' === document.location.protocol ? 'https' : 'http') + '://cackle.me/widget.js';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(mc, s.nextSibling);
};

let injectedCackleCommentsScript = false;
exports.onRouteUpdate = function({ location }) {
  if (document.querySelector(`#mc-container`) !== null) {
    if (!injectCackleCommentsScript()) {
      window.cackle_widget = window.cackle_widget || [];
      window.cackle_widget.push({widget: 'Comment', id: 49478});
      injectCackleCommentsScript();
      injectedCackleCommentsScript = true;
    }
  }
};
