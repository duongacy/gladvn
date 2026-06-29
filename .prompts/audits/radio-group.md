# Audit Prompt: Radio Group

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Radio Group cho phép user chọn DUY NHẤT một option từ một danh sách. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Radio Group Container:**
  - Phải có `role="radiogroup"`.
  - Phải có accessible name thông qua `aria-labelledby` (trỏ tới heading/label bên ngoài) hoặc `aria-label`.
- **Radio Item:**
  - Phải có `role="radio"` (native `<input type="radio">` tự có).
  - Phải có `aria-checked="true"` (selected) hoặc `aria-checked="false"` (unselected).
  - Phải có accessible name thông qua visible `<label>`, `aria-label`, hoặc `aria-labelledby`.
- **Label Association:**
  - Mỗi radio item BẮT BUỘC có label liên kết programmatically.
  - Click vào label PHẢI select radio item tương ứng.
- **Fieldset Pattern:**
  - Nhóm radio nên bọc trong `<fieldset>` với `<legend>`, hoặc container có `role="radiogroup"` với `aria-labelledby`.

### B. Keyboard Navigation & Focus (Roving Tabindex)

- `Tab`: Di chuyển focus VÀO radio group (focus vào radio đang selected, hoặc radio đầu tiên nếu chưa có selection).
- `Tab` (lần nữa): Di chuyển focus RA KHỎI radio group đến element tiếp theo.
- `Arrow Down` / `Arrow Right`: Di chuyển selection đến radio tiếp theo (wrap around từ cuối về đầu).
- `Arrow Up` / `Arrow Left`: Di chuyển selection đến radio trước đó (wrap around từ đầu về cuối).
- `Space`: Select radio đang focused (nếu chưa selected). Chuẩn W3C: KHÔNG unselect được radio (phải chọn radio khác).
- **Roving Tabindex:** Chỉ radio đang selected (hoặc radio đầu tiên nếu chưa chọn) có `tabindex="0"`, tất cả radio khác có `tabindex="-1"`.

### C. Standard API & Props

- `value` / `defaultValue` / `onValueChange`: Pattern Controlled & Uncontrolled chuẩn.
- `disabled`: Hỗ trợ disabled ở cấp RadioGroup (vô hiệu hoá toàn bộ) và cấp RadioItem (vô hiệu hoá từng option).
- `required`: Đánh dấu bắt buộc phải chọn ít nhất một option.
- `name`: Native form submission support.
- `orientation`: Horizontal/Vertical — ảnh hưởng đến arrow key behavior.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Grouping relationship phải rõ ràng qua `role="radiogroup"` + `aria-labelledby`.
- **1.4.1 Use of Color (A):** Trạng thái selected không chỉ dùng màu — phải có filled circle hoặc visual indicator khác.
- **1.4.11 Non-text Contrast (AA):** Radio circle border và selected indicator phải đạt 3:1 contrast.
- **2.1.1 Keyboard (A):** Arrow keys phải hoạt động đúng (roving tabindex pattern).
- **2.4.7 Focus Visible (AA):** Focus ring phải rõ ràng trên radio đang focused.
- **3.3.2 Labels or Instructions (A):** Mỗi radio phải có label, group phải có group label.
- **4.1.2 Name, Role, Value (A):** Screen reader phải announce: name, role ("radio"), state ("checked"/"not checked"), và position ("1 of 3").

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Selected indicator (filled circle) PHẢI xuất hiện/ẩn thông qua CSS (`data-[state=checked]`) thay vì React conditional rendering.
- **Form Control Parity (Rule #18):** Focus ring phải dùng chung token: `focus-visible:ring-3 focus-visible:ring-ring/50`. Khi đặt trong form cạnh Input/Checkbox phải đồng bộ visual language.
- **Zero-Prop Defaults (Rule #1):** `<RadioGroup>` cần `defaultValue` hoặc phải xử lý graceful khi không có selection.
- **No Magic Number (Rule #4):** Kích thước radio circle phải dùng design tokens.
- **Anti-Ternary (Rule #19):** Rendering selected state phải dùng CSS, không ternary trong JSX.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/radio-group.tsx`.
3. Kiểm tra chéo từng tiêu chí, đặc biệt: **Roving Tabindex** (Arrow keys có hoạt động đúng không?), **Label association**, và **CSS Delegated Logic** cho selected indicator.
4. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí          | Verdict | Note                                                                          |
| ---------------------- | ------- | ----------------------------------------------------------------------------- |
| W3C APG / ARIA         | ✅      | Base UI xử lý roving tabindex (arrow keys navigation) cực chuẩn               |
| 21. CSS Depth Boundary | ✅      | Selected indicator được render trực tiếp thông qua CSS/span, không có vi phạm |
| Form Control Parity    | ✅      | Base dimensions và focus rings đồng bộ tốt                                    |
| Dark Mode Compliance   | ✅      | `dark:bg-input/30` và các invalid states có dark variant đầy đủ               |
