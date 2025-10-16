import { NextApiRequest, NextApiResponse } from "next";

// Define your core routes. You can expand this or fetch dynamically from your CMS/API.
const urls = [
  { loc: "https://as3six.com/", changefreq: "daily", priority: 1.0 },
  { loc: "https://as3six.com/privacy", changefreq: "monthly", priority: 0.6 },
  { loc: "https://as3six.com/terms", changefreq: "monthly", priority: 0.6 },
  { loc: "https://as3six.com/cookies", changefreq: "monthly", priority: 0.6 },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const today = new Date().toISOString().split("T")[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (u) => `
      <url>
        <loc>${u.loc}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${u.changefreq}</changefreq>
        <priority>${u.priority}</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/xml");
  res.end(xml);
}
