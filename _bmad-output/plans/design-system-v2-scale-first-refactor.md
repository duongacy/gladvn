# `@gladvn` Design System v2 Refactoring Plan (Scale-First Tokens + 100% Explicit `dark:` & Border Audit + Tailwind v4 + `@base-ui/react` + React 19)

**Role:** Principal Design System Engineer responsible for upgrading `@gladvn` across `src/styles/*`, `src/components/micro/*`, `src/components/macro/*`, `src/components/blocks/*`, `app/*`, and test suites.
**Baseline Branch:** `main` (`v0.2.72`)
**Status:** Planned (0 / 31 batches completed)

---

## 0. Confirmed User Decisions & Authorizations

1. **Rule Unlocks (`.agents/AGENTS.md`):**
   - Explicitly bypass/update Rule 26 (`src/styles/*` Feature Freeze) and Rule 28 (Read-Only lock on `src/components/` and `src/blocks/`) for the duration of this refactoring effort.
2. **Full Repository Migration Scope:**
   - Migrate `src/styles/*`, `src/components/micro/*` (54 files), `src/components/macro/*` (24 existing + 1 new `password-input-preset.tsx`), `src/components/blocks/*` (6 files), `app/*` (shell, layout, overview, and all 59 showcase pages), plus all unit tests (`*.test.tsx`).
3. **React 19 Compiler Setup:**
   - Install and enable `babel-plugin-react-compiler` in `package.json`, `vite.config.ts`, and `vite.config.app.ts`, enforcing `0` `CompileError` or bailout warnings.
4. **Retain `--tertiary`:**
   - Keep `tertiary` as a full 11-stop (`50..950`) color scale and retain `color="tertiary"` support across variants and tests.
5. **Preserve Current Brand Hues (8 Scales × 11 Stops `50..950`):**
   - Anchor each scale at step **`600`** using the exact OKLCH hue/value from `src/styles/tokens.css` (already verified for WCAG AA `>= 4.5:1` with white text in Light mode), and derive smooth perceptual 11-stop (`50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950`) OKLCH ramps:
     - `neutral`: cool-slate subtle tint (hue `~258°`, low chroma `0.004–0.014`, `L: 0.985 → 0.145`) for backgrounds, foreground text, hairline borders, hovers, and dividers.
     - `secondary`: achromatic neutral anchored at `600: oklch(0.45 0 0)`.
     - `primary`: Blue hue `262.881°` anchored at `600: oklch(0.54 0.245 262.881)`.
     - `destructive`: Red hue `27.325°` anchored at `600: oklch(0.54 0.245 27.325)`.
     - `warning`: Amber hue `70°` anchored at `600: oklch(0.54 0.13 70)` *(verify WCAG 2.1 text contrast carefully on both Light and Dark solid surfaces)*.
     - `success`: Emerald hue `150°` anchored at `600: oklch(0.53 0.154 150)`.
     - `info`: Blue hue `258°` anchored at `600: oklch(0.54 0.195 258)`.
     - `tertiary`: Violet hue `293°` anchored at `600: oklch(0.54 0.205 293)`.
6. **100% Self-Contained Border / Divide / Ring Colors (Zero Global Default Fallback):**
   - Do **NOT** define `@layer base { *, ::after, ::before { border-color: ... } }` in `src/styles/gladvn.css`.
   - Every element using any border, divide, ring, or outline utility (`border`, `border-t`, `border-r`, `border-b`, `border-l`, `border-x`, `border-y`, `border-2`, `divide-x`, `divide-y`, `ring`, `ring-1`, `ring-2`, `outline`) **MUST** explicitly declare BOTH Light and `dark:` color classes on that element (or `border-transparent` when intentionally hidden). No component may rely on browser `currentColor` or harsh black defaults.

---

## I. Immutable Design & Code Laws

1. **Strict 3-Layer Architecture:**
   - `src/components/micro/*` and `src/styles/*` MUST remain 100% **dumb**: styling, state attributes, borders, focus, responsiveness, and a11y only; **0** business logic, **0** router/query/schema imports, **0** upward imports to `../macro/` or `../blocks/`.
   - `src/components/macro/*` MUST compose exclusively from `src/components/micro/*`.
