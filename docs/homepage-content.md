# Homepage Content Extraction (Gladvn)

## Hero Section
- **Tagline:** Zero-Specificity · Defensive Context · AI-Native
- **Headline:** Copy code thì dễ. Giữ code không nát mới khó. (Copying code is easy. Keeping it clean is hard.)
- **Description:** Việc copy-paste code UI (như Shadcn) thường dẫn đến một hệ thống không thể bảo trì sau 6 tháng. gladvn giải quyết triệt để vấn đề này bằng một kiến trúc cực đoan: Phân tầng Micro/Macro, Zero-Specificity CSS, và Phòng thủ ngữ cảnh (Defensive Context).
- **Quote:** "Một thư viện UI không yêu cầu học thuộc Docs để đè CSS, và cảnh báo thẳng vào console nếu component bị ráp sai."

## Principles Section
- **Stats:** 
  - 01: 22 (Nguyên tắc)
  - 02: 0 (Specificity)
  - 03: 100% (Quyền điều khiển)
  - 04: ∞ (Khả năng mở rộng)
- **Title:** Kiến trúc tường minh. Làm chủ mọi giao diện.
- **Description:** Sự phức tạp thường biến các dự án thành những mớ bòng bong. gladvn định hình source code thành các tầng chuyên biệt, giúp bạn nắm rõ từng dòng code và tác động của nó. Tối đa khả năng mở rộng, giảm thiểu rủi ro.
- **Core Difference Title:** Sở hữu Code, Không sở hữu Nợ Kỹ Thuật
- **Core Difference Desc:** Mô hình copy-paste mang lại quyền sở hữu code, nhưng thường đi kèm các file khổng lồ và cấu trúc CSS lộn xộn. gladvn thay đổi hoàn toàn điều đó bằng việc cung cấp thư mục `src/components` được chuẩn hoá tuyệt đối bởi 22 nguyên tắc kiến trúc nghiêm ngặt (22 Commandments). Không Magic CSS. Không nội suy chuỗi. Minh bạch đến mức cực đoan.
- **Highlights:**
  - 01: Toàn bộ Component & Hook (Nằm gọn trong `src/components/micro/ & macro/`)
  - 02: CSS Token & Theme Config (OKLCH color tokens, dark/light mode — đẹp ngay từ đầu)
- **CLI Command:** `npx gladvn init`

## Architecture Section
- **Subtitle:** Tuỳ chỉnh theo từng tầng kiến trúc
- **Card 1 (Blocks):**
  - **Tag:** Lắp ghép linh hoạt
  - **Title:** Blocks — Sân chơi tự do
  - **Description:** Không ai ép bạn phải dùng 100% Micro hay Macro. Layout quen thuộc? Lấy Macro ra xài cho lẹ. Gặp thiết kế dị biệt? Mở Micro ra tự xếp hình. Code sao cho bản thân thấy sướng là được!
- **Card 2 (Macro):**
  - **Tag:** Vùng an toàn
  - **Title:** Macro — Khu vực an toàn
  - **Description:** Muốn tuỳ chỉnh? Bắt đầu từ đây nhé. Mỗi Macro là một khối độc lập — thêm footer cho DatePicker, giấu nút đóng của Dialog... Cứ thoải mái vọc, sửa cái nào chỉ ảnh hưởng cái đó thôi, chả lo "cháy nhà" hàng xóm.
- **Card 3 (Micro):**
  - **Tag:** Cẩn thận
  - **Title:** Micro — Lãnh địa cốt lõi
  - **Description:** Mọi thứ đều xây từ đây. Sửa cái padding của Button hay animation của Tooltip thì cả app sẽ ăn theo. Cân nhắc kỹ trước khi gõ phím nhé — "sai một ly đi một dặm" đấy!
- **Card 4 (CSS Tokens):**
  - **Tag:** Ảnh hưởng toàn cục
  - **Title:** CSS Token — Nút bấm hạt nhân
  - **Description:** Nơi quyết định màu sắc, font, độ bo góc. Đổi một biến ở đây là giao diện lột xác toàn tập. Rất đã khi cần thay áo mới (rebrand) — nhưng đừng dùng để vá lỗi vặt.

## Tragedies Section
- **Title:** 4 Cạm Bẫy Chết Người Của Component UI
- **Subtitle:** Những câu chuyện có thật từ chiến trường Frontend — và cách triết lý Gladvn giải cứu bạn.
- **Tragedy 1:** Quái Vật "God Component"
  - Đòi hỏi quá nhiều props (hasClearButton, clearIcon...). Thiếu 1 prop là phải viết CSS `!important`. 
  - Giải pháp Gladvn: Tầng Micro tách biệt, thích thì tự ráp Lego.
- **Tragedy 2:** Cạm Bẫy "State Bị Khóa"
  - Component ôm cứng `useState` bên trong, bên ngoài không thể can thiệp ép mở/đóng.
  - Giải pháp Gladvn: Micro component hoàn toàn "Ngu" (Dumb). State đẩy ra ngoài Headless hoặc Macro.
- **Tragedy 3:** Địa Ngục Boilerplate
  - Form 10 trường phải lặp lại cấu trúc HTML, dễ copy nhầm ID phá hỏng a11y.
  - Giải pháp Gladvn: Tầng Macro (`InputPreset`) tự sinh ID và ARIA.
- **Tragedy 4:** Hội Chứng "Cố Đấm Ăn Xôi" với Component
  - Gặp UI dị thường nhưng vẫn cố đè CSS lên component cũ, phá nát style gốc.
  - Lời khuyên Gladvn: Nếu quá dị, hãy mạnh dạn vứt component đi và code freestyle bằng HTML/Tailwind thuần.

## Features Section
- **Feature 1:** Luật chơi Micro/Macro (Micro chỉ là những mảnh Lego thuần túy. Macro mới là người chỉ huy layout.)
- **Feature 2:** Style Encapsulation (Style không rò rỉ ra ngoài. Tuỳ chỉnh dùng `data-slot`.)
- **Feature 3:** Variant × Color (Trục Variant và Trục Color độc lập. Kết hợp tự do.)
- **Feature 4:** Zero-prop Defaults (Không truyền prop nào vẫn chạy đẹp.)
- **Feature 5:** Headless + Style (Keyboard, focus, ARIA — Base UI lo hết. Micro chỉ thêm style.)
- **Feature 6:** CSS Tokens (Không hardcode màu hay spacing, mọi thứ tham chiếu token chung.)
- **Feature 7:** Polymorphism (Dùng `render` prop để đổi thẻ HTML root, ví dụ biến Button thành Link.)
- **Feature 8:** Stateless Primitive (Micro không chứa `useState`/`useEffect`. Càng đơn giản càng ít bug.)
- **Feature 9:** Accessibility (Semantic HTML, `aria-describedby`, tự ẩn icon khỏi screen reader.)
- **Feature 10:** Explicit State Contract (Component công khai trạng thái qua `data-attributes`.)
- **Feature 11:** 3-Layer Source Ownership (micro, macro, index.css phân tầng rõ rệt.)
- **Feature 12:** Pure Composition (Design component theo dạng lắp ghép Root, Trigger, Content thay vì truyền array data vào map().)

## Scoped Theme Tunnel
- Tooltip hay Dialog thường bị mất theme cục bộ (Dark/Light) khi nhảy ra ngoài DOM tree qua Portal.
- Nhờ Zero-Portal API, khả năng giữ theme đã được nhúng sẵn vào các `*Content`. Mọi thứ hoạt động trơn tru tự động, không cần import `ThemeWrapper`.
