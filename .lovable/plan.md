

## Plan: Replace "Apply Now" with "Join Demo Day" site-wide (except /apply page)

### Changes

All "Apply Now" / "Start Your Application" / "Start Building" buttons link to `https://luma.com/lxs8xxfm` (external, new tab) with text "Join Demo Day". The `/apply` page itself stays untouched.

### Files to edit

1. **`src/components/Navigation.tsx`** (lines 46-48, 84-87) — Both desktop and mobile nav buttons
2. **`src/components/Footer.tsx`** (line 33-35) — Footer link
3. **`src/pages/Index.tsx`** — 5 instances:
   - Hero CTA (lines 409-412)
   - Mobile CTA #1 (lines 603-606)
   - Mobile CTA #2 (lines 778-781)
   - Bottom banner (lines 1011-1020): Update headline to "Join Our Demo Day", description to "See what 20 innovators built during 48 hours on rails. Join us for the Sustainability Express Demo Day — pitches, prizes, and sustainable solutions.", button to "Join Demo Day"
4. **`src/pages/Agenda.tsx`** (lines 169-172)
5. **`src/pages/Logistics.tsx`** (lines 205-208)
6. **`src/pages/FAQ.tsx`** (lines 81-84)
7. **`src/pages/Themes.tsx`** (lines 112-115) — "Start Building" → "Join Demo Day"
8. **`src/pages/HowItWorks.tsx`** (lines 255-258) — "Start Your Application" → "Join Demo Day"

### Pattern

Every `<Link to="/apply">` wrapping these CTAs becomes:
```tsx
<a href="https://luma.com/lxs8xxfm" target="_blank" rel="noopener noreferrer">
  Join Demo Day <ArrowRight ... />
</a>
```

The `/apply` route and page remain completely unchanged.

