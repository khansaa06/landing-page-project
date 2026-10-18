# Tidewell Landing Page

A responsive landing page for **Tidewell Coffee Roasters**, a fictional small-batch coffee company.
Built with plain HTML, CSS and JavaScript (no frameworks).

**Live demo:** _add your deployed URL here_

## Features
- Header with logo and navigation (Home, About, Services, Contact)
- Mobile hamburger menu (accessible: keyboard, `aria-expanded`, Escape to close)
- Hero section with headline, subtext and call-to-action button
- Services section with 3 cards, testimonials section with 3 quotes
- Footer with contact details and social links
- Responsive layout for mobile, tablet and desktop (CSS Grid + media queries)
- Smooth scrolling, load animation, scroll-reveal animation and active-link highlighting
- Respects `prefers-reduced-motion`

## Project structure
```
landing-page-project/
├── index.html   # page structure and content
├── style.css    # styles, organised in numbered sections
├── script.js    # menu, scroll reveal, active nav link
└── README.md
```

## Run locally
Open `index.html` in a browser, or run `npx serve` in the folder.

## Deploy on GitHub Pages
1. Push the project to a public repo named `landing-page-project`.
2. Go to **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
3. Your site will be live at `https://<your-username>.github.io/landing-page-project/`.

## What I learned
Mobile-first thinking, CSS custom properties, IntersectionObserver, and accessible navigation.
