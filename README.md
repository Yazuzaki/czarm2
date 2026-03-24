Czarm's Wheel - dev notes and visual test

What I changed
- Extracted inline styles from `index.html` to `css/style.css`.
- Made the canvas high-DPI and responsive.
- Fixed spin-time and spinAngle variable bugs.
- Modal images are lazy-loaded with `loading="lazy"` and have `alt` text.
- Previously-selected slices are dimmed instead of removed.
- Added a small Puppeteer visual test at `test/run_visual_test.js`.

Run the visual test (Windows PowerShell)
1. Install dependencies:

```powershell
cd c:\xampp\htdocs\czarm
npm install
```

2. Run the visual test script:

```powershell
npm run test:visual
```

This will open the local `index.html` with Puppeteer, click the Spin button, wait for the modal, and save `test/screenshot.png`.

Notes
- The test uses Puppeteer; Node.js and npm must be installed locally. If you prefer Playwright instead, I can add it.
- I guessed your images are in `img/` when paths were bare; if your images are stored elsewhere, tell me and I'll update path logic.
- If you'd like the CSS split into multiple files or the JS bundled, I can do that next.
