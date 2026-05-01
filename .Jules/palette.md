## 2025-05-14 - Visual Rating and Semantic Lists
**Learning:** Using Unicode characters (★, ☆, ✓, ✖) provides immediate visual feedback and improves the "skimmability" of reviews. Accessibility is maintained by using ARIA roles and labels, and ensuring the correct charset is set in the layout.
**Action:** Always include `<meta charset="utf-8">` when using Unicode symbols, and use `aria-hidden="true"` on decorative icons while providing an `aria-label` on the container.

## 2025-05-15 - Structured Data and Semantic Navigation
**Learning:** For JSON-LD script blocks in Jekyll, the `| jsonify` filter is the most robust way to inject variables, as it handles escaping and quotes automatically, preventing invalid JSON. Additionally, adding `aria-label` to navigation landmarks and `aria-current="page"` to active links significantly improves navigation clarity for screen reader users.
**Action:** Use `{{ var | jsonify }}` without manual quotes for JSON-LD values. Always identify the main navigation region with `aria-label` and provide a semantic "current" state indicator for active menu items.
