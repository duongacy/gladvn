# Audit Prompt: Direction

**Base rules:** Tuân thủ tuyệt đối `AUDIT_TEMPLATE.md` và `docs/architecture/PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Direction Provider quản lý text direction (LTR/RTL) cho internationalization. Không có W3C APG pattern riêng nhưng critical cho accessibility. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **`dir` Attribute:**
  - Direction PHẢI được set thông qua HTML `dir` attribute (`dir="ltr"` hoặc `dir="rtl"`) trên root element hoặc container.
  - KHÔNG chỉ dùng CSS `direction: rtl` — screen reader và browser form controls phụ thuộc vào HTML `dir` attribute.
- **`lang` Attribute:**
  - Nên đi kèm `lang` attribute phù hợp (vd: `lang="ar"` cho Arabic, `lang="he"` cho Hebrew).
- **Logical Properties:**
  - Component library PHẢI dùng CSS logical properties (`margin-inline-start`, `padding-inline-end`, `inset-inline-start`) thay vì physical properties (`margin-left`, `padding-right`) để tự động adapt RTL.
  - Icons (chevrons, arrows) phải flip trong RTL.

### B. Keyboard Navigation & Focus

- Arrow key direction phải tôn trọng `dir`:
  - LTR: `Arrow Right` = next, `Arrow Left` = previous.
  - RTL: `Arrow Right` = previous, `Arrow Left` = next.
  - Component library primitives (Radix, Base UI) thường handle này automatically nếu `dir` attribute đúng.

### C. Standard API & Props

- `dir`: "ltr" | "rtl" | "auto".
- Provider component: Cung cấp direction context cho children.

### D. WCAG 2.2 Success Criteria

- **1.3.2 Meaningful Sequence (A):** Reading order phải đúng trong RTL (right-to-left).
- **1.4.12 Text Spacing (AA):** Text spacing/alignment phải adapt RTL.
- **3.1.1 Language of Page (A):** `lang` attribute phải đúng.
- **3.1.2 Language of Parts (AA):** Parts trong ngôn ngữ khác phải có `lang` riêng.

## 2. gladcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** RTL layout PHẢI dùng CSS logical properties, KHÔNG dùng JS class toggle.
- **Local Theme Isolation (Rule #16):** Direction phải hoạt động locally — sub-tree có thể override direction.
- **Readability (Rule #10):** RTL overrides phải có comment giải thích.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/micro/direction.tsx`.
3. Kiểm tra chéo, đặc biệt: **HTML `dir` attribute** (không chỉ CSS direction), **CSS logical properties** usage trong library, **Arrow key direction** adaptation, và **Context propagation**.
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
