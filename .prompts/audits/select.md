# Audit Prompt: Select

**Base rules:** Tuân thủ tuyệt đối `AUDIT_TEMPLATE.md` và `docs/architecture/PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Select (custom dropdown) cho phép user chọn một giá trị từ danh sách options. Đây là một trong những component phức tạp nhất về accessibility. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Trigger (Button):**
  - Phải có `role="combobox"` hoặc dùng pattern listbox-trigger.
  - Phải có `aria-haspopup="listbox"`.
  - Phải có `aria-expanded="true"` (open) hoặc `"false"` (closed).
  - Phải có `aria-controls` trỏ đến listbox ID.
  - Phải có accessible name qua `aria-label`, `aria-labelledby`, hoặc associated `<label>`.
  - Phải hiển thị selected value hoặc placeholder text.
- **Listbox (Popup):**
  - Phải có `role="listbox"`.
  - Nếu multi-select: `aria-multiselectable="true"`.
- **Option:**
  - Phải có `role="option"`.
  - Option đang selected: `aria-selected="true"`.
  - Option disabled: `aria-disabled="true"`.
- **Option Group (nếu có):**
  - Container group: `role="group"`.
  - Group label: `role="presentation"` với `aria-hidden="true"` (decorative), hoặc dùng `aria-labelledby` trên group.
- **Separator (nếu có):**
  - Phải có `role="separator"`.

### B. Keyboard Navigation & Focus

- **Trigger Focused (Listbox Closed):**
  - `Enter` / `Space`: Mở listbox.
  - `Arrow Down`: Mở listbox và focus option đầu tiên (hoặc selected option).
  - `Arrow Up`: Mở listbox và focus option cuối cùng.
- **Listbox Open (Focus trong listbox):**
  - `Arrow Down`: Di chuyển focus đến option tiếp theo.
  - `Arrow Up`: Di chuyển focus đến option trước đó.
  - `Home`: Focus option đầu tiên.
  - `End`: Focus option cuối cùng.
  - `Enter` / `Space`: Select option đang focused và đóng listbox.
  - `Esc`: Đóng listbox mà không thay đổi selection, return focus về trigger.
  - **Type-ahead:** Gõ ký tự phải nhảy đến option bắt đầu bằng ký tự đó.
- **Focus Management:** Khi mở listbox, focus phải nhảy vào listbox. Khi đóng, focus phải quay về trigger.

### C. Standard API & Props

- `value` / `defaultValue` / `onValueChange`: Pattern Controlled & Uncontrolled.
- `open` / `defaultOpen` / `onOpenChange`: Control popup state.
- `disabled`: Vô hiệu hoá select.
- `required`: Form validation.
- `name`: Native form submission.
- `placeholder`: Text hiển thị khi chưa select.
- Composition: Root, Trigger, Value, Content, Group, Label, Item, Separator.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Trigger-listbox relationship, option-group relationship phải programmatic.
- **1.4.3 Contrast Minimum (AA):** Selected option highlight, option text contrast.
- **1.4.11 Non-text Contrast (AA):** Trigger border, dropdown border, focus indicator trên option.
- **2.1.1 Keyboard (A):** Full keyboard navigation (type-ahead, arrow keys, Home/End).
- **2.4.7 Focus Visible (AA):** Focus indicator trên trigger và trên option đang focused.
- **4.1.2 Name, Role, Value (A):** Screen reader phải announce: trigger name, role, expanded state, selected value.

## 2. gladcn "20 Commandments" Integration

- **Form Control Parity (Rule #18):** Trigger sizing PHẢI align với Input: `sm: h-7`, `md: h-8`, `lg: h-9`. Focus ring: `focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50`. Base aesthetics: `rounded-lg border border-input bg-transparent dark:bg-input/30`.
- **CSS Delegated Logic (Rule #2):** Open/close animation PHẢI dùng CSS (`data-[state=open]`, `data-starting-style`). Selected state styling dùng `data-[state=checked]` hoặc `aria-selected`.
- **Portal Tunneling (Rule #15):** Listbox content thường render trong Portal — PHẢI đảm bảo không mất theme context.
- **Z-Index (Rule #4):** Listbox popup z-index phải hợp lý (> 50).
- **Macro Component Law (Rule #13):** Nếu basic usage cần > 5 dòng JSX, cần cung cấp MonoSelect variant.
- **Flat Data First (Rule #14):** Nếu nhận data prop, phải là `Array<T>` phẳng.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/select.tsx`.
3. Kiểm tra chéo từng tiêu chí, đặc biệt: **ARIA attributes** (combobox/listbox pattern), **Keyboard navigation** (type-ahead, arrow keys, Esc), **Focus management** (focus trap trong popup), và **Form Control Parity** (trigger sizing alignment).
4. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---
