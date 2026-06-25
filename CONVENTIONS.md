# The Commandments of Frontend Engineering

Đây là "Hiến pháp" của bộ UI Library **sadcn**. Bất kỳ ai đóng góp hoặc sử dụng bộ thư viện này đều **BẮT BUỘC** phải đọc và tuân thủ tuyệt đối các nguyên tắc dưới đây. Không có ngoại lệ.

## PHẦN I: COMPONENT API & DEVELOPER UX (Triết lý thiết kế)

### 1. "Zero-Prop" Defaults (Nguyên tắc Không-cần-Prop)
Một component phải hoạt động hoàn hảo và trông đẹp mắt ngay cả khi không truyền bất kỳ prop nào: `<Button />`, `<Input />`.
* **Khắt khe:** Mọi state mặc định (size, variant, color) phải được định nghĩa rõ ràng. Cấm bắt developer khai báo những thứ hiển nhiên. Trải nghiệm của người dùng thư viện (Developer UX) là tối thượng.

### 2. CSS Delegated Logic (Chuyển giao logic cho CSS)
Nếu một hành vi có thể giải quyết bằng CSS, tuyệt đối **CẤM** dùng JavaScript.
* **Khắt khe:** Cấm dùng JS để tính toán kích thước, cấm truyền state từ React để đổi style nếu có thể dùng CSS Selectors (ví dụ: dùng `:has()`, `:focus-within`, `:empty`, `group-hover` thay vì tạo React state `isFocused`, `isHovered`). Giao diện sinh ra phải mỏng nhất có thể về mặt JS.

### 3. Strict Polymorphism (Đa hình triệt để - Không Prop-Drilling)
Khi muốn component bọc một thẻ HTML khác, **KHÔNG** đẻ thêm các prop dư thừa như `leftIcon`, `rightIcon`, `wrapperClass`.
* **Khắt khe:** Phải sử dụng pattern composition (Ví dụ: `asChild` của Radix hoặc `render={...}` của Base UI). Giao diện là DOM, hãy để developer viết DOM tự nhiên nhất có thể.

---

## PHẦN II: STYLING & DESIGN TOKENS (Triết lý Giao diện)

### 4. The "No Magic Number" Law (Đạo luật Không Số Ảo)
Cấm mọi hardcode kích thước, màu sắc không nằm trong Design System.
* **Khắt khe:** Bất kỳ giá trị `px`, `rem`, `hex color` nào nằm trần trụi trong mã nguồn component là một tội ác. Mọi thứ phải được map qua CSS Variables (vd: `var(--color-primary)`, `var(--radius-md)`). Tailwind utility được phép dùng NHƯNG cấu hình theme của Tailwind phải được bind 100% vào CSS variables để đảm bảo khả năng theming tuyệt đối ở runtime.

### 5. The "Linear Design" Axiom (Tiên đề Tuyến tính)
Cấu trúc biến thể (Variants) phải là một ma trận đối xứng hoàn hảo.
* **Khắt khe:** Không có ngoại lệ về mặt thị giác cho bất kỳ màu sắc nào. `Primary` có hover state làm giảm opacity xuống 85%, thì `Secondary` hay `Destructive` cũng PHẢI tuân theo đúng công thức toán học đó. Nếu một màu không thể tuân theo, thì màu đó đang bị config sai độ tương phản (contrast), phải sửa ở gốc (`tokens.css`), tuyệt đối không đắp patch CSS trong component.

### 6. Pixel-Perfect Focus & A11y (Ám ảnh về Accessibility)
Focus state không phải là tùy chọn, nó là bắt buộc pháp lý của Component.
* **Khắt khe:** Outline/Ring của mọi component tương tác được phải rõ ràng, tuân thủ Contrast Ratio tối thiểu 4.5:1, và không được làm lệch layout (layout shift) khi xuất hiện. Cấm tuyệt đối `outline: none` mà không có style thay thế.

---

## PHẦN III: TYPE SAFETY & ARCHITECTURE (Triết lý Kiến trúc)

