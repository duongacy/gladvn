# Audit Prompt: Table

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Table hiển thị data có cấu trúc dạng hàng-cột. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Native Elements:** BẮT BUỘC dùng `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`. KHÔNG dùng div/CSS grid giả table — screen reader phụ thuộc vào native table semantics.
- **Table Caption:**
  - Phải có `<caption>` element hoặc `aria-label` / `aria-labelledby` trên `<table>`.
  - Caption mô tả nội dung table (vd: "User list" hoặc "Sales report Q3 2024").
- **Header Cells:**
  - Column headers: `<th scope="col">`.
  - Row headers (nếu có): `<th scope="row">`.
  - Complex tables: dùng `headers` attribute trên `<td>` trỏ đến `id` của `<th>`.
- **Sortable Columns (nếu có):**
  - Header cell sortable: `aria-sort="ascending"` | `"descending"` | `"none"`.
  - Sort button bên trong `<th>` phải keyboard-accessible.
- **Selectable Rows (nếu có):**
  - Row checkbox: `role="checkbox"` hoặc native `<input type="checkbox">`.
  - "Select all" checkbox trong header.
  - Selected row: `aria-selected="true"`.

### B. Keyboard Navigation & Focus

- **Simple Table:** Tab di chuyển giữa interactive elements (links, buttons) bên trong cells. KHÔNG cần arrow key grid navigation cho simple table.
- **Interactive/Grid Table (nếu có):**
  - `role="grid"` trên table.
  - Arrow keys: Di chuyển giữa cells.
  - `Enter`: Activate cell content.
  - `Home`/`End`: Di chuyển đến cell đầu/cuối trong row.
  - `Ctrl+Home`/`Ctrl+End`: Di chuyển đến cell đầu/cuối trong table.

### C. Standard API & Props

- Composition: Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption.
- Phải forward `ref` và spread native props.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** `<th>` + `scope` + caption relationship.
- **1.3.2 Meaningful Sequence (A):** Reading order phải logical (row by row).
- **1.4.1 Use of Color (A):** Row status (selected, error) không chỉ dùng màu.
- **2.1.1 Keyboard (A):** Sort buttons, row checkboxes keyboard-accessible.
- **2.4.7 Focus Visible (AA):** Focus indicators trên interactive cells.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Hover row, selected row, striped rows PHẢI dùng CSS (`:nth-child`, `aria-selected`, `:hover`). Sort indicator dùng `data-[sorted]`.
- **No Magic Number (Rule #4):** Cell padding, row height, border styles phải dùng tokens.
- **Native DOM Flow (Rule #12):** Table KHÔNG ép `w-full` — để developer quyết layout. Table naturally inline-block, có thể set `w-full` từ bên ngoài.
- **Readability (Rule #10):** Complex table styles (sticky header, responsive) phải có comment.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/table.tsx`.
3. Kiểm tra chéo, đặc biệt: **Native `<table>` elements** (không dùng div grid), **`<th scope>`**, **Caption support**, và **CSS styling** (hover, striped, borders).
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