2. **Figma Auto Layout ("Hug Contents" vs "Fill Container") & Zero-`w-full` Root Law:**
   - All `micro` and `macro` components MUST **never hardcode `w-full` on their root element** — default to `Hug Contents` so they participate naturally in parent Auto Layout containers (`flex flex-col` with `items-stretch`, `flex-1 min-w-0`, `grid`).
   - `<Table>` uses `flex flex-col overflow-x-auto` on `table-container` without forcing a rigid `w-full` on the wrapper or `<table>`.
3. **Zero-Ternary `className` Law:**
   - **Strictly prohibit** ternary expressions (`cond ? 'a' : 'b'`) inside `className` or `cn(...)`. Always use `cn('base', { 'cls-a': cond, 'cls-b': !cond })` or data-attribute variants (`data-active:`).
4. **Concentric Border-Radius Law (`R_inner = R_outer - padding`):**
   - All nested padded containers must maintain exact concentric corner radii (with `--radius: 0.625rem` / `10px`: a `rounded-lg p-1` outer shell pairs with `rounded-sm` `6px` inner controls).
5. **Zero Font-Weight Layout Shift Law:**
   - Never change `font-weight` (e.g. `font-medium` → `font-semibold`) on hover or active states for tabs, menus, toggles, or segmented buttons; indicate state via color, background, border, or underline only.
6. **Low-Shadow Flat-Hairline Elevation Law, Soft Hairline Borders & Single Focus Ring:**
   - Keep static surfaces (`Card`, `Button`, `Input`, `SelectTrigger`, `Checkbox`, `TabsTrigger`, `Badge`, `Table`) flat (`0` drop-shadow), separated via soft cool-neutral hairline borders and subtle tonal contrast.
   - Apply shadows **only** to true floating overlays (`Dialog`, `Confirm`, `Popover`, `DropdownMenu`, `SelectContent`, `Sheet`, `Tooltip`, `ChartTooltipContent`).
   - **Ban harsh near-black borders** in light mode (`border-black*`, resting `border-neutral-400+`, `ring-foreground/10`, `hover:border-foreground/*`).
   - **Single Crisp Focus Ring:** Ban `focus-visible:ring-offset-1` / `ring-offset-background` (causes double rings when combined with invalid borders). Standardize on a single ring:
     `focus-visible:border-primary-600 focus-visible:ring-3 focus-visible:ring-primary-500/20 dark:focus-visible:border-primary-400 dark:focus-visible:ring-primary-400/25`
     (and `destructive` equivalents for `aria-invalid`).
7. **Zero-Specificity `:where()` & React 19 Compiler Clean:**
   - Wrap all contextual sizing selectors in `:where(...)` so consumer Tailwind utilities always override cleanly.
   - Achieve **0** `CompileError` or bailouts from React 19 Compiler (`babel-plugin-react-compiler`).

---

## II. Scale-First Token Architecture & 100% Manual `dark:` Audit

### 1. Simplify `src/styles/tokens.css` & `src/styles/gladvn.css`
- **Philosophy:** The global token file defines only base color scales (`50..950`), fonts, and radius — never guessing component context and never defining `.dark {}` or `.light {}` implicit variable overrides.
- **Delete premature / over-tokenized globals:**
  - Remove all **8 `--sidebar-*`** variables and **5 `--chart-1`..`--chart-5`** variables.
  - Remove redundant semantic surface/foreground variables: `--background`, `--foreground`, `--card`, `--card-foreground`, `--popover`, `--popover-foreground`, `--muted`, `--muted-foreground`, `--accent`, `--accent-foreground`, `--input`, `--ring`, and redundant `*-foreground` tokens.
  - Remove `.light {}` and `.dark {}` blocks from `src/styles/tokens.css`.
  - Remove landing-page animations from `src/styles/gladvn.css` (`--animate-float*`, `--animate-fade-up`, `@keyframes float`, `@keyframes fadeUp`), keeping core UI animations (e.g., accordion).
