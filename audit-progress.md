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
- [x] `input.tsx` / `textarea.tsx`
- [x] `select.tsx`
- [ ] `combobox.tsx`
- [x] `checkbox.tsx`
- [ ] `switch.tsx` / `radio-group.tsx`

**2. Nhóm Navigation & Layout**
- [ ] `sidebar.tsx`
- [ ] `navigation-menu.tsx`
- [ ] `tabs.tsx`
- [x] `card.tsx`

**3. Nhóm Overlays & Modals**
- [x] `dialog.tsx` / `alert-dialog.tsx`
- [ ] `sheet.tsx` / `drawer.tsx`
- [ ] `dropdown-menu.tsx` / `popover.tsx`

**4. Nhóm Data Display & Feedback**
- [ ] `table.tsx`
- [ ] `sonner.tsx`
- [ ] `tooltip.tsx`

---

## 🟢 Đã Audit (A -> C)

- [x] `accordion.tsx`
- [x] `alert-dialog.tsx`
- [x] `alert.tsx`
- [x] `aspect-ratio.tsx`
- [x] `avatar.tsx`
- [x] `badge.tsx`
- [x] `breadcrumb.tsx`
- [x] `button.tsx`
- [x] `card.tsx`
- [x] `carousel.tsx`
- [x] `checkbox.tsx`
- [x] `collapsible.tsx`
- [x] `dialog.tsx`
- [x] `input.tsx`
- [x] `textarea.tsx`

---

## ⚠️ Đang xử lý / Tạm gác

- [ ] `calendar.tsx` *(Blank page bug khi render, đang tạm revert)*
- [ ] `combobox.tsx` *(Tạm gác chờ review lại MonoSelect sau khi fix các component liên quan)*

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
- [ ] `select.tsx`
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
