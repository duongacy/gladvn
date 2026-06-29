# Audit Prompt: Checkbox

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Checkbox cho phép user chọn một hoặc nhiều option từ một danh sách, hoặc toggle một trạng thái on/off. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Checkbox Element:**
  - Phải có `role="checkbox"` (native `<input type="checkbox">` tự có, hoặc custom element phải khai báo).
  - Phải có `aria-checked="true"` | `"false"` | `"mixed"` (cho tri-state/indeterminate checkbox).
  - Phải có accessible name thông qua visible `<label>`, `aria-label`, hoặc `aria-labelledby`.
- **Label Association:**
  - BẮT BUỘC có label liên kết. Nếu dùng native input: `<label htmlFor="id">`. Nếu dùng custom: `aria-labelledby`.
  - Click vào label PHẢI toggle checkbox (native behavior hoặc phải implement).
- **Group (nếu có):**
  - Nhóm checkbox nên bọc trong `<fieldset>` với `<legend>`, hoặc container có `role="group"` với `aria-labelledby`.
- **Indeterminate State:**
  - Khi checkbox ở trạng thái "mixed" (một số con checked, một số không): phải set `aria-checked="mixed"`.
  - Indeterminate indicator (thường là dấu `-`) phải khác biệt rõ ràng với checkmark.

### B. Keyboard Navigation & Focus

- `Space`: Toggle checkbox checked/unchecked (native behavior). **KHÔNG dùng `Enter`** — đây là convention chuẩn W3C cho checkbox.
- `Tab` / `Shift+Tab`: Di chuyển focus tự nhiên giữa các checkbox (không dùng roving tabindex cho checkbox group).
- **Focus Ring:** Phải hiển thị rõ ràng, đạt WCAG 1.4.11 Non-text Contrast (3:1 minimum).

### C. Standard API & Props

- `checked` / `defaultChecked` / `onCheckedChange`: Pattern Controlled & Uncontrolled chuẩn.
- `indeterminate`: Hỗ trợ tri-state (mixed) checkbox.
- `disabled`: Vô hiệu hoá checkbox, ngăn tương tác.
- `required`: Đánh dấu checkbox là bắt buộc trong form context.
- `name` / `value`: Hỗ trợ native form submission.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Label phải được liên kết programmatically với checkbox, không chỉ visual.
- **1.4.1 Use of Color (A):** Trạng thái checked không chỉ dùng màu — phải có checkmark icon hoặc visual indicator khác.
- **1.4.11 Non-text Contrast (AA):** Checkbox border và checkmark phải đạt 3:1 contrast. Focus ring cũng vậy.
- **2.5.8 Target Size Minimum (AA):** Checkbox clickable area phải ≥ 24×24 CSS pixels (bao gồm cả padding/label nếu có).
- **3.3.2 Labels or Instructions (A):** Phải có label rõ ràng cho mỗi checkbox.
- **4.1.2 Name, Role, Value (A):** Screen reader phải announce đúng: name, role ("checkbox"), và state ("checked"/"not checked"/"mixed").

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Checkmark icon và indeterminate indicator PHẢI xuất hiện/ẩn thông qua CSS (`data-[state=checked]`, `data-[state=indeterminate]`) thay vì React conditional rendering.
- **Form Control Parity (Rule #18):** Checkbox sizing phải tương thích khi đặt cạnh Input/Button. Focus ring phải dùng chung token: `focus-visible:ring-3 focus-visible:ring-ring/50`.
- **No Magic Number (Rule #4):** Kích thước checkbox (width/height) phải dùng design tokens, không hardcode.
- **Zero-Prop Defaults (Rule #1):** `<Checkbox>` không prop phải hoạt động: unchecked, enabled, size mặc định.
- **Strict Polymorphism (Rule #3):** Không có prop `label` riêng. Label phải qua composition (children hoặc external `<Label>`).

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/checkbox.tsx`.
3. Kiểm tra chéo từng tiêu chí, đặc biệt: **Label association** (có đúng programmatic không?), **Indeterminate state** (có hỗ trợ đúng `aria-checked="mixed"` không?), và **CSS Delegated Logic** cho icon rendering.
4. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí          | Verdict | Note                                                                                   |
| ---------------------- | ------- | -------------------------------------------------------------------------------------- |
| W3C APG / ARIA         | ✅      | Base UI Checkbox hỗ trợ đầy đủ aria-checked="mixed" và space toggle                    |
| 21. CSS Depth Boundary | ✅      | Dùng `[&>svg]` trực tiếp tại CheckboxPrimitive.Indicator, không lạm dụng deep selector |
| Form Control Parity    | ✅      | Kích thước size-3.5, size-4, size-5 và focus-visible hoàn toàn khớp                    |
| Dark Mode Compliance   | ✅      | `dark:bg-input/30` và `dark:aria-invalid...` dùng chuẩn xác                            |
