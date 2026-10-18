/* ==========================================================
   Tidewell landing page scripts
   1. Mobile hamburger menu  2. Scroll reveal
   3. Active nav link        4. Footer year
   ========================================================== */

// Flag that JS is running so CSS only hides .reveal elements when it can show them again
document.documentElement.classList.add('js');

/* ---------- 1. Mobile hamburger menu ---------- */
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');

function setMenu(open) {
  menu.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));

// Close the menu after a link is tapped, or when Escape is pressed
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

/* ---------- 2. Scroll reveal (IntersectionObserver) ---------- */
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---------- 3. Highlight the nav link of the section in view ---------- */
const links = document.querySelectorAll('.nav-menu a');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' }); // triggers when a section crosses mid-screen

sections.forEach(s => s && navObserver.observe(s));

/* ---------- 4. Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
