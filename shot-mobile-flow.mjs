import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const ROOT = path.dirname(url.fileURLToPath(import.meta.url));
const OUT = path.join(ROOT, "temporary screenshots");
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const targetUrl = process.argv[2] || "http://localhost:3000/index.html";
const lang = process.argv[3] || "en";
const label = process.argv[4] ? `-${process.argv[4]}` : `-mobile-${lang}`;

const existing = fs.readdirSync(OUT).filter(f => /^screenshot-\d+/.test(f));
const next = existing.reduce((acc, f) => {
  const m = f.match(/^screenshot-(\d+)/);
  return m ? Math.max(acc, parseInt(m[1], 10)) : acc;
}, 0) + 1;
const outPath = path.join(OUT, `screenshot-${next}${label}.png`);

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
  defaultViewport: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
});
try {
  const page = await browser.newPage();
  await page.goto(targetUrl, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise(r => setTimeout(r, 400));
  // Click lang toggle, then click target lang
  await page.click('.lang-mobile-toggle');
  await new Promise(r => setTimeout(r, 250));
  await page.click(`.lang-mobile-menu [data-lang="${lang}"]`);
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: outPath, fullPage: false });
  console.log(`saved ${path.relative(ROOT, outPath)}`);
} finally {
  await browser.close();
}
