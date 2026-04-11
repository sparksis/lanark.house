## 2025-08-16 - [Accessible Star Ratings]
**Learning:** Using Unicode characters (like ★/☆) in static site generators requires an explicit charset declaration (<meta charset="utf-8">) in the HTML layout to avoid mojibake. Visual ratings significantly improve the "scannability" of review lists.
**Action:** Always verify charset meta tags when introducing Unicode-based visual elements and use aria-label on parent containers to ensure screen reader compatibility.
