# Audit Prompt: Drawer

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)
Drawer là biến thể Dialog, thường slide lên từ bottom (mobile pattern). Kế thừa tiêu chuẩn Dialog với thêm yêu cầu về gesture và responsive. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles
- **Tất cả quy tắc Dialog áp dụng:**
  - `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`.
- **Handle/Grabber (nếu có):**
  - Handle (thanh kéo ở top) là decorative nếu chỉ dùng chuột/touch — `aria-hidden="true"`.
  - Nếu handle có functionality (kéo để resize), cần `role="separator"` với `aria-orientation="horizontal"` và keyboard support (Arrow Up/Down).

### B. Keyboard Navigation & Focus Management
- **Kế thừa Dialog:** Focus trap, Esc to close, focus restoration.
- **Drag-to-Dismiss:**
  - Nếu hỗ trợ kéo xuống để đóng, PHẢI có keyboard equivalent (Esc + close button).
  - Drag gesture không được là cách duy nhất để đóng (WCAG 2.5.1).
- **Snap Points (nếu có):**
  - Nếu drawer có snap points (half/full), phải có keyboard way để navigate giữa chúng.

### C. Standard API & Props
- Kế thừa Dialog API.
- `snapPoints`: Các điểm dừng (vd: [0.5, 1] — 50% và 100% height).
- `dismissible`: Có thể kéo xuống để đóng không.
- `handleOnly`: Chỉ cho kéo từ handle.
- `direction`: Top/Right/Bottom/Left.

### D. WCAG 2.2 Success Criteria
- **Kế thừa tất cả Dialog criteria.**
- **2.5.1 Pointer Gestures (A):** Drag gestures phải có single-point alternative.
- **2.5.7 Dragging Movements (AA):** Nếu drag-to-dismiss, phải có non-dragging alternative (close button, Esc).

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Slide animation PHẢI dùng CSS. Drag interaction có thể cần JS (third-party lib như vaul) nhưng visual feedback phải CSS transform.
- **Portal Tunneling (Rule #15):** Portal phải giữ theme context.
- **Z-Index (Rule #4):** Z-index hợp lý.
- **Readability (Rule #10):** Snap point logic và drag physics phải có comment giải thích.

## 3. Nhiệm vụ của bạn (AI)
1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/drawer.tsx`.
3. Kiểm tra chéo từng tiêu chí Dialog + **Drag gesture alternative** (WCAG 2.5.7), **Handle accessibility**, và **Snap point keyboard navigation**.
4. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)
1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí | Verdict | Note |
|---------------|---------|------|
| W3C APG / ARIA | ✅ | Vaul handle drag alternative (esc) và focus trap chuẩn xác |
| 21. CSS Depth Boundary | ✅ | Không có vi phạm deep selector, styling trực tiếp bằng data attributes |
| Form Control Parity | ✅ | Animation và transform sử dụng CSS thuần qua data state |
| Dark Mode Compliance | ✅ | Kế thừa từ popover text/bg, tương thích dark mode |
