# Audit Prompt: Chart

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Chart hiển thị data visualization (bar chart, line chart, pie chart, etc.). BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Chart Container:**
  - Phải có `role="img"` nếu chart không interactive (static visualization).
  - Phải có `aria-label` hoặc `aria-labelledby` mô tả chart (vd: "Monthly revenue chart for 2024").
  - HOẶC phải có `aria-describedby` trỏ đến data table alternative.
- **Data Table Alternative:**
  - BẮT BUỘC cung cấp data table alternative cho screen reader (có thể visually hidden).
  - Data table phải chứa cùng information mà chart hiển thị.
  - Dùng `<table>` với proper `<th>`, `<td>`, `<caption>`.
- **Legend:**
  - Chart legend phải accessible: text labels, không chỉ dùng color.
  - Legend items NÊN dùng semantic list (`<ul>` / `<li>`).
- **Tooltips (hover data points):**
  - Tooltip content phải accessible — tuân thủ WCAG 1.4.13 (hoverable, dismissable, persistent).
- **Color Usage:**
  - Chart KHÔNG chỉ dùng màu để phân biệt data series — PHẢI kết hợp patterns (dashed lines, different shapes, hatching) hoặc direct labels.

### B. Keyboard Navigation & Focus

- **Non-interactive Chart:** KHÔNG focusable — dùng data table alternative.
- **Interactive Chart (nếu có):**
  - Arrow keys: Navigate giữa data points.
  - `Enter` / `Space`: Show detail/tooltip.
  - Tab: Di chuyển giữa chart sections.
- Data table alternative PHẢI keyboard-navigable.

### C. Standard API & Props

- Chart component thường wrap third-party lib (Recharts, Chart.js).
- Composition: ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent.
- `config`: Chart configuration (colors, labels).

### D. WCAG 2.2 Success Criteria

- **1.1.1 Non-text Content (A):** Chart phải có text alternative (aria-label + data table).
- **1.4.1 Use of Color (A):** Data series không chỉ phân biệt bằng màu.
- **1.4.3 Contrast Minimum (AA):** Text labels, axis labels contrast.
- **1.4.11 Non-text Contrast (AA):** Data bars/lines contrast với background.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Chart colors PHẢI dùng CSS variables/tokens, không hardcode.
- **No Magic Number (Rule #4):** Chart dimensions, padding, font sizes phải configurable.
- **Portal Tunneling (Rule #15):** Chart tooltip (nếu Portal) phải giữ theme.
- **Readability (Rule #10):** Chart config structure phải có comment giải thích.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/chart.tsx`.
3. Kiểm tra chéo, đặc biệt: **Text alternative** (aria-label hoặc data table), **Color independence** (patterns/labels), **CSS variables** cho colors, và **Tooltip accessibility** (1.4.13).
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí          | Verdict | Note                                                                                                                                                      |
| ---------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA         | ⚠️      | Component chỉ lo phần UI/Tooltip. Việc bổ sung data table alternative và `aria-label` phụ thuộc vào người dùng component.                                 |
| 21. CSS Depth Boundary | ✅      | Có sử dụng hàng loạt deep selector (`[&_.recharts-...]`) ở L68, nhưng HỢP LỆ do đây là ngoại lệ của Rule #21 dành cho third-party SVG library (Recharts). |
| Form Control Parity    | ✅      | Không áp dụng trực tiếp, nhưng Legend và Tooltip sử dụng các text token của hệ thống.                                                                     |
| Dark Mode Compliance   | ✅      | `ChartStyle` inject CSS custom properties cực kỳ thông minh để xử lý color config theo theme `light`/`dark`.                                              |
