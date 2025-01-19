export default function handler(req, res) {
    const urls = [
      { url: "/", lastmod: "2025-01-01" },
      { url: "/gradient-generator", lastmod: new Date()},
      { url: "/box-shadow", lastmod: new Date() },
    ];
  
    res.setHeader("Content-Type", "application/xml");
    res.write(`<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
          .map(
            (url) => `
          <url>
            <loc>https://css-world.netlify.app/${url.url}</loc>
            <lastmod>${url.lastmod}</lastmod>
          </url>`
          )
          .join("")}
      </urlset>`);
    res.end();
  }
  