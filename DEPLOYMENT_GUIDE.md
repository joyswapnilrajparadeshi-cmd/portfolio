# Deployment Guide

## Option 1: Vercel

1. Upload this folder to GitHub.
2. Go to Vercel.
3. Import the GitHub repository.
4. Framework preset: Vite.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Deploy.

## Option 2: Netlify

1. Upload this folder to GitHub.
2. Go to Netlify.
3. Import repository.
4. Build command: `npm run build`.
5. Publish directory: `dist`.
6. Deploy.

## Option 3: GitHub Pages

1. Install dependencies:

```bash
npm install
```

2. Build:

```bash
npm run build
```

3. Deploy the `dist` folder to GitHub Pages.

You can use GitHub Actions or manually upload the `dist` output to a `gh-pages` branch.
