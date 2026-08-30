# Component Inventory

Thư viện hiện tại chứa hơn 50 Micro Components và hơn 15 Macro Components (Presets). Dưới đây là danh sách tổng hợp.

## Micro Components (Core Primitives)
Các thành phần cơ bản không chứa trạng thái nội bộ phức tạp, chuyên dùng để ghép nối.

- **Layout & Structure:**
  - `Card`, `Resizable`, `ScrollArea`, `Separator`, `AspectRatio`, `Collapsible`, `Direction`.
- **Navigation & Menus:**
  - `Tabs`, `Accordion`, `Breadcrumb`, `DropdownMenu`, `ContextMenu`, `Menubar`, `NavigationMenu`, `Pagination`, `Sidebar`.
- **Forms & Inputs:**
  - `Button`, `Input`, `Checkbox`, `RadioGroup`, `Select`, `Slider`, `Switch`, `Textarea`, `Toggle`, `ToggleGroup`, `InputGroup`, `InputOTP`, `Field`, `Label`, `Combobox`.
- **Feedback & Overlays:**
  - `Alert`, `Tooltip`, `Popover`, `Dialog`, `Sheet`, `Drawer`, `HoverCard`, `Progress`, `Skeleton`, `Spinner`, `Toast/Sonner`.
- **Display & Formatting:**
  - `Avatar`, `Badge`, `Carousel`, `Chart`, `Table`, `Kbd`, `Empty`.
- **Utility:**
  - `Command`, `Confirm`, `ThemeProvider`, `Item`.

## Macro Components (Presets)
Các thành phần đóng gói sẵn (Composite) bao gồm cả logic trạng thái và xử lý lỗi form validation.
- `AccordionPreset`
- `AlertPreset`
- `AvatarPreset`
- `BreadcrumbPreset`
- `CardPreset`
- `CarouselPreset`
- `CheckboxPreset`
- `ComboboxPreset`
- `CommandPreset`
- `ConfirmPreset`
- `DialogPreset`
- `EmptyPreset`
- `FieldPreset`
- `InputOTPPreset`
- `InputPreset`
- `PaginationPreset`
- `ProgressPreset`
- `RadioGroupPreset`
- `SelectPreset`
- `SliderPreset`
- `SwitchPreset`
- `TabsPreset`
- `TextareaPreset`

> *Lưu ý:* Quá trình Refactor (Review Component) hiện tại đang chạy tuần tự để chuẩn hoá lại toàn bộ các Micro Component ở trên đảm bảo tuân thủ "22 Nguyên tắc" trong thư mục `.agents/`.
