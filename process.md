# Quá trình Refactor UI Components

Tiến trình audit và refactor các UI components theo chuẩn thiết kế mới (WCAG AAA/AA, Form Control Parity, AHA Principle, Linear Design Axiom).

## Tổng quan tiến độ
**Hoàn thành:** 15 / 56 components (~27%)
**Chưa hoàn thành:** 41 / 56 components (~73%)

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

### Actions
- [x] `button.tsx` (Đạt chuẩn màu tự động nhờ Token)

### Core/Utilities
- [x] `theme-provider.tsx` (Infrastructure, hỗ trợ light/dark mode explicit)

### Data Display
- [x] `avatar.tsx` (Kiệt tác CSS Delegated Logic)
- [x] `badge.tsx` (Loại bỏ aria-invalid & 3 sizes, đồng bộ color/variant)

---

## 🔴 Chưa hoàn thành (Chưa audit)

### Form Controls
- [ ] `label.tsx`
- [ ] `field.tsx`

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
- [ ] `accordion.tsx`
- [ ] `collapsible.tsx`
- [ ] `carousel.tsx`
- [ ] `chart.tsx`

### Navigation
- [ ] `navigation-menu.tsx`
- [ ] `tabs.tsx`
- [ ] `breadcrumb.tsx`
- [ ] `pagination.tsx`

### Feedback & Loading
- [ ] `alert.tsx`
- [ ] `progress.tsx`
- [ ] `skeleton.tsx`
- [ ] `spinner.tsx`
- [ ] `sonner.tsx`
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
