# Audit Prompt: Calendar

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Calendar cho phép user chọn date hoặc date range. Dùng Grid pattern phức tạp. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Calendar Container:**
  - Phải có `role="grid"` hoặc `role="application"`.
  - Phải có `aria-label` mô tả (vd: "December 2024" hoặc "Select a date").
- **Month/Year Header:**
  - Phải là `aria-live="polite"` region để announce khi user navigate giữa các tháng.
  - Previous/Next month buttons: accessible names (`aria-label="Previous month"`, `aria-label="Next month"`).
- **Day Names (Weekday Headers):**
  - Phải dùng `<th>` element (hoặc `role="columnheader"`).
  - Phải có full weekday name accessible (vd: dùng `abbr` attribute: `<th abbr="Monday">Mon</th>`).
- **Date Cells:**
  - Mỗi cell: `role="gridcell"`.
  - Date button bên trong cell: `<button>` element.
  - Selected date: `aria-selected="true"`.
  - Today's date: có visual indicator + screen reader context.
  - Disabled dates: `aria-disabled="true"`.
  - Dates ngoài current month: `aria-hidden="true"` hoặc disabled.
- **Date Range (nếu hỗ trợ):**
  - Start date: `aria-selected="true"` + descriptive label.
  - End date: `aria-selected="true"` + descriptive label.
  - Dates in range: visual highlight.

### B. Keyboard Navigation & Focus

- `Arrow Right`: Ngày tiếp theo.
- `Arrow Left`: Ngày trước đó.
- `Arrow Down`: Cùng ngày tuần sau (+7 ngày).
- `Arrow Up`: Cùng ngày tuần trước (-7 ngày).
- `Home`: Đầu tuần hiện tại.
- `End`: Cuối tuần hiện tại.
- `Page Up`: Cùng ngày tháng trước.
- `Page Down`: Cùng ngày tháng sau.
- `Shift + Page Up`: Cùng ngày năm trước.
- `Shift + Page Down`: Cùng ngày năm sau.
- `Enter` / `Space`: Select date.
- **Focus Management:** Khi navigate qua tháng (Page Up/Down), focus phải follow đến tháng mới.

### C. Standard API & Props

- `selected` / `onSelect`: Selected date(s).
- `month` / `onMonthChange`: Current visible month.
- `mode`: "single" | "range" | "multiple".
- `disabled`: Disabled dates (array hoặc function).
- `fromDate` / `toDate`: Date range limits.
- `locale`: Internationalization.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Grid structure, header cells.
- **2.1.1 Keyboard (A):** Full grid keyboard navigation (arrow, page, home/end).
- **2.4.7 Focus Visible (AA):** Focus ring trên date đang focused.
- **4.1.2 Name, Role, Value (A):** Screen reader announce: role, date, selected state, disabled state.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Selected date, today highlight, range highlight PHẢI dùng CSS (`aria-selected`, `data-[today]`, `data-[in-range]`).
- **No Magic Number (Rule #4):** Cell size, gap, padding phải dùng tokens.
- **Form Control Parity (Rule #18):** Calendar khi dùng trong DatePicker phải có focus ring consistent.
- **Readability (Rule #10):** Date calculation/navigation logic phải có comment.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/calendar.tsx`.
3. Kiểm tra chéo, đặc biệt: **Grid keyboard navigation** (arrow, page up/down, home/end), **`aria-selected`** trên dates, **Month change announcement** (aria-live), **Weekday header accessibility**, và **CSS selected/today indicators**.
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí          | Verdict | Note                                                                                                                                 |
| ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| W3C APG / ARIA         | ✅      | React Day Picker v9 xử lý hoàn hảo ARIA grid pattern và keyboard navigation                                                          |
| 21. CSS Depth Boundary | ❌      | Vi phạm ở L55, L56 (`rtl:**:[...]` dùng `**:` deep selector). Ở L127, L129, L130 (`_button` deep selector, nên đổi thành `>button`). |
| Form Control Parity    | ✅      | Focus ring đồng bộ với Button. Sizes được kiểm soát cực tốt qua `[--cell-size]`.                                                     |
| Dark Mode Compliance   | ✅      | Semantic tokens tốt, hover và focus state hiển thị chuẩn                                                                             |

### Diffs cần fix

```diff
- "rtl:**:[.rdp-button\_next>svg]:rotate-180"
+ "rtl:[&_.rdp-button\_next>svg]:rotate-180"
- "[&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius)"
+ "[&:last-child[data-selected=true]>button]:rounded-r-(--cell-radius)"
```
