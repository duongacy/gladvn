# >Quá trình Refactor UI Components

Tiến trình audit và refactor các UI components theo chuẩn thiết kế mới (WCAG AAA/AA, Form Control Parity, AHA Principle, Linear Design Axiom).

## Tổng quan tiến độ

**Hoàn thành:** 23 / 56 components (~41%)
**Chưa hoàn thành:** 33 / 56 components (~59%)

---

## 🟢 Đã hoàn thành (Audited & Refactored)

### Form Controls (Đã chuẩn hoá Parity & Error Ring)

- [X] `input.tsx`
- [X] `textarea.tsx`
- [X] `select.tsx`
- [X] `native-select.tsx`
- [X] `checkbox.tsx`
- [X] `radio-group.tsx`
- [X] `switch.tsx`
- [X] `slider.tsx`
- [X] `input-otp.tsx`
- [X] `combobox.tsx`
- [X] `input-group.tsx`

### Actions

- [X] `button.tsx` (Đạt chuẩn màu tự động nhờ Token)

### Core/Utilities

- [X] `theme-provider.tsx` (Infrastructure, hỗ trợ light/dark mode explicit)

### Data Display

- [X] `avatar.tsx` (Kiệt tác CSS Delegated Logic)
- [X] `badge.tsx` (Loại bỏ aria-invalid & 3 sizes, đồng bộ color/variant)
- [X] `accordion.tsx`

### Feedback & Loading

- [X] `alert.tsx`
- [X] `progress.tsx`
- [X] `skeleton.tsx`
- [X] `spinner.tsx`
- [X] `sonner.tsx`

---

## 🔴 Chưa hoàn thành (Chưa audit)

### Form Controls

- [X] `label.tsx`
- [X] `field.tsx`

### Actions & Toggles

- [ ] `toggle.tsx`
- [ ] `toggle-group.tsx`
- [ ] `button-group.tsx`

### Overlays (Modals & Popovers)

- [ ] `dialog.tsx`
- [ ] `alert-dialog.tsx`
- [ ] `sheet.tsx`
- [ ] `drawer.tsx`
- [ ] `popover.tsx`
- [ ] `hover-card.tsx`
- [ ] `tooltip.tsx`

### Menus & Pickers

- [ ] `dropdown-menu.tsx`
- [ ] `context-menu.tsx`
- [ ] `menubar.tsx`
- [ ] `command.tsx`
- [ ] `calendar.tsx`

### Data Display

- [ ] `card.tsx`
- [ ] `table.tsx`
- [ ] `collapsible.tsx`
- [ ] `carousel.tsx`
- [ ] `chart.tsx`

### Navigation

- [ ] `navigation-menu.tsx`
- [ ] `tabs.tsx`
- [ ] `breadcrumb.tsx`
- [ ] `pagination.tsx`

### Feedback & Loading

- [ ] `empty.tsx`

### Layout & Structure

- [ ] `sidebar.tsx`
- [ ] `scroll-area.tsx`
- [ ] `separator.tsx`
- [ ] `resizable.tsx`
- [ ] `aspect-ratio.tsx`

### Misc Utilities

- [ ] `direction.tsx`
- [ ] `item.tsx`
- [ ] `kbd.tsx`
