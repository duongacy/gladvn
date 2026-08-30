# Development Guide

Tài liệu này cung cấp các hướng dẫn phát triển và kiểm thử dự án Gladvn.

## Yêu cầu Môi Trường (Prerequisites)
- Node.js >= 18
- `pnpm` >= 10.11.0 (Bắt buộc dùng `pnpm` do có cấu hình `pnpm-lock.yaml`).

## Cài đặt (Installation)
Chạy lệnh sau tại thư mục gốc:
```bash
pnpm install
```

## Các Lệnh Hữu Ích (Scripts)

- `npm run dev` (hoặc `pnpm dev`): Khởi động Vite server để xem và dev các components nội bộ (Showcase app). Chạy tại `http://localhost:5173`.
- `npm run build`: Build toàn bộ project ra folder `dist-app/` và `dist/`.
- `npm run typecheck`: Chạy Typescript Checker (`tsc --noEmit`). Rất quan trọng trước khi commit.
- `npm run test`: Chạy Unit tests qua Vitest cho toàn bộ các file `.test.tsx`.
- `npm run test:e2e`: Chạy E2E tests qua Playwright (Component Testing).

## Quy Trình (Workflow) Khi Sửa Component Mới

1. Mở file Component ở `src/components/micro/[name].tsx` (Ví dụ `badge.tsx`).
2. Sửa logic hoặc style theo các Rule trong `.agents/AGENTS.md`.
3. Cập nhật trang Showcase ở `src/dev/showcase/[name].tsx` để phản ánh thay đổi (đảm bảo hiển thị đủ các variants, colors).
4. Sửa Unit Tests ở `src/components/micro/[name].test.tsx` (nếu cần).
5. Sửa E2E Tests ở `tests/components/[name].spec.tsx` (nếu cần).
6. Chạy `npm run typecheck && npm run test` để xác minh.
7. Commit và tạo PR (hoặc push thẳng lên `main` tuỳ thuộc quyền truy cập).

## CI/CD Pipeline
Dự án được kết nối với GitHub Actions (`.github/workflows/ci.yml`). Bất kỳ pull request hoặc push nào lên branch `main` đều sẽ bị block nếu:
- Oxlint báo lỗi cú pháp.
- TSC (Typecheck) báo lỗi kiểu dữ liệu.
- Vitest (Unit Test) hoặc Playwright (E2E Test) bị thất bại.

Để deploy version mới lên NPM, người quản trị chạy:
```bash
npm version patch && npm publish
```
