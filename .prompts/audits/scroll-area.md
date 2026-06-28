# Audit Prompt: Scroll Area

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)
Scroll Area cung cấp custom-styled scrollbar thay thế native scrollbar. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles
- **Viewport:**
  - Container scrollable NÊN có `role="region"` nếu chứa important content, với `aria-label` mô tả.
  - Nếu content bị overflow: phải có `tabindex="0"` để keyboard user có thể focus và scroll.
  - `aria-orientation`: Nếu chỉ scroll vertical hoặc horizontal.
- **Custom Scrollbar:**
  - Custom scrollbar track và thumb là DECORATIVE — phải ẩn khỏi accessibility tree.
  - KHÔNG được thay thế hoàn toàn native scrollbar behavior — keyboard scrolling (Arrow keys, Page Up/Down, Home/End) PHẢI vẫn hoạt động.
- **Native Scrollbar:**
  - Ẩn visual nhưng PHẢI giữ native scroll behavior cho keyboard/assistive technology.

### B. Keyboard Navigation & Focus
- Viewport focusable (`tabindex="0"`): cho phép keyboard scroll.
- `Arrow Down` / `Arrow Up`: Scroll vertical.
- `Arrow Right` / `Arrow Left`: Scroll horizontal.
- `Page Down` / `Page Up`: Scroll page-sized chunks.
- `Home` / `End`: Scroll đến đầu/cuối.
- **Scrollbar thumb:** KHÔNG cần focusable (decorative).

### C. Standard API & Props
- `orientation`: "vertical" | "horizontal" | "both".
- `scrollbarVisibility`: "auto" | "always" | "hover".
- Composition: ScrollArea, ScrollBar, ScrollBarThumb.

### D. WCAG 2.2 Success Criteria
- **2.1.1 Keyboard (A):** Content phải scrollable via keyboard.
- **2.4.7 Focus Visible (AA):** Focus ring trên viewport khi focused.
- **1.4.4 Resize Text (AA):** Scroll area phải handle text resize without breaking.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Scrollbar visibility, thumb sizing dùng CSS.
- **No Magic Number (Rule #4):** Scrollbar width, thumb border-radius phải dùng tokens.
- **Readability (Rule #10):** Custom scrollbar CSS phải có comment giải thích tại sao ẩn native scrollbar.

## 3. Nhiệm vụ của bạn (AI)
1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/scroll-area.tsx`.
3. Kiểm tra chéo, đặc biệt: **Keyboard scrolling** (Arrow, Page, Home/End), **Viewport focusable** (`tabindex="0"`), **Native scroll behavior** preservation, và **Custom scrollbar decorative** (aria-hidden).
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)
1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí | Verdict | Note |
|---------------|---------|------|
| W3C APG / ARIA | ✅ | Component từ `@base-ui` lo chuyện focus logic trên viewport. |
| 21. CSS Depth Boundary | ✅ | Không vi phạm. Code sạch. |
| Form Control Parity | ✅ | Không vi phạm. |
| Dark Mode Compliance | ✅ | Semantic colors tốt. |
