/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require(`react`);

// You can delete this file if you're not using it

export const onRenderBody = ({ setPostBodyComponents }) => {
  return setPostBodyComponents([
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    />,
  ]);
};

export { wrapRootElement } from './gatsby-browser';
