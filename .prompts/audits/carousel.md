# Audit Prompt: Carousel

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Carousel hiển thị một tập hợp items có thể scroll/navigate qua lại. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Carousel Container:**
  - Phải có `role="region"` hoặc `role="group"`.
  - Phải có `aria-label` mô tả carousel (vd: "Product images" hoặc "Testimonials").
  - Nên có `aria-roledescription="carousel"` để screen reader announce "carousel" thay vì "region".
- **Slide Container:**
  - Phải có `aria-live="polite"` nếu slides auto-rotate.
  - Khi auto-rotate paused (hover/focus): `aria-live="off"`.
- **Individual Slides:**
  - Mỗi slide nên có `role="group"`.
  - Mỗi slide nên có `aria-roledescription="slide"`.
  - Mỗi slide nên có `aria-label` (vd: "1 of 5" hoặc "Slide 1: Product name").
  - Slides không visible NÊN có `aria-hidden="true"` hoặc `inert`.
- **Navigation Controls:**
  - Previous/Next buttons: `aria-label="Previous slide"`, `aria-label="Next slide"`.
  - Dot indicators (nếu có): mỗi dot là `<button>` với `aria-label="Go to slide 3"` hoặc tương tự.
  - Active dot: `aria-current="true"` hoặc `aria-pressed="true"`.

### B. Keyboard Navigation & Focus

- `Tab`: Focus vào carousel controls (prev/next buttons, dots).
- `Enter` / `Space`: Activate control.
- **Auto-rotation:**
  - Phải có pause/stop button.
  - PHẢI pause khi user hover hoặc focus vào carousel (WCAG 2.2.1).
  - `prefers-reduced-motion: reduce` → tắt auto-rotation.
- Arrow keys (nếu carousel dùng tablist pattern cho dots): roving tabindex.

### C. Standard API & Props

- `orientation`: Horizontal/Vertical.
- `autoplay` / `interval`: Auto-rotation config.
- `loop`: Wrap-around navigation.
- Composition: Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Carousel-slide structure.
- **2.1.1 Keyboard (A):** Controls keyboard-accessible.
- **2.2.1 Timing Adjustable (A):** Auto-rotation phải pausable.
- **2.2.2 Pause, Stop, Hide (A):** User phải control auto-rotation.
- **2.3.1 Three Flashes (A):** Carousel transitions không flash.
- **2.4.7 Focus Visible (AA):** Focus ring trên controls.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Slide transitions dùng CSS (transform, scroll-snap). Auto-play logic cần JS nhưng visual transitions phải CSS.
- **No Magic Number (Rule #4):** Slide dimensions, gap, transition duration phải dùng tokens.
- **Readability (Rule #10):** Auto-rotation logic, scroll-snap config phải có comment.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/carousel.tsx`.
3. Kiểm tra chéo, đặc biệt: **`aria-roledescription="carousel"`**, **Slide labels** ("1 of 5"), **Auto-rotation pause** (hover/focus), **Hidden slides** (aria-hidden), và **Control accessible names**.
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí          | Verdict | Note                                                                                                                        |
| ---------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA         | ✅      | Cấu trúc `role="region"`, `aria-roledescription="carousel"`, `role="group"` trên slide cực chuẩn. Controls có `aria-label`. |
| 21. CSS Depth Boundary | ✅      | Không dùng deep selector, styling trực tiếp trên wrapper.                                                                   |
| Form Control Parity    | ✅      | Re-use component `<Button>` cho prev/next buttons (Rule #13)                                                                |
| Dark Mode Compliance   | ✅      | Kế thừa style từ parent và Button variant, hoạt động tốt.                                                                   |
