const Sitemap = require('sitemap');
const fs = require('fs');

const baseUrls = ['https://successteps.in', 'https://www.successteps.in'];

const routes1 = [
    '/register',
  '/login',
  '/',
]
const routes2 = [
  '/training',
  '/training/corporateleadership',
  '/training/businesscoaching',
  '/training/students',
  '/training/teachers',
  '/training/parents',
  '/mindwellness',
  '/facilitative',
  '/termsandconditions',
  '/certificate',
  '/certificate/:id',
  '/about',
  '/ContactUs',
  '/psychometrictest',
];

const sitemapUrls = [];

baseUrls.forEach((baseUrl) => {
  routes1.forEach((route) => {
    const url = `${baseUrl}${route}`;
    sitemapUrls.push({ url, lastmod: '2023-11-11', changefreq: 'weekly', priority: 0.8 });
  });
  routes2.forEach((route) => {
    const url = `${baseUrl}${route}`;
    sitemapUrls.push({ url, lastmod: '2023-11-11', changefreq: 'weekly', priority: 0.6 });
  });
});

const sitemap = Sitemap.createSitemap({
  urls: sitemapUrls,
});

fs.writeFileSync('./public/sitemap.xml', sitemap.toString());