# Resume App

Resume portfolio built with Next.js App Router and Tailwind CSS.

## Features

- Home page linking to 13 experienced role resume variants
- `/roles/[role]` routes for marketing, sales, AML, fraud operations, digital finance, cyber security, L1 support, customer service, Emirates Group customer service, telesales, executive assistant, AI narrative producer, and junior executive digitalization
- Existing `/experience` and `/data-analyst` routes remain available
- Print-friendly layouts for exporting resumes as PDF
- Shared hero component and reusable section structure
- 15 pre-generated PDF resumes in `resumes/` folder

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
    roles/[role]/page.jsx
    experience/page.jsx
    data-analyst/page.jsx
  components/
    Hero.jsx
    ExperienceResume.jsx
    DataAnalystResume.jsx
    roles/
      RoleResume.jsx
      roleResumeData.js
    resume/
      ResumeSection.jsx
      ResumeJob.jsx
public/
  profile.png
resumes/
  (15 PDF files)
```

## Getting Started

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
