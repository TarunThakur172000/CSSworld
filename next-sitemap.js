module.exports = {
    siteUrl: 'https://css-world.netlify.app/',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    exclude: ['/admin', '/private'],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin', '/private'],
        },
      ],
    },
  };