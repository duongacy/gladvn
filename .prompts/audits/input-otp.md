# Audit Prompt: Input OTP

**Base rules:** Tuân thủ tuyệt đối `AUDIT_TEMPLATE.md` và `docs/architecture/PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Input OTP (One-Time Password) cho phép user nhập mã xác thực gồm nhiều ký tự, thường hiển thị dưới dạng các ô riêng biệt. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Approach 1 — Single Hidden Input (Recommended):**
  - Dùng MỘT `<input>` ẩn chứa toàn bộ OTP value.
  - Các ô hiển thị (slots) là visual-only, nhận giá trị từ input.
  - Input phải có `inputMode="numeric"` (cho OTP số) hoặc `inputMode="text"` (cho alphanumeric).
  - Phải có `autocomplete="one-time-code"` để browser auto-fill từ SMS.
  - Phải có `aria-label` mô tả (vd: "Verification code" hoặc "6-digit code").
- **Approach 2 — Multiple Inputs (Phức tạp hơn):**
  - Mỗi ô là một `<input>` riêng, bọc trong container có `role="group"` với `aria-labelledby`.
  - Mỗi input phải có `aria-label` riêng (vd: "Digit 1 of 6").
  - `maxLength="1"` trên mỗi input.
  - Auto-advance: Khi nhập ký tự, focus phải tự động chuyển sang ô tiếp theo.
- **Label Association:** Toàn bộ OTP group phải có label mô tả rõ ràng (vd: "Enter verification code sent to your email").
- **Error State:**
  - `aria-invalid="true"` khi OTP sai.
  - Error message qua `aria-describedby`.

### B. Keyboard Navigation & Focus

- **Gõ số/chữ:** Điền vào ô hiện tại, auto-advance sang ô tiếp theo.
- `Backspace`: Xoá ký tự hiện tại. Nếu ô trống, quay về ô trước đó.
- `Arrow Left` / `Arrow Right`: Di chuyển giữa các ô (nếu dùng multiple inputs).
- `Delete`: Xoá ký tự hiện tại mà không quay về ô trước.
- **Paste:** User phải paste được toàn bộ OTP code (vd: "123456") — component tự phân phối vào các ô.
- **Focus:** Khi click vào bất kỳ ô nào, focus nên nhảy vào ô trống đầu tiên hoặc ô cuối cùng có giá trị.

### C. Standard API & Props

- `value` / `defaultValue` / `onComplete`: Callback khi nhập đủ.
- `length` / `maxLength`: Số ô OTP.
- `disabled`.
- `name`: Form submission.
- `type`: "numeric" hoặc "alphanumeric".
- `autoFocus`: Tự động focus vào ô đầu tiên khi mount.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Label + group association.
- **1.3.5 Identify Input Purpose (AA):** `autocomplete="one-time-code"` cho auto-fill OTP từ SMS.
- **1.4.11 Non-text Contrast (AA):** Slot borders, cursor/caret, focus ring.
- **2.1.1 Keyboard (A):** Full keyboard operation — type, backspace, paste, arrow navigate.
- **2.4.7 Focus Visible (AA):** Focus ring trên slot đang active.
- **3.3.2 Labels or Instructions (A):** Phải có label mô tả rõ ràng.
- **3.3.3 Error Suggestion (AA):** Khi OTP sai, gợi ý (vd: "Code expired, request a new one").

## 2. gladcn "20 Commandments" Integration

- **Form Control Parity (Rule #18):** OTP slots PHẢI dùng chung base aesthetics: `rounded-lg border border-input`. Focus ring: `focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50`.
- **CSS Delegated Logic (Rule #2):** Active slot indicator, caret animation PHẢI dùng CSS.
- **No Magic Number (Rule #4):** Slot width/height, gap phải dùng design tokens.
- **Zero-Prop Defaults (Rule #1):** `<InputOTP>` phải có length/maxLength mặc định hợp lý.
- **Readability (Rule #10):** Auto-advance và paste logic phải có comment giải thích rõ ràng.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/micro/input-otp.tsx`.
3. Kiểm tra chéo từng tiêu chí, đặc biệt: **`autocomplete="one-time-code"`** (có hay không?), **Paste behavior** (paste toàn bộ OTP), **Keyboard navigation** (backspace/arrow), và **Accessible name** cho từng slot.
4. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---
