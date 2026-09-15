// Verifies the production build: serves dist/, screenshots each section, checks key text + resume PDF.
// usage: npm run build && node tools/verify-shots.mjs <out-dir>
import { preview } from 'vite'
import { chromium } from 'playwright'

const OUT = process.argv[2] || './verify-shots'
const server = await preview({ preview: { port: 4173, strictPort: true } })
const url = 'http://localhost:4173/My-Portfolio/'
const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const errors = []
page.on('pageerror', e => errors.push('pageerror: ' + e.message))
page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()) })
page.on('requestfailed', r => errors.push('requestfailed: ' + r.url()))
await page.goto(url, { waitUntil: 'networkidle' })

// Scroll through the page so every FadeIn (once: true) has fired.
const total = await page.evaluate(() => document.body.scrollHeight)
for (let y = 0; y < total; y += 600) {
  await page.evaluate(v => window.scrollTo(0, v), y)
  await page.waitForTimeout(120)
}
await page.evaluate(() => window.scrollTo(0, 0))
await page.waitForTimeout(800)

const shots = ['home', 'founder', 'about', 'experience', 'projects', 'contact']
for (const id of shots) {
  const loc = page.locator('#' + id)
  await loc.scrollIntoViewIfNeeded()
  await page.waitForTimeout(700)
  await loc.screenshot({ path: `${OUT}/${id}.png` })
  console.log('shot', id)
}
// Sanity: text checks
const text = await page.evaluate(() => document.body.innerText)
for (const needle of ['Vextora AI Solutions', 'IronOS', 'Expected Jan 2027', 'Founder & Software Engineer', 'AI Team & Infrastructure', 'Azure', 'Resume (PDF)']) {
  console.log(text.includes(needle) ? 'OK  ' : 'MISS', needle)
}
const pdf = await page.request.get(url + 'Mustafa-Hadi-Resume.pdf')
console.log('resume pdf status', pdf.status(), 'bytes', (await pdf.body()).length)
console.log('title:', await page.title())
console.log('errors:', errors.length ? errors : 'none')
await browser.close()
await new Promise(r => server.httpServer.close(r))
