# Audit Prompt: Textarea

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Textarea cho phép user nhập multi-line text. Kế thừa hầu hết tiêu chuẩn của Input nhưng có thêm các yêu cầu riêng. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Native Element:** BẮT BUỘC dùng `<textarea>` (hoặc base component render ra `<textarea>`).
- **Label Association:** Tương tự Input — BẮT BUỘC có label programmatically associated.
- **Error/Description Association:** `aria-invalid`, `aria-describedby`, `aria-errormessage` — tương tự Input.
- **Character Count (nếu có):**
  - Nếu có character counter, phải liên kết qua `aria-describedby`.
  - Khi gần limit, nên announce qua `aria-live="polite"` region.
- **Auto-resize:**
  - Nếu textarea auto-resize, phải không gây layout shift cho surrounding content.
  - Auto-resize nên dùng CSS (`field-sizing: content` nếu supported, hoặc `resize: vertical`).

### B. Keyboard Navigation & Focus

- **Enter:** Xuống dòng mới (khác với Input — Enter trong textarea KHÔNG submit form).
- `Tab`: Di chuyển focus RA KHỎI textarea (không insert tab character). Nếu cần insert tab, phải có explicit toggle.
- **Focus Ring:** Tương tự Input — `focus-visible:border-ring focus-visible:ring-3`.
- **Resize Handle:** Nếu có resize handle, phải keyboard accessible hoặc có alternative (CSS `resize: vertical`).

### C. Standard API & Props

- `value` / `defaultValue` / `onChange`: Pattern Controlled & Uncontrolled.
- `rows` / `cols`: Kích thước mặc định.
- `maxLength` / `minLength`: Validation.
- `disabled` / `readOnly` / `required`.
- `placeholder`: Gợi ý (không thay thế label).
- `resize`: Control resize behavior.
- Forward `ref` đến native `<textarea>`.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Label phải programmatically associated.
- **1.4.3 Contrast Minimum (AA):** Text và placeholder contrast.
- **1.4.11 Non-text Contrast (AA):** Border contrast.
- **2.4.7 Focus Visible (AA):** Focus ring visible.
- **3.3.1 Error Identification (A):** Lỗi mô tả bằng text.
- **3.3.2 Labels or Instructions (A):** Phải có label.

## 2. sadcn "20 Commandments" Integration

- **Form Control Parity (Rule #18):** Textarea PHẢI dùng chung base aesthetics với Input: `rounded-lg border border-input bg-transparent dark:bg-input/30`. Focus ring: `focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50`. Invalid state: `aria-invalid:border-destructive`.
- **CSS Delegated Logic (Rule #2):** Auto-resize (nếu có) ưu tiên CSS (`field-sizing: content`). Invalid/focus state dùng CSS.
- **No Magic Number (Rule #4):** Min-height, padding phải dùng design tokens.
- **Zero-Prop Defaults (Rule #1):** `<Textarea>` không prop phải render enabled, size mặc định.
- **Native DOM Flow (Rule #12):** Không ép `w-full` mặc định.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/textarea.tsx`.
3. Kiểm tra chéo từng tiêu chí, đặc biệt: **Form Control Parity alignment** với Input (border, focus ring, invalid state phải đồng nhất), **Auto-resize approach** (CSS vs JS), và **ref forwarding**.
4. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---
