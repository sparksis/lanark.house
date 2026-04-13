# Palette's Journal - Critical UX & Accessibility Learnings

## 2025-04-13 - Unicode Star Character Rendering
**Learning:** Always ensure `<meta charset="utf-8">` is present in the layout to prevent rendering issues when using Unicode characters like star symbols (★, ☆).
**Action:** Add the charset meta tag to the default layout before implementing Unicode-based icons.

## 2025-04-13 - Accessible Rating Components
**Learning:** When implementing visual ratings, use a container with `role="img"` and a descriptive `aria-label`, while applying `aria-hidden="true"` to the individual decorative characters or icons within.
**Action:** Use this pattern for the new `star-rating.html` include.

## 2025-04-13 - Project Styling Architecture
**Learning:** Global styles should be appended to `_sass/garth.scss` to maintain consistency with the project's SCSS-based architecture and avoid inline styles in layouts.
**Action:** Move rating styles from layout-specific blocks to the global SCSS file.
