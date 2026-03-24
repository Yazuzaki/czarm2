const puppeteer = require('puppeteer');
const path = require('path');
const { pathToFileURL } = require('url');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Increase viewport to ensure canvas renders at expected size
  await page.setViewport({ width: 900, height: 900 });

  const filePath = path.resolve(__dirname, '..', 'index.html');
  const fileUrl = pathToFileURL(filePath).href;

  console.log('Opening', fileUrl);
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });

  // Wait for canvas and spin button
  await page.waitForSelector('#canvas');
  await page.waitForSelector('#spin');

  // Click the Spin button
  await page.click('#spin');

  // Wait up to 10s for modal to appear (it may take a few seconds to rotate)
  try {
    await page.waitForSelector('#myModal', { visible: true, timeout: 10000 });
    console.log('Modal appeared - taking screenshot.');
  } catch (err) {
    console.log('Modal did not appear within timeout; taking screenshot anyway.');
  }

  await page.screenshot({ path: path.resolve(__dirname, 'screenshot.png'), fullPage: true });

  await browser.close();
  console.log('Done. Screenshot saved to test/screenshot.png');
})();
