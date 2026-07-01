# Audit Prompt: Command

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Command (Command Palette / cmdk) là widget kết hợp search input với filterable list of actions/items. Tương tự Combobox nhưng focus vào actions hơn là data selection. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Dialog Wrapper (khi dùng như palette):**
  - Nếu mở qua keyboard shortcut (Cmd+K): bọc trong `role="dialog"` với `aria-modal="true"`.
  - `aria-label` mô tả (vd: "Command palette" hoặc "Search commands").
- **Search Input:**
  - `role="combobox"` (hoặc `role="searchbox"`).
  - `aria-expanded="true"` (list luôn visible khi command mở).
  - `aria-controls` trỏ đến listbox ID.
  - `aria-activedescendant` trỏ đến item đang highlighted.
  - `aria-autocomplete="list"`.
- **List Container:**
  - `role="listbox"`.
- **Items:**
  - `role="option"`.
  - Item đang highlighted: được trỏ bởi `aria-activedescendant`.
  - `aria-selected` cho item đang highlighted.
  - `aria-disabled="true"` cho disabled items.
- **Groups:**
  - Container: `role="group"`.
  - Group heading: `role="presentation"` + `aria-hidden="true"`, hoặc dùng `aria-labelledby` trên group.
- **Empty State:**
  - Khi không có kết quả: phải có text feedback, nên dùng `role="status"` hoặc `aria-live="polite"`.
- **Separator:** `role="separator"`.

### B. Keyboard Navigation & Focus

- `Cmd/Ctrl + K`: Mở command palette (convention phổ biến).
- **Input Focused:**
  - Gõ ký tự: Filter items.
  - `Arrow Down` / `Arrow Up`: Di chuyển highlight giữa items.
  - `Enter`: Activate item đang highlighted.
  - `Esc`: Đóng command palette.
  - `Tab`: KHÔNG di chuyển focus ra ngoài — nên cycle qua items hoặc stay trong input.
- **Focus Management:** Focus LUÔN ở search input, dùng `aria-activedescendant` cho virtual focus trên items.

### C. Standard API & Props

- Composition: Command, Input, List, Empty, Group, Item, Separator, Loading.
- `filter`: Custom filter function.
- `value` / `onValueChange`: Selected/highlighted value.
- Thường bọc trong Dialog khi dùng như command palette.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Input-list relationship, group-heading association.
- **2.1.1 Keyboard (A):** Full keyboard navigation.
- **2.4.7 Focus Visible (AA):** Highlight indicator trên item đang active.
- **4.1.2 Name, Role, Value (A):** Combobox role, activedescendant, expanded state.
- **4.1.3 Status Messages (AA):** Khi filter results thay đổi, announce số lượng (vd: "3 results").

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Item highlight dùng CSS (`data-[selected]`, `aria-selected`). Filter logic phải JS nhưng visual feedback CSS.
- **Portal Tunneling (Rule #15):** Nếu bọc trong Dialog Portal, phải giữ theme.
- **Macro Component Law (Rule #13):** Command palette setup (Dialog + Command) cần nhiều dòng — xem xét MonoCommandDialog.
- **Z-Index (Rule #4):** Nếu trong Dialog, kế thừa Dialog z-index.
- **Readability (Rule #10):** Filter algorithm phải có comment giải thích.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/command.tsx`.
3. Kiểm tra chéo, đặc biệt: **`aria-activedescendant`** (virtual focus), **Filter result announcement** (status messages), **Dialog integration** (khi dùng Cmd+K), và **Empty state** accessibility.
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
