# Audit Prompt: Breadcrumb

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Breadcrumb hiển thị vị trí hiện tại trong cấu trúc trang web. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Nav Container:**
  - Phải bọc trong `<nav>` element.
  - Phải có `aria-label="Breadcrumb"` (hoặc tương đương localized).
- **List:**
  - Phải dùng `<ol>` (ordered list) — thứ tự có ý nghĩa semantic.
- **Items:**
  - Mỗi item là `<li>`.
  - Items không phải current: phải có `<a>` link.
  - Current page (item cuối):
    - PHẢI có `aria-current="page"`.
    - CÓ THỂ là text thay vì link (vì user đã ở page đó).
    - Nếu vẫn là link: `aria-current="page"` trên `<a>`.
- **Separator:**
  - Separator (vd: `/`, `>`, `›`) phải có `aria-hidden="true"` — screen reader dùng `<ol>` structure để hiểu thứ tự, không cần đọc separator.
  - Separator NÊN dùng CSS pseudo-element (`::before`, `::after`) thay vì inline content.

### B. Keyboard Navigation & Focus

- Breadcrumb links tab-able theo natural order.
- KHÔNG cần special keyboard handling — chỉ là list of links.
- Current page item nếu không phải link thì KHÔNG focusable.

### C. Standard API & Props

- Composition: Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbEllipsis.
- `separator`: Custom separator character/element.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** `<nav>` + `<ol>` structure.
- **2.4.4 Link Purpose (A):** Breadcrumb links phải có descriptive text.
- **2.4.8 Location (AAA):** Breadcrumb cung cấp location information — trực tiếp satisfy criterion này.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Separator rendering NÊN dùng CSS pseudo-element. Current page styling dùng `aria-current` selector.
- **No Magic Number (Rule #4):** Gap, separator spacing phải dùng tokens.
- **Strict Polymorphism (Rule #3):** BreadcrumbLink nên hỗ trợ `asChild` để render Next.js `<Link>` thay vì `<a>`.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/breadcrumb.tsx`.
3. Kiểm tra chéo, đặc biệt: **`<nav aria-label="Breadcrumb">`**, **`<ol>` ordered list**, **`aria-current="page"`** trên current item, **Separator `aria-hidden`**, và **Polymorphism** (asChild cho Link).
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí          | Verdict | Note                                                                                                                   |
| ---------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA         | ✅      | Cấu trúc `<nav aria-label>` -> `<ol>` -> `<li>` -> `aria-current="page"` và `aria-hidden="true"` ở separator hoàn hảo. |
| 21. CSS Depth Boundary | ✅      | Các icon bên trong Separator và Ellipsis được style an toàn bằng `[&>svg]`.                                            |
| Form Control Parity    | ✅      | Polymorphism xuất sắc ở `BreadcrumbLink` thông qua `useRender`.                                                        |
| Dark Mode Compliance   | ✅      | Màu `text-muted-foreground` chuyển sang `text-foreground` rất mượt mà trên cả 2 themes.                                |
