# Audit Prompt: Theme Provider

**Base rules:** Tuân thủ tuyệt đối `AUDIT_TEMPLATE.md` và `docs/architecture/PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Theme Provider quản lý light/dark/system theme cho component library. Không có W3C APG pattern riêng nhưng ảnh hưởng accessibility. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Theme Application:**
  - Theme PHẢI được áp dụng qua CSS class trên root element (vd: `class="dark"`) hoặc `data-theme` attribute.
  - KHÔNG dùng inline styles cho theming — CSS variables phải cascade từ parent.
- **System Preference:**
  - Phải detect `prefers-color-scheme` media query cho system theme.
  - Phải respond khi user thay đổi OS theme (event listener).
- **Theme Toggle:**
  - Nếu có theme toggle UI: phải keyboard-accessible.
  - Toggle button nên có `aria-label` mô tả action (vd: "Switch to dark mode" hoặc "Toggle theme").
  - Current theme state nên announced (vd: `aria-label="Current theme: dark. Switch to light mode"`).
- **Color Contrast:**
  - BOTH light và dark themes phải đạt WCAG contrast ratios.
  - Không giả định chỉ test light theme — dark theme cũng phải audit.

### B. Keyboard Navigation & Focus

- Theme Provider bản thân không focusable — nó là context provider.
- Theme toggle (nếu có) phải keyboard-accessible.

### C. Standard API & Props

- `theme` / `defaultTheme`: "light" | "dark" | "system".
- `storageKey`: LocalStorage key để persist choice.
- `attribute`: CSS attribute cho theme (`class` hoặc `data-theme`).
- `disableTransitionOnChange`: Tắt CSS transition khi switch theme (tránh flash).

### D. WCAG 2.2 Success Criteria

- **1.4.3 Contrast Minimum (AA):** Both themes phải đạt.
- **1.4.6 Contrast Enhanced (AAA):** Nên aim cho 7:1.
- **1.4.11 Non-text Contrast (AA):** Borders, icons, focus rings trong cả hai themes.

## 2. gladcn "20 Commandments" Integration

- **Local Theme Isolation (Rule #16):** CSS tokens PHẢI hoạt động locally — sub-tree có thể override theme. Variables phải re-declare được ở bất kỳ đâu trên DOM.
- **Portal Tunneling (Rule #15):** ThemeProvider phải wrap Portal containers — hoặc Portal components phải inject theme class.
- **CSS Delegated Logic (Rule #2):** Theme switching dùng CSS class/data attribute, không inline styles.
- **No Magic Number (Rule #4):** Tất cả color values phải qua CSS variables.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/theme-provider.tsx`.
3. Kiểm tra chéo, đặc biệt: **System preference detection** (`prefers-color-scheme`), **Theme persistence** (localStorage), **Portal theme tunneling**, **Flash prevention** (disableTransitionOnChange hoặc script injection), và **Local theme isolation** (can re-declare on any subtree).
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
