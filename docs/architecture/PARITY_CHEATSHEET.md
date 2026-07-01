# Form Control Parity Cheatsheet (Rule 18)

This document is the **Single Source of Truth** for extracting the exact CSS utilities required to achieve perfect "Linearity" (Parity) across all Form Controls (`Input`, `Select`, `Button`, `Checkbox`, `Switch`, etc.) in the **gladcn** project.

Before auditing or creating a new Form Component, reference these exact classes to ensure it is 100% linear with the rest of the library.

## 1. Sizing (`sm`, `md`, `lg`)

All form inputs and buttons must share exact heights and text sizes. For wrapper components (like `InputGroup`), use `min-h-*` instead of fixed `h-*` to allow flexibility.

**Inputs / Selects / Wrappers:**

- `sm`: `h-7 px-2 text-xs` (Wrapper: `min-h-7 text-xs`)
- `md` (Default): `h-8 px-2.5 py-1 text-sm` (Wrapper: `min-h-8 text-sm`)
- `lg`: `h-9 px-3 py-1.5 text-sm` (Wrapper: `min-h-9 text-sm`)

**Buttons:**

- `sm`: `h-7 gap-1.5 px-3 text-xs`
- `md` (Default): `h-8 gap-2 px-4 text-sm`
- `lg`: `h-9 gap-2 px-5 text-sm`

---

## 2. Disabled State

Disabled components must exhibit three behaviors without overlapping (double-dimming).

- **Opacity**: `disabled:opacity-50` (or `has-disabled:opacity-50` on wrappers).
  - _Warning:_ If a wrapper applies `opacity-50`, the child input MUST have `disabled:opacity-100` to prevent double-dimming (25% opacity).
- **Cursor**: `disabled:cursor-not-allowed` (or `has-disabled:cursor-not-allowed` on wrappers).
- **Pointer Events**: `disabled:pointer-events-none`.

---

## 3. Focus State (The Ring)

Focus rings must be perfectly uniform. Do not use generic outline classes.

**Standard Focus:**

```tailwindcss
focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50
```

---

## 4. Invalid State (Validation UX)

This project enforces a **"Ring-on-focus-only"** UX. Invalid inputs display a red border when idle, and emit a red ring _only_ when focused.

**Idle Invalid (No Focus):**

```tailwindcss
aria-invalid:border-destructive dark:aria-invalid:border-destructive/50
```

_(If the element has no native border, like a Checkbox/Switch, omit the border class or apply it appropriately)._

**Focused Invalid:**

```tailwindcss
aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-3 aria-invalid:focus-visible:ring-destructive/20 dark:aria-invalid:focus-visible:ring-destructive/40
```

_(For wrappers, use `has-[...:focus-visible]:...` equivalently)._

---

## 5. Base Aesthetics (Inputs & Selects)

All text inputs and dropdowns share this exact foundation:

```tailwindcss
rounded-lg border border-input bg-transparent transition-colors outline-none dark:bg-input/30
```

## Checklist for Auditing

Whenever auditing a component for parity, ask:

- [ ] Is it strictly `h-7`, `h-8`, or `h-9`?
- [ ] Does it have `focus-visible:ring-3 focus-visible:ring-ring/50`?
- [ ] Does it apply `disabled:opacity-50` exactly once?
- [ ] Does it show a disabled cursor (`cursor-not-allowed`)?
- [ ] Does the error state (`aria-invalid`) ONLY show a red ring on focus?
- [ ] Does the error state keep the red border when focused?
- [ ] Are Dark Mode overrides (`dark:bg-input/30`, `dark:aria-invalid:...`) applied?
