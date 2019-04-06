const { SITE_URL, NOTICE_PREFIX } = require('../configs/site.config');

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
  return `${SITE_URL}${getPostUrl(url)}`;
};

const getNoticeUrl = url => {
  return `${NOTICE_PREFIX}${getPostUrl(url)}`;
};

const getAbsoluteNoticeUrl = url => {
  return `${SITE_URL}${getNoticeUrl(url)}`;
};

module.exports = {
  getAbsolutePostUrl,
  getPostUrl,
  getNoticeUrl,
  getAbsoluteNoticeUrl,
  removeTrailingSlash,
};
