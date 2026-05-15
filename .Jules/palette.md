## 2025-05-14 - Visual Rating and Semantic Lists
**Learning:** Using Unicode characters (★, ☆, ✓, ✖) provides immediate visual feedback and improves the "skimmability" of reviews. Accessibility is maintained by using ARIA roles and labels, and ensuring the correct charset is set in the layout.
**Action:** Always include `<meta charset="utf-8">` when using Unicode symbols, and use `aria-hidden="true"` on decorative icons while providing an `aria-label` on the container.

## 2026-05-15 - Semantic Navigation and Contextual Links
**Learning:** Adding `aria-current="page"` and `aria-label` to navigation and repetitive links significantly improves the experience for screen reader users by providing necessary context. Moving local styles to global SCSS and using nesting improves maintainability while enabling consistent micro-interactions like hover effects across the site.
**Action:** Prioritize semantic ARIA attributes for all interactive elements and centralize UI component styles to ensure consistency and delight.
