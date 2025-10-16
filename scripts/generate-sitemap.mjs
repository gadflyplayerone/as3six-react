#!/usr/bin/env node
import fs from "fs";
import path from "path";
import process from "node:process";
import { execSync } from "node:child_process";

// Prefer setting this in your CI env
const SITE_ORIGIN = process.env.SITE_ORIGIN || "https://as3six.com";

// Canonical, indexable routes from your router
const ROUTES = ["/", "/privacy", "/terms", "/cookies"];

function getLastModISO() {
  try {
    const iso = execSync("git log -1 --format=%cI", {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    if (iso) return iso.split("T")[0];
  } catch {
    // shallow clones or non-git envs will land here
  }
  return new Date().toISOString().split("T")[0];
}

function buildXml(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>\n`;
}

(function main() {
  const lastmod = getLastModISO();

  const urls = ROUTES.map((r) => ({
    loc: new URL(r, SITE_ORIGIN).toString(),
    lastmod,
    changefreq:
      r === "/"
        ? "daily"
        : ["/privacy", "/terms", "/cookies"].includes(r)
        ? "monthly"
        : "weekly",
    priority: r === "/" ? 1.0 : 0.6,
  }));

  const outDir = process.argv[2] || "public"; // "dist" in postbuild
  const outPath = path.join(outDir, "sitemap.xml");

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outPath, buildXml(urls), "utf8");

  console.log(`[sitemap] wrote ${outPath} with ${urls.length} urls`);
})();
