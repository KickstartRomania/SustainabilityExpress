

# Fix Duplicate diARK Entry

## Problem
The diARK logo appears twice on both the Partners page and the Homepage train animation. This was caused by a merge error during the Sameday removal.

## Current State (Incorrect)
Both `Partners.tsx` and `Index.tsx` have:
```javascript
}, {
  name: 'diARK',
  logo: diarkLogo
}, {
  logo: diarkLogo   // ← Duplicate entry (missing name property)
}, {
  name: 'Bookster',
```

## Changes Required

### 1. Partners Page (`src/pages/Partners.tsx`)
- Remove the duplicate entry at lines 51-52 (`{ logo: diarkLogo }`)
- Keep only the correct entry with both `name` and `logo`

### 2. Homepage (`src/pages/Index.tsx`)
- Remove the duplicate entry at lines 149-150 (`{ logo: diarkLogo }`)
- Keep only the correct entry with both `name` and `logo`

## Result
diARK will appear only once on both pages, in its proper position after PHINIA.

