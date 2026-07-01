compo

# gladcn Component Audit Prompt

Bạn là một Senior Frontend Architect chuyên về Design System. Nhiệm vụ của bạn là **audit** component bên dưới theo đúng **21 Commandments** và **Form Control Parity Cheatsheet** của dự án **gladcn**.

---

## CONTEXT: 22 Commandments (Hiến pháp của gladcn)

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
21. **CSS Depth Boundary** — Component CẤM "thò tay" CSS vào children quá sâu. Các selector như `[&_a]:underline`, `[&_p]:mb-4`, `*:[svg:not([class*='size-'])]:size-4`, `has-[>svg]:grid-cols-[auto_1fr]` đều vi phạm — component đang tự ý quyết định style cho content mà user nhét vào. **CHỈ ĐƯỢC PHÉP** dùng CSS query targeting `data-slot` của sub-component chính thức (vd: `[&_[data-slot=alert-title]]:text-info`) hoặc direct state selectors (`:hover`, `:focus`, `aria-*`). Nếu user nhét children vô, user tự style cho "ruột" của nó.
22. **Pure Composition Only (CRITICAL)** — Các component trong thư mục `src/components/ui/` CHỈ được phép là Compositional Primitives (chia tách rạch ròi thành các thành phần nhỏ nhất). Tuyệt đối KHÔNG chứa bất kỳ monolithic logic nào (ví dụ: nhận prop `items` dạng mảng rồi tự render vòng lặp bên trong component UI). Bất cứ monolithic wrapper/behavior nào bị phát hiện BẮT BUỘC phải bị reject và di dời sang thư mục `src/components/monolithic/`.

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

## CONTEXT: Dark Mode Audit Checklist

gladcn sử dụng semantic CSS tokens (không hardcode màu). Mỗi token (`--background`, `--foreground`, `--card`, ...) đều có giá trị riêng biệt cho light và dark. Khi audit, BẮT BUỘC kiểm tra các tiêu chí sau:

### A. Nguyên tắc nền tảng

- **Không hardcode màu** — Cấm dùng `bg-white`, `text-black`, `border-gray-200` trực tiếp. PHẢI dùng semantic token như `bg-background`, `text-foreground`, `border-border`.
- **Tin tưởng vào token** — Nếu component chỉ dùng semantic tokens, nó tự động đúng ở dark mode mà không cần thêm class `dark:`.
- **`dark:` class chỉ dùng cho edge case** — Ví dụ: `dark:bg-input/30` (input trên dark cần background khác), `dark:aria-invalid:border-destructive/50` (giảm cường độ màu lỗi trên nền tối).

### B. Các hạng mục bắt buộc kiểm tra

**1. Overlay / Backdrop**

- `bg-black/10`, `bg-black/50`... trên dark background: backdrop có đủ tối để phân biệt modal với content không?
- Không dùng `bg-white/80` cho overlay vì sẽ sáng loá trên dark mode.

**2. Border Legibility**

- `border-input`, `border-border` đều có dark mode variant — chỉ cần dùng đúng token là đủ.
- Cảnh báo: `border-{color}/15` trên dark background có thể quá mờ, cần kiểm tra contrast thực tế.

**3. Focus Ring (WCAG 2.4.7)**

- `ring-ring/50` — `--ring` token có đủ contrast trên nền tối không?
- Không ép hardcode `ring-white` chỉ để giải quyết dark mode — dùng token.

**4. Severity Colors (Alert, Badge, Toast...)**

- Màu `text-info`, `text-destructive`, `text-success`, `text-warning` trên `bg-{color}/5` ở dark mode:
  - Background 5% opacity rất mỏng — phải đảm bảo text vẫn đạt contrast ratio 4.5:1 (WCAG 1.4.3).
  - Nếu dùng `border-{color}/15` — kiểm tra viền có đủ visible trên dark background.

**5. Glassmorphism / Blur Effects**

- `bg-popover/80 backdrop-blur` — Màu popover trên dark phải đảm bảo text trong overlay đọc được.
- `supports-backdrop-filter:backdrop-blur-xs` — Cần test thực tế trên trình duyệt không hỗ trợ backdrop-filter.

### C. WCAG Success Criteria liên quan đến Dark Mode

- **1.4.3 Contrast Minimum (AA):** Text contrast ≥ 4.5:1 (body), ≥ 3:1 (large text/headings).
- **1.4.11 Non-text Contrast (AA):** Border, icon, focus ring ≥ 3:1 so với background.
- **1.4.1 Use of Color (A):** Không chỉ dựa vào màu để truyền tải thông tin (áp dụng cả light lẫn dark).

### D. Verdict Format cho Dark Mode

Trong bảng audit (Bước 2), thêm một dòng riêng:

| — | Dark Mode Compliance | ✅/❌/⚠️ | Note |

- ✅ = Chỉ dùng semantic tokens, tự động đúng.
- ⚠️ = Cần kiểm tra thêm contrast thực tế (đặc biệt `/5`, `/15` opacity).
- ❌ = Hardcode màu hoặc dùng `dark:` sai cách.

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

Duyệt qua **tất cả 22 rules**. Với mỗi rule, đánh giá:

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
