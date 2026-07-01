# Audit Prompt: Dialog

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Dialog (Modal) là overlay yêu cầu user tương tác trước khi quay lại nội dung chính. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Content Wrapper:**
  - Phải có `role="dialog"`.
  - Phải có `aria-modal="true"` (cho modal dialog).
  - Phải có `aria-labelledby` trỏ đến `id` của Title.
  - Nên có `aria-describedby` trỏ đến `id` của Description.
- **Overlay (Backdrop):**
  - Phải chặn tương tác với content phía sau.
  - Content phía sau phải có `aria-hidden="true"` hoặc `inert` attribute khi dialog mở.
- **Title:**
  - Phải là heading element (`h2`, `h3`, etc.) hoặc có `role="heading"`.
  - Phải có `id` để Content Wrapper tham chiếu qua `aria-labelledby`.
- **Description:**
  - Phải có `id` để Content Wrapper tham chiếu qua `aria-describedby`.
- **Close Button:**
  - Phải có accessible name (vd: `aria-label="Close"` hoặc visually-hidden text).
  - Phải keyboard-accessible.

### B. Keyboard Navigation & Focus Management

- **Initial Focus:** Khi dialog mở, focus PHẢI chuyển vào bên trong dialog. Ưu tiên: element có `autoFocus` > interactive element đầu tiên > close button > dialog content itself.
- **Focus Trap:** Focus PHẢI bị "nhốt" bên trong dialog — `Tab` / `Shift+Tab` chỉ luân chuyển giữa các interactive elements bên trong dialog.
- `Esc`: Đóng dialog.
- **Focus Restoration:** Khi dialog đóng, focus PHẢI quay về trigger element ban đầu.

### C. Standard API & Props

- `open` / `defaultOpen` / `onOpenChange`: Pattern Controlled & Uncontrolled.
- Composition: Root, Trigger, Portal, Overlay, Content, Header, Footer, Title, Description, Close.
- `modal`: Boolean để switch giữa modal/non-modal behavior (nếu support).

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Dialog-title-description relationship phải programmatic.
- **2.1.1 Keyboard (A):** Esc đóng dialog, Tab/Shift+Tab focus trap.
- **2.1.2 No Keyboard Trap (A):** User phải luôn có cách đóng dialog (Esc hoặc close button) — KHÔNG được trap keyboard vĩnh viễn.
- **2.4.3 Focus Order (A):** Focus order bên trong dialog phải logical.
- **2.4.7 Focus Visible (AA):** Focus indicators cho tất cả interactive elements bên trong.
- **4.1.2 Name, Role, Value (A):** Screen reader phải announce: role ("dialog"), title, description.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Animation xuất hiện/biến mất (fade, zoom, slide) PHẢI dùng CSS thuần (`data-[state=open]`, `data-starting-style`, `@starting-style`). Cấm framer-motion.
- **Portal Tunneling (Rule #15):** Dialog Content render trong Portal — PHẢI đảm bảo theme context (light/dark) không bị mất.
- **Z-Index (Rule #4):** Overlay và Content z-index phải > 50, đảm bảo nằm trên mọi content.
- **Macro Component Law (Rule #13):** Nếu basic dialog usage cần > 5 dòng, cần cung cấp simplified API.
- **Strict Polymorphism (Rule #3):** Close button nên dùng component `<Button>` thay vì hardcode button riêng.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/dialog.tsx`.
3. Kiểm tra chéo từng tiêu chí, đặc biệt: **Focus Trap** (có hoạt động đúng không?), **Focus Restoration** (focus có quay về trigger khi đóng?), **ARIA attributes** (aria-modal, aria-labelledby, aria-describedby), và **CSS animation**.
4. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---
