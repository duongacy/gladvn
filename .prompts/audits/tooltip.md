# Audit Prompt: Tooltip

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)
Tooltip hiển thị text mô tả bổ sung khi user hover hoặc focus vào trigger element. Tooltip KHÔNG chứa interactive content. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles
- **Trigger:**
  - Phải có `aria-describedby` trỏ đến tooltip content ID (khi tooltip visible).
  - KHÔNG dùng `aria-labelledby` cho tooltip — tooltip là supplementary description, KHÔNG phải primary label.
  - Trigger PHẢI focusable (button, link, hoặc element có `tabindex="0"`).
- **Tooltip Content:**
  - Phải có `role="tooltip"`.
  - Phải có unique `id` để trigger tham chiếu.
  - Tooltip NÊN chỉ chứa plain text hoặc simple formatting. KHÔNG chứa interactive elements (links, buttons) — đó là Popover.
- **Arrow (nếu có):**
  - Decorative — `aria-hidden="true"`.

### B. Keyboard Navigation & Focus
- **Hover:** Tooltip xuất hiện khi hover lên trigger, biến mất khi hover ra.
- **Focus:** Tooltip PHẢI xuất hiện khi trigger nhận focus (keyboard navigation) — đây là yêu cầu bắt buộc WCAG.
- `Esc`: Đóng tooltip mà không di chuyển focus.
- **Hover Delay:** Nên có slight delay (~200-300ms) trước khi hiện tooltip để tránh flickering.
- **Persistent:** Tooltip phải ở yên khi user hover lên tooltip content (WCAG 1.4.13).

### C. Standard API & Props
- `open` / `defaultOpen` / `onOpenChange`: Pattern Controlled & Uncontrolled.
- `delayDuration`: Delay trước khi hiện.
- `skipDelayDuration`: Delay giữa các tooltip (khi di chuyển từ tooltip này sang tooltip khác).
- `side` / `align`: Positioning.
- `sideOffset`: Distance from trigger.
- Composition: Provider, Root, Trigger, Portal, Content, Arrow.

### D. WCAG 2.2 Success Criteria
- **1.4.13 Content on Hover or Focus (AA):** CRITICAL cho Tooltip:
  - **Dismissable:** Tooltip PHẢI dismissable bằng Esc mà không di chuyển focus.
  - **Hoverable:** User phải hover được lên tooltip content mà nó không biến mất.
  - **Persistent:** Tooltip KHÔNG tự biến mất (trừ khi user trigger dismiss).
- **2.1.1 Keyboard (A):** Tooltip phải hiện khi focus trigger.
- **4.1.2 Name, Role, Value (A):** Screen reader phải announce tooltip content khi trigger focused.

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Appear/disappear animation PHẢI dùng CSS (`data-[state=delayed-open]`, `data-[state=closed]`).
- **Portal Tunneling (Rule #15):** Content trong Portal phải giữ theme context.
- **Z-Index (Rule #4):** Tooltip z-index phải cao nhất (trên cả dialog/popover) — thường z-[999].
- **No Magic Number (Rule #4):** Delay duration, offset, padding phải dùng tokens hoặc props.
- **Strict Polymorphism (Rule #3):** KHÔNG có prop `content` trên Trigger. Tooltip content phải qua composition (`<TooltipContent>`).

## 3. Nhiệm vụ của bạn (AI)
1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/tooltip.tsx`.
3. Kiểm tra chéo từng tiêu chí, đặc biệt: **WCAG 1.4.13** (dismissable + hoverable + persistent), **`role="tooltip"`**, **Focus-triggered display**, và **CSS animation**.
4. Cung cấp một báo cáo chi tiết về mức độ đạt chuẩn của component. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff** để hướng dẫn Refactor.

### Kiểm tra Showcase (Bắt buộc)
1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/sections/` chưa (vd: `interactive.tsx`, `display.tsx`, `forms.tsx`...).
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo ra một block showcase chuẩn chỉnh (sử dụng `<ShowcaseBlock>` hoặc `<SectionHeader>`) và chèn vào file phù hợp nhất.

---

## Audit Result — 2026-06-28

| Rule/Tiêu chí | Verdict | Note |
|---------------|---------|------|
| W3C APG / ARIA | ✅ | WCAG 1.4.13 (Dismissable, Hoverable, Persistent) được support chuẩn |
| 21. CSS Depth Boundary | ❌ | Vi phạm ở `TooltipContent` (L53): dùng `**:` (deep descendant) để style kbd. Cần đổi sang `[&>[data-slot=kbd]]` hoặc truyền class trực tiếp. |
| Form Control Parity | ✅ | Animation delay và offset đồng bộ với các overlay khác |
| Dark Mode Compliance | ✅ | Inverse color (`bg-foreground text-background`) xử lý tooltip rất nổi bật |

### Diffs cần fix
```diff
- "**:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm"
+ "[&>[data-slot=kbd]]:relative [&>[data-slot=kbd]]:isolate [&>[data-slot=kbd]]:z-50 [&>[data-slot=kbd]]:rounded-sm"
```
