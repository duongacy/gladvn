# Audit Prompt: Native Select

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Native Select sử dụng `<select>` element gốc của browser, kế thừa toàn bộ accessibility behavior built-in. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Native Element:** BẮT BUỘC dùng `<select>` gốc. Đây là ưu điểm lớn nhất — browser tự xử lý ARIA roles, keyboard, và mobile UX.
- **Label Association:**
  - `<select>` BẮT BUỘC có `<label htmlFor="id">` hoặc `aria-label`.
  - Placeholder option (vd: "Choose...") nên có `disabled` và `selected` attribute, với `value=""` để form validation hoạt động.
- **Option & OptGroup:**
  - `<option>` tự có `role="option"`.
  - `<optgroup label="...">` tự có `role="group"` với accessible name.
- **Error/Required State:**
  - `aria-invalid="true"` khi invalid.
  - `required` attribute cho form validation.
  - `aria-describedby` cho error message.

### B. Keyboard Navigation & Focus

- Native `<select>` tự hỗ trợ đầy đủ:
  - `Space` / `Enter` / `Arrow keys`: Mở dropdown và navigate options.
  - `Tab`: Di chuyển focus.
  - Type-ahead: Gõ ký tự nhảy đến option tương ứng.
- **Focus Ring:** Phải override browser default focus ring bằng design system token nhưng vẫn đảm bảo visible.
- **Custom Arrow Icon:** Nếu ẩn native arrow và thay bằng custom icon, icon phải có `pointer-events-none` để không chặn click.

### C. Standard API & Props

- `value` / `defaultValue` / `onChange`: Pattern Controlled & Uncontrolled.
- `disabled` / `required`.
- `name`: Native form submission.
- `multiple`: Multi-select mode (ít dùng nhưng nên support).
- Forward `ref` đến native `<select>`.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Label association.
- **1.4.3 Contrast Minimum (AA):** Selected text contrast.
- **1.4.11 Non-text Contrast (AA):** Border contrast, arrow icon contrast.
- **2.4.7 Focus Visible (AA):** Focus ring visible.
- **3.3.2 Labels or Instructions (A):** Phải có label.

## 2. sadcn "20 Commandments" Integration

- **Form Control Parity (Rule #18):** Native Select sizing PHẢI align chính xác với Input: `sm: h-7 px-2 text-xs`, `md: h-8 px-2.5 text-sm`, `lg: h-9 px-3 text-sm`. Base aesthetics: `rounded-lg border border-input bg-transparent dark:bg-input/30`.
- **CSS Delegated Logic (Rule #2):** Custom arrow icon positioning PHẢI dùng CSS (`appearance-none` + background-image hoặc `::after` pseudo-element).
- **No Magic Number (Rule #4):** Arrow icon size, padding-right (để chừa chỗ cho arrow) phải dùng tokens.
- **Zero-Prop Defaults (Rule #1):** `<NativeSelect>` không prop phải render enabled, size mặc định.
- **Native DOM Flow (Rule #12):** Không ép `w-full` mặc định.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/native-select.tsx`.
3. Kiểm tra chéo từng tiêu chí, đặc biệt: **Form Control Parity** (sizing chính xác với Input), **Custom arrow icon** (có chặn click không?), và **Placeholder option** (disabled + selected + value="").
4. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---
