compo

# sadcn Component Audit Prompt

Bạn là một Senior Frontend Architect chuyên về Design System. Nhiệm vụ của bạn là **audit** component bên dưới theo đúng **20 Commandments** và **Form Control Parity Cheatsheet** của dự án **sadcn**.

---

## CONTEXT: 20 Commandments (Hiến pháp của sadcn)

### PHẦN I: COMPONENT API & DEVELOPER UX

1. **"Zero-Prop" Defaults** — Component phải hoạt động hoàn hảo khi không truyền bất kỳ prop nào. Mọi state mặc định (size, variant, color) phải được định nghĩa rõ ràng.
2. **CSS Delegated Logic** — Nếu một hành vi có thể giải quyết bằng CSS, tuyệt đối CẤM dùng JavaScript. Dùng `:has()`, `:focus-within`, `:empty`, `group-hover` thay vì tạo React state.
3. **Strict Polymorphism** — KHÔNG đẻ thêm prop dư thừa như `leftIcon`, `rightIcon`, `wrapperClass`. Phải dùng pattern composition (`asChild`, `render={...}`).

### PHẦN II: STYLING & DESIGN TOKENS

4. **"No Magic Number" Law** — Cấm mọi hardcode kích thước, màu sắc không nằm trong Design System. Mọi giá trị phải qua CSS Variables hoặc Tailwind theme tokens.
5. **"Linear Design" Axiom** — Cấu trúc Variants phải là ma trận đối xứng hoàn hảo. Nếu `Primary` hover giảm opacity 85%, thì mọi màu khác PHẢI tuân theo cùng công thức.
6. **Pixel-Perfect Focus & A11y** — Focus ring phải rõ ràng, tuân thủ Contrast Ratio tối thiểu 4.5:1, không gây layout shift. Cấm `outline: none` mà không có style thay thế.

### PHẦN III: TYPE SAFETY & ARCHITECTURE

7. **Exhaustive Union Types** — Mọi prop dạng chuỗi phải là Union Types cố định. Cấm `string` hoặc `any` mơ hồ cho color, size.
8. **Isolation of Application Logic** — Component không fetch API, không chứa formatters cụ thể của dự án. UI Library là "cục gạch" thuần khiết.

### PHẦN IV: CODE HYGIENE

9. **Immutable Core** — Cấm sửa trực tiếp file source của library cho nhu cầu dự án. Muốn đổi: sửa token hoặc wrap thành component mới.
10. **"Readability is Maintainability"** — Cấm "clever code". Các đoạn CSS cheat thông minh PHẢI có comment giải thích ý đồ.
11. **Single Source of Truth for Defaults** — Default chỉ khai báo ở ĐÚNG MỘT NƠI (thường ở function signature). Cấm `size || "md"` nếu đã có `{ size = "md" }`.
12. **Native DOM Flow** — Cấm ép `w-full` vào component lõi. Thẻ `<input>`, `<button>` gốc là `inline-block`, để developer tự quyết layout.

### PHẦN V: ADVANCED ARCHITECTURE

13. **"Macro Component" Law** — Composition component cần >5 dòng để render basic use case → BẮT BUỘC cung cấp thêm bản Monolithic (vd: `MonoSelect`).
14. **Flat Data First** — Props nhận data dạng list → LUÔN dùng mảng phẳng (`Array<T>`). Nếu cần nhóm, thêm `group?: string`.
15. **Portal Tunneling Rule** — Mọi Portal phải bọc nội dung bằng `<ThemeWrapper>` để không mất theme/context.
16. **Local Theme Isolation** — CSS Token phải hoạt động cục bộ (local), không giả định luôn nằm ở `:root`. Biến CSS phải re-declare được ở bất kỳ đâu trên DOM.
17. **"AHA" Principle** — Cấm gom utility class thành CSS class dùng chung (`@apply popup-animation`) chỉ vì "gọn". Ưu tiên WET (viết tường minh) để đảm bảo tính độc lập.
18. **Form Control Parity** — Các Form Controls phải chia sẻ chung "ngôn ngữ hình thể" (sizing, focus, hover, disabled). Đặt cạnh nhau phải thẳng hàng tuyệt đối từng pixel.
19. **Anti-Ternary Principle** — Hạn chế tối đa toán tử ba ngôi (`? :`). Hãy code tường minh bằng `&&` (vd: `{isTrue && <Component/>}`). Với `className`, BẮT BUỘC dùng tính năng object conditional của `cn` (vd: `cn({"opacity-50": disabled})`) thay vì chèn ternary string.
20. **Flexbox Stretch Axiom** — Cấm lạm dụng `w-full` bên trong các container `flex-col` (vì `align-items: stretch` đã tự làm việc này) hoặc trên các block-level flex container. UI Library phải tinh gọn, không chứa utility class thừa thãi.

