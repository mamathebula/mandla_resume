# How to Update Your CV From Any Computer

Your CV lives at: **https://applyza.co.za/resume_mandla/**

Source code: **https://github.com/mamathebula/mandla_resume**

---

## One-Time Setup (New Computer)

```bash
# 1. Install Node.js (if not installed)
# Download from https://nodejs.org — use the LTS version

# 2. Clone the repo
git clone https://github.com/mamathebula/mandla_resume.git Mandla_CV
cd Mandla_CV

# 3. Install dependencies
npm install
```

That's it. You're ready to edit.

---

## Making Changes

### 1. Edit the files you need

All components are in `src/components/`:

| File | Section |
|---|---|
| `Hero.jsx` | Top banner with name and title |
| `About.jsx` | About me section |
| `Experience.jsx` | Work experience |
| `Skills.jsx` | Technical skills |
| `Projects.jsx` | GitHub projects |
| `WhatIBring.jsx` | Value proposition |
| `Contact.jsx` | Contact details |
| `../App.jsx` | Theme toggle, layout |
| `../App.css` | All styling |

### 2. Test locally

```bash
npm start
```

Opens at http://localhost:3000. Changes show instantly as you save files.

### 3. Push to GitHub

```bash
git add -A
git commit -m "Describe what you changed"
git push
```

---

## How It Goes Live

Two options:

### Option A: Automatic (GitHub Action)

If the `APPLYZA_TOKEN` secret is set in your repo settings, pushing to `main` triggers the GitHub Action which:
1. Builds the React app
2. Copies the build to the ApplyZA repo's `resume_mandla/` folder
3. Cloudflare Pages auto-deploys from there

To set up the token:
1. Go to https://github.com/settings/tokens
2. Generate a new token (classic) with `repo` scope
3. Go to https://github.com/mamathebula/mandla_resume/settings/secrets/actions
4. Add secret: Name = `APPLYZA_TOKEN`, Value = the token

### Option B: Manual

```bash
# Build
npm run build

# Clone ApplyZA (if not already)
git clone https://github.com/mamathebula/applyza.git

# Copy build output
rm -rf applyza/resume_mandla/static applyza/resume_mandla/index.html applyza/resume_mandla/asset-manifest.json
cp -r build/* applyza/resume_mandla/

# Push ApplyZA
cd applyza
git add resume_mandla/
git commit -m "Update resume"
git push
```

Cloudflare Pages auto-deploys within 1-2 minutes.

---

## Quick Reference

| Task | Command |
|---|---|
| Clone repo | `git clone https://github.com/mamathebula/mandla_resume.git Mandla_CV` |
| Install deps | `npm install` |
| Run locally | `npm start` |
| Build | `npm run build` |
| Push changes | `git add -A && git commit -m "message" && git push` |

## Common Edits

**Add a new project:** Edit `src/components/Projects.jsx` — copy an existing project object and modify it.

**Update skills:** Edit `src/components/Skills.jsx` — add/remove items from the arrays.

**Change job title:** Edit `src/components/Hero.jsx`.

**Update experience:** Edit `src/components/Experience.jsx`.
