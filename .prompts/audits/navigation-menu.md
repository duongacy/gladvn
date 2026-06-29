# Audit Prompt: Navigation Menu

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Navigation Menu là horizontal navigation component với disclosure panels (mega menu). Kết hợp Navigation landmark với Disclosure pattern. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Nav Container:**
  - Phải bọc trong `<nav>` element (hoặc `role="navigation"`).
  - Phải có `aria-label` (vd: "Main navigation" hoặc "Primary navigation"). Nếu có nhiều `<nav>` trên trang, PHẢI có label khác biệt.
- **Menu List:**
  - Phải dùng `<ul>` / `<li>` structure cho semantic.
- **Menu Items (Links):**
  - Links trực tiếp: `<a>` element.
  - Current page link: `aria-current="page"`.
- **Disclosure Trigger (Items có submenu):**
  - Phải có `aria-expanded="true"` (open) / `"false"` (closed).
  - Phải có `aria-haspopup="true"` nếu mở popup content.
- **Disclosure Content (Submenu panel):**
  - Nếu đơn giản: có thể dùng disclosure pattern.
  - Nếu mega menu: nên có `role="dialog"` hoặc explicit structure.

### B. Keyboard Navigation & Focus

- `Tab` / `Shift+Tab`: Di chuyển focus giữa các top-level menu items (natural tab order).
- `Enter` / `Space` trên trigger: Toggle disclosure panel.
- `Arrow Down` (khi panel open): Focus vào item đầu tiên trong panel.
- `Esc`: Đóng panel, focus quay về trigger.
- **Khác với Menubar:** Navigation Menu KHÔNG dùng roving tabindex trên top-level — mỗi item đều tabindex="0" vì chúng là links.

### C. Standard API & Props

- Composition: Root, List, Item, Trigger, Content, Link, Indicator, Viewport.
- `value` / `onValueChange`: Active disclosure panel.
- `orientation`: Horizontal/Vertical.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** `<nav>` landmark, `<ul>`/`<li>` structure.
- **2.4.1 Bypass Blocks (A):** Navigation landmark cho phép skip.
- **2.4.5 Multiple Ways (AA):** Navigation should not be the only way to reach pages.
- **2.4.7 Focus Visible (AA):** Focus indicators trên links và triggers.
- **2.4.8 Location (AAA):** `aria-current="page"` cho current page.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Panel animation, active indicator PHẢI dùng CSS (`data-[state=open]`).
- **Portal Tunneling (Rule #15):** Panel content trong viewport/Portal phải giữ theme.
- **Z-Index (Rule #4):** Panel z-index hợp lý.
- **No Magic Number (Rule #4):** Nav height, panel padding, indicator dimensions phải dùng tokens.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/navigation-menu.tsx`.
3. Kiểm tra chéo, đặc biệt: **`<nav>` landmark** (có label không?), **`aria-current="page"`** support, **Disclosure pattern** (aria-expanded, keyboard), và **CSS animation**.
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí          | Verdict | Note                                                                                                                                           |
| ---------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA         | ✅      | NavigationMenu của `@base-ui` lo liệu ARIA state cực tốt (có `<nav>`, `aria-expanded`).                                                        |
| 21. CSS Depth Boundary | ❌      | Vi phạm ở L87: `**:data-[slot=navigation-menu-link]...`. Vi phạm ở L132: `[&_svg:...]`. Cần refactor để loại bỏ deep selector `**:` và `_svg`. |
| Form Control Parity    | ✅      | Animation duration/easing sync tốt thông qua custom properties.                                                                                |
| Dark Mode Compliance   | ✅      | Background và popover colors match với theme.                                                                                                  |

### Diffs cần fix

```diff
- "**:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none"
+ "[&_data-[slot=navigation-menu-link]]:focus:ring-0 [&_data-[slot=navigation-menu-link]]:focus:outline-none"

- "[&_svg:not([class*='size-'])]:size-4"
+ "[&>svg:not([class*='size-'])]:size-4"
```
