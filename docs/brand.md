# 🎨 GLADVN — Brand Identity & Positioning

> **Phase 0 Output** — Kết quả từ Expert Brand Session
> **Ngày:** 2026-07-24
> **Trạng thái:** ✅ HOÀN TẤT

---

## 1. Tagline (Chính thức)

> **"Composable React components. From primitive to preset — you choose."**

**Lý do chọn:** Tagline này định vị gladvn qua *triết lý kiến trúc* (Micro/Macro), không phải số lượng tính năng. Đây là territory mà shadcn không có — tạo ra một câu chuyện thương hiệu riêng biệt thay vì cạnh tranh trực tiếp.

**Phụ đề ngắn cho các nơi cần 1 dòng:**
> *"A CLI to scaffold beautiful, accessible React components. Built on Base UI + Tailwind CSS v4."*

---

## 2. USP Ưu tiên (Theo thứ tự quan trọng)

### 🏆 USP #1 (Chính) — Micro/Macro Architecture

**Tuyên bố:** Gladvn là thư viện React duy nhất phân tách rõ ràng giữa **primitive "dumb" components** (Micro) và **smart presets** (Macro).

**Ý nghĩa với developer:**
- **Micro** = Bạn kiểm soát 100%. Lắp ráp UI theo cách của bạn.
- **Macro** = Preset đẹp ngay. Không cần nghĩ nhiều.
- **Cả hai** = Một codebase nhất quán từ đầu đến cuối.

**Cách giải thích cho người mới:**
```tsx
// Micro — bạn tự lắp ráp:
<Button variant="solid" color="primary">Submit</Button>

// Macro — preset đã làm sẵn:
<InputPreset label="Email" error={errors.email} />
```

---

### USP #2 — 9 Semantic Colors × 5 Variants (45 tổ hợp)

Mọi component đều hỗ trợ:
- **Colors:** `primary | secondary | destructive | warning | success | info | tertiary | muted | accent`
- **Variants:** `solid | outline | ghost | soft | link`

shadcn/ui chỉ có 2-3 variants. gladvn có 45 tổ hợp nhất quán, tất cả accessibility-ready.

---

### USP #3 — Zero-Portal API

Dialog, Tooltip, Select, Dropdown tự động tunnel theme qua Portal. Không cần `ThemeWrapper` thủ công. Không bao giờ thấy màu sai trong overlay nữa.

---

### USP #4 — Base UI (thế hệ headless UI mới)

Dùng `@base-ui/react` từ đội ngũ MUI — headless UI thế hệ tiếp theo, nhẹ hơn và được maintain tích cực hơn Radix UI.

---

### USP #5 — AI-First Design

- `llms.txt` hướng dẫn AI coding agents (Copilot, Cursor, Claude) cách dùng đúng cách
- `data-slot`, `data-variant`, `data-color` attributes làm cho component behavior predictable với AI

---

## 3. Comparison Table với Shadcn/ui

| Feature | **gladvn** | shadcn/ui | MUI |
|---------|-----------|-----------|-----|
| Installation | `npx gladvn init` | `npx shadcn@latest init` | `npm install @mui/material` |
| Own your code | ✅ Yes | ✅ Yes | ❌ npm dependency |
| **Micro/Macro Architecture** | **✅ Yes** | ❌ No | ⚠️ Partial |
| Semantic color system | ✅ 9 colors | ⚠️ 2 colors | ✅ Extensive |
| Variants per component | ✅ 5 variants | ⚠️ 2-3 | ✅ Multiple |
| Zero-portal theming | ✅ Automatic | ❌ Manual | ✅ ThemeProvider |
| Headless UI | Base UI (MUI team) | Radix UI | Own |
| Tailwind v4 native | ✅ Yes | ✅ Yes | ❌ CSS-in-JS |
| AI coding guidelines | ✅ `llms.txt` | ❌ No | ❌ No |
| Bundle overhead | 🟢 Zero (CLI copy) | 🟢 Zero (CLI copy) | 🔴 Large |
| Number of components | 55+ | 50+ | 100+ |

---

## 4. Wireframe — Trang "Why gladvn?" (`/why`)

### Cấu trúc trang

```
┌─────────────────────────────────────────────────┐
│  HERO                                           │
│  "Composable React components.                  │
│   From primitive to preset — you choose."       │
│  [npx gladvn init] ──────── [View Docs]         │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  THE PROBLEM                                    │
│  "Most UI libraries force a choice:             │
│   low-level pain or high-level lock-in."        │
│                                                 │
│  🔴 Too primitive → You build everything        │
│  🔴 Too opinionated → You fight the defaults    │
│  🔴 No clear boundary → Code becomes a mess     │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  THE SOLUTION — Micro/Macro Architecture        │
│                                                 │
│  [Live code demo: Micro vs Macro side-by-side]  │
│                                                 │
│  Micro: Build your way                          │
│  Macro: Move fast                               │
│  Same design system. Always.                    │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  MORE REASONS                                   │
│  [Card] 45 component styles out of the box      │
│  [Card] Zero portal headaches                   │
│  [Card] Built for AI coding agents              │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  VS SHADCN — Comparison table                   │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  CTA                                            │
│  "Ready to build differently?"                  │
│  [npx gladvn init]                              │
└─────────────────────────────────────────────────┘
```

---

## 5. Key Messages (Dùng trong README, social, docs)

| Context | Message |
|---------|---------|
| One-liner | *Composable React components. From primitive to preset — you choose.* |
| Twitter/X | *Just shipped: gladvn — a CLI to scaffold React components that actually scale. Micro/Macro architecture means you control the level of abstraction. No more fighting your UI library.* |
| GitHub description | *CLI to scaffold beautiful, accessible React components. 55+ components. Micro/Macro architecture. Tailwind CSS v4.* |
| Hacker News | *gladvn: A shadcn-style CLI for React components with a clear Micro/Macro architecture. Built on Base UI + Tailwind v4.* |

---

## 6. Deliverables cho Phase 2 (README rewrite)

Khi Phase 2 bắt đầu, README mới cần:
1. Dùng tagline E làm hero headline
2. Giải thích Micro/Macro architecture ngay ở top (với code example)
3. Bao gồm comparison table từ mục 3
4. Badge: CI status, npm version, license
5. Xóa toàn bộ references đến "npm install" mode
