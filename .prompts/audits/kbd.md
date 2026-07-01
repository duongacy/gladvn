# Audit Prompt: Kbd

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Kbd hiển thị keyboard key hoặc shortcut. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Native Element:**
  - BẮT BUỘC dùng `<kbd>` element — semantic HTML cho keyboard input.
  - `<kbd>` tự có semantic meaning cho screen reader ("keyboard input").
- **Nested Kbd (Key Combinations):**
  - Key combination (vd: Ctrl+C) nên nest: `<kbd><kbd>Ctrl</kbd>+<kbd>C</kbd></kbd>`.
  - Separator (+, then, etc.) giữa keys NÊN có `aria-hidden="true"` nếu screen reader đọc riêng từng key đã đủ.
- **Accessible Description:**
  - Nếu Kbd nằm cạnh menu item hoặc button, nó bổ sung shortcut information — screen reader đọc text + kbd content.
  - Nếu Kbd standalone: phải có context (vd: "Press `Ctrl+K` to open search").

### B. Keyboard Navigation & Focus

- Kbd KHÔNG focusable — display-only element.

### C. Standard API & Props

- `className`: Styling.
- Children: Key text content.
- Forward `ref`.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** `<kbd>` semantic element.
- **1.4.3 Contrast Minimum (AA):** Kbd text contrast.
- **1.4.11 Non-text Contrast (AA):** Kbd border/background contrast.

## 2. sadcn "20 Commandments" Integration

- **No Magic Number (Rule #4):** Padding, font-size, border-radius phải dùng tokens.
- **Zero-Prop Defaults (Rule #1):** `<Kbd>` mặc định styling inline-block.
- **Native DOM Flow (Rule #12):** Kbd là inline element.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/kbd.tsx`.
3. Kiểm tra: **`<kbd>` semantic element**, **Contrast** (text + border), và **Design tokens** (padding, font-size).
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
