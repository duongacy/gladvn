# Showcase Development Standards

When creating or modifying showcase files in `src/dev/showcase/*.tsx`, you MUST STRICTLY adhere to the following standards to ensure consistency across the component library.

## 1. File Structure and Imports

- Always import the showcase layout components: `import { SectionHeader, ExampleSection, ExampleGrid } from "../components/showcase";`
- The default export must be a function named `[Component]Showcase`.
- The root element must be a `<div className="space-y-10">`.

## 2. Global State (Size Toggle)

- If the component supports a `size` prop (e.g., Button, Badge, Input), you MUST pass the `globalSize` prop (from `useDevContext()`) to ALL components in the showcase.
- **PROHIBITED:** DO NOT create dedicated `<ExampleSection>` blocks just to demo sizes (e.g., "Small", "Medium", "Large"). The global size toggle in the UI already handles this. Creating redundant size blocks is strictly forbidden.

## 3. SectionHeader

- Every showcase MUST start with a `<SectionHeader>` containing:
  - `title`: The component name.
  - `description`: A brief description of what the component does.

## 4. Examples Layout

- Wrap every distinct example in an `<ExampleSection label="Name" description="Description">`.
- Use `<ExampleGrid>` to place multiple related `<ExampleSection>` blocks together.
- Use `<ExampleSection fullWidth>` when the component needs to stretch the entire width of the container.

## 5. Coverage Requirements

- You MUST demo ALL **visible** exported sub-components (e.g., if a component exports `Card`, `CardHeader`, `CardTitle`, `CardContent`, they must all be shown).
- Exclude internal/invisible components like `*Portal`, `*Overlay`, and exported functions like `*Variants` unless specifically needed.
- You MUST provide sections that demonstrate ALL supported `variant` and `color` props.
- You MUST provide a section for specific states if applicable (e.g., "Disabled", "Error/Validation", "Loading").
- Group related examples logically (e.g., "Variants", "Colors", "With Icons", "Disabled", "Real-world Use Cases").

## 6. Prohibited Practices

- DO NOT invent custom wrappers or styles unless absolutely necessary. Rely entirely on `ExampleSection`.
- DO NOT mix `color` and `variant` arbitrarily if they are supposed to be orthogonal. Show them clearly.
- DO NOT leave any exported component un-demoed.

## 7. Component Styling Philosophy (No Magic CSS)

- **🔥 FATAL ERROR - NO CONDITIONAL STRING INTERPOLATION**: NEVER use ternary operators or string interpolation inside className template strings to switch classes (e.g., `className={"... " + (isActive ? "bg-blue" : "bg-red")}` or `className={\`... \${cond ? 'a' : 'b'}\`}`). This makes the code unmaintainable and is strictly forbidden.
- **PERMITTED CONDITIONAL STYLING**: If you need conditional classes, you MUST use either:
  1. **Data Attributes** (Preferred for Headless UI states): e.g., `data-active={isActive ? "" : undefined}` and styling via `data-active:bg-blue`.
  2. **`cn()` Object Syntax** (For internal logic/props): e.g., `className={cn("base-classes", { "bg-blue": isActive, "bg-red": !isActive })}`.
- **Good (Permitted)**: Leverage data-attributes provided by headless UI libraries (e.g., `data-[state=open]`, `data-disabled`, `data-[slot=...]`) for state-driven styling. Querying descendant elements via these attributes (e.g., `[&_[data-slot=icon]]`) is perfectly valid and aligns with the intended component architecture.
- **Exception for Icons (DX over Purity)**: To optimize Developer Experience and avoid forcing consumers to remember `data-slot="icon"`, querying standard icons via `[&_svg]` or `[&>svg]` is **PERMITTED** to set default sizes inside icon-hosting components (like Button, Badge, Separator). However, you **MUST** combine it with the `:not([class*='size-'])` pseudo-class so consumers can safely override the size. Example: `[&>svg:not([class*='size-'])]:size-4`.
- **Bad (Prohibited - Overthinking)**: Do NOT use complex CSS descendant combinators or "magic CSS" (like `*:[a]`, `[&_p]`, `has-[>div]`, or deeply nested `group-has-[...]`) to forcibly access and override arbitrary HTML child elements' styles (other than the strict icon exception above). Intervening too deeply into specific generic tags should be avoided.
- **Reasoning**: Overriding arbitrary child tags violates the encapsulation of a component library. It creates unexpected overriding behaviors ("bị đè") that are highly confusing to consumers and makes the CSS architecture feel "dirty" and unmaintainable. Data-slots and semantic states are the correct contract for cross-element styling.
- Keep component CSS strictly isolated to the component's own boundaries and predefined slots.
- **CSS Variables Restriction**: Strictly limit the use of arbitrary CSS variables (`var(--...)` or `[--my-var:...]`) within Tailwind classes.
  - **Permitted**: Only use them when consuming values dynamically calculated and exposed by underlying headless UI libraries at runtime (e.g., `--radix-accordion-content-height`, `--radix-collapsible-content-width`).
  - **Prohibited**: DO NOT use CSS variables to pass static state (like `size`, `radius`, `color`) down the component tree (e.g. `[--cell-size:--spacing(6)]` at the wrapper and `w-(--cell-size)` on children).
  - **Solution**: For all static styling that depends on a component's props (like `size="sm"`), use standard Tailwind utility classes directly. If child elements need to react to a parent's state, use Tailwind's `group` modifiers (e.g., `group-[.calendar-sm]/calendar:size-6`). This ensures classes are properly extracted at build time and avoids runtime style parsing overhead.

