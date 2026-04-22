## 2025-05-14 - Visual Rating and Semantic Lists
**Learning:** Using Unicode characters (★, ☆, ✓, ✖) provides immediate visual feedback and improves the "skimmability" of reviews. Accessibility is maintained by using ARIA roles and labels, and ensuring the correct charset is set in the layout.
**Action:** Always include `<meta charset="utf-8">` when using Unicode symbols, and use `aria-hidden="true"` on decorative icons while providing an `aria-label` on the container.

## 2025-05-15 - Global Accessibility and Navigation
**Learning:** Implementing "Skip to content" links and `aria-current="page"` markers significantly improves navigation efficiency for keyboard and screen reader users. Refactoring inline styles into global SASS files also fixes common Jekyll layout errors like nested `<head>` tags.
**Action:** Always include a skip-to-content link in the default layout and ensure all primary navigation lists have descriptive `aria-label`s and state indicators.
