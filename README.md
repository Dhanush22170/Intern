# Plainsight Studio: Design Agency Homepage

A responsive, single-page homepage for a fictional design agency, built for the Next.js Developer Internship task.

- **Live demo:** https://intern-nine-beryl.vercel.app/
- **Repository:** https://github.com/Dhanush22170/Intern

## Sections

1. **Hero**: agency name, tagline, call-to-action buttons, gradient background and a shape illustration
2. **Services**: 4 reusable service cards (icon, title, description)
3. **Portfolio**: responsive grid of 6 projects (thumbnail, title) with hover effects
4. **Contact**: name, email and message fields with validation and a success message

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- React 19 (functional components only)
- [Tailwind CSS v4](https://tailwindcss.com/)
- `next/image` for image optimization
- `next/font` (Bricolage Grotesque + Figtree)
- Deployed on [Vercel](https://vercel.com/)

## Setup

Requires Node.js 18.18 or newer.

```bash
git clone https://github.com/Dhanush22170/Intern.git
cd Intern
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.jsx        # fonts, SEO metadata, theme script
  page.jsx          # composes the sections
  globals.css       # Tailwind + theme tokens + hero animation
  icon.svg          # favicon
components/
  Navbar.jsx        # sticky nav, mobile menu (client)
  Hero.jsx
  Services.jsx      # maps data -> ServiceCard
  ServiceCard.jsx   # reusable
  Portfolio.jsx     # maps data -> ProjectCard
  ProjectCard.jsx   # reusable, next/image + hover effect
  Contact.jsx       # form + validation (client)
  ThemeToggle.jsx   # dark mode toggle (client)
  Footer.jsx
  icons.jsx         # inline SVG icons
data/
  content.js        # services, projects and nav links
public/projects/    # portfolio thumbnails
```

## Decisions and assumptions

- **Server vs client components:** only components that need state or event handlers (`Navbar`, `ThemeToggle`, `Contact`) use `"use client"`. Everything else renders on the server.
- **Content in one file:** `data/content.js` holds all copy, so components are reusable and easy to edit.
- **Contact form:** the task has no backend, so submission is simulated. Validation runs on submit and a success message is shown. A real version would post to an API route or an email service.
- **Images:** thumbnails are original abstract placeholders created for this project (no copied templates or stock assets).
- **Accessibility:** labelled form fields, `aria-invalid` errors, visible focus styles, and reduced-motion support.

## Extras (bonus items)

- Tailwind CSS
- Dark mode toggle (saved in localStorage, follows system preference by default, no flash on load)
- SEO metadata and Open Graph tags
- Image optimization with `next/image` (responsive `sizes`, lazy loading)
- Hero entrance animation and hover effects
