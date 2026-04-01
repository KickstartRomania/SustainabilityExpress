

## Problem

The judge cards still have large internal padding because the `card-elevated` CSS class applies `p-8` (2rem / 32px) padding. The `px-1 py-2` you added is on an inner `<div>`, but the outer `Card` with `card-elevated` already adds significant padding around everything.

## Solution

Override the `card-elevated` padding specifically on the judge cards by adding a padding override class directly on the `Card` element.

### Changes in `src/pages/Mentors.tsx`

On the judge `Card` element, add `!p-2` (or `!p-3`) to override the `p-8` from `card-elevated`:

```tsx
<Card className="card-elevated !p-2 text-center group transition-transform duration-300 hover:scale-[1.01]">
```

And remove the extra padding wrapper `<div className="px-1 py-2">` since the Card itself will now have minimal padding. The content can sit directly inside the Card.

This single change will eliminate the excess whitespace inside each judge card.