- **Retain a single `:root` block in `src/styles/tokens.css` mapped into `@theme inline` in `src/styles/gladvn.css`:**
  - Typography & Geometry: `--font-sans`, `--font-mono`, `--radius: 0.625rem` (and derived `--radius-sm/md/lg/xl/2xl/3xl/4xl`).
  - 8 Color Scales (`50`..`950`): `neutral`, `secondary`, `primary`, `destructive`, `warning`, `success`, `info`, `tertiary`.
  - Retain `@custom-variant dark (&:is(.dark *));` in `src/styles/gladvn.css`.
  - **Do NOT add any `@layer base` global `border-color` reset.**

### 2. Mandatory 100% Component Audit & `dark:` Styling (`micro/*` & `macro/*`)
Every single file in `src/components/micro/*` and `src/components/macro/*` must be individually audited to:
1. Replace 100% of removed legacy tokens (`bg-background`, `bg-card`, `bg-popover`, `bg-muted`, `bg-accent`, `text-foreground`, `text-muted-foreground`, `border-border`, `border-input`, `ring-ring`, `bg-sidebar*`, etc.) with explicit scale classes (`neutral-*`, `secondary-*`, `primary-*`, `destructive-*`, `warning-*`, `success-*`, `info-*`, `tertiary-*`).
2. Add complete `dark:` classes and explicit border colors across **every state** (rest, hover, active, selected, highlighted, focus-visible, disabled, aria-invalid):
   - **Surfaces & Depth:**
     - Static Card / Surface: `bg-white text-neutral-900 ring-1 ring-neutral-200 dark:bg-neutral-900 dark:text-neutral-100 dark:ring-neutral-800`
     - Floating Overlays (`Dialog`, `Confirm`, `Popover`, `DropdownMenu`, `SelectContent`, `Sheet`, `HoverCard`, `ContextMenu`, `Command`, `Tooltip`): `bg-white text-neutral-900 ring-1 ring-neutral-200 dark:bg-neutral-900 dark:text-neutral-100 dark:ring-neutral-700/80` (+ elevated shadow)
     - Subtle Track / TableHeader / Skeleton / Kbd (`TabsList`, `TableHeader`, `Skeleton`, `Progress`, `Slider`): `bg-neutral-100 dark:bg-neutral-800`
   - **Typography, Placeholders & Icons:**
     - Primary: `text-neutral-900 dark:text-neutral-100`
     - Secondary / Description / Resting Icon / Placeholder: `text-neutral-500 dark:text-neutral-400`
   - **Hairline Borders & Dividers (Always Explicit Light + `dark:`):**
     - Resting: `border-neutral-200 dark:border-neutral-800`
     - Hover Control: `hover:border-neutral-300 dark:hover:border-neutral-700`
     - Divider (`Separator`, `TableRow`, `MenuSeparator`): `bg-neutral-200 dark:bg-neutral-800` or `border-neutral-200 dark:border-neutral-800`
   - **Color Variants (`primary`, `secondary`, `destructive`, `warning`, `success`, `info`, `tertiary`) with WCAG 2.1 AA (`>= 4.5:1` text, `>= 3.0:1` UI):**
     - Solid: `bg-<color>-600 text-white hover:bg-<color>-700 dark:bg-<color>-500 dark:text-white dark:hover:bg-<color>-400` *(check `warning` contrast carefully on both Light and Dark; adjust text color if needed for `>= 4.5:1`)*
     - Soft: `bg-<color>-50 text-<color>-700 hover:bg-<color>-100 dark:bg-<color>-950/60 dark:text-<color>-300 dark:hover:bg-<color>-900/60`
     - Outline: secondary uses `border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800`; colored outline uses `border-<color>-300 text-<color>-700 hover:bg-<color>-50 hover:border-<color>-400 dark:border-<color>-700 dark:text-<color>-300 dark:hover:bg-<color>-950/50`
     - Ghost / Link / Text Accent: `text-<color>-600 hover:bg-<color>-50 dark:text-<color>-400 dark:hover:bg-<color>-950/50`
   - **Interactive States:** Verify `hover:`, `active:`, `data-active:`, `data-checked:`, `data-selected:`, `data-highlighted:`, `focus-visible:`, `disabled:`, and `aria-invalid:` in both Light and Dark across all interactive controls.

