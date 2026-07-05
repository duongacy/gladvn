# Tiến độ Audit UI Components

Tiến trình pair-coding audit các UI components theo thứ tự bảng chữ cái (Alphabetical).

## Tổng quan tiến độ

**Đã Audit:** 12 components
**Đang xử lý / Bug:** 1 component (`calendar`)
**Chưa Audit:** 40 components

---

## 🎯 Ưu tiên Audit gấp (Baseline)

Danh sách các nhóm component cần ưu tiên hoàn thiện sớm nhất để dự án có thể đóng gói phiên bản baseline đưa vào ứng dụng thực tế:

**1. Nhóm Form & Data Entry (Ưu tiên số 1)**

- [X] `input.tsx` / `textarea.tsx`
- [X] `select.tsx`
- [ ] `combobox.tsx`
- [X] `checkbox.tsx`
- [x] `switch.tsx` / `radio-group.tsx`

**2. Nhóm Navigation & Layout**

- [ ] `sidebar.tsx`
- [ ] `navigation-menu.tsx`
- [ ] `tabs.tsx`
- [X] `card.tsx`

**3. Nhóm Overlays & Modals**

- [X] `dialog.tsx` / `alert-dialog.tsx`
- [ ] `sheet.tsx` / `drawer.tsx`
- [ ] `dropdown-menu.tsx` / `popover.tsx`

**4. Nhóm Data Display & Feedback**

- [ ] `table.tsx`
- [ ] `sonner.tsx`
- [ ] `tooltip.tsx`

---

## 🟢 Đã Audit (A -> C)

- [X] `accordion.tsx`
- [X] `alert-dialog.tsx`
- [X] `alert.tsx`
- [X] `aspect-ratio.tsx`
- [X] `avatar.tsx`
- [X] `badge.tsx`
- [X] `breadcrumb.tsx`
- [X] `button.tsx`
- [X] `card.tsx`
- [X] `carousel.tsx`
- [X] `checkbox.tsx`
- [X] `collapsible.tsx`
- [X] `dialog.tsx`
- [X] `input.tsx`
- [X] `textarea.tsx`

---

## ⚠️ Đang xử lý / Tạm gác

- [ ] `calendar.tsx` *(Blank page bug khi render, đang tạm revert)*
- [X] `combobox.tsx`

---

## 🔴 Chưa Audit (Từ C trở đi)

- [ ] `chart.tsx`
- [ ] `command.tsx`
- [ ] `context-menu.tsx`
- [ ] `direction.tsx`
- [ ] `drawer.tsx`
- [ ] `dropdown-menu.tsx`
- [ ] `empty.tsx`
- [ ] `field.tsx`
- [ ] `hover-card.tsx`
- [ ] `input-group.tsx`
- [ ] `input-otp.tsx`
- [ ] `item.tsx`
- [ ] `kbd.tsx`
- [ ] `label.tsx`
- [ ] `menubar.tsx`
- [ ] `navigation-menu.tsx`
- [ ] `pagination.tsx`
- [ ] `popover.tsx`
- [ ] `progress.tsx`
- [ ] `radio-group.tsx`
- [ ] `resizable.tsx`
- [ ] `scroll-area.tsx`
- [X] `select.tsx`
- [ ] `separator.tsx`
- [ ] `sheet.tsx`
- [ ] `sidebar.tsx`
- [ ] `skeleton.tsx`
- [ ] `slider.tsx`
- [ ] `sonner.tsx`
- [ ] `spinner.tsx`
- [ ] `switch.tsx`
- [ ] `table.tsx`
- [ ] `tabs.tsx`
- [ ] `theme-provider.tsx`
- [ ] `toggle-group.tsx`
- [ ] `toggle.tsx`
- [ ] `tooltip.tsx`
