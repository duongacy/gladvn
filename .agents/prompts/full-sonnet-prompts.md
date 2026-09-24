# FULL PROMPTS CHO TỪNG COMPONENT

Dưới đây là 10 prompt ĐỘC LẬP VÀ ĐẦY ĐỦ NHẤT cho từng component. Mỗi prompt đã bao gồm toàn bộ luật kiến trúc, **điểm chết hardcode** riêng của từng component, và **bộ testcase bắt buộc phải pass trước khi báo cáo hoàn thành**.

## 🟢 ƯU TIÊN 1: 5 COMPONENT ĐÃ ĐÁNH DẤU DONE TRONG DOCS

Đây là 5 component cần được nâng cấp triệt để lên kiến trúc CSS mới.

---

### 🚀 PROMPT DÀNH CHO COMPONENT: Card

**VUI LÒNG COPY TOÀN BỘ NỘI DUNG DƯỚI ĐÂY GỬI CHO SONNET/CLAUDE:**

```text
Xin chào, tôi cần bạn refactor component `Card` theo Kiến Trúc "Zero-Specificity Contextual Sizing" và "Defensive Context" của dự án GLADVN.

📁 FILE LÀM VIỆC:
- Tầng Micro: `src/components/micro/card.tsx`
- Tầng Macro: `src/components/macro/card-preset.tsx`

🔥 NHIỆM VỤ Ở TẦNG MICRO:
1. Tạo React Context (Defensive Hook):
- Khởi tạo `const CardContext = React.createContext(false);`
- Viết hook `useCardContext(componentName: string)`. Nếu giá trị context = false và đang ở dev mode, gọi `console.warn` với thông báo: `[gladvn] <${componentName}> phải được dùng bên trong <Card>`.

2. Cập nhật Thẻ Root:
- Xóa class `group/card` (nếu có) ra khỏi `cn()` của thẻ gốc.
- Bọc toàn bộ `children` bằng `<CardContext value={true}>`.
- Khai báo bắt buộc `data-size={size}` và `data-slot="card"` trên thẻ Root.

3. Refactor Thẻ Con (Contextual Sizing với độ ưu tiên = 0):
- Thêm lời gọi hook `useCardContext('TênThẻ')` vào đầu mỗi component con.
- Tìm tất cả class cũ dạng: `group-data-[size=sm]/card:[class]`.
- Thay thế bằng: `"[:where([data-slot=card][data-size=sm]_&)]:[class]"`. (Tương tự cho md, lg).

🚨 CRITICAL RULES VÀ ĐIỂM CẦN ĐẶC BIỆT LƯU Ý Ở COMPONENT NÀY:
- THE ZERO-SPECIFICITY TRAP: Vì `:where()` có specificity = 0. Nếu bạn để sót bất kỳ class size mặc định nào ở chuỗi gốc (VD: p-4, text-sm, size-10), class mặc định đó (specificity = 10) SẼ LUÔN LUÔN đè bẹp `:where()`. BẠN PHẢI XÓA MỌI KÍCH THƯỚC MẶC ĐỊNH Ở CHUỖI BASE!
- KHÔNG dùng `group-data-*` cho sizing nữa.
- TUYỆT ĐỐI KHÔNG dùng `!important`. Không dùng CSS Variables để truyền size.
- 🎯 ĐIỂM CHẾT CỦA COMPONENT NÀY: CỰC KỲ QUAN TRỌNG: Thẻ `Card` đang bị gán cứng `p-6` ở base. `CardTitle` có `text-base`. `CardDescription` có `text-sm`. BẠN PHẢI XÓA TOÀN BỘ CÁC CLASS SIZING MẶC ĐỊNH NÀY. Đưa toàn bộ padding và text-size vào `:where([data-slot=card][data-size=...]_&)`.

🛠 NHIỆM VỤ Ở TẦNG MACRO (Consumer):
- Khẳng định file macro ĐANG truyền trực tiếp `size={size}` xuống thẻ Micro Root.
- Nếu Macro đang tự tính toán các class dư thừa như `text-sm`, `size-10` và truyền vào thẻ con, HÃY XÓA CHÚNG ĐI. Thẻ con ở Micro bây giờ đã tự biết cách scale thông qua `:where()`. Đừng để Macro can thiệp style của con nữa.


🌟 NHIỆM VỤ Ở TẦNG SHOWCASE (BẮT BUỘC):
- Mở file `app/pages/components/[tên-component].tsx` và `app/pages/components/macro/[tên-component]-preset.tsx` (nếu có).
- KHÔNG tạo các block `<ExampleSection>` riêng biệt chỉ để demo size (vì UI của thanh cài đặt global đã lo việc đó). Hãy xoá các section như "Small", "Medium", "Large" nếu chúng đang tồn tại.
- Hỗ trợ truyền `globalSize` từ `useDevContext()` xuống cho mọi component được render thay vì hardcode size.
- Phải demo ĐẦY ĐỦ tất cả các thẻ con (parts) được export từ component.

📋 BƯỚC 4: VIẾT VÀ CHẠY TEST (BẮT BUỘC)

Sau khi refactor xong, bạn PHẢI bổ sung các test case sau vào file `src/components/micro/card.test.tsx`. Nếu file không tồn tại, hãy tạo mới.

Test cần cover 3 trường hợp:
1. Happy Path: Không warn khi các thẻ con dùng bên trong `<Card>`.
2. Sad Path: Warn chính xác khi từng thẻ con dùng độc lập bên ngoài Context.
3. data-size Attribute: Thẻ Root phải xuất đúng `data-size` ra DOM.

```tsx
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
// import tất cả các thẻ con cần test

