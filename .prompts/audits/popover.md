# Audit Prompt: Popover

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)
Popover là non-modal dialog xuất hiện cạnh trigger element, chứa nội dung tương tác (khác Tooltip — Tooltip chỉ chứa text). BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles
- **Trigger:**
  - Phải có `aria-haspopup="dialog"` (nếu popover chứa interactive content).
  - Phải có `aria-expanded="true"` (open) hoặc `"false"` (closed).
  - Phải có `aria-controls` trỏ đến popover content ID.
- **Content:**
  - Phải có `role="dialog"` (vì chứa interactive content).
  - Nên có `aria-labelledby` nếu có title.
  - KHÔNG nên có `aria-modal="true"` — Popover là NON-MODAL (user vẫn tương tác được content bên ngoài).
- **Arrow (nếu có):**
  - Arrow là decorative — `aria-hidden="true"`.

### B. Keyboard Navigation & Focus Management
- `Enter` / `Space` trên trigger: Toggle popover.
- **Initial Focus:** Khi mở, focus NÊN chuyển vào popover content (first interactive element hoặc content itself).
- `Esc`: Đóng popover, focus quay về trigger.
- `Tab` / `Shift+Tab`: Di chuyển focus bên trong popover. Khi Tab ra khỏi popover (non-modal), popover ĐÓNG LẠI và focus tiếp tục theo document order.
- **Light Dismiss:** Click bên ngoài popover phải đóng popover.
- **Focus NOT Trapped:** Khác với modal Dialog — Popover NON-MODAL nên focus KHÔNG bị trap.

### C. Standard API & Props
- `open` / `defaultOpen` / `onOpenChange`: Pattern Controlled & Uncontrolled.
- `side` / `align`: Positioning (top/right/bottom/left + start/center/end).
- `sideOffset`: Distance from trigger.
- Composition: Root, Trigger, Portal, Content, Arrow.

### D. WCAG 2.2 Success Criteria
- **1.3.1 Info and Relationships (A):** Trigger-content relationship qua `aria-controls` + `aria-expanded`.
- **2.1.1 Keyboard (A):** Full keyboard operation.
- **2.4.3 Focus Order (A):** Focus order phải logical khi popover opens/closes.
- **2.4.7 Focus Visible (AA):** Focus indicators cho trigger và interactive content.
- **1.4.13 Content on Hover or Focus (AA):** Popover content phải: (1) Dismissable bằng Esc, (2) Hoverable — user phải hover được lên popover mà nó không biến mất, (3) Persistent — không tự biến mất trừ khi user dismiss.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Open/close animation PHẢI dùng CSS (`data-[state=open]`, `data-starting-style`).
- **Portal Tunneling (Rule #15):** Content trong Portal phải giữ theme context.
- **Z-Index (Rule #4):** Popover z-index phải cao nhưng thấp hơn modal Dialog.
- **No Magic Number (Rule #4):** Offset, arrow size phải dùng tokens.

## 3. Nhiệm vụ của bạn (AI)
1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/popover.tsx`.
3. Kiểm tra chéo từng tiêu chí, đặc biệt: **Non-modal behavior** (focus NOT trapped), **Light dismiss**, **ARIA attributes** (aria-haspopup, aria-expanded, NOT aria-modal), và **WCAG 1.4.13** (content hoverable and persistent).
4. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)
1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí | Verdict | Note |
|---------------|---------|------|
| W3C APG / ARIA | ✅ | Focus NOT Trapped (Non-modal) và Light Dismiss hoạt động chuẩn xác qua Base UI |
| 21. CSS Depth Boundary | ✅ | Không có deep CSS selectors |
| Form Control Parity | ✅ | Animation và transform sử dụng CSS thuần qua data state |
| Dark Mode Compliance | ✅ | Shadow và border `ring-foreground/10` kết hợp `bg-popover` hoạt động tốt trên dark mode |
