# Audit Prompt: Toggle Group

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Toggle Group là nhóm Toggle buttons cho phép single hoặc multiple selection. Tương tự Toolbar pattern. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Group Container:**
  - Phải có `role="group"` (hoặc `role="toolbar"` nếu có multiple types of controls).
  - Phải có `aria-label` hoặc `aria-labelledby` mô tả nhóm (vd: "Text formatting", "View options").
- **Toggle Items:**
  - Mỗi toggle: `<button>` với `aria-pressed="true"` | `"false"`.
  - Nếu `type="single"`: hoạt động như radio group nhưng dùng `aria-pressed` thay vì `aria-checked`.
  - Nếu `type="multiple"`: mỗi button independent, dùng `aria-pressed`.
- **Disabled:**
  - Group-level disabled: tất cả items disabled.
  - Item-level disabled: chỉ item cụ thể.

### B. Keyboard Navigation & Focus

- **Nếu dùng Toolbar pattern (roving tabindex):**
  - `Tab`: Focus vào group (item đầu tiên hoặc item đang selected).
  - `Arrow Right` / `Arrow Left`: Di chuyển focus giữa items.
  - `Home` / `End`: Focus item đầu/cuối.
  - `Enter` / `Space`: Toggle item.
- **Nếu dùng Group pattern (natural tab order):**
  - `Tab`: Di chuyển focus giữa items theo DOM order.
  - `Enter` / `Space`: Toggle item.

### C. Standard API & Props

- `type`: `"single"` | `"multiple"`.
- `value` / `defaultValue` / `onValueChange`: Selected value(s).
- `disabled`: Group-level disable.
- `variant` / `size`: Visual style (phải đồng bộ với Toggle component).
- Composition: ToggleGroup, ToggleGroupItem.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Group-item relationship qua `role="group"` + `aria-labelledby`.
- **2.1.1 Keyboard (A):** Full keyboard navigation.
- **4.1.2 Name, Role, Value (A):** Screen reader announce: group name, item role, pressed state.

## 2. sadcn "20 Commandments" Integration & Architecture Rules

- **Pure Composition Only (CRITICAL):** Các component trong `src/components/ui` CHỈ được phép là Compositional Primitives (ví dụ: phải chia tách rạch ròi `ToggleGroup` và `ToggleGroupItem`). Tuyệt đối KHÔNG chứa bất kỳ monolithic logic nào (như nhận prop `items` dạng mảng rồi tự render loop bên trong UI). Bất cứ monolithic behavior nào bị phát hiện BẮT BUỘC phải bị reject và di dời sang `src/components/monolithic/`.
- **CSS Delegated Logic (Rule #2):** Pressed state styling dùng CSS (`data-[state=on]`). Group border merging (nếu visual connected buttons) dùng CSS (`:first-child`, `:last-child` border-radius removal).
- **Form Control Parity (Rule #18):** Item sizing align với Toggle/Button.
- **Linear Design (Rule #5):** Tất cả items phải đồng bộ styling.
- **No Magic Number (Rule #4):** Gap, sizing phải dùng tokens.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/toggle-group.tsx`.
3. Kiểm tra chéo, đặc biệt: **`role="group"`** + **`aria-label`**, **Single vs Multiple mode** behavior, **Keyboard navigation** (toolbar vs group), và **CSS pressed state** parity với Toggle.
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
