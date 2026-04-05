

## Full Site Update: Edition 2 — Bucharest → Chisinau → Bucharest

### Summary of all changes

**1. Route: Timisoara → Chisinau (no diacritics)**

Every instance of "Timisoara" / "Timișoara" becomes "Chisinau". Every "Bucharest → Timisoara → Bucharest" becomes "Bucharest → Chisinau → Bucharest". No diacritics anywhere.

Files: `Index.tsx`, `Agenda.tsx`, `Onboard.tsx`, `Logistics.tsx`, `HowItWorks.tsx`, `MentorRoute.tsx`, `Partners.tsx`

**2. Date: "3-5 April 2026" → "Summer 2026"**

All date badges across all page headers.

Files: `Index.tsx`, `Agenda.tsx`, `Onboard.tsx`, `Logistics.tsx`, `HowItWorks.tsx`, `Apply.tsx`

**3. Price: 250 RON → 500 RON**

File: `Apply.tsx`

**4. Venue: "Supertree" → "TBA"**

Replace all "Supertree" references with "Venue TBA" or "TBA".

Files: `Onboard.tsx`, `MentorRoute.tsx`, `Agenda.tsx`

**5. CTA: "Join Demo Day" → "Apply Now", link to /apply**

Change all "Join Demo Day" buttons/links from external Luma URL to internal `/apply` route. Update text to "Apply Now".

Files: `Navigation.tsx`, `Footer.tsx`, `Index.tsx`, `HowItWorks.tsx`, `Themes.tsx`, `Logistics.tsx`, `FAQ.tsx`, `Agenda.tsx`

**6. CO-work Timisoara → label as previous edition partner**

In `Partners.tsx`, change the name to "CO-work Timisoara (Previous Edition)" or add a "Previous Edition" badge next to it.

**7. Mentors/Judges/Teams → label as "Previous Edition"**

- `Mentors.tsx`: Add a "Previous Edition" heading/badge above mentor and judge listings
- `Mentorship.tsx`: Add "Previous Edition" label above team briefings
- `Onboard.tsx`: Add "Previous Edition" label above mentor route, cohort teams, and judges sections
- `MentorRoute.tsx`: Update sublabels — train route to "Bucharest → Chisinau → Bucharest" but station labels (Timisoara, Bucharest/Supertree) get "Previous Edition" context

**8. Agenda content**

Update all Timisoara-specific items (arrival, departure) to say Chisinau. Remove specific train numbers and times that were edition-1-specific, or label the detailed schedule as "Previous Edition" and add a general new-edition placeholder.

### Files touched (13 total)

| File | Changes |
|------|---------|
| `Navigation.tsx` | CTA text + link |
| `Footer.tsx` | CTA text + link |
| `Index.tsx` | Date, route, CTA, Timisoara refs |
| `Agenda.tsx` | Date, Timisoara → Chisinau, Supertree → TBA, CTA |
| `Apply.tsx` | Date, price |
| `HowItWorks.tsx` | Date, CTA |
| `Logistics.tsx` | Date, Timisoara → Chisinau, CTA |
| `Themes.tsx` | CTA |
| `FAQ.tsx` | CTA |
| `Onboard.tsx` | Date, route, venue, "Previous Edition" labels |
| `Mentors.tsx` | "Previous Edition" labels |
| `Mentorship.tsx` | "Previous Edition" label |
| `MentorRoute.tsx` | Route text, station labels, venue |
| `Partners.tsx` | CO-work Timisoara label |

