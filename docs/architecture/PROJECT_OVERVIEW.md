# Project Overview

## What is Hybridcn (sadcn)?

**Hybridcn** (`@duongy96/hybridcn`) is a highly composable React component library built with Tailwind CSS v4, optimized for both human developers and AI coding assistants. It provides a two-tier architecture of **Micro** (atomic, composable) and **Macro** (preset, batteries-included) components.

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| **UI Framework** | React | ≥18 |
| **Styling** | Tailwind CSS | ≥4 |
| **Headless UI** | @base-ui/react | ^1.6.0 |
| **Variant System** | class-variance-authority (cva) | ^0.7.1 |
| **Build** | Vite + vite-plugin-dts | — |
| **Testing** | Vitest + React Testing Library + Playwright | — |
| **Linting** | oxlint | — |
| **Icons** | lucide-react | ^1.21.0 |

## Directory Structure

```
src/
├── components/
│   ├── micro/          # Atomic, composable UI primitives
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── combobox.tsx
│   │   └── ... (54 component files)
│   └── macro/          # Preset wrappers (batteries-included)
│       ├── input-preset.tsx
│       ├── combobox-preset.tsx
│       └── ... (18 preset files)
├── dev/
│   ├── showcase/       # Micro component demos
│   │   ├── button.tsx
│   │   └── ...
│   └── showcase/macro/ # Macro preset demos
│       ├── combobox.tsx
│       └── ...
├── lib/
│   ├── utils.ts        # cn() utility
│   └── types.ts        # Shared types (Size, etc.)
├── styles/
│   ├── globals.css     # Global styles
│   └── tokens.css      # Design tokens
└── test/
    └── setup.ts        # Vitest setup

tests/                  # Playwright visual regression tests
docs/architecture/      # Architecture documentation
.agents/AGENTS.md       # AI coding rules
```

## Architecture: Micro vs Macro

### Micro Components (Atomic)

- **Location**: `src/components/micro/`
- **Purpose**: Thin wrappers around headless UI primitives (mostly `@base-ui/react`)
- **Pattern**: Export named sub-components (`Button`, `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`)
- **Styling**: Tailwind utility classes with `data-slot` attributes for targeting
- **Variants**: Managed via `class-variance-authority` (cva)
- **Data Attributes**: Use `data-slot="component-name"` for CSS targeting and testing

### Macro Components (Presets)

- **Location**: `src/components/macro/`
- **Purpose**: Batteries-included presets that compose micro components
- **Pattern**: Single default export (e.g., `AccordionPreset`) that accepts data props (`items`, `options`)
- **Rule**: MUST reuse micro components exactly — no rewriting logic (see AGENTS.md Rule 9)
- **Type Convention**: Use `type` intersections, not `interface extends` (see AGENTS.md Rule 10)

### Relationship Example

```tsx
// MICRO — composable, fine-grained control
<Accordion>
  <AccordionItem value="1">
    <AccordionTrigger>Title</AccordionTrigger>
    <AccordionContent>Content</AccordionContent>
  </AccordionItem>
</Accordion>

// MACRO — data-driven, quick to use
<AccordionPreset items={[
  { value: "1", title: "Title", content: "Content" }
]} />
```

## Key Conventions

1. **Type Definitions**: Use `type X = ComponentProps<> & { ... }` instead of `interface extends`
2. **Tailwind Data Attributes**: Use `data-highlighted:` not `data-[highlighted]:`
3. **CSS calc()**: Wrap subtracted variables in parentheses: `calc(X - (Y))`
4. **Collection Components**: Always pass `items` prop for data-driven rendering
5. **No Magic CSS**: Use `data-slot` and semantic states, not deep descendant selectors

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with showcase |
| `npm run build` | Build library for production |
| `npm test` | Run Vitest unit tests |
| `npm run lint` | Run oxlint |

## Testing

- **Unit Tests**: Vitest + React Testing Library (`src/**/*.test.tsx`)
- **Visual Regression**: Playwright (`tests/showcase.spec.ts`)
- **Test Pattern**: Co-located with components (`button.test.tsx` next to `button.tsx`)
