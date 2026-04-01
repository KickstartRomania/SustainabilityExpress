

## Problem

Judge cards have `!py-4` (16px vertical padding) while mentor cards have `card-elevated` (`p-8` = 32px) plus an inner `p-4` wrapper, giving them significantly more top/bottom padding. The judge cards look cramped vertically by comparison.

## Fix

Change the judge card padding from `!py-4` to `!py-8` to match the mentor cards' vertical padding, while keeping `!px-2` for the tight horizontal spacing.

### Change in `src/pages/Mentors.tsx` (line 267)

```tsx
// From:
<Card key={judge.name} className="card-elevated !px-2 !py-4 text-center ...">

// To:
<Card key={judge.name} className="card-elevated !px-2 !py-8 text-center ...">
```

Single line change. The vertical padding will now match mentor cards while horizontal stays compact.

