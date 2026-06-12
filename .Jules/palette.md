## 2025-05-14 - Visual Rating and Semantic Lists
**Learning:** Using Unicode characters (★, ☆, ✓, ✖) provides immediate visual feedback and improves the "skimmability" of reviews. Accessibility is maintained by using ARIA roles and labels, and ensuring the correct charset is set in the layout.
**Action:** Always include `<meta charset="utf-8">` when using Unicode symbols, and use `aria-hidden="true"` on decorative icons while providing an `aria-label` on the container.

## 2025-05-15 - Contextual Accessibility and Interactive Delight
**Learning:** Repetitive "Read more" links lack context for screen reader users. Providing an `aria-label` with the specific item title (e.g., "Read the full review for [Builder]") restores this context. Additionally, a subtle elevation effect (using `translateY` and `box-shadow`) on card-style summaries provides immediate visual feedback and a sense of "delight" when interacting with lists.
**Action:** Always provide context for generic links using `aria-label` and implement standardized interactive states in SCSS to maintain a cohesive and delightful UI.