---

## III. Targeted Fixes (Groups A, B, C)

### Group A — Core Layout & Responsive Fixes (`src/components/micro/*`)
1. `field.tsx`: Change `fieldVariants` from `group/field flex min-w-fit` to `group/field flex min-w-0` so `<Field>` / `<FieldPreset>` / `<SelectPreset>` do not overflow 2–3 column CSS Grids or Flex rows on Desktop or Mobile; preserve minimum vertical gaps (`sm: gap-1`, `md: gap-1.5`, `lg: gap-2`).
2. `card.tsx`: Wrap contextual sizing in `:where(...)`; apply `pt-0` to `CardContent` **only** when preceded by `CardHeader` (e.g. `[:where([data-slot=card]:has([data-slot=card-header])_&)]:pt-0` or `[data-slot=card-header]+&`); keep `<Card>` flat with zero shadow and explicit hairline border.
3. `dialog.tsx` & `confirm.tsx`: Ensure `DialogContent` / `ConfirmContent` use `w-[calc(100%-2rem)] max-w-[calc(100%-2rem)]` (prevent ~210px squeeze on `375px` mobile) and `*:min-w-0` / `flex flex-col min-w-0` so inner tables/tabs never cause horizontal overflow; overlay uses `bg-neutral-950/35 dark:bg-black/60 backdrop-blur-xs`; support clean mobile scrolling (`DialogBody` / `max-h-[calc(100dvh-2rem)] flex flex-col`) so headers/footers are never clipped when validation errors or tall forms appear.
4. `sheet.tsx`: Prevent `data-[side=left]:w-3/4` / `data-[side=right]:w-3/4` from overriding consumer `w-full` on `375px` mobile — wrap in `:where()` or expose a `size` prop for smooth full-width mobile sheets.
5. `select.tsx`: Update `SelectContent` from `w-[calc(var(--anchor-width)+8px)]` to `min-w-(--anchor-width) max-w-[calc(100vw-2rem)]` for readable long options without mobile viewport overflow; ensure `SelectTrigger` & `SelectValue` include `min-w-0` + `truncate`; remove static `shadow-2xs`.
6. `table.tsx` & `empty.tsx`: `table.tsx` uses `flex flex-col overflow-x-auto` on `table-container` without hardcoded `w-full` and adds explicit Light/Dark hairline borders on rows/headers; `empty.tsx` pairs `border-dashed` with explicit `border-neutral-200 dark:border-neutral-800`.

### Group B — Micro-Control Polish
7. `tabs.tsx`: Concentric radius (`TabsList`: `rounded-lg p-1 bg-neutral-100 ring-1 ring-neutral-200/80 dark:bg-neutral-800/80 dark:ring-neutral-700/80`, `data-[variant=line]:rounded-none data-[variant=line]:bg-transparent data-[variant=line]:p-0 data-[variant=line]:ring-0`; `TabsTrigger`: `rounded-sm`); fixed `font-medium`; flat active ring (`data-active:bg-white data-active:text-primary-600 data-active:ring-1 data-active:ring-neutral-200/80 dark:data-active:bg-neutral-900 dark:data-active:text-primary-400 dark:data-active:ring-neutral-700`), line variant `after:bg-primary-600 dark:after:bg-primary-400`; remove `focus-visible:ring-offset-1 focus-visible:ring-offset-background` and `data-active:shadow-sm`.
8. `input-group.tsx`, `alert.tsx`, `input-otp.tsx`, `checkbox.tsx`, `button.tsx`:
   - `input-group.tsx`: remove excess vertical padding on `InputGroupAddon`; make internal icon buttons balanced squares (`self-center rounded-md`) so focus rings are never clipped into a D-shape.
   - `alert.tsx`: align icon with first line of text via CSS grid (`[&:has([data-slot=alert-icon])]:grid`) and apply soft tint borders in both Light and `dark:` across all variants including `tertiary`.
   - `input-otp.tsx`: wrap `[data-slot=otp]` contextual sizing in `:where(...)` so consumers can override touch targets to `>= 44px` (`size-12`).
   - `checkbox.tsx` & `button.tsx`: remove static `shadow-2xs` and standardize single focus ring.

