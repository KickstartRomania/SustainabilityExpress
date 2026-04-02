

## Compact Team Cards — Single Row

**File:** `src/pages/Onboard.tsx`

### Changes

1. **Grid**: Change from `sm:grid-cols-2 lg:grid-cols-3` → `grid-cols-2 sm:grid-cols-3 lg:grid-cols-5`
2. **Card padding**: Reduce to `!p-3`
3. **Train icon**: Keep but shrink to `h-4 w-4`; team name to `text-sm font-bold`; reduce header margin
4. **Member list**: Tighten spacing to `space-y-1.5`
5. **Badges**: Replace full-width badges with small colored dots (8px circles) next to each name, using existing color scheme
6. **Legend**: Add a small inline legend below the grid showing dot colors → background labels

### Technical Details

- Dot colors derived from existing `backgroundColors` map, just using the bg color as a circle
- Member names use `text-xs` to fit in narrower columns
- Responsive: 2 cols on mobile, 3 on tablet, 5 on desktop

