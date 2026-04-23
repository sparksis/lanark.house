## 2025-05-14 - Visual Rating and Semantic Lists
**Learning:** Using Unicode characters (★, ☆, ✓, ✖) provides immediate visual feedback and improves the "skimmability" of reviews. Accessibility is maintained by using ARIA roles and labels, and ensuring the correct charset is set in the layout.
**Action:** Always include `<meta charset="utf-8">` when using Unicode symbols, and use `aria-hidden="true"` on decorative icons while providing an `aria-label` on the container.

## 2025-05-15 - Navigation and Link Accessibility
**Learning:** Repetitive generic links like "Read more" or "Read full review" lack context for screen reader users when navigated out of context. Providing an `aria-label` with the item's title restores this context. Landmark regions like `<nav>` should be labeled, and the current page should be semantically marked with `aria-current="page"`.
**Action:** Use `aria-label` for contextual link descriptions and navigation landmarks. Apply `aria-current="page"` to the active navigation link. Implement a "Skip to content" link for keyboard efficiency.
