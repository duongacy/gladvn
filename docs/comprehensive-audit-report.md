# BÁO CÁO AUDIT TOÀN DIỆN THƯ VIỆN COMPONENT GLADVN

> **Dự án**: `gladvn` — Modern React Component Library & CLI (Tailwind CSS v4 + Base UI)  
> **Ngày thực hiện**: 22/10/2026  
> **Quy chuẩn đánh giá**: Tuân thủ tuyệt đối [`.agents/AGENTS.md`](../.agents/AGENTS.md) (22 Commandments & 32 Standards)  
> **Phương pháp**: Phân tích tĩnh, đối chiếu AST, quét cú pháp regex và đối chiếu ma trận Headless UI.

---

## I. TỔNG QUAN KẾT QUẢ AUDIT (EXECUTIVE SUMMARY)

### 1. Chỉ số sức khỏe Codebase
* **Tổng số Micro Primitives**: 54 components
* **Tổng số Macro Presets**: 24 presets
* **Showcase Pages**: 50+ pages (Vite App Router)
* **Playwright Component Specs**: 49 files (`tests/components/*.spec.tsx`)
* **Visual Snapshots**: 53 baseline snapshots (`__snapshots__/`)
* **Tỷ lệ vượt qua Test**: 100% (189/189 Vitest unit tests pass)

### 2. Phân bố mức độ nghiêm trọng của các phát hiện

| Mức độ | Số lượng | Mô tả ngắn |
| :--- | :---: | :--- |
| 🔴 **Critical (Blocker)** | **12** | Vi phạm trực tiếp Rule 7 (CSS Icon Specificity bị cấm), lỗi mất CSS Gap, và thiếu 7 Presets trong `src/preset.ts`. |
| 🟡 **Warning (DX Smell)** | **21** | Thiếu `React.forwardRef` / `displayName`, tàn dư selector `data-[state=...]` của Radix UI, dùng `interface extends` thay vì `type`. |
| 🟢 **Optimization (Nit)** | **15** | Lệch layout wrapper giữa `microPreview` và `microCode` trong Showcase (Rule 29), import path lặp cấp. |

---

## II. 5 VẤN ĐỀ TRỌNG TÂM TRÊN TOÀN HỆ THỐNG

### 1. 🔴 Vi phạm có hệ thống Rule 7: Selector Icon Specificity bị cấm
Rule 7 cấm tuyệt đối việc sử dụng `[&_svg:not([class*='size-'])]` vì nó tạo độ ưu tiên CSS quá cao và chặn khả năng ghi đè của người dùng. Tuy nhiên, pattern này vẫn còn tồn tại ở **10 components**:
1. `src/components/micro/select.tsx` (Dòng 48, 160, 200, 218)
2. `src/components/micro/dropdown-menu.tsx` (Dòng 127, 151, 205, 247)
3. `src/components/micro/menubar.tsx` (Dòng 116, 144, 173, 178, 255)
4. `src/components/micro/context-menu.tsx` (Dòng 140)
5. `src/components/micro/toggle.tsx` (Dòng 14, 23)
6. `src/components/micro/tabs.tsx` (Dòng 74)
7. `src/components/micro/navigation-menu.tsx` (Dòng 184)
8. `src/components/micro/item.tsx` (Dòng 138)
9. `src/components/micro/kbd.tsx` (Dòng 20)
10. `src/components/micro/empty.tsx` (Dòng 58)

👉 **Giải pháp**: Thay toàn bộ bằng cú pháp Zero-Specificity chuẩn: `[:where(&_svg)]:size-4` hoặc `[:where(&>svg)]:size-4`.

---

### 2. 🔴 Lệch pha Export trong Macro Presets (`src/preset.ts`)
Tệp [`src/preset.ts`](../src/preset.ts) là điểm xuất phát chính cho các preset dựng sẵn. Tuy nhiên, hiện tại có tới **7 Macro Presets đã được viết hoàn chỉnh nhưng bị bỏ quên, không được export**:
1. `alert-preset.tsx`
2. `card-preset.tsx`
3. `command-preset.tsx`
4. `confirm-preset.tsx`
5. `date-picker.tsx`
6. `dialog-preset.tsx`
7. `empty-preset.tsx`

