# sadcn

A custom component library built on top of [shadcn/ui](https://ui.shadcn.com/). All 55+ components bundled and ready to use.

## Installation

```bash
npm install sadcn
```

### Prerequisites

Your project must have **Tailwind CSS v4+** installed:

```bash
npm install tailwindcss @tailwindcss/postcss
```

## Setup

### 1. Import the CSS preset

Add the sadcn globals CSS to your main CSS file:

```css
/* app/globals.css or src/index.css */
@import "sadcn/globals.css";
```

### 2. Configure Tailwind content

Make sure Tailwind scans the sadcn components:

```css
/* In your main CSS file */
@import "tailwindcss";
@source "../node_modules/sadcn/dist";
@import "sadcn/globals.css";
```

## Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "sadcn"

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello from sadcn!</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="destructive">Click me</Button>
      </CardContent>
    </Card>
  )
}
```

## Available Components

All 55 shadcn/ui components are included:

| Component | Component | Component |
|-----------|-----------|-----------|
| Accordion | Alert | Alert Dialog |
| Aspect Ratio | Avatar | Badge |
| Breadcrumb | Button | Button Group |
| Calendar | Card | Carousel |
| Chart | Checkbox | Collapsible |
| Combobox | Command | Context Menu |
| Dialog | Direction | Drawer |
| Dropdown Menu | Empty | Field |
| Hover Card | Input | Input Group |
| Input OTP | Item | Kbd |
| Label | Menubar | Native Select |
| Navigation Menu | Pagination | Popover |
| Progress | Radio Group | Resizable |
| Scroll Area | Select | Separator |
| Sheet | Sidebar | Skeleton |
| Slider | Sonner | Spinner |
| Switch | Table | Tabs |
| Textarea | Toggle | Toggle Group |
| Tooltip | | |

## Utilities

```tsx
import { cn } from "sadcn"

// Merge Tailwind classes with conflict resolution
cn("px-4 py-2", "px-8") // → "px-8 py-2"
```

## Hooks

```tsx
import { useIsMobile } from "sadcn"

function MyComponent() {
  const isMobile = useIsMobile()
  // ...
}
```

## Dark Mode

Add the `dark` class to your `<html>` element to enable dark mode:

```html
<html class="dark">
```

Or use `next-themes` for automatic dark mode:

```tsx
import { ThemeProvider } from "next-themes"

<ThemeProvider attribute="class">
  <App />
</ThemeProvider>
```

## Customization

Override CSS variables in your own CSS to customize the theme:

```css
:root {
  --primary: oklch(0.6 0.25 260);
  --primary-foreground: oklch(0.98 0 0);
  --radius: 0.5rem;
}
```

## License

MIT
