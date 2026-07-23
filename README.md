# 🌊 gladvn

> **✨ [Explore the Interactive Showcase & Documentation](https://gladvn.vercel.app/)**

A highly composable, accessible, and beautifully designed React component library. Built on top of [shadcn/ui](https://ui.shadcn.com/), [Base UI](https://base-ui.com/), and powered by **Tailwind CSS v4+**, `gladvn` provides a robust, zero-magic foundation for your next web application. 

Designed with strict architectural principles, `gladvn` is optimized not just for human developers, but specifically for **AI coding assistants**, ensuring predictable styling and maintenance.

---

## ✨ Key Features

- **Micro & Macro Architecture**: Cleanly separates primitive UI elements (Micro) from complex, stateful, composite components (Macro).
- **Zero-Portal API**: Say goodbye to manual `ThemeWrapper` and `*Portal` imports. Overlays (Dialog, Tooltip, Select) automatically tunnel the theme and manage portals out of the box.
- **Zero "Magic CSS"**: No arbitrary deep descendant overrides (`[&_p]`, `has-[>div]`). Styling is predictable, slot-based, and relies on strict data-attributes (e.g., `data-active`, `data-disabled`).
- **Tailwind CSS v4 Ready**: Fully compatible with the modern `@tailwindcss/postcss` and `@tailwindcss/vite` ecosystem.
- **Copy-Paste or Install**: Choose between cloning the source code directly into your repo (the shadcn way) or installing it as a standard npm dependency.
- **55+ Components**: From basic buttons to complex comboboxes and date pickers.
- **Comprehensive Showcase**: Comes with an interactive, beautifully designed showcase featuring bilingual documentation (Vietnamese/English).

---

## 🚀 Installation

> [!WARNING]  
> **Please use `npx` to clone the components into your project.** Installing via `npm` is no longer supported. Using `npx` gives you full control over the source code and styling, which is the core philosophy and intended way to use this library.

We highly recommend using the CLI to initialize components for maximum flexibility.

### Installation

This approach automatically copies all component source code, hooks, and styles directly into your project. You own the code, you can freely modify it, and the CLI will automatically install necessary peer dependencies for you!

```bash
npx gladvn init
```

*By default, this will create a `gladvn` folder at your project root. If you prefer to place it elsewhere, specify the path:*
```bash
npx gladvn init components/ui
```

**Usage:**
```tsx
// Import directly from your local folder
import { Button } from "@/gladvn/components/micro/button";
```



---

## 🏗️ Architecture: Micro vs. Macro

Most component libraries fail in their second year because developers become afraid to modify the core files. `gladvn` solves this with explicit architectural boundaries:

- **Micro Components** (`components/micro/`): "Dumb" presentational primitives (e.g., `Button`, `Badge`, `Input`). They do not contain internal React state (`useState`) or business logic. They strictly rely on props for rendering and avoid dictating layout boundaries (like `w-full`).
- **Macro Components** (`components/macro/`): "Smart" presets and compositions (e.g., `DatePicker`, `SelectPreset`, `PaginationPreset`). These components combine multiple Micro components and manage complex state, accessibility (a11y), and interactions. Macro components strictly reuse Micro components via pure composition.

## 🎨 Theming & Customization

`gladvn` uses standard CSS variables for theming, ensuring zero runtime parsing overhead. You can easily override these variables in your own CSS file.

```css
:root {
  --primary: oklch(0.6 0.25 260);
  --primary-foreground: oklch(0.98 0 0);
  --radius: 0.5rem;
}
```

If you cloned the components via `npx` (Option 1), you can modify the CSS directly inside the `gladvn/styles/` directory.

---

## 📦 Included Components

| Basic | Forms & Inputs | Overlays & Feedback | Navigation & Data |
| --- | --- | --- | --- |
| Button, Badge, Avatar | Input, Textarea, Checkbox | Dialog, Alert Dialog | Breadcrumb, Menubar |
| Card, Separator | Select, Combobox, Slider | Popover, Tooltip | Tabs, Pagination |
| Skeleton, Spinner | Switch, Radio Group | Sheet, Drawer | Table, Accordion |
| Aspect Ratio | Input OTP, Command | Sonner (Toasts) | Carousel, Chart |

---

## 📄 License

MIT © Duongy96
