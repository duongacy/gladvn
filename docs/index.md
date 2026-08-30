# BMad Project Documentation Index

Bộ tài liệu này được tạo ra để cung cấp **ngữ cảnh** (context) toàn diện về dự án `gladvn` cho AI Agent và con người, được sinh ra từ quy trình `bmad-document-project` (Exhaustive Scan).

## Project Overview

- **Tên dự án:** Gladvn
- **Loại hình:** React UI Component Library / CLI Code Generator (Monolith)
- **Ngôn ngữ chính:** TypeScript, TSX
- **Kiến trúc:** Layered (Micro/Macro UI Pattern)
- **Styling:** Tailwind CSS v4

## Quick Reference

- **Tech Stack:** React 19, Tailwind v4, Base UI, Radix UI, Zustand.
- **Entry Point (CLI):** `bin/cli.js`
- **Component Root:** `src/components/`

## Generated Documentation

- [Project Overview](./project-overview.md) - Mục tiêu, Tech stack cơ bản.
- [Architecture](./architecture.md) - Giải thích 22 Nguyên tắc, CSS Styling Rules và Phân tầng Macro/Micro.
- [Source Tree Analysis](./source-tree-analysis.md) - Cây thư mục và nhiệm vụ của từng Folder/File trọng điểm.
- [Component Inventory](./component-inventory.md) - Danh mục toàn bộ Micro và Macro Components.
- [Development Guide](./development-guide.md) - Hướng dẫn dev, test, lint, và build CLI.

## Existing Documentation (Found in Root)

- [README.md](../README.md) - Thông tin giới thiệu project chung trên Github.
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Hướng dẫn tham gia đóng góp cho repository.
- [CHANGELOG.md](../CHANGELOG.md) - Lịch sử cập nhật version.

## Getting Started

1. Tham khảo **[Architecture](./architecture.md)** để hiểu các quy định cứng (như Interaction Lock, Không dùng "Magic CSS", Phân tầng component).
2. Khi muốn thao tác lên một component cụ thể, tra cứu **[Component Inventory](./component-inventory.md)** để nắm rõ hệ thống đang có gì.
3. Chạy môi trường bằng lệnh `npm run dev` theo hướng dẫn trong **[Development Guide](./development-guide.md)**.
