# Audit Prompt: Accordion

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Khi đánh giá Accordion, BẮT BUỘC phải kiểm tra các tiêu chuẩn quốc tế sau:

### A. Anatomy & WAI-ARIA Roles

- **Header:** Bắt buộc bọc trong thẻ Heading (`h3`, `h4` hoặc thông qua prop `asChild`) để duy trì cấu trúc tài liệu cho Screen Reader.
- **Trigger (Button):**
  - Phải dùng thẻ `<button>`.
  - Phải có `aria-expanded="true/false"` trỏ đúng trạng thái.
  - Phải có `aria-controls="[panel-id]"` liên kết trực tiếp tới content panel.
  - Phải có `id` để content panel tham chiếu ngược lại.
- **Content Panel:**
  - Phải có `role="region"`.
  - Phải có `aria-labelledby="[trigger-id]"`.
  - Phải ẩn hoàn toàn khỏi accessibility tree (`hidden` hoặc `display: none` hoặc thông qua Radix UI unmount) khi bị đóng để người dùng Screen Reader không vô tình đọc được nội dung bị che.

### B. Keyboard Navigation & Focus

- `Enter` hoặc `Space`: Mở/Đóng panel đang được focus.
- `Tab` / `Shift + Tab`: Di chuyển focus tự nhiên giữa các triggers (nếu không dùng roving tabindex) hoặc di chuyển vào trong content panel nếu nó đang mở.
- `Arrow Down` / `Arrow Up`: Di chuyển qua lại giữa các Accordion Headers (Nếu component hỗ trợ Roving Tabindex như chuẩn của Radix UI).
- `Home` / `End`: Nhảy đến Header đầu/cuối của danh sách.

### C. Standard API & Props (Kiến trúc Component)

- `type`: Bắt buộc hỗ trợ `"single"` (chỉ mở 1 item tại một thời điểm) và `"multiple"` (có thể mở nhiều item cùng lúc).
- `collapsible`: (Dành cho `type="single"`) Cho phép đóng item cuối cùng đang mở, khiến toàn bộ accordion bị thu gọn.
- `value` / `defaultValue` / `onValueChange`: Pattern chuẩn cho việc sử dụng component theo kiểu Controlled & Uncontrolled.
- `disabled`: Cần hỗ trợ disabled ở cấp `Root` (vô hiệu hoá toàn bộ Accordion) và cấp `Item` (chỉ vô hiệu hoá một nhánh cụ thể).

## 2. sadcn "20 Commandments" Integration

Áp dụng các luật riêng của dự án vào Accordion:

- **CSS Delegated Logic (Rule #2):** Animation mở/đóng PHẢI dựa vào CSS grid (vd: `grid-template-rows: 0fr -> 1fr`) và theo dõi biến `data-[state=open]` hoặc `data-[state=closed]`. Tuyệt đối không dùng thư viện như `framer-motion` hay đo đạc height qua React state.
- **Icon Rendering (Rule #3 & #10):** Mũi tên (Chevron) phải quay xuống/lên thông qua CSS animation (vd: `group-data-[state=open]:rotate-180`). Không dùng ternary operator trong React render để mount/unmount icon liên tục.
- **Zero-Prop Defaults (Rule #1):** Nếu không truyền prop gì, Accordion mặc định hoạt động thế nào? (Thiết kế chuẩn thường là báo lỗi bắt buộc truyền `type`, hoặc fallback về `type="single"`, `collapsible=false`).
- **Focus Ring Parity (Rule #18):** Trigger phải có cấu hình focus đồng bộ với Button và Input: `focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background`.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/accordion.tsx`.
3. Kiểm tra chéo từng tiêu chí được định nghĩa trong file này kết hợp với 20 Commandments.
4. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí        | Verdict | Note                                                                              |
| ---------------------- | ------- | --------------------------------------------------------------------------------- |
| W3C APG / ARIA         | ✅      | Base UI hỗ trợ Accordion pattern hoàn hảo, gồm header, button, region.       |
| 21. CSS Depth Boundary | ✅      | Không vi phạm. Icon xoay bằng CSS thông qua`group-aria-expanded` rất tốt. |
| Form Control Parity    | ✅      | Focus ring đồng bộ với Button.                                                |
| Dark Mode Compliance   | ✅      | `border`, `bg` hỗ trợ dark mode tốt.                                       |