### 7. Exhaustive Union Types (Type khép kín)
Mọi prop dạng chuỗi (strings) quy định giao diện phải là Union Types cố định.
* **Khắt khe:** Không bao giờ dùng `string` cho màu sắc hay size. Phải là `type Color = "primary" | "secondary" | ...`. Lợi dụng sức mạnh của TypeScript để ngăn chặn runtime error ngay khi developer gõ phím. Cấm lọt một type `string` hoặc `any` mơ hồ vào system.

### 8. Isolation of Application Logic (Cách ly logic nghiệp vụ)
Core UI Component không có khái niệm về "Nghiệp vụ" (Business Domain).
* **Khắt khe:** Component không được phép fetch API. Không được chứa formatters cụ thể của dự án (ví dụ: không có prop `isVipUser` trong Avatar, chỉ có `showBadge`). UI Library là những "cục gạch" thuần khiết, dự án mang về xây nhà thế nào là việc của họ.

---

## PHẦN IV: CODE HYGIENE (Bảo vệ tính toàn vẹn)

### 9. Immutable Core (Lõi bất biến)
Khi áp dụng library vào project, dev trong project **CẤM** sửa trực tiếp file source của library trừ khi update version mới.
* **Khắt khe:** Muốn đổi màu? Sửa `tokens.css`. Muốn đổi bo góc? Sửa biến `--radius`. Nếu một UI không thể đáp ứng, dev phải wrap component đó lại thành một component mới ở layer dự án, cấm việc thêm "chỉ 1 dòng if/else" vào thư viện gốc để thoả mãn 1 feature dị biệt.

### 10. "Readability is Maintainability" (Quy tắc người đọc)
Code không có comment để giải thích "Cái này LÀM GÌ", mà chỉ comment để giải thích "TẠI SAO lại làm thế này".
* **Khắt khe:** Cấm code theo kiểu "clever code" (viết 1 dòng cực kỳ phức tạp để tỏ ra nguy hiểm). Với những đoạn "cheat dơ" CSS thông minh (như cái `:has(>svg:only-child)`), PHẢI có 1 dòng comment ngắn giải thích ý đồ kiến trúc để người đến sau (dù là Junior) cũng không vô tình xóa mất.

### 11. Single Source of Truth for Defaults (Nguyên tắc Default Duy Nhất)
Giá trị mặc định (default) của component chỉ được phép khai báo ở ĐÚNG MỘT NƠI DUY NHẤT (thường là ở signature của function).
* **Khắt khe:** Tuyệt đối cấm pattern fallback dư thừa bên trong logic. Nếu đã khai báo `{ size = "md" }` ở parameters, thì bên trong code cấm tuyệt đối việc viết `size || "md"`. Nếu đã chắc chắn 100% nó có giá trị default từ đầu, thì phải tin tưởng vào nó. Việc lặp lại default value rải rác khắp nơi là nguyên nhân gây ra bug khi thiết kế bị thay đổi.

### 12. Native DOM Flow (Tuân thủ luồng DOM nguyên bản)
Component tuyệt đối không được tự ý thay đổi behavior hiển thị mặc định của thẻ HTML gốc nếu không có lý do thực sự đặc biệt.
* **Khắt khe:** Thẻ `<input>` hay `<button>` gốc vốn là `inline-block`, do đó CẤM ép cứng class `w-full` vào component lõi. Nếu developer cần full-width, họ sẽ tự truyền `className="w-full"` ở lớp ứng dụng. Việc component tự ý phình to ra sẽ phá vỡ layout và gây cực hình cho người dùng khi muốn nó nhỏ lại.

---

## PHẦN V: ADVANCED ARCHITECTURE (Kiến trúc Nâng cao)

### 13. "Macro Component" Law (Quy tắc 80/20)
Nếu một component thuộc dạng Composition (ghép nối nhiều phần nhỏ như Select, Dropdown, Table...) cần hơn 5 dòng code để render một trường hợp sử dụng cơ bản nhất, **BẮT BUỘC** phải cung cấp thêm một bản thể Monolithic (ví dụ: `MonoSelect`).
* **Khắt khe:** Bản Monolithic phải tái sử dụng 100% các thành phần của bản Composition, không được tự ý viết lại logic render hay định nghĩa lại CSS/Variants. Nó chỉ đóng vai trò là một "vỏ bọc" (wrapper).

