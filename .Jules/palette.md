## 2025-08-09 - [Character Encoding and Accessible Ratings]
**Learning:** Always ensure `<meta charset="utf-8">` is present in the layout when using Unicode characters like star symbols (★, ☆). For ratings, use a container with `role="img"` and a descriptive `aria-label`, while applying `aria-hidden="true"` to individual decorative characters to ensure screen reader compatibility.
**Action:** Include charset meta tag in base templates and follow the accessible rating pattern for any future visual indicators.
