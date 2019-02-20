const { SITE_URL } = require('../configs/site.config');

const removeTrailingSlash = path => {
  return path === '/' ? path : path.replace(/\/$/, '');
};

const postfix = {
  HTML: '.html',
};

const getPostUrl = url => {
  return `${url}${postfix.HTML}`;
};

const getAbsolutePostUrl = url => {
  return `${SITE_URL}${url}${postfix.HTML}`;
};

module.exports = {
  getAbsolutePostUrl,
  getPostUrl,
  removeTrailingSlash,
};
