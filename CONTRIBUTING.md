# Contributing to gladvn

First off, thank you for considering contributing to `gladvn`! It's people like you that make `gladvn` such a great tool for the React ecosystem.

## Philosophy
`gladvn` is a **CLI-first** component library. We do not distribute components via npm as compiled packages. Instead, developers copy the source code directly into their projects. 
We strictly follow a **Micro/Macro Architecture**:
- **Micro (Primitives):** Dumb, stateless components. Full styling control.
- **Macro (Presets):** Smart, opinionated compositions of micro components.

## Local Development Setup

1. Fork and clone the repository.
2. We strictly use `pnpm` (v10+). Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the documentation/showcase site (built with Vite) to preview your changes locally:
   ```bash
   pnpm run dev
   ```

## Adding a New Component

If you are proposing a new component, please open a **Feature Request** issue first to discuss it with the maintainers.

### Folder Structure
Place your new component in the appropriate directory:
- `src/components/micro/[name].tsx` (For low-level building blocks)
- `src/components/macro/[name].tsx` (For complex presets)

### Guidelines
- **Use Base UI:** We rely on `@base-ui/react` for headless accessible components. Do not use Radix UI unless Base UI does not support the component yet.
- **Tailwind CSS v4:** Use standard Tailwind classes. Do not use `@apply` in CSS files unless absolutely necessary.
- **Zero-Portal API:** Ensure any floating elements (Dialog, Tooltip) automatically inherit themes without needing manual ThemeWrappers.
- **Documentation:** Create a showcase file in `src/dev/showcase/[name].tsx`.

## Submitting a Pull Request

1. Create a new branch using standard naming conventions: 
   - `feat/my-new-component` (for new features)
   - `fix/component-name-bug` (for bug fixes)
2. Ensure your code is formatted and passes typechecks:
   - Run `pnpm typecheck` to verify TypeScript.
   - Run `pnpm lint` to check for issues. If there are formatting errors, many can be auto-fixed by running `pnpm exec oxlint --fix` or using your editor's Prettier integration.
3. Commit your changes using Conventional Commits.
4. Push to your fork and submit a Pull Request.

Make sure to fill out the PR template completely!
