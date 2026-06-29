# Showcase Development Standards

When creating or modifying showcase files in `src/dev/showcase/*.tsx`, you MUST STRICTLY adhere to the following standards to ensure consistency across the component library.

## 1. File Structure and Imports

- Always import the showcase layout components: `import { SectionHeader, ExampleSection, ExampleGrid } from "../components/showcase";`
- The default export must be a function named `[Component]Showcase`.
- The root element must be a `<div className="space-y-10">`.

## 2. Global State (Size Toggle)

- If the component supports a `size` prop (e.g., Button, Badge, Input), you MUST include a `globalSize` state using `useState<"sm" | "md" | "lg">("md")`.
- Pass a `<MonoSelect>` to the `SectionHeader`'s `children` prop to allow the user to toggle the size globally for all examples in the showcase.

## 3. SectionHeader

- Every showcase MUST start with a `<SectionHeader>` containing:
  - `title`: The component name.
  - `description`: A brief description of what the component does.
  - `children`: (Optional) The `MonoSelect` for global state control.

## 4. Examples Layout

- Wrap every distinct example in an `<ExampleSection label="Name" description="Description">`.
- Use `<ExampleGrid columns={2}>` or `<ExampleGrid columns={3}>` to place multiple `<ExampleSection>` side-by-side when they are related and small.
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
