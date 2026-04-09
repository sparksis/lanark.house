# Notion Integration

## Database: Outstanding Builder Activities

Data source: collection://22ea6dfd-466f-802f-816c-000bde134bb8

## Schema

| Property | Type | Description |
|----------|------|-------------|
| Name | title | Task name |
| Status | status | Not started / Needs follow up / In Dispute / In progress / In review / documentation / Done |
| Date | date | Target or completion date |
| Assign | person | Assigned team member |
| Reference | text | LLM search hint (query, name, ID) |
| ID | auto_increment | Unique item ID |

## Status Color Mapping

| Status | Color | Hex |
|--------|-------|-----|
| Not started | Gray | #888 |
| Needs follow up | Yellow | #e8b355 |
| In Dispute | Red | #e85050 |
| In progress | Blue | #4ea8de |
| In review / documentation | Purple | #a78bfa |
| Done | Green | #52c41a |

## Build-time Fetch

The Notion client in `src/lib/notion.ts` fetches this database at build time.
Results are typed as `NotionTask[]` and passed to the `PostPossessionPage` component as props.
The page renders a static snapshot — no client-side Notion calls.

## Runtime Token

Set `NOTION_TOKEN` in your Cloudflare Pages environment variables.
The token must have read access to the workspace containing the database above.

## Fallback

If `NOTION_TOKEN` is absent at build time, the page renders with hardcoded fallback
data (the 28 items documented below) so the site builds without credentials.

## Fallback Items (28)

### Needs follow up (8)
1. Eavestrough repairs — Exterior — Mar 24, 2026
2. Roof final & cleaning — Roofing — Mar 24, 2026
3. Loose soffit / roofing-siding issue after high winds — Roofing/Siding — Mar 24, 2026
4. Hot water follow-up / destructive investigation boundary — Plumbing — Mar 24, 2026
5. Illegal dumping / construction waste blowing into yard — Site/Exterior — Mar 24, 2026
6. House wrap visible between siding joints — Siding — Sep 1, 2025
7. Siding ramp visible between vinyl panels — Siding — Aug 27, 2025
8. Leaning arbor/pergola installed without forewarning — Landscaping — Aug 15, 2025

### In Dispute (2)
9. Dryer door is reversed (Mike was belligerent) — Appliances — Jul 23, 2025
10. Foam basement party wall concern — Structural — Jul 23, 2025

### In Progress (7)
11. Fireplace — missing crystals & not turning on — Interior/Gas — Mar 24, 2026
12. Drive/Walkway final grading — Landscaping — Aug 15, 2025
13. Stairwell window glass — cracked — Windows — Jul 23, 2025
14. Temp driveway needs to be completed — Driveway — Jul 23, 2025
15. Siding damage — Siding — Jul 23, 2025
16. Texturing repair in hallway — Interior Finishes — Jul 23, 2025
17. Minor chip in precast concrete steps — Concrete — Jul 23, 2025

### In Review (3)
18. Ceiling texture repair by the kitchen — Interior Finishes — Aug 15, 2025
19. The island gable — scratches on finish — Interior Finishes — Jul 23, 2025
20. One piece of deck board needs replacing — Exterior/Deck — Jul 23, 2025

### Not Started (5)
21. Front sod — Landscaping — Aug 15, 2025
22. Front steps to be topped up — Concrete/Steps — Aug 15, 2025
23. Parging — Foundation — Jul 28, 2025
24. Seasonal topsoil — Landscaping — Aug 15, 2025
25. Batten paint (exterior finishes) — Exterior Paint — Aug 15, 2025

### Done (3)
26. Smart Home Setup — Smart Home — Jul 23, 2025
27. $150 CAD Home Depot Gift Card — Admin/Perks — Jul 25, 2025
28. Driveway & walkway concrete pour — Driveway — Sep 4, 2025
