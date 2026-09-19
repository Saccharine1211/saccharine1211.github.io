# saccharine1211.github.io

A simple static webpage created while following Mozilla's beginner web development tutorial.

The page demonstrates basic HTML, CSS styling, Firefox image assets, a Mozilla Manifesto link, vanilla JavaScript interaction, and saving a username with `localStorage`.

## Tech stack

- HTML
- CSS
- Vanilla JavaScript
- Google Fonts: Agu Display and Noto Sans KR

No build tools, package manager, framework, or backend are required.

## Project structure

```text
.
├── images/
│   ├── firefox-icon.png
│   └── firefox2.png
├── scripts/
│   └── main.js
├── styles/
│   └── style.css
└── index.html
```

## Run locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deployment

This repository is published through GitHub Pages at https://saccharine1211.github.io. Commit and push changes to the configured Pages branch to deploy them.

## Notes

The page loads its Google Fonts from the internet. If they cannot be loaded, the browser uses fallback fonts.
