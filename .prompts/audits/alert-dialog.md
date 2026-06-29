# Audit Prompt: Alert Dialog

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Khác với Dialog thông thường, Alert Dialog là một thành phần gián đoạn (interruptive) yêu cầu người dùng phải đưa ra quyết định. BẮT BUỘC kiểm tra các tiêu chuẩn sau:

### A. Anatomy & WAI-ARIA Roles

- **Content Wrapper:**
  - Phải dùng `role="alertdialog"`.
  - Phải có `aria-modal="true"`.
- **Title & Description:**
  - Content Wrapper PHẢI có `aria-labelledby` trỏ tới `id` của Title (vd: "Bạn có chắc chắn muốn xoá?").
  - Content Wrapper PHẢI có `aria-describedby` trỏ tới `id` của Description (giải thích hậu quả của hành động).
- **Overlay (Backdrop):** Phải chặn tương tác với phần còn lại của trang (thường đi kèm `pointer-events-none` ở body và `aria-hidden="true"` cho root elements).

### B. Keyboard Navigation & Focus Management (Cực kỳ quan trọng)

- **Initial Focus:** Khi mở lên, focus **TUYỆT ĐỐI KHÔNG ĐƯỢC** nhảy vào nút có tính huỷ diệt (Destructive Action như "Xoá"). Focus BẮT BUỘC phải nhảy vào nút an toàn nhất (thường là nút **Cancel**). Điều này ngăn user lỡ tay nhấn Enter/Space gây hậu quả.
- **Focus Trap:** Khi Alert Dialog mở, focus chỉ được luân chuyển (Tab / Shift+Tab) bên trong Dialog, không được thoát ra ngoài trang web.
- `Esc`: Thường sẽ đóng Alert Dialog (tương đương với hành động Cancel). Tuỳ thuộc vào base component có hỗ trợ tắt tính năng này không.

### C. Standard API & Props (Kiến trúc Component)

- Các thành phần cấu tạo chuẩn: `Root`, `Trigger`, `Portal`, `Overlay`, `Content`, `Header`, `Footer`, `Title`, `Description`, `Action`, `Cancel`.
- `open` / `defaultOpen` / `onOpenChange`: Pattern chuẩn cho việc sử dụng theo kiểu Controlled & Uncontrolled.

## 2. sadcn "20 Commandments" Integration

Áp dụng các luật riêng của dự án vào Alert Dialog:

- **Portal Tunneling Rule (Rule #15):** Nếu sử dụng Portal, phần Content có bị mất theme context (light/dark) hay không? (Base UI/Radix UI thường xử lý tốt việc này, nhưng cần kiểm tra lại).
- **CSS Delegated Logic (Rule #2):** Animation xuất hiện của Overlay (fade in) và Content (zoom in / slide up) PHẢI dùng CSS thuần (`data-[state=open]`, `data-starting-style`, v.v.). Cấm dùng thư viện JS như framer-motion.
- **"Macro Component" Law (Rule #13) & Form Control Parity:** Nút `AlertDialogAction` và `AlertDialogCancel` BẮT BUỘC phải tận dụng lại component `<Button>` của hệ thống hoặc dùng chung chính xác các token styling (`focus-visible:ring-3`, `h-9` cho size md, v.v.). Không tự hardcode style riêng lẻ thiếu đồng bộ.
- **Z-Index (Rule #4):** Z-index của Overlay và Content phải hợp lý, đảm bảo nằm trên mọi thành phần khác của trang web (thường được fix ở mức > 50).

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/alert-dialog.tsx`.
3. Đánh giá đặc biệt kỹ phần **Focus Management** (Focus có nhảy đúng vào nút Cancel không?) và **ARIA Attributes**.
4. Kiểm tra sự tuân thủ 20 Commandments (đặc biệt là CSS Delegated Logic cho animation).
5. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí          | Verdict | Note                                                           |
| ---------------------- | ------- | -------------------------------------------------------------- |
| W3C APG / ARIA         | ✅      | Focus Trap và Focus Restoration được Base UI xử lý xuất sắc.   |
| 21. CSS Depth Boundary | ✅      | Không có vi phạm.                                              |
| Form Control Parity    | ✅      | Dùng lại `<Button>` component cho Action và Cancel đúng chuẩn. |
| Dark Mode Compliance   | ✅      | Semantic tokens tốt, background/backdrop chuẩn.                |
