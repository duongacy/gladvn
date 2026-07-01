# Audit Prompt: Menubar

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Menubar là horizontal navigation menu (giống menu bar của desktop apps). BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Menubar Container:**
  - Phải có `role="menubar"`.
  - Phải có `aria-label` hoặc `aria-labelledby`.
  - Phải có `aria-orientation="horizontal"` (mặc định cho menubar).
- **Top-level Items (Menu Triggers):**
  - Phải có `role="menuitem"`.
  - Items có submenu: `aria-haspopup="menu"` + `aria-expanded`.
- **Submenu Content:**
  - `role="menu"`.
  - `aria-labelledby` trỏ đến parent menuitem.
- **Submenu Items:**
  - `role="menuitem"`, `role="menuitemcheckbox"`, `role="menuitemradio"` tương ứng.
- **Separator:** `role="separator"`.

### B. Keyboard Navigation & Focus

- **Menubar (Top-level):**
  - `Arrow Right`: Focus menuitem tiếp theo trên menubar.
  - `Arrow Left`: Focus menuitem trước đó.
  - `Arrow Down` / `Enter` / `Space`: Mở submenu, focus submenu item đầu tiên.
  - `Home` / `End`: Focus item đầu/cuối trên menubar.
- **Submenu Open:**
  - `Arrow Down`: Focus submenu item tiếp theo.
  - `Arrow Up`: Focus submenu item trước đó.
  - `Arrow Right`: Nếu có nested submenu → mở. Nếu không → đóng current submenu, mở submenu tiếp theo trên menubar.
  - `Arrow Left`: Đóng submenu, focus parent. Nếu đã ở top-level → di chuyển trên menubar.
  - `Esc`: Đóng submenu hiện tại.
  - `Enter` / `Space`: Activate item.
  - Type-ahead search.
- **Roving Tabindex:** Trên menubar, chỉ item đang focused có `tabindex="0"`.

### C. Standard API & Props

- Composition: Menubar, Menu, Trigger, Portal, Content, Item, CheckboxItem, RadioItem, RadioGroup, Sub, SubTrigger, SubContent, Separator, Label.

### D. WCAG 2.2 Success Criteria

- **2.1.1 Keyboard (A):** Full horizontal + vertical navigation.
- **2.4.3 Focus Order (A):** Logical focus flow giữa menubar items và submenus.
- **4.1.2 Name, Role, Value (A):** Screen reader announce: menubar role, menuitem role, expanded state.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Animation, highlight dùng CSS.
- **Portal Tunneling (Rule #15):** Submenu Portals phải giữ theme.
- **Linear Design (Rule #5):** Item styling phải đồng bộ với DropdownMenu và ContextMenu.
- **Z-Index (Rule #4):** Submenu z-index hợp lý.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/menubar.tsx`.
3. Kiểm tra chéo, đặc biệt: **`role="menubar"`**, **Horizontal arrow key navigation**, **Submenu open/close keyboard flow**, và **Parity với DropdownMenu item styling**.
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
