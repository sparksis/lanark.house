## 2025-05-14 - Visual Rating and Semantic Lists
**Learning:** Using Unicode characters (★, ☆, ✓, ✖) provides immediate visual feedback and improves the "skimmability" of reviews. Accessibility is maintained by using ARIA roles and labels, and ensuring the correct charset is set in the layout.
**Action:** Always include `<meta charset="utf-8">` when using Unicode symbols, and use `aria-hidden="true"` on decorative icons while providing an `aria-label` on the container.

## 2026-04-20 - Contextual Links and CSS Maintenance
**Learning:** Repetitive links like "Read more" are accessibility barriers; adding context via `aria-label` satisfies WCAG requirements without cluttering the visual UI. Additionally, keeping CSS in a central stylesheet instead of inline layout blocks prevents invalid HTML structures (like nested heads) and improves maintainability.
**Action:** Use Liquid variables to populate `aria-label` for list item links. Always move inline layout styles to `_sass/garth.scss` to keep layouts clean and semantic.
