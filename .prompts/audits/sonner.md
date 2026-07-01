# Audit Prompt: Sonner (Toast)

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Sonner (Toast/Notification) hiển thị thông báo tạm thời. Toast là ARIA live region — phải announce cho screen reader mà không cướp focus. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Toast Container (Region):**
  - Phải là `aria-live` region: `aria-live="polite"` (cho thông báo thường) hoặc `aria-live="assertive"` (cho lỗi nghiêm trọng).
  - Phải có `role="status"` (polite) hoặc `role="alert"` (assertive).
  - Phải có `aria-label` (vd: "Notifications").
  - Container nên có `aria-relevant="additions"` để chỉ announce toast mới, không re-announce toàn bộ.
- **Individual Toast:**
  - Nên có `role="status"` hoặc `role="alert"` tuỳ severity.
  - Nội dung phải là text thuần hoặc có accessible text equivalent.
- **Action Button (nếu có):**
  - Phải keyboard-accessible, có accessible name.
  - Action phải liên quan đến toast content (vd: "Undo" sau khi xoá).
- **Close Button (nếu có):**
  - `aria-label="Close notification"` hoặc tương tự.
  - Keyboard-accessible.
- **Toast Type/Severity:**
  - Nếu toast có type (success/error/warning/info), type PHẢI được truyền đạt qua text hoặc icon có alt text, KHÔNG chỉ bằng màu sắc.

### B. Keyboard Navigation & Focus

- **KHÔNG cướp focus:** Toast xuất hiện KHÔNG DI CHUYỂN focus. User đang làm gì thì tiếp tục.
- **Focus vào toast (tùy chọn):** Nếu toast chứa action button, user cần cách để focus vào toast:
  - Một số implementation cho phép `F6` hoặc `Tab` vào toast region.
  - Hoặc toast region nằm ở cuối DOM, Tab cycle cuối cùng sẽ đến.
- `Esc`: Dismiss toast (nếu đang focused).
- **Auto-dismiss:** Toast tự biến mất sau timeout — nhưng PHẢI pause timeout khi user hover hoặc focus vào toast (WCAG 2.2.1).
- **Swipe to Dismiss:** Nếu hỗ trợ, phải có keyboard alternative.

### C. Standard API & Props

- `toast()` / `toast.success()` / `toast.error()` / `toast.warning()` / `toast.info()`: API gọi toast.
- `duration`: Auto-dismiss duration.
- `dismissible`: Có cho phép dismiss không.
- `position`: Vị trí trên màn hình.
- `richColors`: Enhanced color scheme.
- `theme`: Light/Dark/System.
- `closeButton`: Hiển thị close button.

### D. WCAG 2.2 Success Criteria

- **1.4.1 Use of Color (A):** Toast type KHÔNG chỉ phân biệt bằng màu — cần icon hoặc text prefix.
- **2.2.1 Timing Adjustable (A):** User phải có cách extend/pause auto-dismiss (hover pause, hoặc configurable duration).
- **2.2.4 Interruptions (AAA):** Non-critical toasts KHÔNG nên dùng `role="alert"` (quá intrusive cho screen reader).
- **4.1.3 Status Messages (AA):** Toast content PHẢI được announce bởi assistive technology qua live region.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Toast enter/exit animation PHẢI dùng CSS.
- **Portal Tunneling (Rule #15):** Toast container render ở root level — phải đảm bảo nhận đúng theme (truyền `theme` prop).
- **Z-Index (Rule #4):** Toast z-index phải cao nhất — trên cả Dialog/Modal.
- **No Magic Number (Rule #4):** Duration, gap giữa toasts, offset phải dùng tokens.
- **Isolation (Rule #8):** Toast component không chứa business logic — chỉ là rendering mechanism.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/sonner.tsx`.
3. Kiểm tra chéo, đặc biệt: **`aria-live` region** (polite vs assertive), **Auto-dismiss pause** (hover/focus pause), **Theme tunneling** (Sonner nhận đúng theme không?), và **Color independence** (type phân biệt bằng gì ngoài màu?).
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
