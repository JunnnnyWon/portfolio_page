# Desktop Alignment Cleanup Design

## Problem Statement
The portfolio page is in a mid-migration state from mobile-first to desktop. Desktop styles are spread across large override blocks and currently feel visually inconsistent. The requested target is:

- Hero section centered on desktop
- Projects section centered on desktop
- Remaining home sections (Profile, Career, Contact) left-aligned and consistently placed

This spec focuses on desktop home layout consistency only.

## Goals
- Keep current content/components intact, adjust layout behavior only
- Define one desktop alignment system so sections look intentional
- Minimize risky refactors by fixing alignment in `src/desktop.css`

## Non-Goals
- Rebuilding section component markup
- Redesigning project detail pages
- Mobile layout changes

## Current State Summary
- Base styles live in `src/styles.css` (mobile-first)
- Desktop overrides live in `src/desktop.css` (`@media (min-width: 48rem)`)
- `App.tsx` structure is stable; alignment issues are primarily CSS-layer concerns
- Several desktop rules use mixed patterns (`max-width`, `margin: 0 auto`, unique paddings, occasional `!important`), causing visual drift between sections

## Options Considered

### Option A (Recommended): Minimal desktop override cleanup
Adjust only desktop alignment primitives and section-level desktop blocks:
- Keep existing architecture
- Introduce shared desktop content width and edge padding variables
- Center Hero + Projects with the same horizontal anchor
- Left-align Profile + Career + Contact using the same anchor and width

**Pros**
- Lowest risk
- Fastest to verify
- Preserves existing interactions/animations

**Cons**
- `desktop.css` remains large
- Some legacy overrides still present

### Option B: Add shared layout wrappers in components
Introduce a common desktop container class in TSX components and simplify CSS.

**Pros**
- Cleaner long-term structure

**Cons**
- Requires multi-file component changes
- Higher regression risk during current migration stage

### Option C: Full desktop relayout
Rebuild desktop section layouts holistically.

**Pros**
- Maximum design freedom

**Cons**
- Too large for current scope
- High risk and verification cost

## Chosen Approach
Use **Option A** now, then consider Option B later when desktop migration stabilizes.

## Design

### 1) Desktop alignment primitives
Define shared desktop variables in desktop media block:
- `--desktop-content-max: 90rem`
- `--desktop-edge: clamp(2rem, 5vw, 6rem)`
- `--desktop-gutter-inline: max(var(--desktop-edge), calc((100vw - var(--desktop-content-max)) / 2 + var(--desktop-edge)))`

Use these to avoid section-by-section ad-hoc horizontal math.

### 2) Centered sections (Hero, Projects)
- Keep Hero and Projects as centered sections
- Ensure both use identical horizontal centering anchor (`margin: 0 auto`, same width constraints)
- Remove conflicting left-biased desktop header alignment for Projects (header/title/backdrop should be centered in desktop context)

### 3) Left-aligned sections (Profile, Career, Contact)
- Keep section blocks constrained by common desktop width
- Align text/content starts to one shared left edge
- Standardize section paddings to a consistent vertical rhythm while preserving each section’s visual personality

### 4) Consistency rules
- Avoid introducing new `!important` except where existing inline style overrides require it
- Prefer shared section rules over repeated per-section values
- Keep interaction and motion behavior unchanged

## Data Flow and Component Impact
- No React state/data flow changes
- No changes to `App.tsx` routing/overlay logic
- No schema/data changes in `src/data/portfolio.ts`
- Primary change surface: `src/desktop.css`

## Error Handling / Edge Cases
- Very wide desktop: content should not over-stretch beyond `--desktop-content-max`
- Narrow desktop around breakpoint: avoid abrupt alignment jumps between 48rem and ~64rem
- Existing reduced-motion behavior remains untouched

## Verification Plan
- Run `npm run build`
- Manual desktop checks at representative widths (>=768, >=1024, >=1280):
  - Hero appears centered
  - Projects appears centered
  - Profile/Career/Contact are left-aligned to same visual start line
  - Floating nav remains usable and does not overlap critical section headings
- Run background QA smoke (existing):
  - `npm run qa:bg:start`
  - `npm run qa:smoke`
  - `npm run qa:bg:stop`

## Rollout Plan
1. Update desktop alignment primitives and shared rules in `src/desktop.css`
2. Adjust Hero/Projects desktop alignment to centered behavior
3. Normalize Profile/Career/Contact left alignment with common anchor
4. Verify build + smoke + visual desktop checks