### 14. Flat Data First (Dữ liệu Phẳng là Chân ái)
Khi thiết kế Props nhận vào data dạng danh sách (options, tree, menu), **LUÔN LUÔN** ưu tiên cấu trúc mảng phẳng (`Array<T>`) ở API public.
* **Khắt khe:** Nếu cần chia nhóm, hãy thêm field `group?: string`. Tuyệt đối tránh ép user truyền nested array (ví dụ: `options` chứa mảng `options` con) trừ trường hợp dữ liệu đệ quy sâu (như Folder Tree). Component sẽ tự chịu trách nhiệm parse mảng phẳng thành cây lúc render.

### 15. The Portal Tunneling Rule (Luật Bọc Cổng)
Bất cứ khi nào sử dụng `Portal` (render DOM văng ra khỏi thẻ cha hiện tại, vd: Popover, Select, Dialog), **BẮT BUỘC** phải bọc nội dung bên trong Portal đó bằng `<ThemeWrapper>` (hoặc Context Provider tương đương).
* **Khắt khe:** Portal chỉ được phép cắt đứt chuỗi DOM (để tránh lỗi layout), tuyệt đối không được phép cắt đứt chuỗi State hay Context của React. Nếu không bọc lại, component văng ra ngoài sẽ mất theme cục bộ.

### 16. Local Theme Isolation (Cách ly Theme Cục bộ)
Mọi CSS Token không được phép giả định nó luôn nằm ở thẻ `:root` hoặc `<html>`. Trạng thái theme phải có khả năng hoạt động cục bộ (local).
* **Khắt khe:** Component đổi theme (`ThemeProvider`) không được can thiệp vào `<html>` trừ khi nó được truyền prop `isRoot={true}`. CSS Variables phải luôn được khai báo thành khối tường minh (`.light { ... }`, `.dark { ... }`) để có thể tái thiết lập (re-declare) ở bất kỳ đâu trên cây DOM bằng `display: contents`.

### 17. The "AHA" Principle (Chống trừu tượng hoá vội vã - Avoid Hasty Abstractions)
Sự lặp lại (Duplication) rẻ hơn rất nhiều so với sự trừu tượng hóa sai lầm (Wrong Abstraction).
* **Khắt khe:** **TUYỆT ĐỐI CẤM** việc gom nhóm các utility class dài ngoằng (như animation class của Popup, Dropdown) thành một CSS class dùng chung (`@apply popup-animation`) chỉ vì lý do "nhìn cho gọn" hoặc "tránh lặp code". 
* **Lý do:** Việc viết tường minh (inline) đảm bảo tính **minh bạch** (nhìn vào JSX là biết component làm gì) và tính **độc lập** (sửa animation của Select sẽ không làm hư Popover hay Tooltip). UI Component phải ưu tiên WET (Write Everything Twice) hơn là DRY (Don't Repeat Yourself) để chống lại hiệu ứng cánh bướm khi scale project.

### 18. Form Control Parity (Sự đồng bộ tuyệt đối của Form)
Các component dùng để nhập liệu (Form Controls) phải chia sẻ chung một "ngôn ngữ hình thể" (kích thước, trạng thái focus, hover, disabled).
* **Khắt khe:** Một `Input`, `Select`, `NativeSelect`, `Combobox`, `Textarea` hoặc `DatePicker` khi đặt cạnh nhau phải thẳng hàng tuyệt đối từng pixel.
* **Quy tắc:**
  - Cùng chung class `h-8` (size md) hoặc `h-7` (size sm).
  - Cùng chung mã màu border, background (cho cả Light/Dark mode).
  - Cùng chung hiệu ứng focus (`focus-visible:ring-3`).
  - Nếu sửa trạng thái `disabled:opacity-50` ở Input, bắt buộc phải đối chiếu và sửa tương tự ở Select và Combobox. Tính "tuyến tính" này không được phép đứt gãy.