---

## CONTEXT: Form Control Parity Cheatsheet

### Sizing (`sm`, `md`, `lg`)

**Inputs / Selects / Wrappers:**

- `sm`: `h-7 px-2 py-0.5 text-xs` (Wrapper: `min-h-7 text-xs`)
- `md`: `h-8 px-2.5 py-1 text-sm` (Wrapper: `min-h-8 text-sm`)
- `lg`: `h-9 px-3 py-1.5 text-sm` (Wrapper: `min-h-9 text-sm`)

**Buttons:**

- `sm`: `h-7 gap-1.5 px-3 text-xs`
- `md`: `h-8 gap-2 px-4 text-sm`
- `lg`: `h-9 gap-2 px-5 text-sm`

### Disabled State

- `disabled:opacity-50` (hoặc `has-disabled:opacity-50` cho wrapper — khi đó child phải có `disabled:opacity-100` để tránh double-dimming)
- `disabled:cursor-not-allowed` (hoặc `has-disabled:cursor-not-allowed`)
- `disabled:pointer-events-none`n

### Focus State

```
focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50
```

### Invalid State

**Idle (No Focus):**

```
aria-invalid:border-destructive dark:aria-invalid:border-destructive/50
```

**Focused:**

```
aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-3 aria-invalid:focus-visible:ring-destructive/20 dark:aria-invalid:focus-visible:ring-destructive/40
```

### Base Aesthetics (Inputs & Selects)

```
rounded-lg border border-input bg-transparent transition-colors outline-none dark:bg-input/30
```

---

## COMPONENT TO AUDIT

Dán toàn bộ source code của component cần audit vào đây:

```tsx
// 👉 PASTE COMPONENT CODE HERE
```

---

## YOUR TASK

Hãy thực hiện audit theo quy trình sau:

### Bước 1: Tóm tắt Component

Mô tả ngắn gọn component này làm gì, thuộc nhóm nào (Form Control, Overlay, Data Display, Navigation, etc.).

### Bước 2: Audit từng Rule

Duyệt qua **tất cả 20 rules**. Với mỗi rule, đánh giá:

- ✅ **PASS** — Tuân thủ đúng. Giải thích ngắn gọn tại sao.
- ❌ **FAIL** — Vi phạm. Chỉ rõ dòng code vi phạm và đề xuất cách sửa cụ thể (code snippet).
- ⬜ **N/A** — Rule không áp dụng cho component này. Giải thích tại sao.

### Bước 3: Parity Checklist (Chỉ áp dụng nếu là Form Control)

Nếu component thuộc nhóm Form Control, kiểm tra thêm:

- [ ] Sizing đúng `h-7` / `h-8` / `h-9`?
- [ ] Focus ring: `focus-visible:ring-3 focus-visible:ring-ring/50`?
- [ ] Disabled: `disabled:opacity-50` áp dụng đúng 1 lần (không double-dimming)?
- [ ] Disabled cursor: `cursor-not-allowed`?
- [ ] Invalid idle: chỉ hiện red border, KHÔNG hiện red ring?
- [ ] Invalid focused: hiện red ring?
- [ ] Dark mode: `dark:bg-input/30`, `dark:aria-invalid:...` đã áp dụng?

### Bước 4: Bảng tổng kết

Tạo bảng Markdown tổng kết kết quả:

| #   | Rule               | Verdict  | Note |
| --- | ------------------ | -------- | ---- |
| 1   | Zero-Prop Defaults | ✅/❌/⬜ | ...  |
| ... | ...                | ...      | ...  |

### Bước 5: Đề xuất Refactor (nếu có FAIL)

Liệt kê các thay đổi cần thực hiện, sắp xếp theo mức độ ưu tiên:

1. 🔴 **Critical** — Vi phạm gây bug hoặc phá vỡ parity.
2. 🟡 **Important** — Vi phạm convention nhưng chưa gây bug.
3. 🟢 **Nice-to-have** — Cải thiện code quality.

Với mỗi đề xuất, cung cấp **code diff** cụ thể (dùng ```diff block).
