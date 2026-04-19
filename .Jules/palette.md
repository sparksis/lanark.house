# Palette's UX Journal

## 2026-04-19 - Visual Scannability and Accessible Ratings
**Learning:** Using semantic visual indicators like stars for ratings and checkmarks/crosses for pros/cons significantly improves the "scannability" of content. Users can grasp the sentiment of a review at a glance without reading every word. Furthermore, these can be made accessible by using `role="img"` and `aria-label` while hiding the decorative characters from screen readers.
**Action:** When presenting lists of positive/negative items or numerical ratings, always consider a visual shorthand that complements the text, ensuring it's implemented in an accessible way.
