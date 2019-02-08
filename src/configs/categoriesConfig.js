const Categories = {
  PROGRAMS: 'programs',
  GUIDES: 'guides',
  GAMES: 'games',
  THEMES: 'themes',
  NEWS: 'news',
  ARTICLES: 'articles',
};

const CategoriesInfo = {
  [Categories.PROGRAMS]: {
    label: 'Программы',
    url: '/programs',
  },
  [Categories.GUIDES]: {
    label: 'Руководства',
    url: '/guides',
  },
  [Categories.GAMES]: {
    label: 'Игры',
    url: '/games',
  },
  [Categories.THEMES]: {
    label: 'Темы',
    url: '/themes',
  },
  [Categories.NEWS]: {
    label: 'Новости',
    url: '/news',
  },
  [Categories.ARTICLES]: {
    label: 'Статьи',
    url: '/articles',
  }
};

export {
  Categories,
  CategoriesInfo,
}