### Group C — React 19 Compiler, Clean Dependencies & Macro Presets (`src/components/macro/*`)
9. **Compiler & Dead Code Fixes:**
   - Remove unused `@radix-ui/react-dialog` import from `src/components/micro/drawer.tsx`.
   - Fix top-level `useRender({ ref })` usage in `micro/alert.tsx`, `micro/badge.tsx`, and `micro/breadcrumb.tsx` (`0` `CompileError`).
   - Hoist default JSX outside component in `macro/input-otp-preset.tsx`.
   - Refactor `macro/date-picker.tsx`: replace `useEffect` state sync with `handleOpenChange`, add `type="button"` to all footer buttons (prevents accidental `<form>` submit), and expose customizable `locale` & label props instead of hardcoded English strings.
10. **Macro DX, Testability & New Preset:**
    - Forward `ref`, `data-testid`, `name`, and `onBlur` on `SelectPreset`, `ComboboxPreset`, `DatePicker`, `ConfirmPreset`, and `EmptyPreset`.
    - Add `prefix` / `leadingIcon` support on `SelectPreset` (rendered cleanly inside the trigger).
    - Create **`PasswordInputPreset`** (`src/components/macro/password-input-preset.tsx`) with show/hide toggle button, `forwardRef`, `toggleTestId`, and customizable `aria-label`, and export it in `macro/index.ts`, `src/preset.ts`, and `src/index.ts`.
    - Upgrade `ComboboxPreset`: when `value` holds an ID/UUID while `options` are still loading asynchronously with no match yet, render a clean placeholder/loading display instead of leaking the raw UUID string in the input.

---

## IV. 31-Batch Execution Roadmap

### Phase 0 — Rule Unlocks, Compiler & Token Foundation (2 Batches)
- [ ] **Batch 0.1 — Rule Unlocks & React 19 Compiler Setup:** Update `.agents/AGENTS.md` (unlock Rules 26 & 28 for this refactor, document Scale-First & Explicit Border Color laws); install `babel-plugin-react-compiler` in `package.json`; configure React Compiler in `vite.config.ts` and `vite.config.app.ts`.
- [ ] **Batch 0.2 — Token & Global CSS Refactor:** Rebuild `src/styles/tokens.css` (single `:root` with 8 × 11 OKLCH scales, fonts, `--radius`; remove `.light`, `.dark`, `--sidebar-*`, `--chart-*`, semantic surface/foreground vars); update `src/styles/gladvn.css` (map 8 × 11 scales into `@theme inline`, keep `@custom-variant dark` and accordion keyframes, remove landing animations, **no** global `@layer base` border reset); update `app/index.css` to `var(--neutral-*)` for light and `.dark`.

