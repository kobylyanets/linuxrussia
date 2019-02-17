module.exports = {
  host: 'https://linuxrussia.com',
  sitemap: 'https://linuxrussia.com/sitemap.xml',
  policy: [
    {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/page*',
        '/programs',
        '/programs/page*',
        '/guides',
        '/guides/page*',
        '/games',
        '/games/page*',
        '/themes',
        '/themes/page*',
        '/articles',
        '/articles/page*',
        '/news',
        '/news/page*',
      ],
    },
  ],
};
