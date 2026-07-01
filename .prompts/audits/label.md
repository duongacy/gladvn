# Audit Prompt: Label

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Label cung cấp accessible name cho form controls. Mặc dù đơn giản về mặt component, Label là yếu tố then chốt cho accessibility. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Native Element:** BẮT BUỘC render ra `<label>` element. KHÔNG dùng `<span>` hoặc `<div>` với role.
- **`htmlFor` Association:**
  - Label PHẢI có `htmlFor` attribute trỏ đến `id` của form control.
  - Khi click vào label, focus PHẢI chuyển đến control tương ứng (native `<label>` behavior).
  - Nếu label bọc control (implicit association), `htmlFor` không bắt buộc nhưng nên có.
- **Required Indicator:**
  - Nếu control required, label nên hiển thị visual indicator (vd: `*` hoặc text "(required)").
  - Indicator `*` phải có `aria-hidden="true"` hoặc được bao trong `<span>` với `title="required"`.
- **Disabled State:**
  - Khi control disabled, label styling nên reflect (opacity giảm, cursor not-allowed).
  - Label vẫn phải visible và readable cho screen reader.

### B. Keyboard Navigation & Focus

- Label bản thân KHÔNG focusable — nó là auxiliary element.
- Click vào label phải focus control tương ứng (native `<label htmlFor>` behavior).

### C. Standard API & Props

- Extends native `<label>` props.
- `htmlFor`: Association với control.
- `className`: Styling customization.
- Forward `ref` đến native `<label>`.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Label-control relationship PHẢI programmatic qua `htmlFor` + `id`.
- **2.4.6 Headings and Labels (AA):** Label text phải descriptive và meaningful.
- **3.3.2 Labels or Instructions (A):** Form controls phải có visible labels.
- **1.4.3 Contrast Minimum (AA):** Label text phải đạt 4.5:1 contrast.

## 2. sadcn "20 Commandments" Integration

- **Form Control Parity (Rule #18):** Label font-size phải đồng bộ. Khi đặt cạnh form controls, phải tạo visual hierarchy rõ ràng. Label mặc định nên là `text-sm font-medium`.
- **CSS Delegated Logic (Rule #2):** Disabled state styling PHẢI dùng CSS (`peer-disabled:opacity-50` hoặc `has-[:disabled]:opacity-50`), KHÔNG dùng React state.
- **No Magic Number (Rule #4):** Font-size, line-height, margin-bottom (space giữa label và control) phải dùng tokens.
- **Zero-Prop Defaults (Rule #1):** `<Label>` không prop phải render `<label>` với styling mặc định.
- **Strict Polymorphism (Rule #3):** KHÔNG có prop `required` tự render dấu `*`. Để Field component quản lý.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/label.tsx`.
3. Kiểm tra chéo từng tiêu chí, đặc biệt: **Native `<label>` rendering**, **`htmlFor` support**, **Disabled state CSS** (peer-disabled pattern), và **Form Control Parity** (font-size consistency).
4. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---
