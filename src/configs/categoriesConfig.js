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
    icon: 'fas fa-code',
    description: 'Обзоры, настройка и установка программ для Ubuntu / Linux.',
  },
  [Categories.GUIDES]: {
    label: 'Руководства',
    url: '/guides',
    icon: 'fas fa-book',
    description: 'Руководства, полезные статьи по Ubuntu / Linux.',
  },
  [Categories.GAMES]: {
    label: 'Игры',
    url: '/games',
    icon: 'fas fa-gamepad',
    description: 'Игры для Linux / Ubuntu.'
  },
  [Categories.THEMES]: {
    label: 'Темы',
    url: '/themes',
    icon: 'fas fa-paint-roller',
    description: 'Темы и оформление для Ubuntu / Linux.',
  },
  [Categories.NEWS]: {
    label: 'Новости',
    url: '/news',
    icon: 'far fa-newspaper',
    description: 'Новости Ubuntu / Linux. Новости сайта.',
  },
  [Categories.ARTICLES]: {
    label: 'Статьи',
    url: '/articles',
    icon: 'fas fa-paperclip',
    description: 'Не руководства, но тоже интересный материал на тему Ubuntu / Linux.',
  },
};

// CommonJS export for use in gatsby-node.js
module.exports = {
  Categories,
  CategoriesInfo,
};
