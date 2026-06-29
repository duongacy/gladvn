# Audit Prompt: Button Group

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Button Group nhóm nhiều buttons thành một visual unit. Tương tự Toolbar pattern. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Group Container:**
  - Phải có `role="group"` (cho simple button group) hoặc `role="toolbar"` (cho toolbar với mixed controls).
  - Phải có `aria-label` hoặc `aria-labelledby` mô tả nhóm (vd: "Document actions", "Text alignment").
- **Buttons Inside:**
  - Mỗi button giữ nguyên role="button" semantic.
  - Buttons phải có accessible names riêng biệt.
- **Visual Connection:**
  - Buttons thường share border (connected buttons) — đây là pure visual, không ảnh hưởng ARIA.
  - First button: `rounded-l-lg`, Last button: `rounded-r-lg`, Middle buttons: `rounded-none`.
  - Border overlapping: cần xử lý (negative margin hoặc `border-collapse` equivalent).

### B. Keyboard Navigation & Focus

- **Nếu `role="group"` (natural tab order):**
  - `Tab` / `Shift+Tab`: Di chuyển focus giữa buttons theo DOM order.
- **Nếu `role="toolbar"` (roving tabindex):**
  - `Tab`: Focus vào group (button đang active hoặc đầu tiên).
  - `Arrow Right` / `Arrow Left`: Di chuyển focus giữa buttons.
  - `Home` / `End`: Focus button đầu/cuối.
- `Enter` / `Space`: Activate button.

### C. Standard API & Props

- `orientation`: "horizontal" | "vertical".
- `size`: Size tier áp dụng cho tất cả buttons.
- `variant`: Variant áp dụng cho tất cả buttons.
- `disabled`: Disable toàn bộ group.
- Composition: ButtonGroup, Button children.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Group-button relationship qua `role="group"` + label.
- **2.1.1 Keyboard (A):** Full keyboard navigation.
- **2.4.7 Focus Visible (AA):** Focus ring trên button đang focused.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Border merging (connected buttons) PHẢI dùng CSS (`:first-child`, `:last-child`, negative margin hoặc `border-collapse`). KHÔNG dùng JS to detect position.
- **Form Control Parity (Rule #18):** Buttons sizing phải align với Button component.
- **No Magic Number (Rule #4):** Gap (nếu có), border styles phải dùng tokens.
- **Zero-Prop Defaults (Rule #1):** `<ButtonGroup>` mặc định horizontal.
- **Strict Polymorphism (Rule #3):** Size/variant nên truyền qua context, không bắt user set trên mỗi button.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/button-group.tsx`.
3. Kiểm tra chéo, đặc biệt: **`role="group"`** + **`aria-label`**, **CSS connected buttons** (border merge), **Size/variant context propagation**, và **Button component reuse** (Rule #13).
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.
