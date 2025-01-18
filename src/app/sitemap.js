// pages/api/sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export default async function handler(req, res) {
  const links = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/gradient-generator', changefreq: 'weekly', priority: 0.8 },
    // Add other dynamic links here
  ];

  const stream = new SitemapStream({ hostname: 'https://css-world.netlify.app' });

  res.setHeader('Content-Type', 'application/xml');
  res.statusCode = 200;

  streamToPromise(Readable.from(links).pipe(stream)).then((sitemap) => {
    res.send(sitemap.toString());
  });
}
