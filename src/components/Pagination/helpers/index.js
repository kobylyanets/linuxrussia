import { HOME_PATH, PAGE_PREFIX } from '../../../configs/site.config';

const createPaginationObjects = (length, page, pathPrefix, increment = 2) =>
  Array.from({ length }, (_, i) => ({
    link: getPageUrl(i + increment, pathPrefix),
    index: i + increment,
    current: page === i + increment,
  }));

const getPageUrl = (pageNum, pathPrefix) => {
  return `${pathPrefix === HOME_PATH ? '' : pathPrefix}${PAGE_PREFIX}${pageNum}`;
};

const getPrevPageUrl = (page, pathPrefix) => {
  const prevPage = page - 1;
  if (prevPage === 0) {
    return null;
  }
  if (prevPage === 1) {
    return pathPrefix;
  }
  return getPageUrl(prevPage, pathPrefix);
};

const getNextPageUrl = (page, pages, pathPrefix) => {
  const nextPage = page + 1;
  if (nextPage > pages) {
    return null;
  }
  return getPageUrl(nextPage, pathPrefix);
};

const getNavItems = (page, pages, pathPrefix) => {
  let navItems = [
    {
      link: pathPrefix,
      index: 1,
      current: page === 1,
    },
  ];
  if (pages <= 5) {
    navItems = [
      ...navItems,
      ...Array.from({ length: pages - 1 }, (_, i) => ({
        link: getPageUrl(i + 2, pathPrefix),
        index: i + 2,
        current: page === i + 2,
      })),
    ];
  } else {
    // We have a situation where we have to show the first
    // item, three items around the current one
    // and also the last item
    /* eslint-disable no-lonely-if */
    if (page <= 3) {
      // If the current one is closer to the start
      navItems = [
        ...navItems,
        ...createPaginationObjects(3, page, pathPrefix),
        {
          separator: true,
          index: 'starter-separator',
        },
        {
          link: getPageUrl(pages, pathPrefix),
          index: pages,
          current: false,
        },
      ];
    } else if (page > pages - 3) {
      // If the current one is closer to the last one
      navItems = [
        ...navItems,
        {
          separator: true,
          index: 'finisher-separator',
        },
        ...createPaginationObjects(4, page, pathPrefix, pages - 3),
      ];
    } else {
      navItems = [
        ...navItems,
        {
          separator: true,
          index: 'starter-separator',
        },
        ...createPaginationObjects(3, page, pathPrefix, page - 1),
        {
          separator: true,
          index: 'finisher-separator',
        },
        {
          link: getPageUrl(pages, pathPrefix),
          index: pages,
          current: false,
        },
      ];
    }
    /* eslint-enable */
  }
  return navItems;
};

export {
  getNavItems,
  getPrevPageUrl,
  getNextPageUrl,
}

