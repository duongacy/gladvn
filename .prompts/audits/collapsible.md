# Audit Prompt: Collapsible

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Collapsible (Disclosure) cho phép user toggle visibility của một content section. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Trigger (Button):**
  - Phải dùng `<button>` element.
  - Phải có `aria-expanded="true"` (open) hoặc `"false"` (closed).
  - Phải có `aria-controls` trỏ đến content panel ID.
  - Phải có accessible name mô tả section sẽ được toggle.
- **Content Panel:**
  - Phải có `id` matching `aria-controls` trên trigger.
  - Khi closed: phải ẩn hoàn toàn khỏi accessibility tree (`hidden`, `display: none`, hoặc `visibility: hidden`).
  - KHÔNG cần `role="region"` (khác Accordion — Collapsible là standalone, không thuộc group).

### B. Keyboard Navigation & Focus

- `Enter` / `Space` trên trigger: Toggle content.
- `Tab`: Focus di chuyển tự nhiên. Khi content open, Tab di chuyển vào content. Khi closed, Tab skip qua content.
- KHÔNG cần arrow key navigation (đây là single disclosure, không phải group).

### C. Standard API & Props

- `open` / `defaultOpen` / `onOpenChange`: Pattern Controlled & Uncontrolled.
- `disabled`: Vô hiệu hoá toggle.
- Composition: Root, Trigger, Content.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Trigger-content relationship qua `aria-expanded` + `aria-controls`.
- **2.1.1 Keyboard (A):** Enter/Space toggle.
- **2.4.7 Focus Visible (AA):** Focus ring trên trigger.
- **4.1.2 Name, Role, Value (A):** Screen reader announce: role ("button"), expanded state.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Open/close animation PHẢI dùng CSS grid (`grid-template-rows: 0fr → 1fr`) hoặc `data-[state=open]`. Cấm đo height bằng JS.
- **Icon Rendering (Rule #3 & #10):** Chevron icon quay 180° khi open phải dùng CSS rotation (`data-[state=open]:rotate-180`).
- **No Magic Number (Rule #4):** Padding, animation duration phải dùng tokens.
- **Zero-Prop Defaults (Rule #1):** `<Collapsible>` mặc định closed.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/collapsible.tsx`.
3. Kiểm tra chéo, đặc biệt: **`aria-expanded` + `aria-controls` wiring**, **CSS animation** (grid-template-rows hoặc max-height), **Content hiding** (hoàn toàn ẩn khi closed), và **Chevron rotation CSS**.
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
