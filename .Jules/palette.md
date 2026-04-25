## 2025-05-14 - Visual Rating and Semantic Lists
**Learning:** Using Unicode characters (★, ☆, ✓, ✖) provides immediate visual feedback and improves the "skimmability" of reviews. Accessibility is maintained by using ARIA roles and labels, and ensuring the correct charset is set in the layout.
**Action:** Always include `<meta charset="utf-8">` when using Unicode symbols, and use `aria-hidden="true"` on decorative icons while providing an `aria-label` on the container.

## 2025-05-15 - Contextual Link Labels and Navigation Semantics
**Learning:** Repetitive links like "Read more" or "Read the full review" are ambiguous for screen reader users when presented out of context (e.g., in a links list). Providing specific `aria-label`s that include the item's title significantly improves accessibility. Additionally, using `aria-current="page"` and `aria-label` on `<nav>` elements helps users understand their current location and the purpose of navigation regions.
**Action:** Always provide contextual labels for repetitive links using the item's title, and ensure navigation regions are properly labeled and stateful.
