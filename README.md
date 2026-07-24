<div align="center">
  <h1 align="center">gladvn</h1>
  <p align="center">
    <strong>Composable React components. From primitive to preset — you choose.</strong>
  </p>
  <p align="center">
    <a href="https://github.com/duongacy/gladvn/actions"><img src="https://img.shields.io/github/actions/workflow/status/duongacy/gladvn/ci.yml?branch=main" alt="Build Status"></a>
    <a href="https://github.com/duongacy/gladvn/stargazers"><img src="https://img.shields.io/github/stars/duongacy/gladvn" alt="GitHub Stars"></a>
    <a href="https://github.com/duongacy/gladvn/blob/main/LICENSE"><img src="https://img.shields.io/github/license/duongacy/gladvn" alt="License"></a>
  </p>
</div>

<br />

`gladvn` is a CLI-first React component library built on top of **Base UI** and **Tailwind CSS v4**. We do not distribute components via npm for you to import blindly. Instead, you run a command to scaffold the source code directly into your project.

You own the code. You own the abstractions.

## ✨ The Problem We Solve: Micro/Macro Architecture

Most UI libraries force a choice:
- **Too primitive:** You have to build everything yourself from scratch.
- **Too opinionated:** You get locked into their design choices and fight the defaults.

**`gladvn` solves this with a strict Micro/Macro architecture.**

- **Micro Components (Primitives):** Dumb, stateless building blocks. You control 100% of the assembly.
- **Macro Components (Presets):** Smart, pre-configured compositions of micro components. Drop them in and move fast.

Both use the exact same design system.

```tsx
// Micro — Lắp ráp theo ý bạn
import { Button } from "@gladvn/components/micro/button";

<Button variant="solid" color="primary">Submit</Button>


// Macro — Preset làm sẵn tiện lợi
import { InputPreset } from "@gladvn/components/macro/input-preset";

<InputPreset label="Email" error={errors.email} />
```

## 🚀 Features

- **45 Color/Variant Combinations:** 9 semantic colors × 5 variants (`solid`, `outline`, `ghost`, `soft`, `link`) out of the box.
- **Zero-Portal Theming:** Modals and Popovers automatically inherit your theme without manual `ThemeWrapper` headaches.
- **Base UI Powered:** Built on MUI's next-generation headless UI library.
- **AI-First Design:** Includes `llms.txt` and semantic data-attributes designed specifically for AI coding agents (Cursor, Copilot, Claude).
- **Smart Dependency Install:** The CLI scans your copied code and only installs the npm packages you actually use.

## 📦 Installation

**Do NOT run `npm install gladvn`.** This is a CLI tool designed to copy source code directly into your project.

### Prerequisites
Before running the CLI, ensure your project meets the following requirements:
- React 19 / Next.js (App Router or Vite)
- Tailwind CSS v4 installed and configured
- `pnpm` (recommended), `npm`, or `yarn`

### Setup

Run the following command in your React/Next.js project to initialize `gladvn` and copy the components to your local repository:

```bash
npx gladvn init
```

The CLI will:
1. Copy **ALL 55+ component files** and hooks into your project (default: `./gladvn/`). *(Note: You can safely delete any components you do not end up using).*
2. Inject Tailwind CSS configurations.
3. Automatically scan your copied code and only install the npm packages you actually use.

## 🆚 Comparison

| Feature | **gladvn** | shadcn/ui | MUI |
|---------|-----------|-----------|-----|
| Installation | `npx gladvn init` | `npx shadcn@latest init` | `npm install @mui/material` |
| Own your code | ✅ Yes | ✅ Yes | ❌ npm dependency |
| **Micro/Macro Architecture** | **✅ Yes** | ❌ No | ⚠️ Partial |
| Semantic colors | ✅ 9 colors | ⚠️ 2 colors | ✅ Extensive |
| Zero-portal theming | ✅ Automatic | ❌ Manual | ✅ ThemeProvider |
| Headless UI | Base UI | Radix UI | Own |
| AI coding guidelines | ✅ `llms.txt` | ❌ No | ❌ No |

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to set up your environment, write components, and submit Pull Requests.

Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

## 📄 License

This project is licensed under the [MIT License](LICENSE).
