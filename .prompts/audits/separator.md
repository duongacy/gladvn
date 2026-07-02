# Audit Prompt: Separator

**Base rules:** Tuân thủ tuyệt đối `AUDIT_TEMPLATE.md` và `docs/architecture/PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Separator phân chia visual content thành các sections. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Semantic Element:**
  - Decorative separator (visual only): dùng `<hr>` hoặc `<div>` thuần. KHÔNG cần ARIA role.
  - Semantic separator (phân chia sections có ý nghĩa): dùng `role="separator"`.
  - Nếu dùng `role="separator"`: phải có `aria-orientation="horizontal"` (mặc định) hoặc `"vertical"`.
- **Decorative vs Semantic:**
  - Nếu separator chỉ là visual divider: `aria-hidden="true"` hoặc dùng CSS border/pseudo-element thay vì HTML element.
  - Nếu separator có ý nghĩa structural: `role="separator"` KHÔNG hidden.
- **Interactive Separator (Window Splitter):**
  - Nếu separator có thể kéo để resize: `role="separator"` + focusable (`tabindex="0"`).
  - Phải có `aria-valuenow`, `aria-valuemin`, `aria-valuemax`.

### B. Keyboard Navigation & Focus

- Non-interactive separator: KHÔNG focusable.
- Interactive separator (splitter): Arrow keys resize, focus ring visible.

### C. Standard API & Props

- `orientation`: "horizontal" | "vertical".
- `decorative`: Boolean — nếu true, render `aria-hidden="true"`.
- `className`: Styling customization.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Semantic separator phải có `role="separator"`.
- **1.4.11 Non-text Contrast (AA):** Separator line phải đạt 3:1 contrast nếu nó conveys meaning.

## 2. gladcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Separator rendering dùng CSS (border, `<hr>`).
- **No Magic Number (Rule #4):** Color, thickness phải dùng tokens.
- **Zero-Prop Defaults (Rule #1):** `<Separator>` mặc định horizontal, decorative.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/micro/separator.tsx`.
3. Kiểm tra chéo, đặc biệt: **`role="separator"` vs `aria-hidden`** (decorative vs semantic), **Orientation** (horizontal/vertical support), và **Contrast**.
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