## 8. Headless UI Collection Components (e.g., Base UI Combobox, Select)

- **The `items` Prop is Mandatory**: When building wrappers around Headless UI collection components (like `Combobox`, `Select`, `Tabs` etc.), ALWAYS ensure the root component receives the `items` (or equivalent data array) prop if required by the library's design.
- **Why**: Headless UI libraries rely on this prop to build a stable internal item registry. If omitted, the library is forced to scan the DOM on every render to discover items, which causes full list re-renders, layout recalculations, and severe "content jumping" bugs.
- **Do Not Rely Purely on Static Children**: Even if a library _allows_ you to manually map `<Item>` components as children without passing the data array to the root, **do not do it** unless explicitly endorsed by their performance guidelines. Always prefer the data-driven approach (`<Root items={data}>`) to ensure stable filtering and rendering performance.

## 9. Micro and Macro Component Relationship

- **Strict Reuse**: A "Macro" component (preset) MUST be implemented using the exact same structure as the best/standard showcase example of its underlying "Micro" component(s).
- **No Rewriting**: DO NOT rewrite or duplicate the logic of the Micro component inside the Macro component. The Macro component should strictly act as a composition/wrapper that pre-configures and re-uses the Micro component's exported parts.
- **Full Utilization**: Re-use all available parts of the Micro component to build the Macro. If a feature or slot is needed in the Macro, it should be supported by and imported from the Micro component.

## 10. Type Definitions and Tailwind Syntax Best Practices

- **Types vs Interfaces for ComponentProps**: When extending props of complex components (especially `forwardRef` or generic Headless UI components), ALWAYS use `type` intersections instead of `interface extends`.
  - **Good**: `type MyProps = React.ComponentProps<typeof BaseComponent> & { custom: string }`
  - **Bad**: `interface MyProps extends React.ComponentProps<typeof BaseComponent> { custom: string }` (This often causes TypeScript errors with exotic components).
- **Tailwind Data Attributes**: Prefer built-in data attribute variants over arbitrary variants if they are standard.
  - **Good**: `data-highlighted:bg-blue-500`, `data-disabled:opacity-50`, `data-empty:hidden`
  - **Bad**: `data-[highlighted]:bg-blue-500`, `data-[disabled]:opacity-50`, `data-[empty]:hidden`
- **Tailwind v4 `calc()` Subtraction**: When subtracting a custom CSS variable inside a `calc()` function in Tailwind, ALWAYS wrap the subtracted variable in parentheses to prevent the minus operator from blending with the variable prefix (`--`).
  - **Good**: `calc(--spacing(72) - (--spacing(9)))` or `calc(var(--height) - (var(--spacing-9)))`
  - **Bad**: `calc(--spacing(72)---spacing(9))` (The `---` can be misparsed as a single invalid token).

## 11. Component API & Layout Encapsulation

- **No Hardcoded Root Dimensions**: Primitive components MUST NOT dictate their own overall width or height (e.g., do not hardcode `w-full` on the root element). Let the consumer or the parent layout container decide the dimensions.
- **Defensive Flexbox**: When building flex containers that contain text alongside icons or actions, ALWAYS apply a `gap` (e.g., `gap-2`, `gap-4`) to prevent text from colliding with the icon when content overflows or wraps.
- **Outermost Prop Forwarding**: For composite structural primitives (e.g., an `AccordionTrigger` that renders a `<button>` wrapped inside an `<h3>`), the `className` prop MUST be forwarded to the **outermost wrapper** (the `<h3>`).
  - **Why**: This allows the component to correctly participate in parent flex/grid contexts (e.g., if a user passes `flex-1`, it applies to the wrapper).
  - **Encapsulation**: Do NOT forward the user's `className` directly to the inner interactive element (the `<button>`). Instead, style the inner element to naturally fill the wrapper (e.g., `w-full flex-1`). This prevents consumers from accidentally breaking the carefully crafted focus rings, hover states, and structural integrity of the inner element. If consumers explicitly need to style the inner element, they should use CSS descendant selectors (e.g., `[&_[data-slot=accordion-trigger]]:bg-red-500`).

