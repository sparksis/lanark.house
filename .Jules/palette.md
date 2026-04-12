## 2025-04-12 - [Accessible Star Ratings]
**Learning:** Using Unicode star characters (★, ☆) for ratings requires ensuring a UTF-8 charset is explicitly defined in the HTML head. Accessibility is best handled by wrapping the stars in a container with `role="img"` and a descriptive `aria-label`, while hiding the stars themselves with `aria-hidden="true"` to prevent screen readers from reading them individually.
**Action:** Always include `<meta charset="utf-8">` when using Unicode symbols and use the `role="img"` + `aria-label` pattern for composite visual indicators.
