## 2025-05-14 - Visual Rating and Semantic Lists
**Learning:** Using Unicode characters (★, ☆, ✓, ✖) provides immediate visual feedback and improves the "skimmability" of reviews. Accessibility is maintained by using ARIA roles and labels, and ensuring the correct charset is set in the layout.
**Action:** Always include `<meta charset="utf-8">` when using Unicode symbols, and use `aria-hidden="true"` on decorative icons while providing an `aria-label` on the container.

## 2024-06-05 - Descriptive Link Labels for Screen Readers
**Learning:** Repetitive links like "Read the full review..." lack context for screen reader users when navigated out of context (e.g., in a links list). Providing an `aria-label` that includes the item's title restores this context.
**Action:** For repetitive navigation links, always use `aria-label` to provide specific context (e.g., "Read more about [Title]").