## 12. Data Attributes & Documentation Verification

- **Never Guess State Attributes**: Different Headless UI libraries use completely different data-attributes to expose component state (e.g., Radix uses `data-[state=open]`, Base UI uses `data-panel-open` or `data-ending-style`).
- **Read the Docs**: You MUST verify the exact data-attributes exposed by the underlying headless UI component by either reading its official documentation or inspecting its source code before writing CSS selectors (e.g., `group-data-panel-open/trigger:rotate-180`). Do NOT assume conventions from other libraries.

## 13. React `displayName` Requirement

- **Mandatory for `forwardRef`**: Whenever you define a component using `React.forwardRef`, you MUST explicitly assign a `displayName` to it immediately after its declaration (e.g., `MyComponent.displayName = "MyComponent";`).
- **Why**: `React.forwardRef` creates an anonymous component in the React DevTools tree (often displaying as `ForwardRef` or `Anonymous`), making debugging extremely difficult for consumers of the library. Explicitly setting the `displayName` ensures the component is easily identifiable in the tree.

## 14. Responsive Design: Container Queries vs Media Queries

- **Use Container Queries (`@container`, `@sm:`) for Floating/Reusable Components**: Components that can be placed anywhere (e.g., Cards, List Items, Avatar Groups) MUST use CSS Container Queries so their internal layout adapts to their physical container width, not the screen width.
- **Use Media Queries (`sm:`, `md:`) for Fixed/Viewport-Bound Components**: Components that attach to the viewport (e.g., `AlertDialog`, `Dialog`, `Sheet`, `Drawer`, `Tooltip`, `Popover`, `Sidebar`) MUST use standard Media Queries.
- **Reasoning**: Modals and viewport-bound components scale almost 1:1 with the screen. Using `@container` for them is overkill and provides zero practical benefit over standard `sm:` modifiers, while keeping `sm:` ensures 100% legacy stability for core structural overlays.

## 15. Component Pair Programming Workflow

Whenever the user requests to pair program on a specific component, you MUST proactively plan and execute the review across the entire component ecosystem:

1. **Micro Component**: Audit and refactor the primitive component based on all design rules (e.g., no magic CSS, pure composition, correct data-attributes).
2. **Macro Component (Preset)**: Audit the preset. If a Macro component does not exist but is necessary for handling opinionated layouts or complex state, CREATE IT.
3. **Showcases (Both Modes)**: Ensure the showcase files (`src/dev/showcase/[component].tsx` and `src/dev/showcase/macro/[component].tsx` if applicable) are updated to correctly demonstrate the component. Ensure Micro showcases explicitly demonstrate Pure Composition (e.g., manually applying Flexbox).

## 16. Accessibility (a11y) & ARIA Strictness

- **Semantic HTML first**: Always prefer native semantic HTML elements (`<button>`, `<dialog>`, `<nav>`) over generic `<div>`s with ARIA roles.
- **Decorative Elements**: Any icons or purely visual SVGs MUST include `aria-hidden="true"` or `focusable="false"` to prevent screen readers from reading useless information.
- **Form Controls & Errors**: When building Macro form controls (like Inputs with ErrorMessages), you MUST logically link the error message or description to the input field using `aria-describedby` and a unique `id`.

## 17. Animations and Transitions Standards

- **CSS Over JS**: Always prefer CSS transitions and `@keyframes` animations over JavaScript-based animations whenever possible for performance.
- **Standardized Utilities**: Use standard Tailwind duration and easing utilities (e.g., `duration-200 ease-out`). Do not invent arbitrary transition timings unless strictly required by design.
- **Accessibility (Reduced Motion)**: Respect the user's OS preference by using the `motion-reduce:` modifier for heavy, disorienting, or scale-based animations (e.g., `motion-reduce:transition-none` hoặc `motion-reduce:animate-none`).

## 18. `data-slot` Naming Convention & Usage

- **Standardized Hooks**: When a component is composed of multiple internal elements that a consumer might need to target for styling overrides, you MUST assign a `data-slot="slot-name"` attribute to them.
- **Naming Rule**: Slot names should be descriptive and kebab-cased, typically representing the part name (e.g., `data-slot="icon"`, `data-slot="label"`, `data-slot="avatar-fallback"`).
- **Targeting**: Use these slots for styling descendant elements from parent containers (e.g., `[&_[data-slot=icon]]:text-primary`) rather than querying raw HTML tags like `svg` directly.

