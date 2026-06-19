## 2025-05-14 - Visual Rating and Semantic Lists
**Learning:** Using Unicode characters (★, ☆, ✓, ✖) provides immediate visual feedback and improves the "skimmability" of reviews. Accessibility is maintained by using ARIA roles and labels, and ensuring the correct charset is set in the layout.
**Action:** Always include `<meta charset="utf-8">` when using Unicode symbols, and use `aria-hidden="true"` on decorative icons while providing an `aria-label` on the container.

## 2025-05-15 - Navigation and Link Accessibility
**Learning:** Repetitive links like "Read more..." lack context for screen reader users. Providing an `aria-label` that includes the item's title makes these links meaningful. Additionally, using `aria-current="page"` on navigation links provides vital semantic state.
**Action:** Add descriptive `aria-label` to repetitive links and `aria-current="page"` to active navigation items. Use `aria-label` on `<nav>` landmarks to distinguish them.