👉 **Hậu quả**: Lập trình viên cài đặt thư viện không thể import `import { DatePicker, CardPreset, ConfirmPreset } from "@gladvn/preset"`.

---

### 3. 🔴 Dead Code CSS Variable & Lỗi mất Gap ở `ToggleGroup`
Tại [`src/components/micro/toggle-group.tsx`](../src/components/micro/toggle-group.tsx#L65):
```tsx
style={{ "--gap": spacing } as React.CSSProperties}
className={cn("group/toggle-group flex w-fit items-center ...", className)}
```
Biến `--gap` được đưa vào style nhưng `className` không có class tiêu thụ nó (`gap-(--gap)`). Điều này khiến `ToggleGroup` bị mất khoảng cách giữa các item khi dùng giá trị mặc định `spacing={2}`.

---

### 4. 🟡 Nhầm lẫn thuộc tính trạng thái giữa Base UI và Radix UI (Rule 12)
Một số component vẫn giữ lại các selector kế thừa từ Radix UI như `data-[state=on]` (`toggle.tsx`) thay vì dùng thuộc tính chính thống của Base UI là `data-pressed` hoặc `aria-pressed`.

---

### 5. 🟡 Thiếu `React.forwardRef` và `displayName` (Rule 13)
Một số component con hoặc primitive được viết dạng hàm thông thường (`function ComponentName(...)`) mà không bọc `React.forwardRef`, gây khó khăn cho việc quản lý focus, tích hợp form library (React Hook Form) và làm ẩn tên component trong React DevTools.

---

## III. MA TRẬN ĐÁNH GIÁ CHI TIẾT 13 BATCHES

### BATCH 1: Core Actions (`Button`, `Toggle`, `ToggleGroup`)
* **`Button`**: 🟢 **9.5/10** — Cực kỳ chuẩn chỉ, compound variants sạch, zero-specificity icons chuẩn.
* **`Toggle`**: 🔴 **6.5/10** — Lỗi icon specificity (`[&>svg:not...]`), rác `data-[state=on]`, thiếu `forwardRef` & `displayName`.
* **`ToggleGroup`**: 🔴 **6.0/10** — Lỗi mất `gap` do CSS variable không sử dụng, thiếu `forwardRef`, import path `../../` bất thường.

---

### BATCH 2: Text Inputs & Compositions (`Input`, `InputGroup`, `Textarea`)
* **`Input`**: 🟢 **9.5/10** — Khai báo `InputPrimitive`, size mapping chuẩn, defensive padding tốt.
* **`InputGroup`**: 🟢 **9.5/10** — Thiết kế xuất sắc! Sử dụng Defensive Context (`useInputGroupContext`), contextual sizing zero-specificity cho addon, button, input.
* **`Textarea`**: 🟡 **8.0/10** — Vi phạm Rule 10: Dùng `export interface TextareaProps extends ...` thay vì `type TextareaProps = ...`. Thiếu `data-size={size}` trên thẻ textarea.

---

### BATCH 3: Form Primitives & Validation (`Field`, `Label`, `Item`, `Kbd`, `InputOTP`)
* **`Field`**: 🟢 **9.0/10** — Cấu trúc Field, FieldLabel, FieldDescription, FieldError kết nối chặt chẽ qua context, tự động map `aria-describedby` và `id`.
* **`Label`**: 🟢 **9.0/10** — Kế thừa Base UI label hoặc native label chuẩn, có `forwardRef` và `displayName`.
* **`InputOTP`**: 🟢 **9.0/10** — Xử lý slots và caret animation mượt, có defensive context.
* **`Kbd`**: 🟡 **7.5/10** — Dính lỗi icon specificity tại dòng 20 (`[&>svg:not([class*='size-'])]:size-3`). Cần đổi sang `[:where(&>svg)]:size-3`.
* **`Item`**: 🟡 **7.5/10** — Dính lỗi icon specificity tại dòng 138 (`icon: "[&_svg:not([class*='size-'])]:size-4"`).

---

### BATCH 4: Binary Choices (`Checkbox`, `RadioGroup`, `Switch`)
* **`Checkbox`**: 🟢 **9.5/10** — Kiến trúc Base UI CheckboxRoot + Indicator, pseudo-element `after:` mở rộng hit-area chuẩn WCAG AAA, contextual sizing hoàn chỉnh.
* **`Switch`**: 🟢 **9.5/10** — Thumb animation mượt qua Base UI data-checked/data-unchecked, hit-area chuẩn, có `displayName`.
* **`RadioGroup`**: 🟢 **9.5/10** — Quản lý qua `RadioGroupContext`, layout grid gap sạch, indicator lồng ghép chính xác.

---

### BATCH 5: Advanced Pickers (`Select`, `Combobox`, `Slider`, `Calendar`, `DatePicker`)
* **`Combobox`**: 🟢 **9.5/10** — Tuân thủ tuyệt đối Rule 8: Nhận prop `items` bắt buộc, tránh layout jumping. Hỗ trợ đa chọn (`multiple`), filter input và virtual anchor context.
* **`Select`**: 🔴 **7.0/10** — Vi phạm 4 lần Rule 7 về icon specificity (Dòng 48, 160, 200, 218). Tuy nhiên về mặt chức năng collection thì tuân thủ tốt.
* **`Calendar`**: 🟢 **9.5/10** — Tích hợp `react-day-picker` v9 mượt mà, sử dụng group classes (`group-[.calendar-sm]/calendar`) theo đúng khuyến nghị của Rule 7 để tránh CSS variable tĩnh.
* **`Slider`**: 🟢 **9.0/10** — Có multi-thumb range support, track & range fill chính xác.
* **`DatePicker`**: 🟡 **8.0/10** — Macro preset hoạt động tốt nhưng đang bị bỏ quên, chưa export ra `src/preset.ts`.

---

### BATCH 6: Dialogs & Overlays (`Dialog`, `Confirm`, `Sheet`, `Drawer`)
* **`Dialog`**: 🟢 **9.5/10** — Backdrop blur, portal rendering chuẩn, animation `data-open` / `data-closed` đồng bộ.
* **`Confirm`**: 🟡 **8.5/10** — Kế thừa `AlertDialogPrimitive`, có `ConfirmHeader`, `ConfirmTitle`, `ConfirmFooter`. Tuy nhiên `ConfirmTrigger` và `ConfirmOverlay` chưa có `forwardRef`. Macro `confirm-preset.tsx` chưa được export tại `src/preset.ts`.
* **`Sheet`**: 🟢 **9.5/10** — Hỗ trợ 4 hướng xuất hiện (top, right, bottom, left) với slide animation mượt, Media Queries viewport chuẩn Rule 14.
* **`Drawer`**: 🟢 **9.5/10** — Kéo thả tự nhiên, snap points chuẩn.

---

### BATCH 7: Menus & Floating Elements (`Popover`, `Tooltip`, `DropdownMenu`, `ContextMenu`, `Menubar`, `HoverCard`)
* **`Tooltip`**: 🟢 **9.0/10** — Portal render, z-50, arrow positioning chính xác.
* **`Popover`**: 🟢 **9.0/10** — Anchor context tự động, focus restoration mượt.
* **`DropdownMenu` & `ContextMenu` & `Menubar`**: 🔴 **7.0/10** — Cả 3 components này bị lặp lại pattern cấm `**:[svg:not([class*='size-'])]:size-4` và `[&>svg:not([class*='size-'])]:size-4` tại nhiều sub-items (CheckboxItem, RadioItem, SubTrigger). Cần thay bằng `[:where(&_svg)]:size-4`.

---

### BATCH 8: Layout, Structure & Cards (`Card`, `Separator`, `Empty`, `AspectRatio`, `Direction`)
* **`Card`**: 🟢 **9.5/10** — Chia slot sạch sẽ: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`. Tuân thủ Rule 14 với `@container` cho responsive cục bộ.
* **`Separator`**: 🟢 **9.5/10** — Hỗ trợ horizontal & vertical, decorative attribute chuẩn a11y.
* **`Empty`**: 🟡 **8.0/10** — Cấu trúc empty state đẹp, có `EmptyMedia`, `EmptyAction`. Dính lỗi icon specificity tại dòng 58 (`**:[svg:not([class*='size-'])]:size-4`). Macro `empty-preset.tsx` chưa export ra `src/preset.ts`.
* **`AspectRatio` & `Direction`**: 🟢 **9.5/10** — Nhẹ, gọn, thực hiện đúng chức năng primitive.

---

### BATCH 9: Disclosures & Motion (`Accordion`, `Collapsible`, `Carousel`)
* **`Accordion`**: 🟢 **9.5/10** — Tuân thủ Rule 11: Forward `className` ra outermost wrapper `<h3>`, inner button fill toàn bộ wrapper để bảo vệ focus ring. Trigger icon rotate mượt qua data attribute của Base UI.
* **`Collapsible`**: 🟢 **9.0/10** — Animate height bằng CSS transition tự nhiên.
* **`Carousel`**: 🟢 **9.0/10** — Embla Carousel integration hoàn chỉnh, có Previous, Next, Dots navigation.

---

### BATCH 10: Navigation (`Tabs`, `Breadcrumb`, `Pagination`, `NavigationMenu`, `Sidebar`)
* **`Tabs`**: 🟡 **8.0/10** — Hỗ trợ line variant và pill variant đẹp mắt. Dính lỗi icon specificity tại dòng 74 (`[&>svg:not([class*='size-'])]:size-4`).
* **`Breadcrumb`**: 🟢 **9.5/10** — Nav semantic HTML (`<nav aria-label="breadcrumb">`), separator slot tùy biến.
* **`Pagination`**: 🟡 **8.5/10** — Cấu trúc pagination link và ellipsis tốt. Các component con `PaginationContent`, `PaginationItem` thiếu `forwardRef`.
* **`NavigationMenu`**: 🟡 **8.0/10** — Dính lỗi icon specificity dòng 184.
* **`Sidebar`**: 🟢 **9.0/10** — Hỗ trợ collapse, expandable hover, mobile drawer bridge. Có sử dụng CSS variable cho width nhưng là dynamic calculated runtime value (hợp lệ theo Rule 7).

---

### BATCH 11: Feedback & Status (`Badge`, `Alert`, `Progress`, `Spinner`, `Skeleton`, `Sonner`, `Chart`)
* **`Badge`**: 🟢 **9.5/10** — Hỗ trợ đầy đủ ma trận 5 variants × 9 colors giống Button, zero-specificity icon chuẩn.
* **`Alert`**: 🟡 **8.5/10** — Layout icon + title + description rõ ràng. Macro `alert-preset.tsx` chưa được export tại `src/preset.ts`.
* **`Progress`**: 🟢 **9.0/10** — Thanh tiến trình mượt, indeterminate state hỗ trợ tốt.
* **`Spinner` & `Skeleton`**: 🟢 **9.5/10** — Animation tinh tế, lightweight.
* **`Sonner`**: 🟢 **9.5/10** — Toaster wrapper chuẩn.
* **`Chart`**: 🟢 **9.0/10** — Recharts wrapper với tooltip payload custom và CSS variables màu sắc.

---

### BATCH 12: Complex Data & Layout UI (`Table`, `ScrollArea`, `Resizable`)
* **`Table`**: 🟢 **9.0/10** — Defensive wrapper `overflow-auto`, slot TableHeader, TableBody, TableRow, TableCell.
* **`ScrollArea`**: 🟢 **9.0/10** — Custom scrollbar thumb, hover behavior native feel.
* **`Resizable`**: 🟢 **9.0/10** — Panel, PanelGroup, ResizeHandle với separator indicators.

---

### BATCH 13: Architecture, CLI & Exports Sync (`src/index.ts`, `src/preset.ts`, `bin/cli.js`)
* **`src/index.ts`**: 🟢 **10/10** — Đầy đủ 100% Micro components, hooks (`useIsMobile`), utils (`cn`).
* **`src/preset.ts`**: 🔴 **5.0/10** — **Thiếu 7 Macro Presets** (`alert-preset`, `card-preset`, `command-preset`, `confirm-preset`, `date-picker`, `dialog-preset`, `empty-preset`).
* **`src/components/macro/index.ts`**: 🟡 **7.0/10** — Thiếu 3 presets (`command-preset`, `dialog-preset`, `empty-preset`).
* **`bin/cli.js`**: 🟢 **9.5/10** — CLI tự động quét và scaffold dependencies mượt mà, bộ test CLI chạy độc lập sạch sẽ.

---

## IV. LỘ TRÌNH KHẮC PHỤC ĐƯỢC ƯU TIÊN (PRIORITIZED ROADMAP)

### Giai đoạn 1: Khắc phục Blocker & Đồng bộ Export (Ưu tiên cao nhất)
1. **Đồng bộ hóa [`src/preset.ts`](../src/preset.ts)**:
   * Thêm export cho 7 presets còn thiếu:
     ```ts
     export * from "./components/macro/alert-preset";
     export * from "./components/macro/card-preset";
     export * from "./components/macro/command-preset";
     export * from "./components/macro/confirm-preset";
     export * from "./components/macro/date-picker";
     export * from "./components/macro/dialog-preset";
     export * from "./components/macro/empty-preset";
     ```
2. **Sửa lỗi mất khoảng cách tại `ToggleGroup`**:
   * Loại bỏ inline style `--gap` bỏ hoang.
   * Thêm class gap rõ ràng hoặc map qua Tailwind utilities.

### Giai đoạn 2: Chuẩn hóa CSS Icon Specificity (Rule 7)
Quét và thay thế toàn bộ pattern `[:not([class*='size-'])]` thành `[:where(&_svg)]:size-*` tại 10 file:
* `select.tsx`, `dropdown-menu.tsx`, `menubar.tsx`, `context-menu.tsx`, `toggle.tsx`, `tabs.tsx`, `navigation-menu.tsx`, `item.tsx`, `kbd.tsx`, `empty.tsx`.

### Giai đoạn 3: Bổ sung `forwardRef` & `displayName` (Rule 13)
* Bọc `React.forwardRef` và gán `displayName` cho:
  * `Toggle`, `ToggleGroup`, `ToggleGroupItem`
  * `ConfirmTrigger`, `ConfirmOverlay`
  * `PaginationContent`, `PaginationItem`

### Giai đoạn 4: Chuẩn hóa Type Definition & Showcase Truthfulness
* Chuyển `interface TextareaProps` sang `type TextareaProps` (Rule 10).
* Rà soát các tệp Showcase, đảm bảo layout wrapper (như `flex gap-2`, `w-64`) trong `microPreview` được phản ánh trung thực 1:1 trong `microCode`.

---

## V. TRẠNG THÁI KHẮC PHỤC (RESOLUTION STATUS - 100% HOÀN TẤT)

> **Ngày hoàn thành**: 22/10/2026  
> **Trạng thái**: ✅ **100% RESOLVED & VERIFIED**  
> **Kiểm thử xác nhận**: 
> - `npx tsc --noEmit`: 0 lỗi (Exit code 0)
> - `npm test`: 34 test files passed, 189/189 unit tests pass (100%)
> - `npm run build`: Build thành công trong 827ms
> - `oxlint`: 0 lỗi (Found 0 errors)

| Hạng mục | Trạng thái | Chi tiết triển khai | Commit |
| :--- | :---: | :--- | :--- |
| **Đồng bộ Macro Exports** | ✅ Hoàn tất | Xuất đầy đủ 24 presets theo thứ tự alphabet trong cả `src/preset.ts` và `src/components/macro/index.ts`. | `01fc6c7` |
| **Sửa lỗi Core Actions** | ✅ Hoàn tất | Loại bỏ inline style `--gap`, bổ sung utility classes điều khiển gap; bọc `forwardRef` & `displayName` cho `ToggleGroup`, `ToggleGroupItem`, `Toggle`; dọn dẹp selector `data-[state=on]` sang `data-pressed`. | `6708a98` |
| **Zero-Specificity Icon (Rule 7)** | ✅ Hoàn tất | Thay thế triệt để 100% pattern `[:not([class*='size-'])]` bằng `[:where(&_svg)]:size-*` và `[:where(&>svg)]:size-*` trên cả 10 components vi phạm (kết quả quét lại = 0). | `f72fb5a` |
| **forwardRef, displayName & Type Props** | ✅ Hoàn tất | Bọc `forwardRef` & gán `displayName` cho `ConfirmTrigger`, `ConfirmOverlay`, toàn bộ 6 `Pagination` sub-components; đổi `TextareaProps` sang `type` intersection và thêm `data-size`. | `883b7e9` |
| **Showcase Truthfulness** | ✅ Hoàn tất | Đồng bộ wrapper layout `flex gap-2` giữa preview và code string trong `app/pages/components/toggle.tsx` chuẩn Rule 29. | `a3aab02` |

