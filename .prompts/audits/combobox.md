# Audit Prompt: Combobox

**Base rules:** Tuân thủ tuyệt đối `AUDIT_TEMPLATE.md` và `docs/architecture/PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Combobox kết hợp text input với popup listbox, cho phép user vừa gõ để filter, vừa chọn từ danh sách. Đây là component phức tạp nhất về ARIA. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Input Element:**
  - Phải có `role="combobox"` (native `<input>` với pattern này).
  - Phải có `aria-expanded="true"` (popup open) hoặc `"false"` (closed).
  - Phải có `aria-controls` trỏ đến listbox ID.
  - Phải có `aria-activedescendant` trỏ đến ID của option đang highlighted (khi dùng virtual focus pattern — focus vẫn trên input, highlight di chuyển trong listbox).
  - Phải có `aria-autocomplete`:
    - `"none"`: Popup không filter.
    - `"list"`: Popup filter dựa trên input.
    - `"both"`: Filter + auto-complete text trong input.
  - Phải có `aria-haspopup="listbox"`.
- **Listbox (Popup):**
  - Phải có `role="listbox"`.
- **Option:**
  - Phải có `role="option"`.
  - Option đang highlighted: phải được trỏ bởi `aria-activedescendant`.
  - Option selected: `aria-selected="true"`.
  - Option disabled: `aria-disabled="true"`.
- **No Results Message:**
  - Khi không có kết quả, phải có feedback cho screen reader (vd: `role="status"` với live region).

### B. Keyboard Navigation & Focus

- **Input Focused (Listbox Closed):**
  - `Arrow Down`: Mở listbox, highlight option đầu tiên.
  - `Alt + Arrow Down`: Mở listbox mà không thay đổi highlight.
  - Gõ ký tự: Filter listbox options, mở listbox nếu đang đóng.
- **Input Focused (Listbox Open):**
  - `Arrow Down`: Di chuyển highlight đến option tiếp theo.
  - `Arrow Up`: Di chuyển highlight đến option trước đó.
  - `Home` / `End`: Di chuyển cursor trong input text (KHÔNG di chuyển highlight trong listbox — đây là điểm khác biệt với Select).
  - `Enter`: Select option đang highlighted và đóng listbox.
  - `Esc`: Đóng listbox, giữ nguyên text trong input.
  - `Tab`: Select option đang highlighted (nếu có), đóng listbox, di chuyển focus.
- **Focus Management:** Focus LUÔN nằm trên input — listbox dùng `aria-activedescendant` pattern (virtual focus), KHÔNG di chuyển DOM focus vào listbox.

### C. Standard API & Props

- `value` / `onValueChange`: Selected value.
- `inputValue` / `onInputChange`: Text trong input field.
- `open` / `onOpenChange`: Popup state.
- `disabled` / `required`.
- `placeholder`: Input placeholder.
- `name`: Native form submission.
- Multi-select mode: Nếu hỗ trợ.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Combobox-listbox relationship qua `aria-controls`.
- **1.3.5 Identify Input Purpose (AA):** Nên có `autocomplete` khi applicable.
- **1.4.3 Contrast Minimum (AA):** Input text, option text, highlighted option contrast.
- **1.4.11 Non-text Contrast (AA):** Input border, highlighted option indicator.
- **2.1.1 Keyboard (A):** Full keyboard navigation.
- **2.4.7 Focus Visible (AA):** Focus ring trên input, highlight indicator trên option.
- **4.1.2 Name, Role, Value (A):** Screen reader phải announce: role ("combobox"), expanded state, selected value, activedescendant change.
- **4.1.3 Status Messages (AA):** Khi kết quả filter thay đổi, nên announce số lượng results qua `aria-live` region (vd: "5 results available").

## 2. gladcn "20 Commandments" Integration

- **Form Control Parity (Rule #18):** Input sizing align với Input component. Focus ring: `focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50`.
- **CSS Delegated Logic (Rule #2):** Popup animation, highlight state PHẢI dùng CSS. Filter logic bắt buộc dùng JS nhưng visual feedback phải CSS-driven.
- **Portal Tunneling (Rule #15):** Listbox popup trong Portal phải giữ theme context.
- **Macro Component Law (Rule #13):** Combobox rất complex — cần MonoCombobox nếu basic usage > 5 dòng.
- **Flat Data First (Rule #14):** Options data nên là `Array<T>` phẳng.
- **Z-Index (Rule #4):** Popup z-index hợp lý.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/micro/combobox.tsx`.
3. Kiểm tra chéo từng tiêu chí, đặc biệt: **`aria-activedescendant` pattern** (virtual focus), **`aria-autocomplete` attribute**, **Keyboard interactions** (Home/End behavior — phải khác Select), và **Status messages** cho filter results.
4. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---
