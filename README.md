# Mandla Mathebula — Cloud Resume

A Netflix-inspired portfolio website built as part of the AWS Cloud Resume Challenge.

## Live Site

Deployed to: `applyza.co.za/resume_mandla/`

## Features

- React portfolio with Netflix-inspired design
- Visitor counter using AWS Lambda, DynamoDB & API Gateway
- CI/CD pipeline with GitHub Actions — auto-deploys to the ApplyZA repo on push to main
- Sections: Hero, About, Experience, Skills, What I Bring, Projects, Contact

## Tech Stack

**Frontend:**
- React 18
- CSS (Netflix-inspired design)

**Backend:**
- AWS Lambda (Python) — visitor counter
- Amazon DynamoDB — stores visit count
- API Gateway — exposes the Lambda function

**CI/CD:**
- GitHub Actions — builds React app and copies to `applyza/resume_mandla/`

## Local Development

```bash
npm install
npm start
```

## Build & Deploy

Push to `main` triggers the GitHub Actions workflow which:
1. Builds the React app with `PUBLIC_URL=/resume_mandla`
2. Copies the build output to the ApplyZA repo's `resume_mandla/` folder
3. Commits and pushes to ApplyZA — Cloudflare Pages auto-deploys from there

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
├── lambda/
│   └── visitor-counter.py
├── build/              # Production build output
└── .github/workflows/
    └── deploy.yml      # CI/CD pipeline
```

## Author

Mandla Mathebula — Senior Cloud Support Engineer
- Email: mathebulam000@gmail.com
- LinkedIn: [linkedin.com/in/mandla-mathebula-4258a518a](https://linkedin.com/in/mandla-mathebula-4258a518a)
- GitHub: [github.com/mamathebula](https://github.com/mamathebula)
- Location: Cape Town, Western Cape
