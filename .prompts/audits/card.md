# Audit Prompt: Card

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)
Card là container component nhóm related content. KHÔNG có W3C APG pattern riêng nhưng phải tuân thủ semantic structure. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles
- **Semantic Element:**
  - Card NÊN dùng `<article>` nếu content có thể stand alone (vd: blog post card, product card).
  - Dùng `<section>` nếu card là một phần của larger content (vd: dashboard widget).
  - Dùng `<div>` nếu pure styling container.
- **Heading:**
  - Card title NÊN dùng heading element (`h3`, `h4`, etc.) để duy trì document outline.
  - Heading level phải phù hợp với context (nếu card nằm trong section có `h2`, card title dùng `h3`).
- **Interactive Card (Link Card):**
  - Nếu toàn bộ card clickable: NÊN dùng `<a>` bọc content, HOẶC dùng pattern "heading link" (link trong heading, click area expand ra toàn bộ card bằng CSS `::after`).
  - KHÔNG dùng `role="button"` trên `<div>` — nếu card link, dùng `<a>`.
  - Nếu card có multiple links/actions: KHÔNG làm toàn bộ card clickable (sẽ conflict).
- **Image (nếu có):**
  - Phải có `alt` text. Nếu decorative: `alt=""`.

### B. Keyboard Navigation & Focus
- Card bản thân KHÔNG focusable trừ khi là link card.
- Interactive elements bên trong card (buttons, links) phải tab-able theo natural order.
- Link card: phải có focus ring trên toàn bộ card.

### C. Standard API & Props
- Composition: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction.
- Pure styling component — minimal props.

### D. WCAG 2.2 Success Criteria
- **1.3.1 Info and Relationships (A):** Heading hierarchy, article/section semantics.
- **1.1.1 Non-text Content (A):** Image alt text.
- **2.4.6 Headings and Labels (AA):** Card title phải descriptive.
- **2.5.8 Target Size (AA):** Interactive elements trong card phải đạt minimum target size.

## 2. sadcn "20 Commandments" Integration

- **No Magic Number (Rule #4):** Padding, border-radius, shadow phải dùng tokens.
- **Zero-Prop Defaults (Rule #1):** `<Card>` không prop phải render container hợp lý.
- **Native DOM Flow (Rule #12):** Card KHÔNG ép `w-full` — developer tự quyết.
- **Flexbox Stretch Axiom (Rule #20):** Trong grid/flex layout, card children không cần `w-full`.

## 3. Nhiệm vụ của bạn (AI)
1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/card.tsx`.
3. Kiểm tra chéo, đặc biệt: **Semantic element** (`<article>` vs `<div>`), **Heading element** (CardTitle dùng heading tag không?), **Design tokens** (padding, shadow consistency), và **Interactivity** (link card pattern).
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)
1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí | Verdict | Note |
|---------------|---------|------|
| W3C APG / ARIA | ✅ | Cấu trúc semantic cơ bản (dùng div cho layout utility container) |
| 21. CSS Depth Boundary | ❌ | Vi phạm ở L15: `*:[img:first-child]:rounded-t-xl` dùng deep descendant selector `*:` để style img tuỳ ý bên trong. Cần đổi sang `[&>img:first-child]` hoặc tạo `CardImage` component. |
| Form Control Parity | ✅ | CSS Custom Properties `[--card-spacing]` xử lý responsive padding tuyệt vời. |
| Dark Mode Compliance | ✅ | `bg-card text-card-foreground` tự động scale theo theme. |

### Diffs cần fix
```diff
- "*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl"
+ "[&>img:first-child]:rounded-t-xl [&>img:last-child]:rounded-b-xl"
```
