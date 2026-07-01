# Audit Prompt: Avatar

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Avatar hiển thị hình đại diện của user/entity. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Image:**
  - `<img>` phải có `alt` text mô tả (vd: `alt="John Doe's avatar"` hoặc `alt="User profile picture"`).
  - Nếu avatar purely decorative (cạnh tên user đã hiển thị): `alt=""`.
- **Fallback (khi image fail hoặc chưa load):**
  - Fallback content (initials, icon) phải accessible: screen reader phải đọc được fallback text.
  - Nếu dùng initials: phải có `aria-label` hoặc `aria-labelledby` trên container mô tả đầy đủ tên.
  - Fallback icon: `aria-hidden="true"` nếu có aria-label trên container.
- **Loading State:**
  - Khi image đang load: skeleton/placeholder.
  - Phải KHÔNG gây layout shift khi image load xong.
- **Avatar Group (nếu có):**
  - Group nên có `role="group"` + `aria-label` (vd: "Team members").
  - Overflow count ("+3 more") phải accessible.

### B. Keyboard Navigation & Focus

- Avatar bản thân KHÔNG focusable trừ khi clickable (link to profile).
- Clickable avatar: phải keyboard-accessible, có focus ring.

### C. Standard API & Props

- Composition: Avatar, AvatarImage, AvatarFallback.
- `src` / `alt`: Image source and alt text.
- `onLoadingStatusChange`: Callback for image load state.
- `delayMs`: Delay trước khi show fallback (avoid flash).

### D. WCAG 2.2 Success Criteria

- **1.1.1 Non-text Content (A):** Image phải có alt text (hoặc alt="" nếu decorative).
- **1.4.11 Non-text Contrast (AA):** Avatar border/outline contrast (nếu có).

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Fallback visibility dùng CSS (`:not([src])`, hoặc `data-[state=loaded]`).
- **No Magic Number (Rule #4):** Avatar sizes phải dùng tokens.
- **Zero-Prop Defaults (Rule #1):** `<Avatar>` mặc định kích thước hợp lý.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/avatar.tsx`.
3. Kiểm tra chéo, đặc biệt: **Image alt text** support, **Fallback accessibility** (initials có aria-label không?), và **Layout shift** (image load).
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
