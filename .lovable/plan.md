

## Problem

Sections on `/onboard` use inconsistent max-widths:
- **The Weekend (agenda):** `max-w-4xl` (~896px)
- **Your Cohort:** `max-w-5xl` (~1024px)
- **Your Mentors (MentorRoute):** `max-w-3xl` (~768px)
- **Judging criteria grid:** `max-w-5xl`
- **Pitch format card:** `max-w-3xl`
- **Jury grid:** `max-w-5xl`

## Plan

Standardize all sections to `max-w-5xl` for a consistent content width:

1. **`src/pages/Onboard.tsx`** — Change `max-w-4xl` on The Weekend section (line 106) to `max-w-5xl`. Change `max-w-3xl` on the pitch format card (line 250) to `max-w-5xl`.

2. **`src/components/onboard/MentorRoute.tsx`** — Change `max-w-3xl` (line 141) to `max-w-5xl`.

Three small edits, no structural changes.

