

# Remove Sameday from Website

## Overview
Remove all references to the Sameday partner from across the website, including the Partners page, homepage train animation, and the asset file.

## Changes Required

### 1. Partners Page (`src/pages/Partners.tsx`)

**Remove import statement:**
- Line 18: Remove `import samedayLogo from '@/assets/partners/sameday.png';`

**Update partners array:**
- Remove the Sameday entry from the partners array (lines 48-51)
- The order will now be: PHINIA, diARK, Bookster, Skillab, and the rest

### 2. Homepage (`src/pages/Index.tsx`)

**Remove import statement:**
- Line 115: Remove `import samedayLogo from '@/assets/partners/sameday.png';`

**Update row1Partners array:**
- Remove the Sameday entry (lines 147-149)
- This will remove Sameday from the train animation

### 3. Delete Asset File
- Remove `src/assets/partners/sameday.png` from the project

## Technical Notes
- No database changes required - partners are stored as hardcoded arrays in the frontend
- The train animation will automatically adjust since it loops through the partner arrays
- Total partners will decrease from 26 to 25

