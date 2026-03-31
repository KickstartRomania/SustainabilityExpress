

# Create `/onboard` Participant Page

## Overview
New public page at `/onboard` with three sections (skipping mentors for now). All content hardcoded from the MD file and screenshot.

## Sections

### 1. The Weekend — Visual Timeline
Vertical timeline using Card components (matching Agenda.tsx pattern), three day cards:

- **Friday**: 18:00 Pre-boarding meetup, 19:30 Boarding, 20:30 Train departs
- **Saturday**: 09:00 Arrive Timișoara, 10:00 Full build day, 20:00 Depart back
- **Saturday night / Sunday**: 00:30 Midnight coding sprints
- **Sunday morning**: 08:30 Arrive Bucharest, 09:00–10:00 Tura de duminica, 10:00–11:00 Transfer to Supertree
- **Sunday at Supertree**: 11:00 Working session, 13:30 Doors open, 14:00 Demo Day, 15:30 Networking, 16:30 Space free

### 2. Your Cohort — Team Cards
Five team cards in a responsive grid (2-3 cols). Each card shows team name and 4 members with color-coded badges:
- Tech → `bg-[#d6f5e3] text-green-800`
- Business → `bg-[#E6F1FB] text-blue-800`
- Creative → `bg-[#FAEEDA] text-amber-800`
- High School → `bg-[#FDECEA] text-red-800`

Teams from MD: Argeș, Olt, Jiu, Timiș (Ludovico Cesaro, Emil Boncea, Diana-Roberta Micu, Alexandru-Valentin Grigorescu), Dunărea.

### 3. How You'll Be Judged — Criteria Cards
Five cards: Impact, Feasibility, Innovation, Prototype, Storytelling with one-sentence descriptions. Footer note about 5–7 min pitch + one-page summary by Sunday 17:00.

## File Changes

| File | Change |
|------|--------|
| `src/pages/Onboard.tsx` | **New** — full page, all data inline |
| `src/App.tsx` | Add `<Route path="/onboard" element={<Onboard />} />` |

Page uses Navigation + Footer for consistency. Not added to main nav — direct link only.

