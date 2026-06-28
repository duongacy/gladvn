# Audit Prompt: Resizable

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)
Resizable (Window Splitter) cho phép user thay đổi kích thước các panels bằng cách kéo handle. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles
- **Panel Group Container:**
  - Nên có `role="group"` + `aria-label` mô tả panel group.
- **Resize Handle:**
  - Phải có `role="separator"`.
  - Phải focusable: `tabindex="0"`.
  - Phải có `aria-orientation`: `"horizontal"` (kéo ngang) hoặc `"vertical"` (kéo dọc).
  - Phải có `aria-valuenow`: Vị trí hiện tại (% hoặc pixel).
  - Phải có `aria-valuemin`: Giá trị nhỏ nhất cho panel.
  - Phải có `aria-valuemax`: Giá trị lớn nhất cho panel.
  - Nên có `aria-label` mô tả handle (vd: "Resize sidebar panel").
- **Panels:**
  - Mỗi panel nên có `role="region"` hoặc landmark role nếu appropriate.

### B. Keyboard Navigation & Focus
- `Tab`: Focus vào resize handle.
- **Horizontal Splitter:**
  - `Arrow Left` / `Arrow Right`: Di chuyển handle (resize panels).
- **Vertical Splitter:**
  - `Arrow Up` / `Arrow Down`: Di chuyển handle.
- `Home`: Di chuyển handle về minimum position.
- `End`: Di chuyển handle về maximum position.
- `Enter`: Collapse/expand panel (nếu hỗ trợ).
- Step size NÊN configurable (small step = Arrow key, large step = Page Up/Down nếu support).

### C. Standard API & Props
- Composition: ResizablePanelGroup, ResizablePanel, ResizableHandle.
- `direction`: "horizontal" | "vertical".
- `defaultSize` / `minSize` / `maxSize` trên panels.
- `onResize`: Callback khi resize.
- `collapsible`: Panel có thể collapse khi kéo đến minimum.

### D. WCAG 2.2 Success Criteria
- **2.1.1 Keyboard (A):** Handle phải operable via keyboard (arrow keys).
- **2.4.7 Focus Visible (AA):** Focus ring trên handle.
- **2.5.7 Dragging Movements (AA):** Drag-to-resize phải có keyboard alternative.
- **4.1.2 Name, Role, Value (A):** Screen reader announce: role ("separator"), orientation, position.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Handle hover/active state dùng CSS. Panel sizes dùng CSS custom properties (flex-basis hoặc CSS variables).
- **No Magic Number (Rule #4):** Handle width/height, minimum panel sizes phải dùng tokens.
- **Readability (Rule #10):** Resize calculation logic phải có comment.

## 3. Nhiệm vụ của bạn (AI)
1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/resizable.tsx`.
3. Kiểm tra chéo, đặc biệt: **`role="separator"` trên handle**, **ARIA value** attributes, **Keyboard resize** (arrow keys), và **WCAG 2.5.7** (keyboard alternative cho drag).
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)
1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí | Verdict | Note |
|---------------|---------|------|
| W3C APG / ARIA | ✅ | Wrapper của `react-resizable-panels` chuẩn, có handle được gán đúng role và phím tắt. |
| 21. CSS Depth Boundary | ✅ | Selector `[&[aria-orientation=horizontal]>div]` chỉ trỏ tới con trực tiếp, đúng Rule #21. |
| Form Control Parity | ✅ | Kế thừa sizing từ hệ thống. |
| Dark Mode Compliance | ✅ | Semantic colors (`bg-border`) chuẩn. |
