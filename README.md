# Resume App

Resume portfolio built with Next.js App Router and Tailwind CSS.

## Features

- Home page with links to both resume variants
- ` /experience ` route for the experienced software engineer resume
- ` /fresher ` route for the entry-level resume
- Print-friendly layouts for exporting resumes as PDF
- Shared hero component and reusable section structure

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 3

## Project Structure

```text
src/
  app/
    page.js
    layout.js
    globals.css
    experience/page.jsx
    fresher/page.jsx
  components/
    Hero.jsx
    ExperienceResume.jsx
    FresherResume.jsx
public/
  profile.png
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Notes

- Tailwind scans files from `src/**/*.{js,ts,jsx,tsx,mdx}`.
- Global styles live in `src/app/globals.css`.
- The app uses assets from `public/`, including the profile image.
