# Audit Prompt: Dropdown Menu

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Dropdown Menu (Menu Button pattern) hiển thị danh sách actions khi user click trigger button. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Trigger (Menu Button):**
  - Phải có `aria-haspopup="menu"`.
  - Phải có `aria-expanded="true"` (open) hoặc `"false"` (closed).
  - Phải có `aria-controls` trỏ đến menu content ID.
  - Phải có accessible name (text content hoặc `aria-label`).
- **Menu Content:**
  - Phải có `role="menu"`.
  - Phải có `aria-labelledby` trỏ đến trigger button ID.
- **Menu Item:**
  - Phải có `role="menuitem"`.
  - Disabled: `aria-disabled="true"`.
- **Checkbox/Radio Items:**
  - Checkbox: `role="menuitemcheckbox"` + `aria-checked`.
  - Radio: `role="menuitemradio"` + `aria-checked`, bọc trong `role="group"`.
- **Submenu:**
  - SubTrigger: `role="menuitem"` + `aria-haspopup="menu"` + `aria-expanded`.
- **Label (Group heading):**
  - `role="presentation"` hoặc không cần role, nhưng phải được tham chiếu bởi `aria-labelledby` trên group.
- **Separator:**
  - `role="separator"`.

### B. Keyboard Navigation & Focus

- **Trigger Focused (Menu Closed):**
  - `Enter` / `Space`: Mở menu, focus item đầu tiên.
  - `Arrow Down`: Mở menu, focus item đầu tiên.
  - `Arrow Up`: Mở menu, focus item cuối cùng.
- **Menu Open:**
  - `Arrow Down`: Focus item tiếp theo.
  - `Arrow Up`: Focus item trước đó.
  - `Arrow Right`: Mở submenu, focus submenu item đầu tiên.
  - `Arrow Left`: Đóng submenu, focus parent item.
  - `Home` / `End`: Focus item đầu/cuối.
  - `Enter` / `Space`: Activate item.
  - `Esc`: Đóng menu, focus quay về trigger.
  - **Type-ahead:** Gõ ký tự nhảy đến item matching.
- **Focus Management:**
  - Mở menu → focus item đầu tiên (hoặc previously focused item).
  - Đóng menu → focus trigger.
  - Roving tabindex pattern.

### C. Standard API & Props

- Composition: Root, Trigger, Portal, Content, Item, Sub, SubTrigger, SubContent, CheckboxItem, RadioItem, RadioGroup, Separator, Label.
- `open` / `onOpenChange`.
- `modal`: Boolean (mặc định true — focus trapped).

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Trigger-menu relationship, item grouping.
- **2.1.1 Keyboard (A):** Full keyboard navigation.
- **2.4.3 Focus Order (A):** Logical focus order.
- **2.4.7 Focus Visible (AA):** Focus indicators trên trigger và menu items.
- **4.1.2 Name, Role, Value (A):** Screen reader announce: role, state, item roles.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Animation, highlight state dùng CSS (`data-[state=open]`, `data-[highlighted]`).
- **Portal Tunneling (Rule #15):** Menu trong Portal phải giữ theme.
- **Z-Index (Rule #4):** Menu z-index phải hợp lý.
- **Macro Component Law (Rule #13):** Basic usage cần nhiều dòng — xem xét cung cấp MonoDropdownMenu.
- **Linear Design (Rule #5):** Item styling phải đồng bộ hoàn toàn với Context Menu (cùng pattern, cùng token).

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/dropdown-menu.tsx`.
3. Kiểm tra chéo từng tiêu chí, đặc biệt: **Menu Button ARIA pattern** (aria-haspopup, aria-expanded, aria-controls), **Full keyboard navigation** (type-ahead, submenu arrows), **Parity với Context Menu**, và **CSS animation**.
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí          | Verdict | Note                                                                                                                                      |
| ---------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA         | ✅      | Menu Button pattern, type-ahead và focus management hoạt động tuyệt vời                                                                   |
| 21. CSS Depth Boundary | ❌      | Giống Context Menu, vi phạm ở các Items (`DropdownMenuItem`, `SubTrigger`, `CheckboxItem`, `RadioItem`): dùng `[&_svg]` thay vì `[&>svg]` |
| Form Control Parity    | ✅      | Parity hoàn hảo với Context Menu (Rule #5 Linear Design)                                                                                  |
| Dark Mode Compliance   | ✅      | Semantic tokens tốt, hover và focus state hiển thị chuẩn                                                                                  |

### Diffs cần fix

```diff
- "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive"
+ "[&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4 data-[variant=destructive]:[&>svg]:text-destructive"
```
