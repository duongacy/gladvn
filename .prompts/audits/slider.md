# Audit Prompt: Slider

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)
Slider cho phép user chọn một giá trị (hoặc khoảng giá trị) từ một range bằng cách kéo thumb dọc theo track. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles
- **Slider Container:**
  - Phải có accessible name thông qua `aria-label` hoặc `aria-labelledby`.
- **Thumb (Knob):**
  - Phải có `role="slider"`.
  - Phải có `aria-valuenow`: Giá trị hiện tại.
  - Phải có `aria-valuemin`: Giá trị nhỏ nhất.
  - Phải có `aria-valuemax`: Giá trị lớn nhất.
  - Nên có `aria-valuetext`: Human-readable text cho giá trị (vd: "50 percent", "$100", "Medium"). Đặc biệt quan trọng khi số thuần không có nghĩa với user.
  - Phải có `aria-orientation`: `"horizontal"` (mặc định) hoặc `"vertical"`.
- **Range Slider (2 thumbs):**
  - Mỗi thumb phải là một `role="slider"` riêng biệt với `aria-valuenow`, `aria-valuemin`, `aria-valuemax` riêng.
  - Mỗi thumb cần accessible name riêng (vd: "Minimum price", "Maximum price").
- **Track & Fill:**
  - Track và fill bar là decorative — có thể có `aria-hidden="true"`.

### B. Keyboard Navigation & Focus
- `Arrow Right` / `Arrow Up`: Tăng giá trị 1 step.
- `Arrow Left` / `Arrow Down`: Giảm giá trị 1 step.
- `Page Up`: Tăng giá trị một bước lớn (thường 10 steps hoặc 10%).
- `Page Down`: Giảm giá trị một bước lớn.
- `Home`: Set giá trị về minimum.
- `End`: Set giá trị về maximum.
- **Focus Ring:** Phải hiển thị trên thumb khi navigate bằng keyboard.
- **Range Slider:** `Tab` di chuyển focus giữa 2 thumbs.

### C. Standard API & Props
- `value` / `defaultValue` / `onValueChange`: Pattern Controlled & Uncontrolled. Hỗ trợ cả single value và array (range).
- `min` / `max` / `step`: Range configuration.
- `disabled`: Vô hiệu hoá slider.
- `orientation`: Horizontal/Vertical.
- `name`: Native form submission support.

### D. WCAG 2.2 Success Criteria
- **1.3.1 Info and Relationships (A):** Slider phải có label programmatically associated.
- **1.4.1 Use of Color (A):** Fill bar không được là indicator duy nhất — thumb position và `aria-valuenow` phải đủ.
- **1.4.11 Non-text Contrast (AA):** Track, fill bar, thumb, và focus ring đều phải đạt 3:1 contrast.
- **2.1.1 Keyboard (A):** Tất cả keyboard interactions phải hoạt động (Arrow, Page Up/Down, Home/End).
- **2.4.7 Focus Visible (AA):** Focus indicator trên thumb phải rõ ràng.
- **2.5.8 Target Size Minimum (AA):** Thumb clickable area phải ≥ 24×24 CSS pixels.
- **4.1.2 Name, Role, Value (A):** Screen reader phải announce: name, role ("slider"), value, min, max.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Fill bar width/height PHẢI dùng CSS custom properties (vd: `--slider-value`) được set qua inline style, KHÔNG dùng React re-render cho visual feedback.
- **Form Control Parity (Rule #18):** Focus ring trên thumb phải dùng chung token: `focus-visible:ring-3 focus-visible:ring-ring/50`.
- **No Magic Number (Rule #4):** Track height, thumb size phải dùng design tokens.
- **Zero-Prop Defaults (Rule #1):** `<Slider>` không prop phải hoạt động: `min=0`, `max=100`, `step=1`, `value=50` (hoặc tương tự).
- **Native DOM Flow (Rule #12):** Slider KHÔNG có `w-full` mặc định — để developer tự quyết width.

## 3. Nhiệm vụ của bạn (AI)
1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/slider.tsx`.
3. Kiểm tra chéo từng tiêu chí, đặc biệt: **ARIA attributes trên thumb** (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`), **Keyboard interactions** (Page Up/Down, Home/End), và **Range slider** support.
4. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)
1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí | Verdict | Note |
|---------------|---------|------|
| W3C APG / ARIA | ✅ | Các thuộc tính ARIA (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`) trên thumb đầy đủ |
| 21. CSS Depth Boundary | ✅ | Không có deep CSS selectors, thumb được style trực tiếp bằng variant |
| Form Control Parity | ✅ | Focus ring token khớp chuẩn Form Control |
| Dark Mode Compliance | ✅ | Có đầy đủ dark variants cho invalid/focus state |
