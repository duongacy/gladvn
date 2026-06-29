# Audit Prompt: Pagination

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Pagination cho phép user navigate giữa các trang kết quả. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Nav Container:**
  - Phải bọc trong `<nav>` element.
  - Phải có `aria-label="Pagination"` (hoặc localized equivalent).
- **Page List:**
  - Nên dùng `<ul>` / `<li>` cho semantic structure.
- **Page Links/Buttons:**
  - Mỗi page item nên là `<a>` (nếu navigate) hoặc `<button>` (nếu trigger client-side update).
  - Current page: `aria-current="page"` trên link/button.
  - Mỗi link phải có descriptive label (vd: `aria-label="Page 3"` hoặc `aria-label="Go to page 3"`). Nếu chỉ hiển thị số, screen reader cần context.
- **Previous/Next Buttons:**
  - Phải có accessible name (vd: `aria-label="Go to previous page"`, `aria-label="Go to next page"`).
  - Khi ở trang đầu/cuối: `disabled` attribute hoặc `aria-disabled="true"`.
- **Ellipsis:**
  - Ellipsis (…) PHẢI có `aria-hidden="true"` hoặc là span decorative — screen reader không cần đọc "dot dot dot".

### B. Keyboard Navigation & Focus

- `Tab`: Di chuyển focus giữa page links/buttons theo natural order.
- `Enter` / `Space`: Navigate đến page (hoặc activate button).
- KHÔNG cần arrow key navigation — đây là list of links, không phải widget.
- Disabled previous/next buttons KHÔNG focusable (nếu dùng `disabled` attribute).

### C. Standard API & Props

- Composition: Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis.
- `page` / `totalPages` / `onPageChange`: Core pagination logic (nếu component quản lý state).
- `asChild` / `render`: Polymorphism cho custom link component.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** `<nav>` landmark, list structure.
- **2.4.3 Focus Order (A):** Focus order phải logical (previous → pages → next).
- **2.4.4 Link Purpose (A):** Mỗi page link phải có descriptive accessible name.
- **2.4.7 Focus Visible (AA):** Focus ring trên links/buttons.
- **2.4.8 Location (AAA):** `aria-current="page"` cho current page.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Current page styling dùng `aria-current="page"` CSS selector. Disabled state dùng CSS `disabled:`.
- **Form Control Parity (Rule #18):** Page buttons nên align sizing với Button component.
- **No Magic Number (Rule #4):** Button sizes, gap phải dùng tokens.
- **Strict Polymorphism (Rule #3):** PaginationLink nên hỗ trợ `asChild` cho Next.js `<Link>`.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/pagination.tsx`.
3. Kiểm tra chéo, đặc biệt: **`<nav aria-label="Pagination">`**, **`aria-current="page"`**, **Page link accessible names** (không chỉ hiển thị số), **Ellipsis `aria-hidden`**, và **Disabled previous/next**.
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí          | Verdict | Note                                                                                                    |
| ---------------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA         | ✅      | Semantic tags `<nav aria-label="pagination">`, `<ul>`, `<li>`. Link support `aria-current="page"`.      |
| 21. CSS Depth Boundary | ❌      | Vi phạm nhỏ ở L110 (PaginationEllipsis): `[&_svg:not([class*='size-'])]:size-4`. Đổi sang direct child. |
| Form Control Parity    | ✅      | Polymorphism `Button` thông qua `render={<a />}` hoàn hảo, kế thừa style/variant từ hệ thống Button.    |
| Dark Mode Compliance   | ✅      | Kế thừa từ Button nên tương thích tự động.                                                              |

### Diffs cần fix

```diff
- "[&_svg:not([class*='size-'])]:size-4"
+ "[&>svg:not([class*='size-'])]:size-4"
```
