# Audit Prompt: Progress

**Base rules:** Tuân thủ tuyệt đối `AUDIT_TEMPLATE.md` và `docs/architecture/PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Progress hiển thị tiến trình hoàn thành của một task. Có thể là determinate (biết %) hoặc indeterminate (không biết khi nào xong). BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Progress Container:**
  - Phải có `role="progressbar"`.
  - Phải có `aria-valuenow`: Giá trị hiện tại (vd: 75).
  - Phải có `aria-valuemin`: Giá trị nhỏ nhất (thường 0).
  - Phải có `aria-valuemax`: Giá trị lớn nhất (thường 100).
  - Nên có `aria-valuetext`: Human-readable text (vd: "75% complete", "Uploading file 3 of 10").
  - Phải có `aria-label` hoặc `aria-labelledby` mô tả task (vd: "File upload progress").
- **Indeterminate State:**
  - Khi không biết progress: KHÔNG set `aria-valuenow` (bỏ trống).
  - `aria-valuetext="Loading..."` hoặc tương tự.
- **Track & Fill:**
  - Track (background) và Fill (bar) là visual — không cần role riêng.
- **Label/Percentage Text (nếu hiển thị):**
  - Text hiển thị % phải đồng bộ với `aria-valuenow`.
  - Nếu đã có text visible, xem xét `aria-hidden="true"` cho text và dùng `aria-valuetext` trên progressbar để tránh duplicate announcement.

### B. Keyboard Navigation & Focus

- Progress KHÔNG focusable — nó là display-only, không interactive.
- **Live Updates:**
  - Nếu progress updates liên tục (vd: upload): NÊN nằm trong `aria-live="polite"` region.
  - Announcement frequency nên throttled (không announce mỗi 1% — quá verbose). Announce ở milestones (25%, 50%, 75%, 100%) hoặc khi complete.

### C. Standard API & Props

- `value`: Current progress (0-100 hoặc null cho indeterminate).
- `max`: Maximum value.
- `getValueLabel`: Custom function tạo aria-valuetext.
- Composition: Progress, ProgressTrack, ProgressFill (hoặc ProgressIndicator).

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** `role="progressbar"` + aria-value attributes.
- **4.1.2 Name, Role, Value (A):** Screen reader phải announce: role ("progressbar"), name, current value.
- **4.1.3 Status Messages (AA):** Progress updates phải announce (live region).

## 2. gladcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Fill bar width PHẢI dùng CSS custom property (`--progress-value`) set qua inline style, KHÔNG re-render component cho visual update. Indeterminate animation dùng CSS `@keyframes`.
- **No Magic Number (Rule #4):** Track height, border-radius phải dùng tokens.
- **Zero-Prop Defaults (Rule #1):** `<Progress>` mặc định indeterminate (hoặc value=0).
- **Anti-Ternary (Rule #19):** Indeterminate vs determinate rendering dùng CSS `data-[state=indeterminate]`, không ternary.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/micro/progress.tsx`.
3. Kiểm tra chéo, đặc biệt: **`role="progressbar"` + aria-value*** attributes, **Indeterminate state** (không có aria-valuenow), **CSS fill bar** (custom property), và **Live region** cho updates.
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
