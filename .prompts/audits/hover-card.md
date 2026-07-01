# Audit Prompt: Hover Card

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Hover Card hiển thị preview content khi user hover lên trigger (thường là link hoặc avatar). Tương tự Tooltip nhưng chứa rich content. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Trigger:**
  - Trigger thường là link hoặc interactive element.
  - KHÔNG cần `aria-haspopup` vì hover card là supplementary info, không phải action menu.
  - Nếu hover card chứa interactive content → cần `aria-haspopup="dialog"` và `aria-expanded`.
- **Content:**
  - Nếu chỉ chứa text/images (non-interactive): không cần `role` đặc biệt. Dùng `aria-describedby` hoặc ẩn khỏi a11y tree.
  - Nếu chứa interactive elements (links, buttons): cần `role="dialog"` (trở thành Popover).
- **Supplementary Nature:**
  - Hover card content PHẢI là supplementary — không chứa critical information mà user không thể access bằng cách khác.
  - User phải access được cùng thông tin bằng cách click/navigate đến target (vd: user profile page).

### B. Keyboard Navigation & Focus

- **Hover Only (Traditional):**
  - Hover card xuất hiện khi hover, biến mất khi hover ra.
  - WCAG 1.4.13: User phải hover được lên card content mà nó không biến mất.
  - Esc: Dismiss card.
- **Focus Trigger (Critical for A11y):**
  - Nếu hover card chứa interactive content, nó PHẢI xuất hiện khi trigger nhận focus.
  - Nếu chỉ chứa non-interactive content, focus trigger là nice-to-have.
- **Touch Devices:**
  - Hover không tồn tại trên touch — hover card content phải accessible bằng cách khác (tap to navigate).

### C. Standard API & Props

- `open` / `defaultOpen` / `onOpenChange`.
- `openDelay` / `closeDelay`: Timing control.
- Composition: Root, Trigger, Portal, Content, Arrow.

### D. WCAG 2.2 Success Criteria

- **1.4.13 Content on Hover or Focus (AA):** Dismissable (Esc), Hoverable (user hover lên card), Persistent (không tự biến mất).
- **2.1.1 Keyboard (A):** Nếu chứa interactive content, phải keyboard accessible.
- **1.3.1 Info and Relationships (A):** Content phải accessible qua alternative means (navigate to page).

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Animation dùng CSS (`data-[state=open]`).
- **Portal Tunneling (Rule #15):** Portal phải giữ theme.
- **Z-Index (Rule #4):** Z-index hợp lý.
- **Readability (Rule #10):** Delay logic và hover intent detection phải có comment.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/hover-card.tsx`.
3. Kiểm tra chéo từng tiêu chí, đặc biệt: **WCAG 1.4.13** (hoverable, persistent, dismissable), **Supplementary content** (có chứa critical info không?), và **Touch device fallback**.
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
