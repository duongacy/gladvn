# Audit Prompt: Badge

**Base rules:** Tuân thủ tuyệt đối `AUDIT_TEMPLATE.md` và `docs/architecture/PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Badge là inline status indicator hiển thị label, count, hoặc category tag. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Semantic Element:**
  - Badge nên dùng `<span>` (inline element).
  - KHÔNG dùng `<div>` (block-level) vì badge thường nằm inline cạnh text hoặc heading.
- **Status Badge (Count/Notification):**
  - Nếu badge hiển thị dynamic count (vd: "3 new messages"): NÊN nằm trong `aria-live="polite"` region để announce khi count thay đổi.
  - Nếu badge cạnh icon (vd: bell icon + count): phải có context cho screen reader (vd: `aria-label="3 unread notifications"` trên parent).
- **Category/Label Badge:**
  - Badge text phải self-explanatory.
  - Nếu badge chỉ dùng màu để phân biệt category: PHẢI có text content (WCAG 1.4.1).
- **Interactive Badge (removable):**
  - Nếu badge có close/remove button: button phải có `aria-label` (vd: `aria-label="Remove tag: JavaScript"`).

### B. Keyboard Navigation & Focus

- Non-interactive badge: KHÔNG focusable.
- Interactive badge (clickable, removable): PHẢI focusable và keyboard-accessible.
- Remove button: `Enter` / `Space` / `Delete` / `Backspace` để remove.

### C. Standard API & Props

- `variant`: Visual style (default, secondary, outline, destructive).
- `className`: Styling customization.
- Forward `ref`.

### D. WCAG 2.2 Success Criteria

- **1.4.1 Use of Color (A):** Badge không chỉ dùng màu — PHẢI có text content.
- **1.4.3 Contrast Minimum (AA):** Badge text-on-background contrast ≥ 4.5:1.
- **1.4.11 Non-text Contrast (AA):** Badge border/background contrast.

## 2. gladcn "20 Commandments" Integration

- **Linear Design Axiom (Rule #5):** Tất cả variants phải dùng cùng công thức sizing/padding. Chỉ khác color token.
- **No Magic Number (Rule #4):** Padding, font-size, border-radius phải dùng tokens.
- **Zero-Prop Defaults (Rule #1):** `<Badge>` mặc định variant.
- **Native DOM Flow (Rule #12):** Badge là inline element, KHÔNG ép block-level.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/badge.tsx`.
3. Kiểm tra chéo, đặc biệt: **Color independence** (text + không chỉ màu), **Contrast ratios**, **Linear Design** (variant symmetry), và **Inline rendering** (`<span>` không phải `<div>`).
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