### Phase 1 — 54 Micro Components (11 Batches + Unit Tests)
- [ ] **Batch 1.1 — Core Actions & Inline (5):** `button.tsx`, `badge.tsx`, `kbd.tsx`, `separator.tsx`, `spinner.tsx` (+ related `*.test.tsx`).
- [ ] **Batch 1.2 — Structural & Layout (5):** `card.tsx`, `aspect-ratio.tsx`, `collapsible.tsx`, `direction.tsx`, `theme-provider.tsx` (+ related `*.test.tsx`).
- [ ] **Batch 1.3 — Form Controls I (5):** `label.tsx`, `field.tsx`, `input.tsx`, `textarea.tsx`, `input-group.tsx` (+ related `*.test.tsx`).
- [ ] **Batch 1.4 — Form Controls II (5):** `checkbox.tsx`, `radio-group.tsx`, `switch.tsx`, `slider.tsx`, `input-otp.tsx` (+ related `*.test.tsx`).
- [ ] **Batch 1.5 — Toggle & Navigation I (5):** `toggle.tsx`, `toggle-group.tsx`, `tabs.tsx`, `breadcrumb.tsx`, `pagination.tsx` (+ related `*.test.tsx`).
- [ ] **Batch 1.6 — Feedback & Status (5):** `alert.tsx`, `empty.tsx`, `progress.tsx`, `skeleton.tsx`, `sonner.tsx` (+ related `*.test.tsx`).
- [ ] **Batch 1.7 — Display & Data (5):** `avatar.tsx`, `accordion.tsx`, `item.tsx`, `table.tsx`, `scroll-area.tsx` (+ related `*.test.tsx`).
- [ ] **Batch 1.8 — Overlays I (5):** `dialog.tsx`, `confirm.tsx`, `sheet.tsx`, `drawer.tsx`, `tooltip.tsx` (+ related `*.test.tsx`).
- [ ] **Batch 1.9 — Overlays & Menus II (5):** `popover.tsx`, `hover-card.tsx`, `dropdown-menu.tsx`, `context-menu.tsx`, `menubar.tsx` (+ related `*.test.tsx`).
- [ ] **Batch 1.10 — Selection & Command (4):** `select.tsx`, `combobox.tsx`, `command.tsx`, `navigation-menu.tsx` (+ related `*.test.tsx`).
- [ ] **Batch 1.11 — Complex Widgets (5):** `calendar.tsx`, `carousel.tsx`, `chart.tsx`, `resizable.tsx`, `sidebar.tsx`.

### Phase 2 — 24 Existing Macro Presets + `PasswordInputPreset` (6 Batches + Unit Tests)
- [ ] **Batch 2.1 — Display Presets (5):** `accordion-preset.tsx`, `alert-preset.tsx`, `avatar-preset.tsx`, `breadcrumb-preset.tsx`, `card-preset.tsx` (+ tests).
- [ ] **Batch 2.2 — Input Presets & New `PasswordInputPreset` (5 + exports):** `field-preset.tsx`, `input-preset.tsx`, `textarea-preset.tsx`, `input-otp-preset.tsx`, new `password-input-preset.tsx`, plus exports in `src/components/macro/index.ts`, `src/preset.ts`, `src/index.ts` (+ tests).
- [ ] **Batch 2.3 — Choice & Range Presets (5):** `checkbox-preset.tsx`, `radio-group-preset.tsx`, `switch-preset.tsx`, `slider-preset.tsx`, `progress-preset.tsx` (+ tests).
- [ ] **Batch 2.4 — Selection & Date Presets (3):** `select-preset.tsx`, `combobox-preset.tsx`, `date-picker.tsx`.
- [ ] **Batch 2.5 — Overlay & Feedback Presets (4):** `dialog-preset.tsx`, `confirm-preset.tsx`, `empty-preset.tsx`, `command-preset.tsx`.
- [ ] **Batch 2.6 — Navigation & Media Presets (3):** `tabs-preset.tsx`, `pagination-preset.tsx`, `carousel-preset.tsx` (+ tests).

