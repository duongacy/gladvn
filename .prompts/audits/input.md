# Audit Prompt: Input

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Input (text field) là form control cơ bản nhất cho phép user nhập text. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Native Element:** BẮT BUỘC dùng `<input>` (hoặc base component render ra `<input>`). KHÔNG dùng `<div contenteditable>` trừ khi là rich text editor.
- **`type` Attribute:** Phải hỗ trợ pass-through `type` prop (text, email, password, number, tel, url, search, date, etc.).
- **Label Association:**
  - Input BẮT BUỘC có label liên kết programmatically: `<label htmlFor="id">` hoặc `aria-label` hoặc `aria-labelledby`.
  - Placeholder KHÔNG thay thế label (WCAG 3.3.2). Placeholder chỉ là gợi ý, không phải label.
- **Error Message:**
  - Khi invalid, input phải có `aria-invalid="true"`.
  - Error message phải được liên kết qua `aria-describedby` hoặc `aria-errormessage`.
- **Description/Help Text:**
  - Help text phải liên kết qua `aria-describedby` (có thể kết hợp nhiều IDs).
- **Required State:**
  - Phải có `aria-required="true"` hoặc native `required` attribute.
  - Visual indicator (dấu *) phải đi kèm programmatic indicator.

### B. Keyboard Navigation & Focus

- **Auto-focus:** KHÔNG auto-focus input trừ khi nằm trong modal/dialog (WCAG 3.2.1 — On Focus).
- **Focus Ring:** Phải hiển thị rõ ràng khi focused.
- **Password Visibility Toggle:** Nếu có show/hide password button, button đó phải keyboard-accessible.

### C. Standard API & Props

- `value` / `defaultValue` / `onChange`: Pattern Controlled & Uncontrolled chuẩn.
- `disabled` / `readOnly`: Hai trạng thái khác nhau — disabled = không interact được, readOnly = đọc được, copy được, không sửa được.
- `type`: HTML5 input types.
- `placeholder`: Gợi ý format/content.
- `name`: Native form submission.
- Forward `ref` đến native `<input>` element.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Label phải programmatically associated, không chỉ visual.
- **1.3.5 Identify Input Purpose (AA):** Input nên có `autocomplete` attribute khi applicable (name, email, tel, address, etc.).
- **1.4.3 Contrast Minimum (AA):** Text trong input phải đạt 4.5:1 contrast. Placeholder text nên đạt 4.5:1 (AA) nhưng PHẢI đạt ít nhất 3:1.
- **1.4.11 Non-text Contrast (AA):** Input border phải đạt 3:1 contrast với background.
- **2.4.7 Focus Visible (AA):** Focus ring phải visible và đạt contrast.
- **3.3.1 Error Identification (A):** Lỗi phải được mô tả bằng text, không chỉ bằng màu đỏ.
- **3.3.2 Labels or Instructions (A):** Input phải có label hoặc instructions.
- **3.3.3 Error Suggestion (AA):** Nếu lỗi được detect, phải gợi ý cách sửa.

## 2. sadcn "20 Commandments" Integration

- **Form Control Parity (Rule #18):** Input sizing PHẢI chính xác: `sm: h-7 px-2 text-xs`, `md: h-8 px-2.5 text-sm`, `lg: h-9 px-3 text-sm`. Focus ring: `focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50`.
- **CSS Delegated Logic (Rule #2):** Invalid state border/ring PHẢI dùng CSS (`aria-invalid:border-destructive`), không dùng React state.
- **No Magic Number (Rule #4):** Tất cả sizing, spacing, border-radius phải dùng design tokens.
- **Zero-Prop Defaults (Rule #1):** `<Input>` không prop phải render `type="text"`, `size="md"`, enabled.
- **Native DOM Flow (Rule #12):** Input KHÔNG có `w-full` mặc định. Để developer tự quyết layout.
- **Single Source of Truth (Rule #11):** Defaults khai báo ở function signature.
- **Base Aesthetics:** `rounded-lg border border-input bg-transparent transition-colors outline-none dark:bg-input/30`.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/input.tsx`.
3. Kiểm tra chéo từng tiêu chí, đặc biệt: **Form Control Parity** (sizing chính xác pixel-perfect), **Invalid state styling** (CSS-only via `aria-invalid`), và **ref forwarding**.
4. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---
