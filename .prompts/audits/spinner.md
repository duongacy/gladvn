# Audit Prompt: Spinner

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Spinner hiển thị loading indicator. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Spinner Element:**
  - Phải có `role="status"` — screen reader announce "loading" thông qua implicit `aria-live="polite"`.
  - Phải có `aria-label="Loading"` (hoặc localized equivalent) — nếu không có visible text.
  - Nếu spinner kèm visible text "Loading...": text đó là accessible name, không cần `aria-label`.
- **Visual Indicator:**
  - SVG/CSS spinner animation phải có `aria-hidden="true"` (visual is decorative, role="status" carries the semantic).
- **Container Context:**
  - Container mà spinner thay thế NÊN có `aria-busy="true"` khi loading.
  - Khi load xong: `aria-busy="false"` → screen reader re-read content.
- **Motion:**
  - Spinner animation PHẢI tôn trọng `prefers-reduced-motion: reduce` — giảm tốc độ hoặc dùng static indicator (vd: "Loading..." text without animation).

### B. Keyboard Navigation & Focus

- Spinner KHÔNG focusable — display-only.

### C. Standard API & Props

- `size`: Sizing tiers.
- `className`: Styling.
- `label`: Custom accessible label (thay thế "Loading").

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** `role="status"` communicates loading state.
- **2.3.1 Three Flashes (A):** Spinner animation KHÔNG flash quá 3 lần/giây.
- **2.3.3 Animation from Interactions (AAA):** Respect `prefers-reduced-motion`.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Spinner animation PHẢI dùng CSS `@keyframes`. Respect `prefers-reduced-motion`.
- **No Magic Number (Rule #4):** Spinner size, stroke-width phải dùng tokens.
- **Zero-Prop Defaults (Rule #1):** `<Spinner>` mặc định size hợp lý.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/spinner.tsx`.
3. Kiểm tra chéo, đặc biệt: **`role="status"`** + **`aria-label`**, **`prefers-reduced-motion`** respect, **CSS animation** (không JS), và **Flash rate** (< 3/s).
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí          | Verdict | Note                                                      |
| ---------------------- | ------- | --------------------------------------------------------- |
| W3C APG / ARIA         | ✅      | Cung cấp `role="status"` và `aria-label="Loading"` chuẩn. |
| 21. CSS Depth Boundary | ✅      | Không vi phạm. Code sạch.                                 |
| Form Control Parity    | ✅      | Kế thừa sizing `sm`, `md`, `lg`.                          |
| Dark Mode Compliance   | ✅      | Kế thừa text color tự động.                               |
