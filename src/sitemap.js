const fs = require("fs");
const path = require("path");

// All URLs on your site
const urls = [
  { url: "/", lastmod: "2025-01-01" },
  { url: "/gradient-generator", lastmod: new Date().toISOString() },
  { url: "/box-shadow", lastmod: new Date().toISOString() },
  { url: "/text-shadow", lastmod: new Date().toISOString() },
  { url: "/css-cursor", lastmod: new Date().toISOString() },
  { url: "/border", lastmod: new Date().toISOString() },
  { url: "/gradient-css", lastmod: new Date().toISOString() },
  { url: "/transform-css", lastmod: new Date().toISOString() },
  { url: "/rgba-and-hex-color", lastmod: new Date().toISOString() },
  { url: "/multiple-columns", lastmod: new Date().toISOString() },
  { url: "/image-filter", lastmod: new Date().toISOString() },
  { url: "/scrollbar", lastmod: new Date().toISOString() },
];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>https://css-world.netlify.app${url.url}</loc>
      <lastmod>${url.lastmod}</lastmod>
    </url>`
    )
    .join("")}
</urlset>`;

// Write sitemap to the correct location
fs.writeFileSync(path.join(__dirname, "app", "sitemap.xml"), sitemap, "utf8");
console.log("Sitemap generated!");
