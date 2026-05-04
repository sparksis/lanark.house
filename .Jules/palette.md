## 2025-05-14 - Visual Rating and Semantic Lists
**Learning:** Using Unicode characters (★, ☆, ✓, ✖) provides immediate visual feedback and improves the "skimmability" of reviews. Accessibility is maintained by using ARIA roles and labels, and ensuring the correct charset is set in the layout.
**Action:** Always include `<meta charset="utf-8">` when using Unicode symbols, and use `aria-hidden="true"` on decorative icons while providing an `aria-label` on the container.

## 2025-05-15 - Accessible Navigation and Contextual Links
**Learning:** Generic "Read more" links are a common accessibility barrier. Providing context via `aria-label` ensures screen reader users understand the destination without needing visual context. Additionally, using `aria-current="page"` and `aria-label` on navigation regions improves landmark identification and location awareness.
**Action:** Always provide descriptive `aria-label` for repetitive links and mark active navigation items with `aria-current="page"`.
