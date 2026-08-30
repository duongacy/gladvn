# Architecture & Patterns

Tài liệu này giải thích kiến trúc tổ chức mã nguồn, phân tầng logic và cách các component được thiết kế bên trong Gladvn.

## 1. Phân Tầng Component (Micro & Macro)

Kiến trúc của Gladvn chia các components làm 2 lớp (layer) rõ rệt để tái sử dụng và kiểm soát trạng thái tốt hơn:

### Micro Components (`src/components/micro/`)
- **Đặc điểm:** Là các primitives (khối xây dựng cơ bản) mang tính thuần trình diễn (Presentational Components). 
- **Quy định:** Phải cực kỳ "ngu" (Dumb component). Tuyệt đối **không** chứa React State (`useState`), Side effects (`useEffect`), hay API calls.
- **Trách nhiệm:** Render giao diện, truyền các sự kiện (`onClick`, `onChange`), đóng gói HTML Semantics, xử lý Accessibility cơ bản, và cung cấp các UI Slots (thông qua `data-slot`).

### Macro Components (`src/components/macro/`)
- **Đặc điểm:** Là các Preset, composite components mang tính nghiệp vụ, đóng gói các trạng thái (Stateful) và logic phức tạp.
- **Quy định:** Không tự tạo ra các DOM elements thô sơ (`div`, `button` raw) nếu có thể, mà phải lắp ráp (compose) từ các Micro components. 
- **Trách nhiệm:** Quản lý State, Context, Form Validation, liên kết ARIA logic (`aria-describedby` với Error Messages), v.v.

---

## 2. Headless UI Integration

Dự án tích hợp các thư viện Headless UI hiện đại để xử lý logic tương tác phức tạp mà không bị phụ thuộc vào CSS/Styles:
- **Base UI:** Khung sườn chính cho các Form Controls, Tabs, Dialogs, Select, Checkbox, Slider, v.v. (Mang lại hiệu năng cao và ít rườm rà).
- **Radix UI:** Dùng cho một số overlay (chẳng hạn Dialog nếu có) hoặc các component Base UI chưa trưởng thành.
- **React-Resizable-Panels:** Dùng cho Resizable component.
- **Vaul:** Dùng cho Drawer component trên mobile.

> **Quy tắc Vàng:** Luôn ưu tiên dùng Data Attributes tự nhiên (như `data-[state=open]`, `data-panel-open`, `data-highlighted`) do Headless UI tự sinh ra để viết CSS (e.g. `data-disabled:opacity-50`). Không dùng ternary operations hoặc "chèn biến JS" (`className={isActive ? "bg-red" : ""}`) để đổi style.

---

## 3. Styling & CSS Architecture (Tailwind CSS v4)

Hệ thống sử dụng **Tailwind CSS v4** với một số nguyên tắc khắt khe để đảm bảo khả năng tùy biến khi User nạp code vào dự án của họ.

### 3.1 Cấm "Magic CSS"
- **Không dùng Deep Selectors tuỳ ý**: Không viết kiểu `[&_p]:text-sm` hay `group-has-[div>span]:bg-red` để đè style của phần tử con. Thay vào đó, gán `data-slot="part-name"` và CSS với `[&_[data-slot=part-name]]:text-sm`.
- **Ngoại lệ Icons**: Có thể dùng `[:where(&_svg)]:size-4` cho Icons để không phải gán `data-slot` liên tục trên mọi icon, nhưng phải dùng `:where` để độ ưu tiên CSS = 0 (dễ dàng override).

### 3.2 CSS Variables
- Hạn chế dùng CSS Variables tự do trong classes (như `w-(--cell-size)`).
- Chỉ được sử dụng CSS Variables khi Headless UI cung cấp (vd: `calc(var(--radix-accordion-content-height))`).
- Mọi file style tổng quát được lưu trong `src/styles/tokens.css` (Nơi duy nhất định nghĩa hệ thống màu HSL) và `src/styles/gladvn.css`. **Cả hai file này đều thuộc diện Đóng (Feature Freeze).**

---

## 4. Accessibility (a11y) - Trợ Năng

- **Interaction Lock**: Tất cả elements có state `disabled` BẮT BUỘC phải đi kèm class làm mờ (`opacity-50`) và khoá tương tác chuột (`pointer-events-none`).
- **Semantic HTML**: Component Card phải dùng `<h3>` cho Title và `<p>` cho Description.
- Bất kỳ icon trang trí (decorative) nào cũng phải có `aria-hidden="true"`.
- Liên kết ID rõ ràng giữa Input, Label, và Error Message.
