# Audit Prompt: Item

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Item là generic list item component dùng trong nhiều context (menu item, list item, selectable item). BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Semantic Element:**
  - Nếu trong list: render `<li>` element.
  - Nếu trong menu: phải có `role="menuitem"`, `role="option"`, hoặc tương ứng với container context.
  - Nếu generic: có thể là `<div>` nhưng phải flexible qua polymorphism.
- **Interactive Item:**
  - Nếu clickable: phải keyboard-accessible (button hoặc link semantic).
  - Nếu selectable: `aria-selected="true"` | `"false"`.
  - Nếu có description: `aria-describedby`.
- **Leading/Trailing Content:**
  - Icons: `aria-hidden="true"` (decorative).
  - Status badges: phải accessible nếu convey meaning.
- **Disabled State:**
  - `aria-disabled="true"` (vẫn focusable nhưng không activatable).
  - Hoặc `disabled` attribute (nếu native button).

### B. Keyboard Navigation & Focus

- Phụ thuộc vào context:
  - Trong menu: roving tabindex, arrow key navigation.
  - Trong list: natural tab order hoặc roving tabindex.
  - `Enter` / `Space`: Activate item.
- Focus ring phải visible.

### C. Standard API & Props

- `variant`: Visual style.
- `disabled`: Disable item.
- `selected` / `active`: Selection state.
- `asChild` / `render`: Polymorphism (render as link, button, etc.).

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Item-container semantic relationship.
- **2.1.1 Keyboard (A):** Interactive items keyboard-accessible.
- **2.4.7 Focus Visible (AA):** Focus ring visible.
- **2.5.8 Target Size (AA):** Item clickable area ≥ 24×24px.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Hover, active, selected states dùng CSS.
- **Strict Polymorphism (Rule #3):** Item phải hỗ trợ render as different elements (asChild pattern).
- **Form Control Parity (Rule #18):** Item sizing (height, padding) nên align với menu/list conventions.
- **No Magic Number (Rule #4):** Padding, gap, height phải dùng tokens.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/item.tsx`.
3. Kiểm tra chéo, đặc biệt: **Semantic flexibility** (renders correct element per context), **Polymorphism** (asChild), **Disabled vs aria-disabled**, và **Interactive states CSS**.
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí          | Verdict | Note                                                                                                                                         |
| ---------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA         | ✅      | Strict Polymorphism (`useRender`) giúp render ra đúng semantic tag cần thiết.                                                                |
| 21. CSS Depth Boundary | ❌      | `Item` (L159) dùng deep selector `[&_svg]` và `*:[svg]`. Cần đổi sang direct child. `ItemMedia` (L84, L89, L90) dùng `[&_svg]` và `[&_img]`. |
| Form Control Parity    | ⚠️      | Variant `[a]:hover:bg-muted` (L38) trong Tailwind v4 match element có attribute `a`. Nên sửa thành component class hoặc `a&:hover`.          |
| Dark Mode Compliance   | ✅      | Semantic colors hoạt động tốt.                                                                                                               |

### Diffs cần fix

```diff
- "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-selected:*:[svg]:text-foreground"
+ "[&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4 data-selected:[&>svg]:text-foreground"

- "[&_img]:size-full [&_img]:object-cover"
+ "[&>img]:size-full [&>img]:object-cover"
```
