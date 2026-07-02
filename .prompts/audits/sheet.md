# Audit Prompt: Sheet

**Base rules:** Tuân thủ tuyệt đối `AUDIT_TEMPLATE.md` và `docs/architecture/PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Sheet là biến thể của Dialog, slide vào từ cạnh màn hình (top/right/bottom/left). Kế thừa toàn bộ tiêu chuẩn Dialog nhưng có thêm yêu cầu riêng. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Tất cả quy tắc Dialog áp dụng:**
  - `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`.
  - Overlay chặn tương tác phía sau.
- **Side Variant:**
  - Sheet có `side` prop (top/right/bottom/left) — KHÔNG ảnh hưởng ARIA, chỉ ảnh hưởng animation direction.
  - Screen reader không cần biết sheet từ hướng nào — chỉ cần biết đây là dialog.

### B. Keyboard Navigation & Focus Management

- **Kế thừa Dialog:**
  - Focus trap, Esc to close, focus restoration.
  - Initial focus vào interactive element đầu tiên bên trong.
- **Swipe to Dismiss (nếu có):**
  - Nếu hỗ trợ swipe trên mobile, phải có keyboard equivalent (Esc).
  - Swipe dismiss không được là cách DUY NHẤT để đóng — phải có close button.

### C. Standard API & Props

- Kế thừa Dialog API: `open` / `onOpenChange`, Trigger, Content, etc.
- `side`: `"top"` | `"right"` | `"bottom"` | `"left"` — direction Sheet slides from.

### D. WCAG 2.2 Success Criteria

- **Kế thừa tất cả Dialog criteria.**
- **2.5.1 Pointer Gestures (A):** Nếu swipe-to-dismiss, phải có single-point alternative (close button).

## 2. gladcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Slide animation PHẢI dùng CSS (`data-[state=open]`, `translate-x-*`, `translate-y-*`). Các hướng slide phải dùng `data-[side=right]:translate-x-full` pattern.
- **Portal Tunneling (Rule #15):** Giống Dialog — Portal phải giữ theme context.
- **Z-Index (Rule #4):** Giống Dialog — z-index hợp lý.
- **Linear Design Axiom (Rule #5):** Tất cả 4 sides phải có animation đối xứng hoàn hảo — nếu right dùng `translate-x-full`, left phải dùng `-translate-x-full`, etc.
- **Macro Component Law (Rule #13):** Sheet thường đơn giản hơn Dialog nên ít cần Mono variant.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/micro/sheet.tsx`.
3. Kiểm tra chéo từng tiêu chí Dialog + **CSS slide animation** cho 4 directions, **Linear Design** (animation symmetry), và **Focus management**.
4. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---
