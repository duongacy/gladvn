# Audit Prompt: Alert

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)
Alert hiển thị thông báo quan trọng (inline, không phải toast). Khác Toast ở chỗ Alert là persistent và nằm trong page flow. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles
- **Alert Container:**
  - Phải có `role="alert"` (cho urgent messages) HOẶC `role="status"` (cho informational messages).
  - `role="alert"` tự động là `aria-live="assertive"` — screen reader sẽ interrupt và đọc ngay lập tức.
  - `role="status"` tự động là `aria-live="polite"` — screen reader đọc khi rảnh.
  - **Quan trọng:** Nếu Alert đã có sẵn trên trang khi load, `role="alert"` KHÔNG trigger announcement (chỉ trigger khi element được thêm vào DOM). Xem xét dùng `aria-live` region pattern.
- **Alert Type/Severity:**
  - Alert phải phân biệt severity: info, success, warning, destructive/error.
  - Severity KHÔNG chỉ dùng màu — PHẢI có icon và/hoặc text prefix (WCAG 1.4.1).
- **Alert Content:**
  - Title (optional): heading element hoặc strong emphasis.
  - Description: text content mô tả message.
- **Dismissible Alert (nếu có):**
  - Close button: accessible name (vd: `aria-label="Dismiss alert"`).
  - Keyboard-accessible.

### B. Keyboard Navigation & Focus
- Alert bản thân KHÔNG focusable — nó là thông báo, không phải interactive widget.
- Interactive elements bên trong (links, close button) phải keyboard-accessible.
- **Sau khi dismiss:** Focus NÊN di chuyển đến logical next element, KHÔNG để focus biến mất.

### C. Standard API & Props
- `variant` / `color`: Alert severity/type.
- Composition: Alert, AlertTitle, AlertDescription, AlertIcon.
- `icon`: Custom icon (hoặc auto-detect from variant).

### D. WCAG 2.2 Success Criteria
- **1.3.1 Info and Relationships (A):** Alert role + content structure.
- **1.4.1 Use of Color (A):** Severity không chỉ bằng màu — cần icon hoặc text.
- **1.4.3 Contrast Minimum (AA):** Alert text contrast.
- **1.4.11 Non-text Contrast (AA):** Alert border/background contrast.
- **4.1.3 Status Messages (AA):** Alert content phải announce qua assistive technology.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Severity styling PHẢI dùng CSS variant class (via cva/cn). Icon visibility/type dùng CSS.
- **Linear Design Axiom (Rule #5):** Tất cả variants (info, success, warning, destructive) phải dùng cùng công thức: same border width, same padding, same icon size. Chỉ khác color token.
- **No Magic Number (Rule #4):** Padding, border-radius, icon size phải dùng tokens.
- **Zero-Prop Defaults (Rule #1):** `<Alert>` mặc định variant (vd: "info" hoặc "default").
- **Anti-Ternary (Rule #19):** Icon rendering dùng variant-based logic, không ternary chain.

## 3. Nhiệm vụ của bạn (AI)
1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/alert.tsx`.
3. Kiểm tra chéo, đặc biệt: **`role="alert"`** (hoặc `role="status"`), **Color independence** (icon/text, không chỉ màu), **Linear Design** (variant symmetry), và **Dismissible focus management** (nếu có).
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)
1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí | Verdict | Note |
|---------------|---------|------|
| W3C APG / ARIA | ✅ | Cấu trúc alert với `role="alert"` chuẩn xác. |
| 21. CSS Depth Boundary | ❌ | Dùng `[&_[data-slot=...]]` ở L12, L14, L16, L18 là deep selector. Có thể cải thiện bằng `[&>[data-slot=...]]` nếu child trực tiếp. |
| Form Control Parity | ✅ | Kích thước đồng đều giữa các variant (Rule #5 Linear Design). |
| Dark Mode Compliance | ✅ | Semantic color tokens (bg-info/5, text-info) hiển thị tốt cả 2 theme. |

### Diffs cần fix
```diff
- "border-info/15 bg-info/5 text-info [&_[data-slot=alert-title]]:text-info [&_[data-slot=alert-description]]:text-info/90"
+ "border-info/15 bg-info/5 text-info [&>[data-slot=alert-title]]:text-info [&>[data-slot=alert-description]]:text-info/90"
```
*(Lặp lại cho tất cả variants)*
