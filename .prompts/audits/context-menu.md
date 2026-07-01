# Audit Prompt: Context Menu

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Context Menu xuất hiện khi user right-click (hoặc long-press trên mobile) lên trigger area. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Trigger Area:**
  - Trigger KHÔNG cần `aria-haspopup` (context menu là implicit behavior, không cần announce trước).
  - Trigger có thể là bất kỳ element nào (text area, card, etc.).
- **Menu Content:**
  - Phải có `role="menu"`.
  - Phải có `aria-label` hoặc `aria-labelledby` mô tả menu.
- **Menu Item:**
  - Phải có `role="menuitem"`.
  - Disabled items: `aria-disabled="true"` (vẫn focusable nhưng không activatable).
- **Submenu:**
  - Item có submenu: `aria-haspopup="menu"` + `aria-expanded`.
  - Submenu content: `role="menu"` riêng.
- **Checkbox/Radio Items:**
  - Checkbox: `role="menuitemcheckbox"` + `aria-checked`.
  - Radio: `role="menuitemradio"` + `aria-checked`, bọc trong `role="group"`.
- **Separator:**
  - `role="separator"`.

### B. Keyboard Navigation & Focus

- **Open:** Right-click hoặc `Shift+F10` (Windows convention). Trên macOS: `Ctrl+Click`.
- **Navigation (Menu Open):**
  - `Arrow Down`: Focus menuitem tiếp theo.
  - `Arrow Up`: Focus menuitem trước đó.
  - `Arrow Right`: Mở submenu (nếu có), focus submenu item đầu tiên.
  - `Arrow Left`: Đóng submenu, focus quay về parent menuitem.
  - `Home` / `End`: Focus item đầu/cuối.
  - `Enter` / `Space`: Activate menuitem.
  - `Esc`: Đóng menu (hoặc đóng submenu rồi quay về parent).
  - **Type-ahead:** Gõ ký tự nhảy đến menuitem bắt đầu bằng ký tự đó.
- **Focus Management:**
  - Khi mở, focus nhảy vào menuitem đầu tiên.
  - Khi đóng, focus quay về trigger area.
  - Roving tabindex: Chỉ item đang focused có `tabindex="0"`.

### C. Standard API & Props

- Composition: Root, Trigger, Portal, Content, Item, Sub, SubTrigger, SubContent, CheckboxItem, RadioItem, RadioGroup, Separator, Label.
- `onOpenChange`.

### D. WCAG 2.2 Success Criteria

- **2.1.1 Keyboard (A):** Full keyboard navigation (Shift+F10, arrow keys, type-ahead).
- **2.4.3 Focus Order (A):** Logical focus order trong menu.
- **4.1.2 Name, Role, Value (A):** Screen reader phải announce role ("menu"), item role ("menuitem"/"menuitemcheckbox"/"menuitemradio"), state.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Animation dùng CSS. Highlighted item dùng `data-[highlighted]`.
- **Portal Tunneling (Rule #15):** Portal phải giữ theme.
- **Z-Index (Rule #4):** Context menu z-index phải cao (trên popover).
- **Linear Design (Rule #5):** Item styling (highlight, disabled) phải đồng bộ với Dropdown Menu.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/context-menu.tsx`.
3. Kiểm tra chéo từng tiêu chí, đặc biệt: **ARIA roles** (menu, menuitem, menuitemcheckbox, menuitemradio), **Keyboard navigation** (Shift+F10, type-ahead, submenu arrow keys), và **Focus management**.
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
