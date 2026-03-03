

# Add Autonom Partner Logo

## Changes Required

### 1. Copy the uploaded logo to assets
- Copy `user-uploads://Frame_40557.png` to `src/assets/partners/autonom.png`

### 2. Partners Page (`src/pages/Partners.tsx`)
- Add import: `import autonomLogo from '@/assets/partners/autonom.png';`
- Add `{ name: 'Autonom', logo: autonomLogo }` to the `partners` array

### 3. Homepage (`src/pages/Index.tsx`)
- Add import: `import autonomLogo from '@/assets/partners/autonom.png';`
- Insert `{ name: 'Autonom', logo: autonomLogo }` as the **first entry** in `row2Partners`, before "How to Web"
- Since row 2 animates right-to-left with the locomotive on the right, being first in the array places Autonom right after the locomotive

