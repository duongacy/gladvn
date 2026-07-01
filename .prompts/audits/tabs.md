# Audit Prompt: Tabs

**Base rules:** Tuân thủ tuyệt đối `AUDIT_PROMPT.md` và `PARITY_CHEATSHEET.md`.

## 1. Global Best Practices & W3C APG (ARIA)

Tabs cho phép user chuyển đổi giữa các content panels mà không navigate away. BẮT BUỘC kiểm tra:

### A. Anatomy & WAI-ARIA Roles

- **Tab List (Container chứa các tab triggers):**
  - Phải có `role="tablist"`.
  - Phải có `aria-label` hoặc `aria-labelledby` mô tả nhóm tabs.
  - Nên có `aria-orientation`: `"horizontal"` (mặc định) hoặc `"vertical"`.
- **Tab (Trigger):**
  - Phải có `role="tab"`.
  - Tab đang active: `aria-selected="true"`.
  - Tab không active: `aria-selected="false"`.
  - Phải có `aria-controls` trỏ đến tabpanel ID tương ứng.
  - Tab disabled: `aria-disabled="true"`.
- **Tab Panel (Content):**
  - Phải có `role="tabpanel"`.
  - Phải có `aria-labelledby` trỏ đến tab trigger ID tương ứng.
  - Phải có `tabindex="0"` để panel có thể nhận focus khi Tab vào.
  - Panel không active: phải ẩn hoàn toàn (`hidden`, `display: none`, hoặc unmount) — KHÔNG chỉ visually hidden.

### B. Keyboard Navigation & Focus (Roving Tabindex)

- **Automatic Activation (Recommended):**
  - `Arrow Right` / `Arrow Down`: Di chuyển focus VÀ activate tab tiếp theo.
  - `Arrow Left` / `Arrow Up`: Di chuyển focus VÀ activate tab trước đó.
- **Manual Activation (Alternative):**
  - Arrow keys chỉ di chuyển focus, `Enter` / `Space` để activate.
- `Home`: Focus/activate tab đầu tiên.
- `End`: Focus/activate tab cuối cùng.
- `Tab`: Từ tablist, Tab di chuyển focus VÀO tabpanel đang active (KHÔNG di chuyển qua các tab khác). Từ tabpanel, Tab di chuyển đến focusable element tiếp theo trong DOM.
- **Roving Tabindex:** Chỉ tab đang active có `tabindex="0"`, tất cả tab khác có `tabindex="-1"`.
- **Wrap-around:** Arrow keys NÊN wrap around (từ tab cuối sang tab đầu và ngược lại).

### C. Standard API & Props

- `value` / `defaultValue` / `onValueChange`: Pattern Controlled & Uncontrolled.
- `orientation`: Horizontal/Vertical — ảnh hưởng arrow key behavior.
- `activationMode`: `"automatic"` (arrow key = activate) hoặc `"manual"` (arrow key = focus only).
- Composition: Root, List, Trigger, Content.

### D. WCAG 2.2 Success Criteria

- **1.3.1 Info and Relationships (A):** Tab-tabpanel relationship phải programmatic qua `aria-controls` + `aria-labelledby`.
- **2.1.1 Keyboard (A):** Full keyboard navigation (arrow keys, Home/End, Tab into panel).
- **2.4.3 Focus Order (A):** Tab → TabPanel flow phải logical.
- **2.4.7 Focus Visible (AA):** Focus ring trên tab đang focused.
- **4.1.2 Name, Role, Value (A):** Screen reader phải announce: role ("tab"), state ("selected"), position ("1 of 4").

## 2. sadcn "20 Commandments" Integration

- **CSS Delegated Logic (Rule #2):** Active tab indicator (underline, background) PHẢI dùng CSS (`data-[state=active]`). Tab panel show/hide dùng CSS hoặc conditional mount.
- **Form Control Parity (Rule #18):** Tab trigger focus ring dùng chung token: `focus-visible:ring-3 focus-visible:ring-ring/50`.
- **No Magic Number (Rule #4):** Tab height, indicator thickness, gap phải dùng tokens.
- **Zero-Prop Defaults (Rule #1):** `<Tabs>` mặc định horizontal, automatic activation, first tab active.
- **Anti-Ternary (Rule #19):** Active state rendering dùng CSS `data-[state=active]`, không ternary.

## 3. Nhiệm vụ của bạn (AI)

1. Đóng vai một W3C Auditor và Senior UI Architect.
2. Đọc và phân tích file source code `src/components/ui/tabs.tsx`.
3. Kiểm tra chéo, đặc biệt: **Roving Tabindex** (chỉ active tab `tabindex="0"`), **Tab → TabPanel focus flow** (Tab key vào panel, không qua các tab khác), **`aria-controls` + `aria-labelledby` wiring**, và **CSS active indicator**.
4. Cung cấp một báo cáo chi tiết. Nếu có vi phạm, bắt buộc phải đưa ra **Code Diff**.

### Kiểm tra Showcase (Bắt buộc)

1. Hãy tìm kiếm xem component này đã được render demo trong thư mục `src/dev/showcase/` chưa.
2. Nếu CHƯA CÓ, bạn BẮT BUỘC phải viết code tạo showcase.

---
