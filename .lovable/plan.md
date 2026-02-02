
# Fix Partner Logo Grid Spacing

## Problem
The partner logos grid currently spans the full container width, causing the grid cells to stretch horizontally. While `gap-4` provides equal 16px spacing in both directions, the stretched cells make the horizontal gaps *appear* larger than the vertical ones.

## Solution
Constrain the grid section to a narrower width so the logo containers fit more naturally. This will make the visual spacing between columns match the spacing between rows.

## Changes

### File: `src/pages/Partners.tsx`

1. **Add max-width constraint to the grid section**
   - Wrap the grid in a container with `max-w-5xl mx-auto` (or similar) to limit the width
   - This prevents the grid from stretching across the full container width
   - The logos will be closer together horizontally, matching the row spacing

2. **Optionally adjust the gap**
   - If needed, can fine-tune the gap value (e.g., `gap-6` for more breathing room)

## Technical Details

The current code:
```tsx
<section className="mb-20">
  <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-4">
```

Will be updated to:
```tsx
<section className="mb-20">
  <div className="max-w-5xl mx-auto">
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-4">
```

This constrains the grid to approximately 1024px width, making the horizontal spacing visually match the vertical spacing while maintaining center alignment.
