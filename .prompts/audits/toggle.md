# Audit Prompt: Toggle

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Toggle (Toggle Button) là button có hai trạng thái: pressed/not pressed. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Toggle Button:**
  - Phải dùng `<button>` element.
  - Phải có `aria-pressed="true"` (pressed) hoặc `"false"` (not pressed).
  - KHÔNG dùng `aria-checked` — đó dành cho checkbox/switch. Toggle button dùng `aria-pressed`.
  - Phải có accessible name (text content, `aria-label`, hoặc `aria-labelledby`).
- **Icon-Only Toggle:**
  - BẮT BUỘC có `aria-label` (vd: `aria-label="Bold"`, `aria-label="Italic"`).
  - Icon: `aria-hidden="true"`.

### B. Keyboard Navigation & Focus

- `Enter` / `Space`: Toggle pressed state (native `<button>` behavior).
- **Focus Ring:** Phải hiển thị rõ ràng.

### C. Standard API & Props

- `pressed` / `defaultPressed` / `onPressedChange`: Pattern Controlled & Uncontrolled.
- `disabled`: Vô hiệu hoá toggle.
- `variant`: Visual style (default, outline).
- `size`: Sizing tiers.

### D. WCAG 2.2 Success Criteria

- **1.4.1 Use of Color (A):** Pressed state không chỉ phân biệt bằng màu — PHẢI có visual indicator khác (background change, border, icon change).
- **1.4.11 Non-text Contrast (AA):** Pressed/unpressed visual difference phải đạt 3:1 contrast.
- **2.1.1 Keyboard (A):** Enter/Space toggle.
- **4.1.2 Name, Role, Value (A):** Screen reader announce: name, role ("button"), state ("pressed"/"not pressed").

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Pressed state styling PHẢI dùng CSS (`aria-pressed="true"` selector hoặc `data-[state=on]`).
- **Form Control Parity (Rule #18):** Toggle sizing align với Button: `sm: h-7`, `md: h-8`, `lg: h-9`. Focus ring: `focus-visible:ring-3 focus-visible:ring-ring/50`.
- **No Magic Number (Rule #4):** Sizing phải dùng tokens.
- **Zero-Prop Defaults (Rule #1):** `<Toggle>` mặc định unpressed.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/toggle.tsx`.
3. Kiểm tra chéo, đặc biệt: **`aria-pressed`** (không phải `aria-checked`), **CSS pressed state** (data-state selector), **Sizing parity** với Button, và **Pressed visual indicator** (không chỉ color).
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
