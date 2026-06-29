# Audit Prompt: Input Group

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Input Group là wrapper component kết hợp Input với các addon elements (prefix icon, suffix button, text addon). BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Wrapper Container:**
  - Nên dùng `role="group"` nếu cần nhóm nhiều elements, hoặc để native HTML flow xử lý.
  - KHÔNG thêm `role` không cần thiết nếu wrapper chỉ là styling container.
- **Addon Elements (Prefix/Suffix):**
  - Icon addons phải có `aria-hidden="true"` (decorative).
  - Text addons (vd: "$", "kg") phải được liên kết với input qua `aria-describedby` HOẶC được bao gồm trong `aria-label`.
  - Button addons (vd: show password toggle) phải keyboard-accessible và có accessible name.
- **Input Inside:**
  - Input bên trong PHẢI giữ nguyên toàn bộ accessibility attributes (label, aria-invalid, etc.).
  - Focus ring PHẢI hiển thị trên WRAPPER (không phải trên input riêng) để tạo visual unity.
- **Disabled State:**
  - Khi wrapper disabled, TẤT CẢ children (input + addons) phải disabled.
  - Wrapper dùng `has-disabled:opacity-50` — child input phải có `disabled:opacity-100` để tránh double-dimming.

### B. Keyboard Navigation & Focus

- `Tab`: Focus vào input bên trong. Addon buttons (nếu có) phải nằm trong tab order tự nhiên.
- Focus ring phải wrap toàn bộ group (dùng `:focus-within` trên wrapper).
- Click vào wrapper (kể cả addon area) NÊN focus input bên trong.

### C. Standard API & Props

- `size`: Sizing tier (sm, md, lg) — apply cho cả wrapper và children.
- `disabled`: Disable toàn bộ group.
- Composition: Wrapper, Prefix/Suffix slots, Input.
- Forward `ref` đến wrapper hoặc internal input.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Addon text phải programmatically associated với input.
- **1.4.11 Non-text Contrast (AA):** Wrapper border, addon separator (nếu có), focus ring contrast.
- **2.1.1 Keyboard (A):** Addon buttons phải keyboard accessible.
- **2.4.7 Focus Visible (AA):** Focus ring trên wrapper khi input focused.

## 2. sadcn "20 Commandments" Integration

- **Form Control Parity (Rule #18):** Wrapper sizing PHẢI dùng `min-h-*` (không phải `h-*`): `sm: min-h-7 text-xs`, `md: min-h-8 text-sm`, `lg: min-h-9 text-sm`. Focus ring từ `:focus-within`: `has-[:focus-visible]:border-ring has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-ring/50`.
- **CSS Delegated Logic (Rule #2):** Focus state PHẢI dùng CSS `:focus-within` trên wrapper. Disabled state dùng `:has(:disabled)`. KHÔNG dùng React state.
- **No Magic Number (Rule #4):** Addon padding, separator spacing phải dùng tokens.
- **Flexbox Stretch Axiom (Rule #20):** Trong flex-col container, input group KHÔNG cần `w-full` vì stretch tự xử lý.
- **Anti-Ternary (Rule #19):** Disabled styling dùng `cn({"opacity-50": disabled})` hoặc CSS `has-disabled:`.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/input-group.tsx`.
3. Kiểm tra chéo từng tiêu chí, đặc biệt: **Focus ring on wrapper** (`:focus-within` CSS), **Double-dimming prevention** (disabled opacity), và **Form Control Parity** (sizing alignment).
4. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí          | Verdict | Note                                                                                                 |
| ---------------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA         | ✅      | Wrapper xử lý aria tốt, focus được pass through chuẩn                                                |
| 21. CSS Depth Boundary | ❌      | Vi phạm ở `InputGroupText` (L156): sử dụng `[&_svg]`. Cần đổi sang `[&>svg]`.                        |
| Form Control Parity    | ✅      | Sizing (min-h-7, min-h-8, min-h-9) khớp chính xác, focus vòng ngoài xử lý xuất sắc bằng CSS `:has()` |
| Dark Mode Compliance   | ✅      | `dark:bg-input/30` áp dụng chuẩn, shadow và border đúng                                              |

### Diffs cần fix

```diff
- "flex items-center gap-2 text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 group-[.input-group-sm]/input-group:[&>svg:not([class*='size-'])]:size-3.5"
+ "flex items-center gap-2 text-muted-foreground [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 group-[.input-group-sm]/input-group:[&>svg:not([class*='size-'])]:size-3.5"
```
