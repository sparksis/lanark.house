## 2025-08-09 - Accessible Star Ratings in Jekyll
**Learning:** Visual ratings (like stars) should always be accompanied by a descriptive `aria-label` on a container with `role="img"`, while the decorative star characters themselves should be `aria-hidden="true"` to avoid redundant screen reader announcements. Using Unicode characters (★, ☆) requires `<meta charset="utf-8">` in the layout to prevent rendering issues in some environments.
**Action:** Always include a charset meta tag when using Unicode symbols and wrap icon-based ratings in an accessible container.
