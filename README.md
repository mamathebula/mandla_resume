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

| File/Folder | Purpose |
|-------------|---------|
| `.github/workflows/` | CI/CD pipeline — auto-deploys to ApplyZA repo on push |
| `public/` | React HTML template and profile photo |
| `src/` | React components (the actual code you edit) |
| `.gitignore` | Keeps `node_modules/` and `build/` out of git |
| `package.json` / `package-lock.json` | Dependencies and `/resume_mandla` homepage config |
| `README.md` | This file |