describe('Card - Defensive Context', () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnMock.mockRestore();
  });

  it('✅ KHÔNG warn khi thẻ con nằm trong Context', () => {
    render(
      <Card>
        {/* render các thẻ con ở đây */}
      </Card>
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  it('🚨 [Card] văng warn khi <CardHeader> dùng ngoài Context', () => {
    render(<CardHeader>test</CardHeader>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <CardHeader> phải được dùng bên trong')
    );
  });

  it('🚨 [Card] văng warn khi <CardTitle> dùng ngoài Context', () => {
    render(<CardTitle>test</CardTitle>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <CardTitle> phải được dùng bên trong')
    );
  });

  it('🚨 [Card] văng warn khi <CardDescription> dùng ngoài Context', () => {
    render(<CardDescription>test</CardDescription>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <CardDescription> phải được dùng bên trong')
    );
  });

  it('🚨 [Card] văng warn khi <CardContent> dùng ngoài Context', () => {
    render(<CardContent>test</CardContent>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <CardContent> phải được dùng bên trong')
    );
  });

  it('🚨 [Card] văng warn khi <CardFooter> dùng ngoài Context', () => {
    render(<CardFooter>test</CardFooter>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <CardFooter> phải được dùng bên trong')
    );
  });

  it('✅ Root có data-size đúng trên DOM', () => {
    const { getByTestId } = render(<Card size="lg" data-testid="root" />);
    expect(getByTestId('root')).toHaveAttribute('data-size', 'lg');
  });
});
```

Sau khi viết test xong, hãy chạy lệnh sau và xác nhận TẤT CẢ test đều xanh:

```bash
npx vitest run src/components/micro/card.test.tsx
```

Nếu có test đỏ, hãy debug và sửa code trước khi báo cáo xong việc.

Hãy xem xét thật kĩ TẤT CẢ các thẻ con trước khi trả về kết quả. Trả về toàn bộ code, không cần giải thích dài dòng.

```

---

### 🚀 PROMPT DÀNH CHO COMPONENT: Alert

**VUI LÒNG COPY TOÀN BỘ NỘI DUNG DƯỚI ĐÂY GỬI CHO SONNET/CLAUDE:**

```text
Xin chào, tôi cần bạn refactor component `Alert` theo Kiến Trúc "Zero-Specificity Contextual Sizing" và "Defensive Context" của dự án GLADVN.

📁 FILE LÀM VIỆC:
- Tầng Micro: `src/components/micro/alert.tsx`
- Tầng Macro: `src/components/macro/alert-preset.tsx`

🔥 NHIỆM VỤ Ở TẦNG MICRO:
1. Tạo React Context (Defensive Hook):
- Khởi tạo `const AlertContext = React.createContext(false);`
- Viết hook `useAlertContext(componentName: string)`. Nếu giá trị context = false và đang ở dev mode, gọi `console.warn` với thông báo: `[gladvn] <${componentName}> phải được dùng bên trong <Alert>`.

2. Cập nhật Thẻ Root:
- Xóa class `group/alert` (nếu có) ra khỏi `cn()` của thẻ gốc.
- Bọc toàn bộ `children` bằng `<AlertContext value={true}>`.
- Khai báo bắt buộc `data-size={size}` và `data-slot="alert"` trên thẻ Root.

3. Refactor Thẻ Con (Contextual Sizing với độ ưu tiên = 0):
- Thêm lời gọi hook `useAlertContext('TênThẻ')` vào đầu mỗi component con.
- Tìm tất cả class cũ dạng: `group-data-[size=sm]/alert:[class]`.
- Thay thế bằng: `"[:where([data-slot=alert][data-size=sm]_&)]:[class]"`. (Tương tự cho md, lg).

🚨 CRITICAL RULES VÀ ĐIỂM CẦN ĐẶC BIỆT LƯU Ý Ở COMPONENT NÀY:
- THE ZERO-SPECIFICITY TRAP: Vì `:where()` có specificity = 0. Nếu bạn để sót bất kỳ class size mặc định nào ở chuỗi gốc (VD: p-4, text-sm, size-10), class mặc định đó (specificity = 10) SẼ LUÔN LUÔN đè bẹp `:where()`. BẠN PHẢI XÓA MỌI KÍCH THƯỚC MẶC ĐỊNH Ở CHUỖI BASE!
- KHÔNG dùng `group-data-*` cho sizing nữa.
- TUYỆT ĐỐI KHÔNG dùng `!important`. Không dùng CSS Variables để truyền size.
- 🎯 ĐIỂM CHẾT CỦA COMPONENT NÀY: Thẻ `AlertIcon` đang có class mặc định `size-4` đứng cạnh `group-data-[size=lg]/alert:size-5`. HÃY XÓA `size-4` ra khỏi base class và chuyển tất cả kích thước vào `:where()`. Nếu để lại `size-4`, specificity của nó (=10) sẽ đè bẹp `:where()` (=0).

🛠 NHIỆM VỤ Ở TẦNG MACRO (Consumer):
- Khẳng định file macro ĐANG truyền trực tiếp `size={size}` xuống thẻ Micro Root.
- Nếu Macro đang tự tính toán các class dư thừa như `text-sm`, `size-10` và truyền vào thẻ con, HÃY XÓA CHÚNG ĐI. Thẻ con ở Micro bây giờ đã tự biết cách scale thông qua `:where()`. Đừng để Macro can thiệp style của con nữa.


🌟 NHIỆM VỤ Ở TẦNG SHOWCASE (BẮT BUỘC):
- Mở file `app/pages/components/[tên-component].tsx` và `app/pages/components/macro/[tên-component]-preset.tsx` (nếu có).
- KHÔNG tạo các block `<ExampleSection>` riêng biệt chỉ để demo size (vì UI của thanh cài đặt global đã lo việc đó). Hãy xoá các section như "Small", "Medium", "Large" nếu chúng đang tồn tại.
- Hỗ trợ truyền `globalSize` từ `useDevContext()` xuống cho mọi component được render thay vì hardcode size.
- Phải demo ĐẦY ĐỦ tất cả các thẻ con (parts) được export từ component.

📋 BƯỚC 4: VIẾT VÀ CHẠY TEST (BẮT BUỘC)

Sau khi refactor xong, bạn PHẢI bổ sung các test case sau vào file `src/components/micro/alert.test.tsx`. Nếu file không tồn tại, hãy tạo mới.

Test cần cover 3 trường hợp:
1. Happy Path: Không warn khi các thẻ con dùng bên trong `<Alert>`.
2. Sad Path: Warn chính xác khi từng thẻ con dùng độc lập bên ngoài Context.
3. data-size Attribute: Thẻ Root phải xuất đúng `data-size` ra DOM.

```tsx
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
// import tất cả các thẻ con cần test

describe('Alert - Defensive Context', () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnMock.mockRestore();
  });

  it('✅ KHÔNG warn khi thẻ con nằm trong Context', () => {
    render(
      <Alert>
        {/* render các thẻ con ở đây */}
      </Alert>
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  it('🚨 [Alert] văng warn khi <AlertTitle> dùng ngoài Context', () => {
    render(<AlertTitle>test</AlertTitle>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <AlertTitle> phải được dùng bên trong')
    );
  });

  it('🚨 [Alert] văng warn khi <AlertDescription> dùng ngoài Context', () => {
    render(<AlertDescription>test</AlertDescription>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <AlertDescription> phải được dùng bên trong')
    );
  });

  it('🚨 [Alert] văng warn khi <AlertIcon> dùng ngoài Context', () => {
    render(<AlertIcon>test</AlertIcon>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <AlertIcon> phải được dùng bên trong')
    );
  });

  it('✅ Root có data-size đúng trên DOM', () => {
    const { getByTestId } = render(<Alert size="lg" data-testid="root" />);
    expect(getByTestId('root')).toHaveAttribute('data-size', 'lg');
  });
});
```

Sau khi viết test xong, hãy chạy lệnh sau và xác nhận TẤT CẢ test đều xanh:

```bash
npx vitest run src/components/micro/alert.test.tsx
```

Nếu có test đỏ, hãy debug và sửa code trước khi báo cáo xong việc.

Hãy xem xét thật kĩ TẤT CẢ các thẻ con trước khi trả về kết quả. Trả về toàn bộ code, không cần giải thích dài dòng.

```

---

### 🚀 


PROMPT DÀNH CHO COMPONENT: Avatar

**VUI LÒNG COPY TOÀN BỘ NỘI DUNG DƯỚI ĐÂY GỬI CHO SONNET/CLAUDE:**

```text
Xin chào, tôi cần bạn refactor component `Avatar` theo Kiến Trúc "Zero-Specificity Contextual Sizing" và "Defensive Context" của dự án GLADVN.

📁 FILE LÀM VIỆC:
- Tầng Micro: `src/components/micro/avatar.tsx`
- Tầng Macro: `src/components/macro/avatar-preset.tsx`

🔥 NHIỆM VỤ Ở TẦNG MICRO:
1. Tạo React Context (Defensive Hook):
- Khởi tạo `const AvatarContext = React.createContext(false);`
- Viết hook `useAvatarContext(componentName: string)`. Nếu giá trị context = false và đang ở dev mode, gọi `console.warn` với thông báo: `[gladvn] <${componentName}> phải được dùng bên trong <Avatar>`.

2. Cập nhật Thẻ Root:
- Xóa class `group/avatar` (nếu có) ra khỏi `cn()` của thẻ gốc.
- Bọc toàn bộ `children` bằng `<AvatarContext value={true}>`.
- Khai báo bắt buộc `data-size={size}` và `data-slot="avatar"` trên thẻ Root.

3. Refactor Thẻ Con (Contextual Sizing với độ ưu tiên = 0):
- Thêm lời gọi hook `useAvatarContext('TênThẻ')` vào đầu mỗi component con.
- Tìm tất cả class cũ dạng: `group-data-[size=sm]/avatar:[class]`.
- Thay thế bằng: `"[:where([data-slot=avatar][data-size=sm]_&)]:[class]"`. (Tương tự cho md, lg).

🚨 CRITICAL RULES VÀ ĐIỂM CẦN ĐẶC BIỆT LƯU Ý Ở COMPONENT NÀY:
- THE ZERO-SPECIFICITY TRAP: Vì `:where()` có specificity = 0. Nếu bạn để sót bất kỳ class size mặc định nào ở chuỗi gốc (VD: p-4, text-sm, size-10), class mặc định đó (specificity = 10) SẼ LUÔN LUÔN đè bẹp `:where()`. BẠN PHẢI XÓA MỌI KÍCH THƯỚC MẶC ĐỊNH Ở CHUỖI BASE!
- KHÔNG dùng `group-data-*` cho sizing nữa.
- TUYỆT ĐỐI KHÔNG dùng `!important`. Không dùng CSS Variables để truyền size.
- 🎯 ĐIỂM CHẾT CỦA COMPONENT NÀY: Thẻ `AvatarFallback` đang bị gán cứng `text-sm` làm mặc định, nó sẽ đè `:where()` của size sm (`text-xs`) và lg (`text-base`). HÃY XÓA `text-sm` khỏi base string, chia tất cả size vào `:where()`.

🛠 NHIỆM VỤ Ở TẦNG MACRO (Consumer):
- Khẳng định file macro ĐANG truyền trực tiếp `size={size}` xuống thẻ Micro Root.
- Nếu Macro đang tự tính toán các class dư thừa như `text-sm`, `size-10` và truyền vào thẻ con, HÃY XÓA CHÚNG ĐI. Thẻ con ở Micro bây giờ đã tự biết cách scale thông qua `:where()`. Đừng để Macro can thiệp style của con nữa.


🌟 NHIỆM VỤ Ở TẦNG SHOWCASE (BẮT BUỘC):
- Mở file `app/pages/components/[tên-component].tsx` và `app/pages/components/macro/[tên-component]-preset.tsx` (nếu có).
- KHÔNG tạo các block `<ExampleSection>` riêng biệt chỉ để demo size (vì UI của thanh cài đặt global đã lo việc đó). Hãy xoá các section như "Small", "Medium", "Large" nếu chúng đang tồn tại.
- Hỗ trợ truyền `globalSize` từ `useDevContext()` xuống cho mọi component được render thay vì hardcode size.
- Phải demo ĐẦY ĐỦ tất cả các thẻ con (parts) được export từ component.

📋 BƯỚC 4: VIẾT VÀ CHẠY TEST (BẮT BUỘC)

Sau khi refactor xong, bạn PHẢI bổ sung các test case sau vào file `src/components/micro/avatar.test.tsx`. Nếu file không tồn tại, hãy tạo mới.

Test cần cover 3 trường hợp:
1. Happy Path: Không warn khi các thẻ con dùng bên trong `<Avatar>`.
2. Sad Path: Warn chính xác khi từng thẻ con dùng độc lập bên ngoài Context.
3. data-size Attribute: Thẻ Root phải xuất đúng `data-size` ra DOM.

```tsx
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
// import tất cả các thẻ con cần test

describe('Avatar - Defensive Context', () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnMock.mockRestore();
  });

  it('✅ KHÔNG warn khi thẻ con nằm trong Context', () => {
    render(
      <Avatar>
        {/* render các thẻ con ở đây */}
      </Avatar>
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  it('🚨 [Avatar] văng warn khi <AvatarImage> dùng ngoài Context', () => {
    render(<AvatarImage>test</AvatarImage>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <AvatarImage> phải được dùng bên trong')
    );
  });

  it('🚨 [Avatar] văng warn khi <AvatarFallback> dùng ngoài Context', () => {
    render(<AvatarFallback>test</AvatarFallback>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <AvatarFallback> phải được dùng bên trong')
    );
  });

  it('🚨 [Avatar] văng warn khi <AvatarIndicator> dùng ngoài Context', () => {
    render(<AvatarIndicator>test</AvatarIndicator>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <AvatarIndicator> phải được dùng bên trong')
    );
  });

  it('✅ Root có data-size đúng trên DOM', () => {
    const { getByTestId } = render(<Avatar size="lg" data-testid="root" />);
    expect(getByTestId('root')).toHaveAttribute('data-size', 'lg');
  });
});
```

Sau khi viết test xong, hãy chạy lệnh sau và xác nhận TẤT CẢ test đều xanh:

```bash
npx vitest run src/components/micro/avatar.test.tsx
```

Nếu có test đỏ, hãy debug và sửa code trước khi báo cáo xong việc.

Hãy xem xét thật kĩ TẤT CẢ các thẻ con trước khi trả về kết quả. Trả về toàn bộ code, không cần giải thích dài dòng.

```

---

### 🚀 


PROMPT DÀNH CHO COMPONENT: Checkbox

**VUI LÒNG COPY TOÀN BỘ NỘI DUNG DƯỚI ĐÂY GỬI CHO SONNET/CLAUDE:**

```text
Xin chào, tôi cần bạn refactor component `Checkbox` theo Kiến Trúc "Zero-Specificity Contextual Sizing" và "Defensive Context" của dự án GLADVN.

📁 FILE LÀM VIỆC:
- Tầng Micro: `src/components/micro/checkbox.tsx`
- Tầng Macro: `src/components/macro/checkbox-preset.tsx`

🔥 NHIỆM VỤ Ở TẦNG MICRO:
1. Tạo React Context (Defensive Hook):
- Khởi tạo `const CheckboxContext = React.createContext(false);`
- Viết hook `useCheckboxContext(componentName: string)`. Nếu giá trị context = false và đang ở dev mode, gọi `console.warn` với thông báo: `[gladvn] <${componentName}> phải được dùng bên trong <Checkbox>`.

2. Cập nhật Thẻ Root:
- Xóa class `group/checkbox` (nếu có) ra khỏi `cn()` của thẻ gốc.
- Bọc toàn bộ `children` bằng `<CheckboxContext value={true}>`.
- Khai báo bắt buộc `data-size={size}` và `data-slot="checkbox"` trên thẻ Root.

3. Refactor Thẻ Con (Contextual Sizing với độ ưu tiên = 0):
- Thêm lời gọi hook `useCheckboxContext('TênThẻ')` vào đầu mỗi component con.
- Tìm tất cả class cũ dạng: `group-data-[size=sm]/checkbox:[class]`.
- Thay thế bằng: `"[:where([data-slot=checkbox][data-size=sm]_&)]:[class]"`. (Tương tự cho md, lg).

🚨 CRITICAL RULES VÀ ĐIỂM CẦN ĐẶC BIỆT LƯU Ý Ở COMPONENT NÀY:
- THE ZERO-SPECIFICITY TRAP: Vì `:where()` có specificity = 0. Nếu bạn để sót bất kỳ class size mặc định nào ở chuỗi gốc (VD: p-4, text-sm, size-10), class mặc định đó (specificity = 10) SẼ LUÔN LUÔN đè bẹp `:where()`. BẠN PHẢI XÓA MỌI KÍCH THƯỚC MẶC ĐỊNH Ở CHUỖI BASE!
- KHÔNG dùng `group-data-*` cho sizing nữa.
- TUYỆT ĐỐI KHÔNG dùng `!important`. Không dùng CSS Variables để truyền size.
- 🎯 ĐIỂM CHẾT CỦA COMPONENT NÀY: Thẻ `CheckboxIndicator` đang dùng class `[:where(&>svg)]:size-3.5` làm mặc định. HÃY GỠ BỎ NÓ. Gom tất cả icon sizing vào `[:where([data-slot=checkbox][data-size=...]_&>svg)]:[size]`. Đừng để thẻ con tự đè class của nó.

🛠 NHIỆM VỤ Ở TẦNG MACRO (Consumer):
- Khẳng định file macro ĐANG truyền trực tiếp `size={size}` xuống thẻ Micro Root.
- Nếu Macro đang tự tính toán các class dư thừa như `text-sm`, `size-10` và truyền vào thẻ con, HÃY XÓA CHÚNG ĐI. Thẻ con ở Micro bây giờ đã tự biết cách scale thông qua `:where()`. Đừng để Macro can thiệp style của con nữa.


🌟 NHIỆM VỤ Ở TẦNG SHOWCASE (BẮT BUỘC):
- Mở file `app/pages/components/[tên-component].tsx` và `app/pages/components/macro/[tên-component]-preset.tsx` (nếu có).
- KHÔNG tạo các block `<ExampleSection>` riêng biệt chỉ để demo size (vì UI của thanh cài đặt global đã lo việc đó). Hãy xoá các section như "Small", "Medium", "Large" nếu chúng đang tồn tại.
- Hỗ trợ truyền `globalSize` từ `useDevContext()` xuống cho mọi component được render thay vì hardcode size.
- Phải demo ĐẦY ĐỦ tất cả các thẻ con (parts) được export từ component.

📋 BƯỚC 4: VIẾT VÀ CHẠY TEST (BẮT BUỘC)

Sau khi refactor xong, bạn PHẢI bổ sung các test case sau vào file `src/components/micro/checkbox.test.tsx`. Nếu file không tồn tại, hãy tạo mới.

Test cần cover 3 trường hợp:
1. Happy Path: Không warn khi các thẻ con dùng bên trong `<Checkbox>`.
2. Sad Path: Warn chính xác khi từng thẻ con dùng độc lập bên ngoài Context.
3. data-size Attribute: Thẻ Root phải xuất đúng `data-size` ra DOM.

```tsx
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
// import tất cả các thẻ con cần test

describe('Checkbox - Defensive Context', () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnMock.mockRestore();
  });

  it('✅ KHÔNG warn khi thẻ con nằm trong Context', () => {
    render(
      <Checkbox>
        {/* render các thẻ con ở đây */}
      </Checkbox>
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  it('🚨 [Checkbox] văng warn khi <CheckboxIndicator> dùng ngoài Context', () => {
    render(<CheckboxIndicator>test</CheckboxIndicator>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <CheckboxIndicator> phải được dùng bên trong')
    );
  });

  it('✅ Root có data-size đúng trên DOM', () => {
    const { getByTestId } = render(<Checkbox size="lg" data-testid="root" />);
    expect(getByTestId('root')).toHaveAttribute('data-size', 'lg');
  });
});
```

Sau khi viết test xong, hãy chạy lệnh sau và xác nhận TẤT CẢ test đều xanh:

```bash
npx vitest run src/components/micro/checkbox.test.tsx
```

Nếu có test đỏ, hãy debug và sửa code trước khi báo cáo xong việc.

Hãy xem xét thật kĩ TẤT CẢ các thẻ con trước khi trả về kết quả. Trả về toàn bộ code, không cần giải thích dài dòng.

```

---

### 🚀 PROMPT DÀNH CHO COMPONENT: Combobox

**VUI LÒNG COPY TOÀN BỘ NỘI DUNG DƯỚI ĐÂY GỬI CHO SONNET/CLAUDE:**

```text
Xin chào, tôi cần bạn refactor component `Combobox` theo Kiến Trúc "Zero-Specificity Contextual Sizing" và "Defensive Context" của dự án GLADVN.

📁 FILE LÀM VIỆC:
- Tầng Micro: `src/components/micro/combobox.tsx`
- Tầng Macro: `src/components/macro/combobox-preset.tsx`

🔥 NHIỆM VỤ Ở TẦNG MICRO:
1. Tạo React Context (Defensive Hook):
- Khởi tạo `const ComboboxContext = React.createContext(false);`
- Viết hook `useComboboxContext(componentName: string)`. Nếu giá trị context = false và đang ở dev mode, gọi `console.warn` với thông báo: `[gladvn] <${componentName}> phải được dùng bên trong <Combobox>`.

2. Cập nhật Thẻ Root:
- Xóa class `group/combobox` (nếu có) ra khỏi `cn()` của thẻ gốc.
- Bọc toàn bộ `children` bằng `<ComboboxContext value={true}>`.
- Khai báo bắt buộc `data-size={size}` và `data-slot="combobox"` trên thẻ Root.

3. Refactor Thẻ Con (Contextual Sizing với độ ưu tiên = 0):
- Thêm lời gọi hook `useComboboxContext('TênThẻ')` vào đầu mỗi component con.
- Tìm tất cả class cũ dạng: `group-data-[size=sm]/combobox:[class]`.
- Thay thế bằng: `"[:where([data-slot=combobox][data-size=sm]_&)]:[class]"`. (Tương tự cho md, lg).

🚨 CRITICAL RULES VÀ ĐIỂM CẦN ĐẶC BIỆT LƯU Ý Ở COMPONENT NÀY:
- THE ZERO-SPECIFICITY TRAP: Vì `:where()` có specificity = 0. Nếu bạn để sót bất kỳ class size mặc định nào ở chuỗi gốc (VD: p-4, text-sm, size-10), class mặc định đó (specificity = 10) SẼ LUÔN LUÔN đè bẹp `:where()`. BẠN PHẢI XÓA MỌI KÍCH THƯỚC MẶC ĐỊNH Ở CHUỖI BASE!
- KHÔNG dùng `group-data-*` cho sizing nữa.
- TUYỆT ĐỐI KHÔNG dùng `!important`. Không dùng CSS Variables để truyền size.
- 🎯 ĐIỂM CHẾT CỦA COMPONENT NÀY: Đây là component cực kỳ phức tạp. `ComboboxClear` và `ComboboxTrigger` đang bị hardcode class `size-6.5` làm mặc định. BẠN PHẢI XÓA `size-6.5` ở chuỗi gốc, và biến mọi group-data-size thành `[:where([data-slot=combobox][data-size=...]_&)]` tương ứng.

🛠 NHIỆM VỤ Ở TẦNG MACRO (Consumer):
- Khẳng định file macro ĐANG truyền trực tiếp `size={size}` xuống thẻ Micro Root.
- Nếu Macro đang tự tính toán các class dư thừa như `text-sm`, `size-10` và truyền vào thẻ con, HÃY XÓA CHÚNG ĐI. Thẻ con ở Micro bây giờ đã tự biết cách scale thông qua `:where()`. Đừng để Macro can thiệp style của con nữa.


🌟 NHIỆM VỤ Ở TẦNG SHOWCASE (BẮT BUỘC):
- Mở file `app/pages/components/[tên-component].tsx` và `app/pages/components/macro/[tên-component]-preset.tsx` (nếu có).
- KHÔNG tạo các block `<ExampleSection>` riêng biệt chỉ để demo size (vì UI của thanh cài đặt global đã lo việc đó). Hãy xoá các section như "Small", "Medium", "Large" nếu chúng đang tồn tại.
- Hỗ trợ truyền `globalSize` từ `useDevContext()` xuống cho mọi component được render thay vì hardcode size.
- Phải demo ĐẦY ĐỦ tất cả các thẻ con (parts) được export từ component.

📋 BƯỚC 4: VIẾT VÀ CHẠY TEST (BẮT BUỘC)

Sau khi refactor xong, bạn PHẢI bổ sung các test case sau vào file `src/components/micro/combobox.test.tsx`. Nếu file không tồn tại, hãy tạo mới.

Test cần cover 3 trường hợp:
1. Happy Path: Không warn khi các thẻ con dùng bên trong `<Combobox>`.
2. Sad Path: Warn chính xác khi từng thẻ con dùng độc lập bên ngoài Context.
3. data-size Attribute: Thẻ Root phải xuất đúng `data-size` ra DOM.

```tsx
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
// import tất cả các thẻ con cần test

describe('Combobox - Defensive Context', () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnMock.mockRestore();
  });

  it('✅ KHÔNG warn khi thẻ con nằm trong Context', () => {
    render(
      <Combobox>
        {/* render các thẻ con ở đây */}
      </Combobox>
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  it('🚨 [Combobox] văng warn khi <ComboboxTrigger> dùng ngoài Context', () => {
    render(<ComboboxTrigger>test</ComboboxTrigger>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <ComboboxTrigger> phải được dùng bên trong')
    );
  });

  it('🚨 [Combobox] văng warn khi <ComboboxClear> dùng ngoài Context', () => {
    render(<ComboboxClear>test</ComboboxClear>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <ComboboxClear> phải được dùng bên trong')
    );
  });

  it('✅ Root có data-size đúng trên DOM', () => {
    const { getByTestId } = render(<Combobox size="lg" data-testid="root" />);
    expect(getByTestId('root')).toHaveAttribute('data-size', 'lg');
  });
});
```

Sau khi viết test xong, hãy chạy lệnh sau và xác nhận TẤT CẢ test đều xanh:

```bash
npx vitest run src/components/micro/combobox.test.tsx
```

Nếu có test đỏ, hãy debug và sửa code trước khi báo cáo xong việc.

Hãy xem xét thật kĩ TẤT CẢ các thẻ con trước khi trả về kết quả. Trả về toàn bộ code, không cần giải thích dài dòng.

```

---

## ⏳ ƯU TIÊN 2: 5 COMPONENT TO-DO

Xử lý sau khi hoàn thành nhóm Ưu tiên 1.

---

### 🚀 
PROMPT DÀNH CHO COMPONENT: Field

**VUI LÒNG COPY TOÀN BỘ NỘI DUNG DƯỚI ĐÂY GỬI CHO SONNET/CLAUDE:**

```text
Xin chào, tôi cần bạn refactor component `Field` theo Kiến Trúc "Zero-Specificity Contextual Sizing" và "Defensive Context" của dự án GLADVN.

📁 FILE LÀM VIỆC:
- Tầng Micro: `src/components/micro/field.tsx`
- Tầng Macro: `src/components/macro/field-preset.tsx`

🔥 NHIỆM VỤ Ở TẦNG MICRO:
1. Tạo React Context (Defensive Hook):
- Khởi tạo `const FieldContext = React.createContext(false);`
- Viết hook `useFieldContext(componentName: string)`. Nếu giá trị context = false và đang ở dev mode, gọi `console.warn` với thông báo: `[gladvn] <${componentName}> phải được dùng bên trong <Field>`.

2. Cập nhật Thẻ Root:
- Xóa class `group/field` (nếu có) ra khỏi `cn()` của thẻ gốc.
- Bọc toàn bộ `children` bằng `<FieldContext value={true}>`.
- Khai báo bắt buộc `data-size={size}` và `data-slot="field"` trên thẻ Root.

3. Refactor Thẻ Con (Contextual Sizing với độ ưu tiên = 0):
- Thêm lời gọi hook `useFieldContext('TênThẻ')` vào đầu mỗi component con.
- Tìm tất cả class cũ dạng: `group-data-[size=sm]/field:[class]`.
- Thay thế bằng: `"[:where([data-slot=field][data-size=sm]_&)]:[class]"`. (Tương tự cho md, lg).

🚨 CRITICAL RULES VÀ ĐIỂM CẦN ĐẶC BIỆT LƯU Ý Ở COMPONENT NÀY:
- THE ZERO-SPECIFICITY TRAP: Vì `:where()` có specificity = 0. Nếu bạn để sót bất kỳ class size mặc định nào ở chuỗi gốc (VD: p-4, text-sm, size-10), class mặc định đó (specificity = 10) SẼ LUÔN LUÔN đè bẹp `:where()`. BẠN PHẢI XÓA MỌI KÍCH THƯỚC MẶC ĐỊNH Ở CHUỖI BASE!
- KHÔNG dùng `group-data-*` cho sizing nữa.
- TUYỆT ĐỐI KHÔNG dùng `!important`. Không dùng CSS Variables để truyền size.
- 🎯 ĐIỂM CHẾT CỦA COMPONENT NÀY: Thẻ `Field` bọc ngoài quyết định toàn bộ size của Label, Description, Message. Hiện tại tất cả thẻ con đang bị hardcode `text-sm` ở base class. BẠN PHẢI GỠ SẠCH `text-sm` ở tất cả chuỗi cn() mặc định. Khai báo size bằng `:where()` hoàn toàn.

🛠 NHIỆM VỤ Ở TẦNG MACRO (Consumer):
- Khẳng định file macro ĐANG truyền trực tiếp `size={size}` xuống thẻ Micro Root.
- Nếu Macro đang tự tính toán các class dư thừa như `text-sm`, `size-10` và truyền vào thẻ con, HÃY XÓA CHÚNG ĐI. Thẻ con ở Micro bây giờ đã tự biết cách scale thông qua `:where()`. Đừng để Macro can thiệp style của con nữa.


🌟 NHIỆM VỤ Ở TẦNG SHOWCASE (BẮT BUỘC):
- Mở file `app/pages/components/[tên-component].tsx` và `app/pages/components/macro/[tên-component]-preset.tsx` (nếu có).
- KHÔNG tạo các block `<ExampleSection>` riêng biệt chỉ để demo size (vì UI của thanh cài đặt global đã lo việc đó). Hãy xoá các section như "Small", "Medium", "Large" nếu chúng đang tồn tại.
- Hỗ trợ truyền `globalSize` từ `useDevContext()` xuống cho mọi component được render thay vì hardcode size.
- Phải demo ĐẦY ĐỦ tất cả các thẻ con (parts) được export từ component.

📋 BƯỚC 4: VIẾT VÀ CHẠY TEST (BẮT BUỘC)

Sau khi refactor xong, bạn PHẢI bổ sung các test case sau vào file `src/components/micro/field.test.tsx`. Nếu file không tồn tại, hãy tạo mới.

Test cần cover 3 trường hợp:
1. Happy Path: Không warn khi các thẻ con dùng bên trong `<Field>`.
2. Sad Path: Warn chính xác khi từng thẻ con dùng độc lập bên ngoài Context.
3. data-size Attribute: Thẻ Root phải xuất đúng `data-size` ra DOM.

```tsx
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
// import tất cả các thẻ con cần test

describe('Field - Defensive Context', () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnMock.mockRestore();
  });

  it('✅ KHÔNG warn khi thẻ con nằm trong Context', () => {
    render(
      <Field>
        {/* render các thẻ con ở đây */}
      </Field>
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  it('🚨 [Field] văng warn khi <FieldLabel> dùng ngoài Context', () => {
    render(<FieldLabel>test</FieldLabel>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <FieldLabel> phải được dùng bên trong')
    );
  });

  it('🚨 [Field] văng warn khi <FieldDescription> dùng ngoài Context', () => {
    render(<FieldDescription>test</FieldDescription>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <FieldDescription> phải được dùng bên trong')
    );
  });

  it('🚨 [Field] văng warn khi <FieldMessage> dùng ngoài Context', () => {
    render(<FieldMessage>test</FieldMessage>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <FieldMessage> phải được dùng bên trong')
    );
  });

  it('✅ Root có data-size đúng trên DOM', () => {
    const { getByTestId } = render(<Field size="lg" data-testid="root" />);
    expect(getByTestId('root')).toHaveAttribute('data-size', 'lg');
  });
});
```

Sau khi viết test xong, hãy chạy lệnh sau và xác nhận TẤT CẢ test đều xanh:

```bash
npx vitest run src/components/micro/field.test.tsx
```

Nếu có test đỏ, hãy debug và sửa code trước khi báo cáo xong việc.

Hãy xem xét thật kĩ TẤT CẢ các thẻ con trước khi trả về kết quả. Trả về toàn bộ code, không cần giải thích dài dòng.

```

---

### 🚀 PROMPT DÀNH CHO COMPONENT: InputGroup

**VUI LÒNG COPY TOÀN BỘ NỘI DUNG DƯỚI ĐÂY GỬI CHO SONNET/CLAUDE:**

```text
Xin chào, tôi cần bạn refactor component `InputGroup` theo Kiến Trúc "Zero-Specificity Contextual Sizing" và "Defensive Context" của dự án GLADVN.

📁 FILE LÀM VIỆC:
- Tầng Micro: `src/components/micro/input-group.tsx`
- Tầng Macro: Không có (Bỏ qua bước Macro)

🔥 NHIỆM VỤ Ở TẦNG MICRO:
1. Tạo React Context (Defensive Hook):
- Khởi tạo `const InputGroupContext = React.createContext(false);`
- Viết hook `useInputGroupContext(componentName: string)`. Nếu giá trị context = false và đang ở dev mode, gọi `console.warn` với thông báo: `[gladvn] <${componentName}> phải được dùng bên trong <InputGroup>`.

2. Cập nhật Thẻ Root:
- Xóa class `group/input-group` (nếu có) ra khỏi `cn()` của thẻ gốc.
- Bọc toàn bộ `children` bằng `<InputGroupContext value={true}>`.
- Khai báo bắt buộc `data-size={size}` và `data-slot="input-group"` trên thẻ Root.

3. Refactor Thẻ Con (Contextual Sizing với độ ưu tiên = 0):
- Thêm lời gọi hook `useInputGroupContext('TênThẻ')` vào đầu mỗi component con.
- Tìm tất cả class cũ dạng: `group-data-[size=sm]/input-group:[class]`.
- Thay thế bằng: `"[:where([data-slot=input-group][data-size=sm]_&)]:[class]"`. (Tương tự cho md, lg).

🚨 CRITICAL RULES VÀ ĐIỂM CẦN ĐẶC BIỆT LƯU Ý Ở COMPONENT NÀY:
- THE ZERO-SPECIFICITY TRAP: Vì `:where()` có specificity = 0. Nếu bạn để sót bất kỳ class size mặc định nào ở chuỗi gốc (VD: p-4, text-sm, size-10), class mặc định đó (specificity = 10) SẼ LUÔN LUÔN đè bẹp `:where()`. BẠN PHẢI XÓA MỌI KÍCH THƯỚC MẶC ĐỊNH Ở CHUỖI BASE!
- KHÔNG dùng `group-data-*` cho sizing nữa.
- TUYỆT ĐỐI KHÔNG dùng `!important`. Không dùng CSS Variables để truyền size.
- 🎯 ĐIỂM CHẾT CỦA COMPONENT NÀY: Root là `<InputGroup>`. Các thẻ con đang dùng `group-data-[size=sm]/input-group`. Có rất nhiều class hardcode mặc định như `size-6.5`. NHỚ XÓA CHÚNG trước khi viết chuỗi `:where()`.


🌟 NHIỆM VỤ Ở TẦNG SHOWCASE (BẮT BUỘC):
- Mở file `app/pages/components/[tên-component].tsx` và `app/pages/components/macro/[tên-component]-preset.tsx` (nếu có).
- KHÔNG tạo các block `<ExampleSection>` riêng biệt chỉ để demo size (vì UI của thanh cài đặt global đã lo việc đó). Hãy xoá các section như "Small", "Medium", "Large" nếu chúng đang tồn tại.
- Hỗ trợ truyền `globalSize` từ `useDevContext()` xuống cho mọi component được render thay vì hardcode size.
- Phải demo ĐẦY ĐỦ tất cả các thẻ con (parts) được export từ component.

📋 BƯỚC 4: VIẾT VÀ CHẠY TEST (BẮT BUỘC)

Sau khi refactor xong, bạn PHẢI bổ sung các test case sau vào file `src/components/micro/input-group.test.tsx`. Nếu file không tồn tại, hãy tạo mới.

Test cần cover 3 trường hợp:
1. Happy Path: Không warn khi các thẻ con dùng bên trong `<InputGroup>`.
2. Sad Path: Warn chính xác khi từng thẻ con dùng độc lập bên ngoài Context.
3. data-size Attribute: Thẻ Root phải xuất đúng `data-size` ra DOM.

```tsx
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
// import tất cả các thẻ con cần test

describe('InputGroup - Defensive Context', () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnMock.mockRestore();
  });

  it('✅ KHÔNG warn khi thẻ con nằm trong Context', () => {
    render(
      <InputGroup>
        {/* render các thẻ con ở đây */}
      </InputGroup>
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  it('🚨 [InputGroup] văng warn khi <InputGroupAddon> dùng ngoài Context', () => {
    render(<InputGroupAddon>test</InputGroupAddon>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <InputGroupAddon> phải được dùng bên trong')
    );
  });

  it('🚨 [InputGroup] văng warn khi <InputGroupSeparator> dùng ngoài Context', () => {
    render(<InputGroupSeparator>test</InputGroupSeparator>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <InputGroupSeparator> phải được dùng bên trong')
    );
  });

  it('✅ Root có data-size đúng trên DOM', () => {
    const { getByTestId } = render(<InputGroup size="lg" data-testid="root" />);
    expect(getByTestId('root')).toHaveAttribute('data-size', 'lg');
  });
});
```

Sau khi viết test xong, hãy chạy lệnh sau và xác nhận TẤT CẢ test đều xanh:

```bash
npx vitest run src/components/micro/input-group.test.tsx
```

Nếu có test đỏ, hãy debug và sửa code trước khi báo cáo xong việc.

Hãy xem xét thật kĩ TẤT CẢ các thẻ con trước khi trả về kết quả. Trả về toàn bộ code, không cần giải thích dài dòng.

```

---

### 🚀 PROMPT DÀNH CHO COMPONENT: InputOTP

**VUI LÒNG COPY TOÀN BỘ NỘI DUNG DƯỚI ĐÂY GỬI CHO SONNET/CLAUDE:**

```text
Xin chào, tôi cần bạn refactor component `InputOTP` theo Kiến Trúc "Zero-Specificity Contextual Sizing" và "Defensive Context" của dự án GLADVN.

📁 FILE LÀM VIỆC:
- Tầng Micro: `src/components/micro/input-otp.tsx`
- Tầng Macro: `src/components/macro/input-otp-preset.tsx`

🔥 NHIỆM VỤ Ở TẦNG MICRO:
1. Tạo React Context (Defensive Hook):
- Khởi tạo `const InputOTPContext = React.createContext(false);`
- Viết hook `useInputOTPContext(componentName: string)`. Nếu giá trị context = false và đang ở dev mode, gọi `console.warn` với thông báo: `[gladvn] <${componentName}> phải được dùng bên trong <InputOTP>`.

2. Cập nhật Thẻ Root:
- Xóa class `group/input-otp` (nếu có) ra khỏi `cn()` của thẻ gốc.
- Bọc toàn bộ `children` bằng `<InputOTPContext value={true}>`.
- Khai báo bắt buộc `data-size={size}` và `data-slot="otp"` trên thẻ Root.

3. Refactor Thẻ Con (Contextual Sizing với độ ưu tiên = 0):
- Thêm lời gọi hook `useInputOTPContext('TênThẻ')` vào đầu mỗi component con.
- Tìm tất cả class cũ dạng: `group-data-[size=sm]/input-otp:[class]`.
- Thay thế bằng: `"[:where([data-slot=otp][data-size=sm]_&)]:[class]"`. (Tương tự cho md, lg).

🚨 CRITICAL RULES VÀ ĐIỂM CẦN ĐẶC BIỆT LƯU Ý Ở COMPONENT NÀY:
- THE ZERO-SPECIFICITY TRAP: Vì `:where()` có specificity = 0. Nếu bạn để sót bất kỳ class size mặc định nào ở chuỗi gốc (VD: p-4, text-sm, size-10), class mặc định đó (specificity = 10) SẼ LUÔN LUÔN đè bẹp `:where()`. BẠN PHẢI XÓA MỌI KÍCH THƯỚC MẶC ĐỊNH Ở CHUỖI BASE!
- KHÔNG dùng `group-data-*` cho sizing nữa.
- TUYỆT ĐỐI KHÔNG dùng `!important`. Không dùng CSS Variables để truyền size.
- 🎯 ĐIỂM CHẾT CỦA COMPONENT NÀY: Slot của OTP (`InputOTPSlot`) đang bị hardcode class mặc định `size-8`. HÃY GỠ NÓ. Phân chia rạch ròi 3 size bằng `[:where([data-slot=otp][data-size=sm]_&)]:size-7`, v.v...

🛠 NHIỆM VỤ Ở TẦNG MACRO (Consumer):
- Khẳng định file macro ĐANG truyền trực tiếp `size={size}` xuống thẻ Micro Root.
- Nếu Macro đang tự tính toán các class dư thừa như `text-sm`, `size-10` và truyền vào thẻ con, HÃY XÓA CHÚNG ĐI. Thẻ con ở Micro bây giờ đã tự biết cách scale thông qua `:where()`. Đừng để Macro can thiệp style của con nữa.


🌟 NHIỆM VỤ Ở TẦNG SHOWCASE (BẮT BUỘC):
- Mở file `app/pages/components/[tên-component].tsx` và `app/pages/components/macro/[tên-component]-preset.tsx` (nếu có).
- KHÔNG tạo các block `<ExampleSection>` riêng biệt chỉ để demo size (vì UI của thanh cài đặt global đã lo việc đó). Hãy xoá các section như "Small", "Medium", "Large" nếu chúng đang tồn tại.
- Hỗ trợ truyền `globalSize` từ `useDevContext()` xuống cho mọi component được render thay vì hardcode size.
- Phải demo ĐẦY ĐỦ tất cả các thẻ con (parts) được export từ component.

📋 BƯỚC 4: VIẾT VÀ CHẠY TEST (BẮT BUỘC)

Sau khi refactor xong, bạn PHẢI bổ sung các test case sau vào file `src/components/micro/input-otp.test.tsx`. Nếu file không tồn tại, hãy tạo mới.

Test cần cover 3 trường hợp:
1. Happy Path: Không warn khi các thẻ con dùng bên trong `<InputOTP>`.
2. Sad Path: Warn chính xác khi từng thẻ con dùng độc lập bên ngoài Context.
3. data-size Attribute: Thẻ Root phải xuất đúng `data-size` ra DOM.

```tsx
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
// import tất cả các thẻ con cần test

describe('InputOTP - Defensive Context', () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnMock.mockRestore();
  });

  it('✅ KHÔNG warn khi thẻ con nằm trong Context', () => {
    render(
      <InputOTP>
        {/* render các thẻ con ở đây */}
      </InputOTP>
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  it('🚨 [InputOTP] văng warn khi <InputOTPGroup> dùng ngoài Context', () => {
    render(<InputOTPGroup>test</InputOTPGroup>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <InputOTPGroup> phải được dùng bên trong')
    );
  });

  it('🚨 [InputOTP] văng warn khi <InputOTPSlot> dùng ngoài Context', () => {
    render(<InputOTPSlot>test</InputOTPSlot>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <InputOTPSlot> phải được dùng bên trong')
    );
  });

  it('🚨 [InputOTP] văng warn khi <InputOTPSeparator> dùng ngoài Context', () => {
    render(<InputOTPSeparator>test</InputOTPSeparator>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <InputOTPSeparator> phải được dùng bên trong')
    );
  });

  it('✅ Root có data-size đúng trên DOM', () => {
    const { getByTestId } = render(<InputOTP size="lg" data-testid="root" />);
    expect(getByTestId('root')).toHaveAttribute('data-size', 'lg');
  });
});
```

Sau khi viết test xong, hãy chạy lệnh sau và xác nhận TẤT CẢ test đều xanh:

```bash
npx vitest run src/components/micro/input-otp.test.tsx
```

Nếu có test đỏ, hãy debug và sửa code trước khi báo cáo xong việc.

Hãy xem xét thật kĩ TẤT CẢ các thẻ con trước khi trả về kết quả. Trả về toàn bộ code, không cần giải thích dài dòng.

```

---

### 🚀 PROMPT DÀNH CHO COMPONENT: Item

**VUI LÒNG COPY TOÀN BỘ NỘI DUNG DƯỚI ĐÂY GỬI CHO SONNET/CLAUDE:**

```text
Xin chào, tôi cần bạn refactor component `Item` theo Kiến Trúc "Zero-Specificity Contextual Sizing" và "Defensive Context" của dự án GLADVN.

📁 FILE LÀM VIỆC:
- Tầng Micro: `src/components/micro/item.tsx`
- Tầng Macro: Không có (Bỏ qua bước Macro)

🔥 NHIỆM VỤ Ở TẦNG MICRO:
1. Tạo React Context (Defensive Hook):
- Khởi tạo `const ItemContext = React.createContext(false);`
- Viết hook `useItemContext(componentName: string)`. Nếu giá trị context = false và đang ở dev mode, gọi `console.warn` với thông báo: `[gladvn] <${componentName}> phải được dùng bên trong <Item>`.

2. Cập nhật Thẻ Root:
- Xóa class `group/item` (nếu có) ra khỏi `cn()` của thẻ gốc.
- Bọc toàn bộ `children` bằng `<ItemContext value={true}>`.
- Khai báo bắt buộc `data-size={size}` và `data-slot="item"` trên thẻ Root.

3. Refactor Thẻ Con (Contextual Sizing với độ ưu tiên = 0):
- Thêm lời gọi hook `useItemContext('TênThẻ')` vào đầu mỗi component con.
- Tìm tất cả class cũ dạng: `group-data-[size=sm]/item:[class]`.
- Thay thế bằng: `"[:where([data-slot=item][data-size=sm]_&)]:[class]"`. (Tương tự cho md, lg).

🚨 CRITICAL RULES VÀ ĐIỂM CẦN ĐẶC BIỆT LƯU Ý Ở COMPONENT NÀY:
- THE ZERO-SPECIFICITY TRAP: Vì `:where()` có specificity = 0. Nếu bạn để sót bất kỳ class size mặc định nào ở chuỗi gốc (VD: p-4, text-sm, size-10), class mặc định đó (specificity = 10) SẼ LUÔN LUÔN đè bẹp `:where()`. BẠN PHẢI XÓA MỌI KÍCH THƯỚC MẶC ĐỊNH Ở CHUỖI BASE!
- KHÔNG dùng `group-data-*` cho sizing nữa.
- TUYỆT ĐỐI KHÔNG dùng `!important`. Không dùng CSS Variables để truyền size.
- 🎯 ĐIỂM CHẾT CỦA COMPONENT NÀY: `ItemMedia` đang bị gán cứng `size-10`, `ItemContent` là `gap-1`, `ItemDescription` là `text-sm`. TẤT CẢ các class mặc định này PHẢI BỊ XÓA và đưa vào `:where()`.


🌟 NHIỆM VỤ Ở TẦNG SHOWCASE (BẮT BUỘC):
- Mở file `app/pages/components/[tên-component].tsx` và `app/pages/components/macro/[tên-component]-preset.tsx` (nếu có).
- KHÔNG tạo các block `<ExampleSection>` riêng biệt chỉ để demo size (vì UI của thanh cài đặt global đã lo việc đó). Hãy xoá các section như "Small", "Medium", "Large" nếu chúng đang tồn tại.
- Hỗ trợ truyền `globalSize` từ `useDevContext()` xuống cho mọi component được render thay vì hardcode size.
- Phải demo ĐẦY ĐỦ tất cả các thẻ con (parts) được export từ component.

📋 BƯỚC 4: VIẾT VÀ CHẠY TEST (BẮT BUỘC)

Sau khi refactor xong, bạn PHẢI bổ sung các test case sau vào file `src/components/micro/item.test.tsx`. Nếu file không tồn tại, hãy tạo mới.

Test cần cover 3 trường hợp:
1. Happy Path: Không warn khi các thẻ con dùng bên trong `<Item>`.
2. Sad Path: Warn chính xác khi từng thẻ con dùng độc lập bên ngoài Context.
3. data-size Attribute: Thẻ Root phải xuất đúng `data-size` ra DOM.

```tsx
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
// import tất cả các thẻ con cần test

describe('Item - Defensive Context', () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnMock.mockRestore();
  });

  it('✅ KHÔNG warn khi thẻ con nằm trong Context', () => {
    render(
      <Item>
        {/* render các thẻ con ở đây */}
      </Item>
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  it('🚨 [Item] văng warn khi <ItemMedia> dùng ngoài Context', () => {
    render(<ItemMedia>test</ItemMedia>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <ItemMedia> phải được dùng bên trong')
    );
  });

  it('🚨 [Item] văng warn khi <ItemContent> dùng ngoài Context', () => {
    render(<ItemContent>test</ItemContent>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <ItemContent> phải được dùng bên trong')
    );
  });

  it('🚨 [Item] văng warn khi <ItemTitle> dùng ngoài Context', () => {
    render(<ItemTitle>test</ItemTitle>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <ItemTitle> phải được dùng bên trong')
    );
  });

  it('🚨 [Item] văng warn khi <ItemDescription> dùng ngoài Context', () => {
    render(<ItemDescription>test</ItemDescription>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <ItemDescription> phải được dùng bên trong')
    );
  });

  it('✅ Root có data-size đúng trên DOM', () => {
    const { getByTestId } = render(<Item size="lg" data-testid="root" />);
    expect(getByTestId('root')).toHaveAttribute('data-size', 'lg');
  });
});
```

Sau khi viết test xong, hãy chạy lệnh sau và xác nhận TẤT CẢ test đều xanh:

```bash
npx vitest run src/components/micro/item.test.tsx
```

Nếu có test đỏ, hãy debug và sửa code trước khi báo cáo xong việc.

Hãy xem xét thật kĩ TẤT CẢ các thẻ con trước khi trả về kết quả. Trả về toàn bộ code, không cần giải thích dài dòng.

```

---

### 🚀 PROMPT DÀNH CHO COMPONENT: RadioGroup

**VUI LÒNG COPY TOÀN BỘ NỘI DUNG DƯỚI ĐÂY GỬI CHO SONNET/CLAUDE:**

```text
Xin chào, tôi cần bạn refactor component `RadioGroup` theo Kiến Trúc "Zero-Specificity Contextual Sizing" và "Defensive Context" của dự án GLADVN.

📁 FILE LÀM VIỆC:
- Tầng Micro: `src/components/micro/radio-group.tsx`
- Tầng Macro: `src/components/macro/radio-group-preset.tsx`

🔥 NHIỆM VỤ Ở TẦNG MICRO:
1. Tạo React Context (Defensive Hook):
- Khởi tạo `const RadioGroupContext = React.createContext(false);`
- Viết hook `useRadioGroupContext(componentName: string)`. Nếu giá trị context = false và đang ở dev mode, gọi `console.warn` với thông báo: `[gladvn] <${componentName}> phải được dùng bên trong <RadioGroup>`.

2. Cập nhật Thẻ Root:
- Xóa class `group/radio-group` (nếu có) ra khỏi `cn()` của thẻ gốc.
- Bọc toàn bộ `children` bằng `<RadioGroupContext value={true}>`.
- Khai báo bắt buộc `data-size={size}` và `data-slot="radio-group"` trên thẻ Root.

3. Refactor Thẻ Con (Contextual Sizing với độ ưu tiên = 0):
- Thêm lời gọi hook `useRadioGroupContext('TênThẻ')` vào đầu mỗi component con.
- Tìm tất cả class cũ dạng: `group-data-[size=sm]/radio-group:[class]`.
- Thay thế bằng: `"[:where([data-slot=radio-group][data-size=sm]_&)]:[class]"`. (Tương tự cho md, lg).

🚨 CRITICAL RULES VÀ ĐIỂM CẦN ĐẶC BIỆT LƯU Ý Ở COMPONENT NÀY:
- THE ZERO-SPECIFICITY TRAP: Vì `:where()` có specificity = 0. Nếu bạn để sót bất kỳ class size mặc định nào ở chuỗi gốc (VD: p-4, text-sm, size-10), class mặc định đó (specificity = 10) SẼ LUÔN LUÔN đè bẹp `:where()`. BẠN PHẢI XÓA MỌI KÍCH THƯỚC MẶC ĐỊNH Ở CHUỖI BASE!
- KHÔNG dùng `group-data-*` cho sizing nữa.
- TUYỆT ĐỐI KHÔNG dùng `!important`. Không dùng CSS Variables để truyền size.
- 🎯 ĐIỂM CHẾT CỦA COMPONENT NÀY: Vòng tròn hiển thị (Indicator) đang bị hardcode `size-4` (vòng ngoài) và `size-2` (vòng trong). Bạn PHẢI XÓA hai class này ở chuỗi cn() cơ bản và định nghĩa toàn bộ size thông qua `:where()`.

🛠 NHIỆM VỤ Ở TẦNG MACRO (Consumer):
- Khẳng định file macro ĐANG truyền trực tiếp `size={size}` xuống thẻ Micro Root.
- Nếu Macro đang tự tính toán các class dư thừa như `text-sm`, `size-10` và truyền vào thẻ con, HÃY XÓA CHÚNG ĐI. Thẻ con ở Micro bây giờ đã tự biết cách scale thông qua `:where()`. Đừng để Macro can thiệp style của con nữa.


🌟 NHIỆM VỤ Ở TẦNG SHOWCASE (BẮT BUỘC):
- Mở file `app/pages/components/[tên-component].tsx` và `app/pages/components/macro/[tên-component]-preset.tsx` (nếu có).
- KHÔNG tạo các block `<ExampleSection>` riêng biệt chỉ để demo size (vì UI của thanh cài đặt global đã lo việc đó). Hãy xoá các section như "Small", "Medium", "Large" nếu chúng đang tồn tại.
- Hỗ trợ truyền `globalSize` từ `useDevContext()` xuống cho mọi component được render thay vì hardcode size.
- Phải demo ĐẦY ĐỦ tất cả các thẻ con (parts) được export từ component.

📋 BƯỚC 4: VIẾT VÀ CHẠY TEST (BẮT BUỘC)

Sau khi refactor xong, bạn PHẢI bổ sung các test case sau vào file `src/components/micro/radio-group.test.tsx`. Nếu file không tồn tại, hãy tạo mới.

Test cần cover 3 trường hợp:
1. Happy Path: Không warn khi các thẻ con dùng bên trong `<RadioGroup>`.
2. Sad Path: Warn chính xác khi từng thẻ con dùng độc lập bên ngoài Context.
3. data-size Attribute: Thẻ Root phải xuất đúng `data-size` ra DOM.

```tsx
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
// import tất cả các thẻ con cần test

describe('RadioGroup - Defensive Context', () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnMock.mockRestore();
  });

  it('✅ KHÔNG warn khi thẻ con nằm trong Context', () => {
    render(
      <RadioGroup>
        {/* render các thẻ con ở đây */}
      </RadioGroup>
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  it('🚨 [RadioGroup] văng warn khi <RadioGroupItem> dùng ngoài Context', () => {
    render(<RadioGroupItem>test</RadioGroupItem>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <RadioGroupItem> phải được dùng bên trong')
    );
  });

  it('🚨 [RadioGroup] văng warn khi <RadioGroupIndicator> dùng ngoài Context', () => {
    render(<RadioGroupIndicator>test</RadioGroupIndicator>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining('[gladvn] <RadioGroupIndicator> phải được dùng bên trong')
    );
  });

  it('✅ Root có data-size đúng trên DOM', () => {
    const { getByTestId } = render(<RadioGroup size="lg" data-testid="root" />);
    expect(getByTestId('root')).toHaveAttribute('data-size', 'lg');
  });
});
```

Sau khi viết test xong, hãy chạy lệnh sau và xác nhận TẤT CẢ test đều xanh:

```bash
npx vitest run src/components/micro/radio-group.test.tsx
```

Nếu có test đỏ, hãy debug và sửa code trước khi báo cáo xong việc.

Hãy xem xét thật kĩ TẤT CẢ các thẻ con trước khi trả về kết quả. Trả về toàn bộ code, không cần giải thích dài dòng.

```

---

```
