const fs = require("fs");
const path = require("path");

const urls = [
  { url: "/", lastmod: "2025-01-01" },
  { url: "/gradient-generator", lastmod: new Date().toISOString() },
  { url: "/box-shadow", lastmod: new Date().toISOString() },
];

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

fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap, "utf8");
console.log("Sitemap generated!");
