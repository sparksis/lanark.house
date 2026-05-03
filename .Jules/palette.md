## 2025-05-14 - Visual Rating and Semantic Lists
**Learning:** Using Unicode characters (★, ☆, ✓, ✖) provides immediate visual feedback and improves the "skimmability" of reviews. Accessibility is maintained by using ARIA roles and labels, and ensuring the correct charset is set in the layout.
**Action:** Always include `<meta charset="utf-8">` when using Unicode symbols, and use `aria-hidden="true"` on decorative icons while providing an `aria-label` on the container.

## 2025-08-10 - Unified Component Styling and Navigation A11y
**Learning:** Moving local layout styles to global SCSS files like `_sass/garth.scss` ensures visual consistency across the site (e.g., matching index summaries with full reviews) and allows for site-wide UX enhancements like hover effects. Navigation accessibility is significantly improved by using `aria-label` for landmark identification and `aria-current="page"` for semantic location tracking.
**Action:** Always prefer global SCSS for shared components, and implement standard ARIA navigation patterns (`aria-label`, `aria-current`) in site headers.
