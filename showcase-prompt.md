# Prompt Chuẩn (Template) Tạo Component Showcase

**Ngữ cảnh:** Bạn là một Frontend/UI Engineer đang xây dựng trang Showcase (tài liệu/demo) cho các Component của thư viện UI `sadcn`. Hãy sử dụng cấu trúc và format chuẩn dưới đây khi viết Showcase cho bất kỳ component nào.

**Quy tắc tổ chức Layout & Import:**
1. Mọi showcase đều phải sử dụng các Layout Component chuẩn từ `@/dev/components/showcase`, bao gồm: `SectionHeader`, `ExampleSection`, `ExampleGrid`, `ShowcaseDocs`.
2. File được bọc ngoài cùng bởi thẻ `<div className="space-y-10">`.

**Cấu trúc bắt buộc của một Showcase Component (Tuân thủ thứ tự sau):**

**1. Header (SectionHeader):**
Sử dụng `<SectionHeader title="Tên Component" description="Mô tả ngắn gọn về chức năng của component." />` nằm ở trên cùng.

**2. Tài liệu hướng dẫn (ShowcaseDocs):**
- Nằm ngay dưới `SectionHeader`, bọc trong `<ShowcaseDocs>`.
- Bao gồm các thẻ `<h3>` để phân chia nội dung.
- Bắt buộc có phần **"Khi nào nên dùng"**: Hướng dẫn use-case thực tế (nên dùng khi nào, không nên dùng khi nào).
- Phân loại **"Micro vs Macro"**: Giải thích sự khác biệt giữa phiên bản primitive/micro và phiên bản dùng sẵn preset/macro (nếu component đó có 2 bản).
- Phân biệt **"Controlled vs Uncontrolled"**: Giải thích chi tiết sự khác nhau và ngữ cảnh sử dụng cho các form state/UI state. Dùng thẻ `<ul>` với các thẻ `<li><b>Tên loại:</b>...</li>`.
- (Tuỳ chọn) Nếu component có các quy tắc đặc biệt, có thể thêm section H3 khác.

**3. Các phần Demo (ExampleSection & ExampleGrid):**
- Chia các chức năng thành các phần demo trực quan bằng `<ExampleSection label="..." description="...">`.
- **Nguyên tắc gom nhóm:** Đối với các ví dụ nhỏ, cùng một nhóm tính năng (như Variants, State, hay Single/Multiple), BẮT BUỘC dùng `<ExampleGrid columns={2}>` để đưa 2 `<ExampleSection>` nằm song song cạnh nhau giúp tiết kiệm không gian.
- Đối với các ví dụ lớn, dài hoặc cấu trúc lồng nhau (Nested), dùng độc lập `<ExampleSection fullWidth={true/false}>` (nếu cần chiếm toàn bộ chiều rộng).
- **Dữ liệu giả (Mock Data):** Khai báo các mock data, biến tĩnh (như danh sách items, options) ở ngoài component (trên cùng của file) để tái sử dụng giữa các `<ExampleSection>` nhằm giữ code bên trong gọn gàng.
- **Demo State (Controlled):** Bắt buộc phải có một `ExampleSection` mô phỏng cách Component hoạt động ở chế độ Controlled (ví dụ: dùng `useState` và hiển thị output raw state bên ngoài component bằng một khối code block `<code className="rounded bg-muted...">`).
- **State Edge Cases:** Phải có một `<ExampleSection>` thể hiện trạng thái `Disabled` (vô hiệu hoá một phần hoặc toàn bộ).
- **Ví dụ thực tế (Real-world):** Kết thúc showcase bằng một `<ExampleSection>` trình bày một Use Case hoàn chỉnh/thực tế có tính ứng dụng cao kết hợp dữ liệu đầy đủ.
- **Ngôn ngữ (Tiếng Việt):** BẮT BUỘC sử dụng Tiếng Việt cho toàn bộ nội dung text hiển thị trên UI (bao gồm tiêu đề, mô tả của ExampleSection, thẻ mô tả, và cả dữ liệu giả/dummy text bên trong component).

**Mục tiêu cuối cùng:** Code phải sạch, có tính hướng dẫn cao, UI hiển thị chuyên nghiệp và đồng bộ 100% với form mẫu của Component `Accordion`.
