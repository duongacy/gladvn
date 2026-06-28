# Audit Prompt: Button

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)
Button là thành phần tương tác cơ bản nhất, BẮT BUỘC kiểm tra các tiêu chuẩn sau:

### A. Anatomy & WAI-ARIA Roles
- **Native Element:** BẮT BUỘC dùng `<button>` (hoặc base component render ra `<button>`). KHÔNG dùng `<div>`, `<span>`, `<a>` với `role="button"` trừ khi có lý do chính đáng.
- **`type` Attribute:** Mặc định phải là `type="button"` (không phải `type="submit"`) để tránh form submission ngoài ý muốn. Chỉ set `type="submit"` khi nằm trong form.
- **Accessible Name:** Button PHẢI có accessible name thông qua:
  - Text content bên trong (ưu tiên nhất)
  - `aria-label` (cho icon-only buttons)
  - `aria-labelledby` (cho trường hợp phức tạp)
- **Icon-Only Button:** Nếu button chỉ chứa icon, BẮT BUỘC có `aria-label` hoặc visually-hidden text. Icon phải có `aria-hidden="true"` để screen reader không đọc SVG.
- **Loading State:** Khi button đang loading:
  - Phải có `aria-disabled="true"` hoặc `disabled` attribute.
  - Spinner icon phải có `aria-hidden="true"`.
  - Nên có `aria-busy="true"` trên button.
  - Text nên giữ nguyên hoặc đổi thành loading text có ý nghĩa.

### B. Keyboard Navigation & Focus
- `Enter` hoặc `Space`: Kích hoạt button (native behavior của `<button>`).
- **Focus Ring:** Focus ring PHẢI hiển thị rõ ràng khi navigate bằng keyboard (`focus-visible`), KHÔNG hiển thị khi click chuột.
- **Disabled State:** Button disabled KHÔNG ĐƯỢC nhận focus (`disabled` attribute tự xử lý). Nếu dùng `aria-disabled`, button vẫn focusable nhưng phải prevent action.
- **Contrast:** Focus ring phải đạt WCAG 2.2 SC 1.4.11 (Non-text Contrast) — tối thiểu 3:1 contrast ratio.

### C. Standard API & Props (Kiến trúc Component)
- `variant`: Visual style (solid, outline, ghost, soft, link) — ma trận đối xứng (Linear Design Axiom).
- `color`: Semantic color token (primary, secondary, destructive, warning, success, info, tertiary).
- `size`: Sizing tiers (sm, md, lg) — PHẢI align với Form Control Parity.
- `disabled`: Native disabled state.
- `asChild` / `render`: Polymorphism pattern cho custom rendering (link-as-button, etc.).

### D. WCAG 2.2 Success Criteria
- **1.4.1 Use of Color (A):** Không dùng chỉ riêng màu sắc để truyền đạt thông tin (variant destructive cần có thêm icon hoặc text context).
- **1.4.3 Contrast Minimum (AA):** Text trên button phải đạt 4.5:1 contrast ratio. Large text (≥18pt hoặc 14pt bold) cần 3:1.
- **1.4.11 Non-text Contrast (AA):** Border/background của button phải có 3:1 contrast với surrounding.
- **2.1.1 Keyboard (A):** Tất cả chức năng phải accessible via keyboard.
- **2.4.7 Focus Visible (AA):** Focus indicator phải visible.
- **2.5.8 Target Size Minimum (AA):** Touch target tối thiểu 24×24 CSS pixels. Target size `sm` (h-7 = 28px) đạt, nhưng icon-only button cần verify width.

## 2. sadcn "20 Commandments" Integration
Áp dụng các luật riêng của dự án vào Button:

- **Zero-Prop Defaults (Rule #1):** `<Button>` không truyền prop nào phải render ra `variant="solid"`, `color="primary"`, `size="md"`. Verify rằng defaults được khai báo ở đúng một nơi (function signature).
- **CSS Delegated Logic (Rule #2):** Hover, active, disabled styles PHẢI dùng CSS thuần (`hover:`, `active:`, `disabled:`). Cấm dùng React state cho visual feedback.
- **Strict Polymorphism (Rule #3):** KHÔNG có prop `leftIcon`, `rightIcon`. Icon phải được truyền thông qua children composition. Icon-only detection nên dùng CSS (`:has()`, `:only-child`) hoặc tối thiểu logic.
- **No Magic Number (Rule #4):** Sizing phải qua design tokens (`h-7`, `h-8`, `h-9`), không hardcode pixel values.
- **Linear Design Axiom (Rule #5):** CompoundVariants phải đối xứng hoàn hảo — nếu `solid + primary` có hover opacity 90%, thì `solid + destructive` PHẢI cùng công thức.
- **Form Control Parity (Rule #18):** Button sizing phải align chính xác: `sm: h-7`, `md: h-8`, `lg: h-9`. Đặt cạnh Input cùng size phải thẳng hàng pixel-perfect.
- **Single Source of Truth (Rule #11):** Defaults chỉ khai báo ở function signature. Cấm `size || "md"` pattern.
- **Native DOM Flow (Rule #12):** Button KHÔNG được có `w-full` mặc định. Để developer tự quyết layout.

## 3. Nhiệm vụ của bạn (AI)
1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/button.tsx`.
3. Kiểm tra chéo từng tiêu chí được định nghĩa trong file này kết hợp với 20 Commandments.
4. Đặc biệt kiểm tra: **Icon-only detection** (có dùng CSS hay JS?), **CompoundVariants symmetry**, và **Form Control Parity alignment**.
5. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)
1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí | Verdict | Note |
|---------------|---------|------|
| W3C APG / ARIA | ✅ | Sử dụng Base UI Button, handle space/enter và ARIA roles tốt |
| 21. CSS Depth Boundary | ❌ | Vi phạm ở L32 và L58-L60: sử dụng `[&_svg]` sâu vào children. Nên đổi thành `[&>svg]` hoặc class composition. |
| Form Control Parity | ✅ | Sizing (h-7, h-8, h-9) khớp chính xác |
| Dark Mode Compliance | ✅ | Semantic tokens hoạt động tốt, focus rings và states tuân thủ parity cheatsheet |

### Diffs cần fix
```diff
- "[&_svg]:pointer-events-none [&_svg]:shrink-0"
+ "[&>svg]:pointer-events-none [&>svg]:shrink-0"
- "[&_svg:not([class*='size-'])]:size-3.5"
+ "[&>svg:not([class*='size-'])]:size-3.5"
```
