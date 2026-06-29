# Audit Prompt: Field

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Field là wrapper component quản lý mối quan hệ giữa Label, Form Control, Description, và Error Message. Đây là nền tảng accessibility cho mọi form control. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Field Container:**
  - Có thể dùng `<div>` hoặc semantic element. Không cần `role` đặc biệt — chức năng chính là quản lý ID associations.
- **Label → Control Association:**
  - Field PHẢI auto-generate unique IDs và wire: `<label htmlFor={controlId}>`.
  - Nếu control không phải native form element, Field phải set `aria-labelledby` trên control.
- **Description → Control Association:**
  - Description phải được liên kết qua `aria-describedby` trên control.
  - Nếu có cả description và error, `aria-describedby` phải chứa cả hai IDs (space-separated).
- **Error Message → Control Association:**
  - Error message phải liên kết qua `aria-describedby` (hoặc `aria-errormessage` nếu support tốt).
  - Khi error xuất hiện, control phải tự động có `aria-invalid="true"`.
  - Error message PHẢI là `role="alert"` hoặc nằm trong `aria-live="assertive"` region để screen reader announce ngay lập tức.
- **Required Indicator:**
  - Nếu control required, Field phải set `aria-required="true"` hoặc `required` trên control.
  - Visual indicator (dấu *) phải có `aria-hidden="true"` nếu required đã được set programmatically.

### B. Keyboard Navigation & Focus

- Field bản thân không focusable — nó wire associations cho children.
- Khi control nhận focus, screen reader phải announce: label, description (nếu có), và error (nếu có) — tất cả thông qua `aria-labelledby` + `aria-describedby`.
- Error message xuất hiện phải trigger screen reader announcement.

### C. Standard API & Props

- Context-based approach: Field cung cấp context (IDs, error state, disabled state) cho children via React Context hoặc render props.
- `error` / `invalid`: Trạng thái lỗi.
- `disabled`: Disable toàn bộ form control + label.
- `required`: Required state.
- Composition: `Field`, `FieldLabel`, `FieldDescription`, `FieldError`.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** CRITICAL — Đây là raison d'être của Field. Label, description, error PHẢI programmatically linked đến control.
- **3.3.1 Error Identification (A):** Lỗi phải được mô tả bằng text, liên kết đến control.
- **3.3.2 Labels or Instructions (A):** Mỗi control phải có label.
- **3.3.3 Error Suggestion (AA):** Error message nên gợi ý cách sửa.
- **4.1.3 Status Messages (AA):** Error message xuất hiện phải được announce bởi assistive technology.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Error state styling (red border, error text color) PHẢI driven by CSS `aria-invalid` selector, KHÔNG dùng React className toggle.
- **Isolation (Rule #8):** Field là "infrastructure" — KHÔNG chứa business logic, chỉ wire accessibility relationships.
- **Zero-Prop Defaults (Rule #1):** `<Field>` không prop phải auto-generate IDs và wire associations cho children.
- **Readability (Rule #10):** ID generation và association logic PHẢI có comment giải thích rõ ràng.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/field.tsx`.
3. Kiểm tra chéo từng tiêu chí, đặc biệt: **ID auto-generation** (có generate unique IDs không?), **`aria-describedby` wiring** (label + description + error), **Error announcement** (live region), và **`aria-invalid` auto-set**.
4. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí          | Verdict | Note                                                                                                                                                                                                                  |
| ---------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA         | ✅      | Wrapper cho Field component cung cấp đầy đủ slot ID. (Phụ thuộc vào component mẹ hoặc user manual wiring).                                                                                                            |
| 21. CSS Depth Boundary | ❌      | Vi phạm ở nhiều nơi: `*:data-[slot=...]` (L53, L70, L73, L140). Trong Tailwind v4, variant `*:` tương đương descendant selector (`& * { ... }`). Cần thay bằng direct child `[&>*]:...` hoặc class utility trực tiếp. |
| Form Control Parity    | ✅      | Logic layout cực kỳ mạnh mẽ để render control ngang/dọc/responsive. Đạt chuẩn cao.                                                                                                                                    |
| Dark Mode Compliance   | ✅      | Tokens chuẩn xác.                                                                                                                                                                                                     |

### Diffs cần fix

```diff
- "*:data-[slot=field-group]:gap-4"
+ "[&>*]:data-[slot=field-group]:gap-4"
```

_(Tương tự cho các chỗ dùng `*:data-...`)_
