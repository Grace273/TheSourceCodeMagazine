// Fetches each article's og:image (or twitter:image) from its URL and
// updates src/data/articles.json in place. Falls back to the existing
// image on network failure or missing metadata, so it's safe to re-run.
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_PATH = path.join(__dirname, "../src/data/articles.json");

const META_IMAGE_RE = /<meta[^>]+(?:property|name)=["'](?:og:image|twitter:image)["'][^>]+content=["']([^"']+)["'][^>]*>/i;

async function fetchOgImage(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; SourceCodeMagBot/1.0)" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const html = await res.text();
  const match = html.match(META_IMAGE_RE);
  return match ? match[1] : null;
}

async function main() {
  const articles = JSON.parse(await readFile(DATA_PATH, "utf-8"));

  for (const article of articles) {
    if (!article.url || article.url.includes("example.com")) continue;
    try {
      const image = await fetchOgImage(article.url);
      if (image) {
        article.image = image;
        console.log(`✓ ${article.id}: ${image}`);
      } else {
        console.warn(`… ${article.id}: no og:image found, keeping existing image`);
      }
    } catch (err) {
      console.warn(`✗ ${article.id}: ${err.message}, keeping existing image`);
    }
  }

  await writeFile(DATA_PATH, JSON.stringify(articles, null, 2) + "\n");
}

main();
