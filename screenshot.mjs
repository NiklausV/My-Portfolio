import { chromium } from 'playwright';
import path from 'path';

const DESKTOP = 'C:/Users/mk494/OneDrive/Desktop/portfolio-rebuild';
const URL = 'http://localhost:5175';

const shots = [
  { name: '1-hero',       scroll: 0,     label: 'Hero Section' },
  { name: '2-about',      scroll: 900,   label: 'About Section' },
  { name: '3-skills',     scroll: 1900,  label: 'Skills Section' },
  { name: '4-experience', scroll: 2700,  label: 'Experience Section' },
  { name: '5-projects',   scroll: 3800,  label: 'Projects Section' },
  { name: '6-contact',    scroll: 5200,  label: 'Contact Section' },
  { name: '7-full-page',  scroll: 0,     label: 'Full Page', fullPage: true },
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

console.log('Opening', URL);
await page.goto(URL, { waitUntil: 'networkidle' });
await page.waitForTimeout(2000); // let animations settle

for (const shot of shots) {
  if (!shot.fullPage) {
    await page.evaluate(y => window.scrollTo({ top: y, behavior: 'instant' }), shot.scroll);
    await page.waitForTimeout(800);
  }
  const file = path.join(DESKTOP, `${shot.name}.png`);
  await page.screenshot({ path: file, fullPage: !!shot.fullPage });
  console.log(`✓ ${shot.label} → ${shot.name}.png`);
}

await browser.close();
console.log('Done.');
