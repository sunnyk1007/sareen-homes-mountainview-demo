# Sareen Homes at Mountain View — interactive GitHub demo

This package is a static, GitHub-ready demo site for pitching the builder website job.

## What's included

- `index.html`
- `styles.css`
- `app.js`
- `site-data.js`
- `assets/hero-townhomes.svg`
- `assets/overview-townhomes.svg`
- `.nojekyll`

## Why this version is useful

This demo is intentionally:
- more interactive
- mobile friendly
- easy to upload to GitHub Pages
- easy to customize later from one file

## Edit later from one place

Open `site-data.js` and update:

- builder name
- community name
- hero headline
- price / home count / delivery timing
- model names and specs
- sales contact info
- phone / email / office
- lot messaging
- final image and video URLs

## Notes about media

The hero uses an external Pexels video URL right now.
If you want to host your own local video later, replace the `heroVideo` value in `site-data.js` with something like:

`assets/hero-video.mp4`

## Deploy on GitHub Pages

1. Create a GitHub repo
2. Upload all files from this folder to the repo root
3. Commit and push
4. Turn on GitHub Pages for the main branch / root
5. Wait for the site to publish

## Demo behavior

- The waitlist form is demo-only and does not submit anywhere yet
- Model names, plans, pricing, and homesite details are placeholders
- The homesite plan is interactive on hover / click


## Google Sheets lead capture

This package now includes a free lead-capture backend option using Google Apps Script.

See:
- `GOOGLE_SHEETS_SETUP.md`
- `google-apps-script/Code.gs`

Once configured, the website form can append each lead to a Google Sheet with a timestamp.


## Internal dashboard demo

This package also includes:
- `dashboard.html`
- `dashboard.css`
- `dashboard.js`

Use `dashboard.html` to show the builder a simple internal CRM-style lead board.
It is a presentation demo that uses local browser storage for sample lead movement and notes.
