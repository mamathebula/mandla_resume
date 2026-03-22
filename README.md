# Mandla Mathebula — Senior Cloud Support Engineer Portfolio

Professional portfolio website showcasing cloud engineering experience, projects, and skills.

## Live Site

**https://applyza.co.za/resume_mandla/**

## Features

- React portfolio with clean light theme
- Sections: Hero, About, Experience, Skills, Projects, What I Bring, Contact
- CI/CD pipeline with GitHub Actions — auto-deploys to ApplyZA repo on push to main
- Dark/light mode toggle (light default)

## Tech Stack

- React 18
- CSS
- GitHub Actions (CI/CD)
- Hosted via Cloudflare Pages (through ApplyZA repo)

## Local Development

```bash
npm install
npm start
```

## Build & Deploy

Push to `main` triggers the GitHub Actions workflow which:
1. Builds the React app with `PUBLIC_URL=/resume_mandla`
2. Copies build output to the ApplyZA repo's `resume_mandla/` folder
3. Commits and pushes — Cloudflare Pages auto-deploys from there

**Note:** Requires `APPLYZA_TOKEN` secret in repo settings for the GitHub Action to push to the ApplyZA repo.

Manual deploy:
```bash
npm run build
cp -r build/* /path/to/applyza/resume_mandla/
```

## Project Structure

```
├── public/
│   ├── index.html
│   └── mandla.jpeg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── components/
│       ├── About.jsx
│       ├── Contact.jsx
│       ├── Experience.jsx
│       ├── Hero.jsx
│       ├── Navbar.jsx
│       ├── Projects.jsx
│       ├── Skills.jsx
│       └── WhatIBring.jsx
└── .github/workflows/
    └── deploy.yml
```

## Author

Mandla Mathebula — Senior Cloud Support Engineer
- Email: mathebulam000@gmail.com
- LinkedIn: [linkedin.com/in/mandla-mathebula-4258a518a](https://linkedin.com/in/mandla-mathebula-4258a518a)
- GitHub: [github.com/mamathebula](https://github.com/mamathebula)
- Location: Cape Town, Western Cape

## What Each File/Folder Does

All files in this repo are necessary — no leftovers or junk.

| File/Folder | Purpose | Why Needed |
|-------------|---------|------------|
| `.github/workflows/` | CI/CD pipeline | Auto-builds and deploys to ApplyZA repo on every push — without this you'd manually build and copy files each time |
| `public/` | React HTML template + profile photo | React needs `index.html` as the entry point and `mandla.jpeg` is your profile image |
| `src/` | React components | This is the actual code you edit — Hero, About, Experience, Skills, Projects, etc. |
| `.gitignore` | Git ignore rules | Prevents `node_modules/` (800+ packages) and `build/` (generated output) from bloating the repo |
| `package.json` | Project config + dependencies | Defines React dependencies and sets `homepage: "/resume_mandla"` so asset paths work on the live site |
| `package-lock.json` | Dependency lock file | Ensures `npm install` gives the exact same versions every time — required for reproducible builds |
| `README.md` | Documentation | This file |