### Phase 3 — `src/components/blocks/` & `app/` Showcase (10 Batches)
- [ ] **Batch 3.1 — Blocks (6):** `auth-form.tsx`, `auth-recovery.tsx`, `auth-split.tsx`, `dashboard.tsx`, `pricing.tsx`, `settings.tsx`.
- [ ] **Batch 3.2 — App Shell & Layout (9):** `App.tsx`, `BlockViewer.tsx`, `Container.tsx`, `GladvnLogo.tsx`, `code-highlighter.tsx`, `showcase.tsx`, `CommandMenu.tsx`, `Header.tsx`, `Sidebar.tsx`.
- [ ] **Batch 3.3 — App Overview I (5):** `overview.tsx`, `HeroSection.tsx`, `ArchitectureSection.tsx`, `PrinciplesSection.tsx`, `TragediesSection.tsx`.
- [ ] **Batch 3.4 — App Overview II (5):** `ColorPaletteSection.tsx` (update to display all 8 scales × 11 stops), `FeatureGridSection.tsx`, `DashboardPreview.tsx`, `CodeBlock.tsx`, `FooterCTA.tsx`.
- [ ] **Batch 3.5 — Showcases Group 1 (10):** `accordion.tsx`, `aspect-ratio.tsx`, `badge.tsx`, `button.tsx`, `card.tsx`, `collapsible.tsx`, `item.tsx`, `kbd.tsx`, `separator.tsx`, `spinner.tsx`.
- [ ] **Batch 3.6 — Showcases Group 2 (9):** `checkbox.tsx`, `input-group.tsx`, `input-otp.tsx`, `input.tsx` (include `PasswordInputPreset`), `label.tsx`, `radio-group.tsx`, `slider.tsx`, `switch.tsx`, `textarea.tsx`.
- [ ] **Batch 3.7 — Showcases Group 3 (8):** `calendar.tsx`, `combobox.tsx`, `command.tsx`, `pagination.tsx`, `select.tsx` (include `prefix` & long option), `tabs.tsx`, `toggle-group.tsx`, `toggle.tsx`.
- [ ] **Batch 3.8 — Showcases Group 4 (10):** `confirm.tsx`, `context-menu.tsx`, `dialog.tsx`, `drawer.tsx`, `dropdown-menu.tsx`, `hover-card.tsx`, `menubar.tsx`, `popover.tsx`, `sheet.tsx`, `tooltip.tsx`.
- [ ] **Batch 3.9 — Showcases Group 5 (11):** `alert.tsx`, `avatar.tsx`, `breadcrumb.tsx`, `empty.tsx`, `navigation-menu.tsx`, `progress.tsx`, `scroll-area.tsx`, `skeleton.tsx`, `sonner.tsx`, `table.tsx`, `toast.tsx`.
- [ ] **Batch 3.10 — Showcases Group 6 & Blocks (11):** `carousel.tsx`, `chart.tsx`, `resizable.tsx`, `sidebar.tsx`, `theme-provider.tsx`, `auth-form-block.tsx`, `auth-recovery-block.tsx`, `auth-split-block.tsx`, `dashboard-block.tsx`, `pricing-block.tsx`, `settings-block.tsx` (+ `app/config/data.ts` if needed).

### Phase 4 — Final Verification, Visual QA & Handoff (2 Batches)
- [ ] **Batch 4.1 — Full Static, Compiler, Build & Test Audit:** Verify 0 legacy tokens, 0 uncolored borders/divides/rings, 0 ternaries in `className`/`cn()`, 0 root `w-full` in `micro`/`macro`, 0 3-layer violations; remove `@radix-ui/react-dialog` if unused; pass `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`, and library build with `babel-plugin-react-compiler` (0 `CompileError` / bailout).
- [ ] **Batch 4.2 — Visual QA (Light & Dark × Desktop `1440×900` & Mobile `375×812`) & Final Report:** Inspect `Field` in 2–3 col grids, `Card` with/without `CardHeader`, concentric `Tabs` without weight shift, `Dialog`/`Sheet` at `375px`, `SelectPreset` with `prefix` & long options, `Empty` dashed border, `DatePicker` inside `<form>`, `PasswordInputPreset`, and WCAG 2.1 contrast; deliver 100% component audit table (54 micro + 25 macro), file-by-file summary, and consumer Migration Guide.

---

## V. Mandatory Verification Gate (Per Batch & Final)

After **each** batch (before committing locally, never pushing):
1. Static grep on modified files:
   - `0` legacy deleted tokens (`bg-background`, `bg-card`, `bg-popover`, `bg-muted`, `bg-accent`, `text-foreground`, `text-muted-foreground`, `border-border`, `border-input`, `ring-ring`, `sidebar-`, `chart-`).
   - `0` border/divide/ring/outline utilities missing explicit Light + `dark:` color classes.
   - `0` ternaries inside `className` / `cn(...)`.
   - `0` root `w-full` on `micro`/`macro` components.
   - `0` `ring-offset-*` or static `shadow-2xs`/`shadow-sm` on flat surfaces.
   - `0` 3-layer boundary violations (`micro` never imports `macro`, `blocks`, router, query, or schema).
2. Run `pnpm typecheck` and targeted `vitest run` for the batch's tests.
3. Commit locally per completed batch (do NOT push).
