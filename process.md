# >Quá trình Refactor UI Components

Tiến trình audit và refactor các UI components theo chuẩn thiết kế mới (WCAG AAA/AA, Form Control Parity, AHA Principle, Linear Design Axiom).

## Tổng quan tiến độ

**Hoàn thành:** 25 / 56 components (~45%)
**Chưa hoàn thành:** 31 / 56 components (~55%)

---

## 🟢 Đã hoàn thành (Audited & Refactored)

### Form Controls (Đã chuẩn hoá Parity & Error Ring)

- [x] `input.tsx`
- [x] `textarea.tsx`
- [x] `select.tsx`
- [x] `native-select.tsx`
- [x] `checkbox.tsx`
- [x] `radio-group.tsx`
- [x] `switch.tsx`
- [x] `slider.tsx`
- [x] `input-otp.tsx`
- [x] `combobox.tsx`
- [x] `input-group.tsx`
- [x] `label.tsx`
- [x] `field.tsx`

### Actions & Toggles

- [x] `button.tsx` (Đạt chuẩn màu tự động nhờ Token)
- [x] `toggle.tsx`
- [x] `button-group.tsx`

### Core/Utilities

- [x] `theme-provider.tsx` (Infrastructure, hỗ trợ light/dark mode explicit)

### Data Display

- [x] `avatar.tsx` (Kiệt tác CSS Delegated Logic)
- [x] `badge.tsx` (Loại bỏ aria-invalid & 3 sizes, đồng bộ color/variant)
- [x] `accordion.tsx`

### Feedback & Loading

- [x] `alert.tsx`
- [x] `progress.tsx`
- [x] `skeleton.tsx`
- [x] `spinner.tsx`
- [x] `sonner.tsx`

---

## 🔴 Chưa hoàn thành (Chưa audit)

### Form Controls

### Actions & Toggles

- [ ] `toggle-group.tsx`

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
