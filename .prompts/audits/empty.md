# Audit Prompt: Empty

**Base rules:** Tuân thủ tuyệt đối `AUDIT_TEMPLATE.md` và `docs/architecture/PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Empty State hiển thị khi không có data/content. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Container:**
  - Nên dùng `role="status"` hoặc nằm trong `aria-live="polite"` region nếu empty state xuất hiện dynamically (vd: sau khi xoá hết items).
  - Nếu empty state có sẵn khi load: không cần live region.
- **Illustration/Icon:**
  - Phải có `aria-hidden="true"` (decorative).
- **Message:**
  - Title: heading element hoặc strong text.
  - Description: text giải thích và hướng dẫn next action.
  - Message phải descriptive — "No data" là KHÔNG ĐỦ. Nên nói rõ: "No projects yet. Create your first project to get started."
- **Action Button (nếu có):**
  - CTA button phải keyboard-accessible.
  - Button text phải action-oriented (vd: "Create Project", "Import Data").

### B. Keyboard Navigation & Focus

- Empty state bản thân KHÔNG focusable.
- Action button (nếu có) phải focusable.
- Sau khi xoá hết items, focus NÊN di chuyển đến empty state region hoặc heading.

### C. Standard API & Props

- Composition: Empty, EmptyIcon, EmptyTitle, EmptyDescription, EmptyAction.
- `icon`: Custom illustration/icon.

### D. WCAG 2.2 Success Criteria

- **1.1.1 Non-text Content (A):** Illustration phải có alt text hoặc aria-hidden.
- **4.1.3 Status Messages (AA):** Dynamic empty state phải announce qua assistive technology.

## 2. gladcn "20 Commandments" Integration

- **No Magic Number (Rule #4):** Spacing, icon size phải dùng tokens.
- **Zero-Prop Defaults (Rule #1):** `<Empty>` mặc định hiển thị generic message nếu không truyền content.
- **Strict Polymorphism (Rule #3):** Action button dùng component `<Button>` của hệ thống.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/micro/empty.tsx`.
3. Kiểm tra chéo, đặc biệt: **Icon aria-hidden**, **Descriptive messaging** (không chỉ "No data"), và **Dynamic announcement** (role="status").
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