## 19. Code Style & Conventions

- **Component Declaration**: Use standard functions (`function MyComponent() { ... }`) for components that do not require a `ref`. Use `React.forwardRef` with an anonymous function (`React.forwardRef<HTMLDivElement, Props>((props, ref) => { ... })`) when passing refs. Avoid assigning arrow functions to constants for components unless necessary.
- **Exporting Pattern**: Use **Named Exports** for all core UI primitives (e.g., `export { Button, buttonVariants }`). Reserve `export default` exclusively for Route pages or Showcase files (e.g., `export default function ButtonShowcase()`).
- **Props Destructuring**: Always destructure props inline at the function signature and provide default values there (e.g., `({ className, variant = "solid", ...props })`), rather than inside the function body.
- **TypeScript Strictness**: The use of `any` is strictly prohibited. Use `unknown` if the type is truly unknowable. Avoid `// @ts-ignore` unless accompanied by a comment explaining why it is absolutely necessary.
- **Import Ordering**: Prioritize external dependencies first (React, Base UI, Lucide), followed by absolute path imports (`@/lib/...`, `@/components/...`), and lastly relative imports (`./`, `../`).

## 20. "Dumb" Micro Components & State Management

- **Micro Components MUST be "Dumb"**: Primitives in the `micro` directory must be purely Presentational Components. They should only receive props to render UI. Absolutely NO internal React State (`useState`), side effects (`useEffect`), API calls, or business logic inside Micro components.
- **State belongs to Macro**: Any internal state (like open/closed popups, input values, validation) must be handled by the underlying Headless UI library or hoisted to the **Macro Component (Presets)** layer.

## 21. Polymorphism (`asChild` / `render`)

- **Render Delegation**: Interactive or navigational components (like Button, Badge, Dropdown Item) MUST support a polymorphism prop (e.g., `render` from Base UI or `asChild` from Radix).
- **Reasoning**: This allows consumers to pass custom routing components (like Next.js `<Link>` or React Router `<Link>`) while preserving the component's original styles and accessibility, instead of being forced into default `<button>` or `<a>` tags.

## 22. Server / Client Boundary (Next.js App Router)

- **Restrict `"use client"`**: Only use the `"use client"` directive at the top of files that absolutely require React interactivity (`useState`, `useEffect`, `onClick`, `Context`).
- **Server-First Preference**: If a component is purely for layout or static UI (e.g., Card, Badge, Skeleton, SectionHeader), do NOT add `"use client"`. This optimizes for Server-Side Rendering (SSR) and reduces client bundle size.

## 23. Z-Index & Overlay Management

- **No Hardcoded High Z-indexes**: Never use arbitrary, astronomical z-index values like `z-[9999]` or `z-[99999]` inside components.
- **Use Portals**: All floating overlays (Dialog, Tooltip, Popover, Sheet) MUST be rendered via a `Portal` to avoid stacking context conflicts. When a z-index is required, strictly adhere to Tailwind's standardized scale (e.g., `z-50`).

## 24. Prop Naming Conventions

- **Event Handlers**: All callback functions must be prefixed with `on` (e.g., use `onValueChange` and `onOpenChange` instead of `handleValue` or `changeOpen`).
- **Boolean Props**: Boolean props should mimic standard HTML attributes. Use `disabled` (not `isDisabled`) and `loading` (not `isLoading`) for external APIs to maintain a native feel.

## 25. Showcase Code Snippet Truthfulness (`codeString` Override)

- **The Problem**: The auto-JSX stringifier (`react-element-to-jsx-string`) blindly captures everything, including noisy array maps (`.map()`), complex local state (`useState`, layout toggles), and compiled third-party icons (like `<LucideCheck>`).
- **The Rule**: Whenever the live demo code inside `<ExampleSection>` contains complex state management or loops that distract from the pure component API, you **MUST provide a clean, simplified override using the `codeString={...}` prop**.
- **CRITICAL EXCEPTION (Layout Wrappers)**: Do NOT hide layout wrappers (like `w-64`, `w-full`, or specific flex containers) in the `codeString` if they fundamentally dictate how the component behaves in the preview.
  - **Why**: The showcase preview (`<TabsContent value="preview">`) is an invisible `flex items-center justify-center` container. If a component (like a Form Field) relies on a block wrapper (like `div.w-full`) to not collapse to zero width, HIDING that wrapper in the `codeString` is a terrible Developer Experience (DX). Users who copy the raw component into a different layout will experience broken CSS and won't know why.
  - **Action**: Always explicitly include the layout constraints in the `codeString` exactly as they appear in the preview, e.g.:
    ```tsx
    <div className="w-64">
      <DatePicker ... />
    </div>
    ```
