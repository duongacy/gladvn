# Source Tree Analysis

Dưới đây là cấu trúc thư mục của Gladvn và giải thích chi tiết chức năng của các thư mục quan trọng.

```text
gladvn/
├── bin/                   # Entry point của CLI (gladvn). Được gọi khi user chạy npx gladvn.
│   └── cli.js             # Code chạy logic CLI: copy component, cài đặt CSS, xử lý prompt.
├── docs/                  # Tài liệu hệ thống và workflow cho AI agents.
├── scripts/               # Các shell/node scripts hỗ trợ quy trình release, update và maintenance nội bộ.
├── src/
│   ├── components/        # **Thư mục quan trọng nhất**. Chứa toàn bộ source code của các UI Components.
│   │   ├── macro/         # Smart/Composite components (Các form preset, layout khối lượng lớn).
│   │   └── micro/         # Dumb/Presentational primitives (Button, Card, Input).
│   ├── dev/               # Vite App nội bộ dùng để preview/showcase components (Dev Environment).
│   │   ├── showcase/      # Các trang showcase cụ thể cho từng component.
│   │   ├── sections/      # Layout blocks của trang Dev App.
│   │   ├── components/    # Components dành riêng cho trang tài liệu/dev (VD: BlockViewer).
│   │   └── data.ts        # Data giả (mock data) phục vụ cho preview.
│   ├── hooks/             # Các custom React Hooks (VD: use-mobile.ts, use-controllable-state.ts).
│   ├── lib/               # Các hàm tiện ích. Nổi bật nhất là utils.ts (chứa hàm `cn` gộp class Tailwind).
│   └── styles/            # Các file CSS lõi.
│       ├── gladvn.css     # Định nghĩa các utility classes đặc biệt.
│       └── tokens.css     # Định nghĩa biến màu sắc CSS (CSS Variables theo HSL).
├── test/                  # Chứa script test tự động của CLI (chạy qua Bash/Node.js).
├── tests/                 # Playwright E2E Tests. Kiểm thử tương tác và chức năng trên browser (Component Testing).
├── vite.config.ts         # Cấu hình Vite dùng cho trang Dev (Showcase).
└── vitest.config.ts       # Cấu hình Vitest cho Unit Tests.
```

## Các Thư Mục & File Trọng Điểm

### `src/components/` (Trái Tim Của Dự Án)
Đây là nơi chứa tất cả các module mà CLI sẽ sao chép vào dự án của User. 
- Mọi component đều phải là độc lập (hoặc chỉ phụ thuộc vào lib/utils.ts và thư viện Headless UI).
- Không được phụ thuộc ngược vào môi trường `dev/`.

### `src/dev/` (Showcase App)
- Ứng dụng React nội bộ được Vite build để chạy trên `https://gladvn.vercel.app` (nếu deploy).
- Các file `src/dev/showcase/[component].tsx` đóng vai trò là "Phòng thí nghiệm", trình diễn đầy đủ mọi Use Cases, Sizes, Variants, Colors của một component. (Nơi AI Agent được yêu cầu không được dùng "Magic CSS" hay chèn logic sai lệch).

### `bin/cli.js` (CLI Runner)
- Trách nhiệm của file này là xử lý tương tác qua Terminal, tự động sinh ra file/folder `components/` tại project đích của user. 
- File này **Đã Bị Khóa (Feature Freeze)**. Tuyệt đối không được chỉnh sửa.

### `tests/` vs `src/**/*.test.tsx`
- **Unit Tests:** Đặt trực tiếp cạnh file component (Ví dụ: `button.test.tsx`), sử dụng `@testing-library/react` và Vitest.
- **E2E Tests:** Nằm ở thư mục `tests/`, sử dụng Playwright (thường là Playwright CT để mount trực tiếp component trên trình duyệt thật).
