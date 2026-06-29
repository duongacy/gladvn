# Audit Prompt: Switch

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Switch là widget cho phép user toggle giữa hai trạng thái mutually exclusive (on/off). Khác với Checkbox ở chỗ Switch thường dùng cho instant-apply settings (không cần submit). BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Switch Element:**
  - Phải có `role="switch"` (KHÔNG dùng `role="checkbox"` — Switch có semantic riêng).
  - Phải có `aria-checked="true"` (on) hoặc `aria-checked="false"` (off).
  - Phải có accessible name thông qua visible `<label>`, `aria-label`, hoặc `aria-labelledby`.
- **Track & Thumb:**
  - Track (rail) và Thumb (knob) là visual elements — phải có `aria-hidden="true"` nếu là decorative, hoặc không cần role riêng vì parent switch đã có.
  - Thumb animation (slide) phải smooth, không gây layout shift.
- **Label Association:**
  - BẮT BUỘC có label liên kết. Click vào label PHẢI toggle switch.
  - Label nên mô tả feature mà switch điều khiển (vd: "Dark Mode", "Notifications"), KHÔNG dùng "On/Off" làm label.
- **Status Text (tùy chọn):**
  - Nếu có text "On"/"Off" cạnh switch, text này phải là decorative (`aria-hidden="true"`) vì screen reader đã đọc `aria-checked`.

### B. Keyboard Navigation & Focus

- `Space`: Toggle switch on/off (chuẩn W3C).
- `Enter`: Một số implementation cũng hỗ trợ Enter. Nếu switch đóng vai trò form control, Enter nên submit form thay vì toggle.
- `Tab` / `Shift+Tab`: Di chuyển focus tự nhiên.
- **Focus Ring:** Phải hiển thị trên toàn bộ switch (bao cả track), không chỉ trên thumb.

### C. Standard API & Props

- `checked` / `defaultChecked` / `onCheckedChange`: Pattern Controlled & Uncontrolled chuẩn.
- `disabled`: Vô hiệu hoá switch.
- `required`: Form validation support.
- `name` / `value`: Native form submission support.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Label-switch relationship phải programmatic.
- **1.4.1 Use of Color (A):** Trạng thái on/off KHÔNG chỉ phân biệt bằng màu — thumb position phải là indicator chính.
- **1.4.11 Non-text Contrast (AA):** Track border, thumb, và focus ring phải đạt 3:1 contrast. Track color khi on vs off phải đủ phân biệt.
- **2.1.1 Keyboard (A):** Space phải toggle switch.
- **2.5.8 Target Size Minimum (AA):** Switch clickable area phải ≥ 24×24 CSS pixels.
- **4.1.2 Name, Role, Value (A):** Screen reader phải announce: name, role ("switch"), state ("on"/"off").

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Thumb slide animation PHẢI dùng CSS transition (`data-[state=checked]:translate-x-*`). Cấm dùng React state để animate.
- **Form Control Parity (Rule #18):** Focus ring dùng chung token: `focus-visible:ring-3 focus-visible:ring-ring/50`. Disabled state: `disabled:opacity-50`.
- **No Magic Number (Rule #4):** Track width/height và thumb size phải dùng design tokens.
- **Zero-Prop Defaults (Rule #1):** `<Switch>` không prop phải render unchecked, enabled.
- **Linear Design Axiom (Rule #5):** Nếu có multiple colors (primary, destructive...), tất cả phải dùng cùng công thức transition/sizing.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/switch.tsx`.
3. Kiểm tra chéo từng tiêu chí, đặc biệt: **`role="switch"`** (không phải checkbox), **Thumb animation bằng CSS**, và **Focus ring placement** (trên track, không phải thumb).
4. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí          | Verdict | Note                                                                                          |
| ---------------------- | ------- | --------------------------------------------------------------------------------------------- |
| W3C APG / ARIA         | ✅      | Sử dụng `role="switch"` chuẩn, hỗ trợ space toggle qua Base UI                                |
| 21. CSS Depth Boundary | ✅      | Không vi phạm rule 21                                                                         |
| Form Control Parity    | ✅      | Focus ring bọc track, track height đúng token                                                 |
| Dark Mode Compliance   | ✅      | Màu `dark:data-unchecked:bg-secondary` và `dark:data-checked:bg-primary-foreground` rất tỉ mỉ |
