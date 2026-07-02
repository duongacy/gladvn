# Audit Prompt: Skeleton

**Base rules:** Tuân thủ tuyệt đối `AUDIT_TEMPLATE.md` và `docs/architecture/PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Skeleton hiển thị loading placeholder thay thế content đang load. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Loading Region:**
  - Container chứa skeletons NÊN có `aria-busy="true"` khi đang loading.
  - Khi load xong, `aria-busy="false"` → screen reader re-read region.
- **Skeleton Element:**
  - Phải có `aria-hidden="true"` — skeleton là visual placeholder, screen reader KHÔNG nên đọc.
  - HOẶC container có `role="status"` với `aria-label="Loading..."` để announce loading state.
- **Screen Reader Announcement:**
  - Nên có visually-hidden text "Loading..." cho screen reader nếu skeleton thay thế meaningful content.
  - Text phải nằm trong `aria-live` region hoặc `role="status"`.
- **Motion:**
  - Skeleton pulse/shimmer animation NÊN tôn trọng `prefers-reduced-motion: reduce` — giảm hoặc tắt animation.

### B. Keyboard Navigation & Focus

- Skeleton KHÔNG focusable — nó là placeholder, không interactive.
- Focus KHÔNG nên nằm trên skeleton khi content đang load.

### C. Standard API & Props

- `className`: Width, height, shape customization.
- Phải hỗ trợ circular (avatar skeleton), rectangular (text skeleton), etc. qua className.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Loading state phải communicated qua `aria-busy`.
- **2.2.1 Timing Adjustable (A):** Skeleton không gây timing issue (nó ở cho đến khi content load).
- **2.3.1 Three Flashes (A):** Shimmer animation KHÔNG được flash quá 3 lần/giây.

## 2. gladcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Shimmer/pulse animation PHẢI dùng CSS animation. Respect `prefers-reduced-motion`.
- **No Magic Number (Rule #4):** Border-radius, height phải dùng tokens.
- **Zero-Prop Defaults (Rule #1):** `<Skeleton>` mặc định rectangular shape.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/micro/skeleton.tsx`.
3. Kiểm tra chéo, đặc biệt: **`aria-hidden`** (skeleton ẩn khỏi screen reader), **`prefers-reduced-motion`** respect, **Shimmer animation** CSS-only, và **`aria-busy`** pattern.
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
