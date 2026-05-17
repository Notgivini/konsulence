import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const ROOT = path.dirname(url.fileURLToPath(import.meta.url));
const OUT = path.join(ROOT, "temporary screenshots");
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const targetUrl = process.argv[2] || "http://localhost:3000/index.html";
const selector = process.argv[3] || ".lang-mobile-toggle";
const label = process.argv[4] ? `-${process.argv[4]}` : "-click";
const viewportW = Number(process.argv[5] || 390);

const existing = fs.readdirSync(OUT).filter(f => /^screenshot-\d+/.test(f));
const next = existing.reduce((acc, f) => {
  const m = f.match(/^screenshot-(\d+)/);
  return m ? Math.max(acc, parseInt(m[1], 10)) : acc;
}, 0) + 1;
const outPath = path.join(OUT, `screenshot-${next}${label}.png`);

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
  defaultViewport: { width: viewportW, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
});
try {
  const page = await browser.newPage();
  await page.goto(targetUrl, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise(r => setTimeout(r, 500));
  await page.click(selector);
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: outPath, fullPage: false });
  console.log(`saved ${path.relative(ROOT, outPath)}`);
} finally {
  await browser.close();
}
