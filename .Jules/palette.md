## 2025-05-14 - Visual Rating and Semantic Lists
**Learning:** Using Unicode characters (★, ☆, ✓, ✖) provides immediate visual feedback and improves the "skimmability" of reviews. Accessibility is maintained by using ARIA roles and labels, and ensuring the correct charset is set in the layout.
**Action:** Always include `<meta charset="utf-8">` when using Unicode symbols, and use `aria-hidden="true"` on decorative icons while providing an `aria-label` on the container.

## 2025-05-15 - Reusable Accessible Components and Cards
**Learning:** Standardizing UI components (like `.review-summary`) into a central Sass file enables visual consistency and hover-state interactivity across the site. Accessibility for repetitive links (e.g., "Read more") must be enhanced with context-specific `aria-label` attributes, and navigation menus should use `aria-current="page"` to denote the active location.
**Action:** Use CSS nesting for component styles, and always pair interactive elements with ARIA landmarks and state indicators to support assistive technologies.
