# Audit Prompt: Sidebar

**Base rules:** Tuân thủ tuyệt đối `AUDIT_TEMPLATE.md` và `docs/architecture/PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Sidebar là navigation panel thường nằm bên cạnh main content, có thể collapsible. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Sidebar Container:**
  - Nếu chứa navigation: bọc trong `<nav>` hoặc `<aside>` element.
  - `<aside>`: Dùng khi sidebar chứa supplementary content (related links, filters).
  - `<nav>`: Dùng khi sidebar chứa primary navigation.
  - Phải có `aria-label` mô tả (vd: "Main navigation", "Sidebar").
- **Navigation Links:**
  - Active link: `aria-current="page"`.
  - Links phải có descriptive text.
- **Collapse/Expand:**
  - Toggle button phải có `aria-expanded="true"` (expanded) / `"false"` (collapsed).
  - Toggle button phải có `aria-controls` trỏ đến sidebar region ID.
  - Toggle button phải có `aria-label` (vd: "Toggle sidebar", "Collapse navigation").
- **Sections/Groups:**
  - Menu sections nên có heading hoặc `role="group"` + `aria-labelledby`.
- **Collapsible Sub-menus:**
  - Disclosure pattern: `aria-expanded`, keyboard toggle.

### B. Keyboard Navigation & Focus

- `Tab` / `Shift+Tab`: Navigate giữa sidebar items.
- `Enter` / `Space`: Activate link hoặc toggle collapsible section.
- Toggle button: Keyboard-accessible.
- Khi collapsed trên mobile (hamburger menu): phải hoạt động như Dialog (focus trap, Esc to close).

### C. Standard API & Props

- `open` / `onOpenChange`: Collapse/Expand state.
- `side`: Left/Right position.
- `collapsible`: Có cho phép collapse không.
- `variant`: Sidebar visual style (inset, floating, etc.).
- Composition: Provider, Sidebar, Header, Content, Footer, Group, GroupLabel, Menu, MenuItem, MenuButton, MenuSub, MenuSubButton, MenuSubContent, etc.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Landmark roles (`<nav>`, `<aside>`).
- **2.1.1 Keyboard (A):** Toggle, navigation, collapsible sections keyboard-accessible.
- **2.4.1 Bypass Blocks (A):** Navigation landmark cho phép skip navigation.
- **2.4.7 Focus Visible (AA):** Focus ring trên tất cả interactive elements.

## 2. gladcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Collapse animation PHẢI dùng CSS (`data-[state=collapsed]`, `translate-x-*`). Active item highlighting dùng CSS.
- **Portal Tunneling (Rule #15):** Nếu mobile sidebar dùng overlay/portal, phải giữ theme.
- **No Magic Number (Rule #4):** Sidebar width (expanded/collapsed), item height phải dùng tokens/CSS variables.
- **Readability (Rule #10):** Complex sidebar state management phải có comment.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/sidebar.tsx`.
3. Kiểm tra chéo, đặc biệt: **Landmark roles** (`<nav>` hoặc `<aside>`), **Toggle button ARIA** (aria-expanded, aria-controls), **Mobile behavior** (focus trap khi overlay), **`aria-current="page"`** support, và **CSS collapse animation**.
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
