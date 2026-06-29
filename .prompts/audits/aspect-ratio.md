git sta

# Audit Prompt: Aspect Ratio

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Aspect Ratio là pure layout utility duy trì tỷ lệ width:height cho container. KHÔNG có W3C APG pattern — đây là CSS layout component. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Container:**
  - Là `<div>` thuần — KHÔNG cần ARIA roles.
  - KHÔNG nên có `role` hoặc `aria-*` attributes vì đây là styling utility.
- **Content Inside:**
  - Content (image, video) bên trong phải tự có accessibility attributes riêng (alt text, captions).
  - Aspect Ratio container KHÔNG ảnh hưởng accessibility tree.

### B. Keyboard Navigation & Focus

- KHÔNG applicable — layout utility.

### C. Standard API & Props

- `ratio`: Number — tỷ lệ width/height (vd: 16/9, 4/3, 1).
- `className`: Styling.

### D. WCAG 2.2 Success Criteria

- **1.4.4 Resize Text (AA):** Aspect ratio container KHÔNG nên prevent text resize.
- **1.4.10 Reflow (AA):** Container phải responsive — không gây horizontal scroll.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Aspect ratio PHẢI dùng CSS `aspect-ratio` property (modern CSS). Fallback `padding-bottom` trick chỉ nếu cần support cũ.
- **No Magic Number (Rule #4):** Ratio values nên qua prop, không hardcode.
- **Zero-Prop Defaults (Rule #1):** `<AspectRatio>` nên có ratio mặc định (vd: 1 — square).

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/aspect-ratio.tsx`.
3. Kiểm tra: **CSS `aspect-ratio` property usage** (modern CSS vs padding hack), **Responsive behavior**, và **Props design**.
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí          | Verdict | Note                                                                                          |
| ---------------------- | ------- | --------------------------------------------------------------------------------------------- |
| W3C APG / ARIA         | ✅      | Là thẻ div thuần tuý không ARIA roles, chuẩn chỉ (pure CSS layout utility).                   |
| 21. CSS Depth Boundary | ✅      | Không có deep selector.                                                                       |
| Form Control Parity    | ✅      | CSS Custom Properties (CSS variable) kết hợp CSS modern`aspect-ratio` được cấu hình xuất sắc. |
| Dark Mode Compliance   | ✅      | Không áp dụng màu sắc nên không ảnh hưởng.                                                    |
