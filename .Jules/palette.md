## 2025-05-14 - Visual Rating and Semantic Lists
**Learning:** Using Unicode characters (★, ☆, ✓, ✖) provides immediate visual feedback and improves the "skimmability" of reviews. Accessibility is maintained by using ARIA roles and labels, and ensuring the correct charset is set in the layout.
**Action:** Always include `<meta charset="utf-8">` when using Unicode symbols, and use `aria-hidden="true"` on decorative icons while providing an `aria-label` on the container.

## 2025-08-10 - Navigation Landmarks and Link Context
**Learning:** Repetitive links like "Read more" or "Read the full review" lack context for screen reader users. Adding an `aria-label` with the target item's title makes these links meaningful. Similarly, identifying the main navigation with `aria-label` and the current page with `aria-current="page"` significantly improves site-wide accessibility.
**Action:** Always provide descriptive `aria-label` for repetitive links and use `aria-current="page"` on active navigation items.
