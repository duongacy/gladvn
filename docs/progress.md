# 📊 GLADVN — Progress Tracker

> File này theo dõi tiến độ thực hiện [ROADMAP.md](./ROADMAP.md).
> Cập nhật sau mỗi task hoàn thành.
> **Quy ước:** `[ ]` = chưa làm · `[/]` = đang làm · `[x]` = hoàn tất

---

## Phase 0: Brand Identity & Positioning ✅ HOÀN TẤT

**Deliverable:** [`docs/brand.md`](./brand.md)

- [x] 0.1 — Xác định USP (5 điểm khác biệt so với shadcn/ui)
- [x] 0.2 — Tagline: *"Composable React components. From primitive to preset — you choose."*
- [x] 0.3 — Comparison table (gladvn vs shadcn vs MUI)
- [x] 0.4 — Wireframe trang "Why gladvn?" (`/why`)

---

## Phase 1: Package Hygiene 🔴 CRITICAL — ✅ HOÀN TẤT

- [x] 1.1 — Di chuyển `shiki`, `@fontsource/inter`, `prettier`, `@trivago/...` → `devDependencies`
- [x] 1.2 — Xóa library build fields (`main`, `module`, `types`, `exports`)
- [x] 1.3 — Thống nhất pnpm: xóa `package-lock.json`, thêm `"packageManager"` field
- [x] 1.4 — Thêm scripts: `test:e2e`, `typecheck`
- [x] 1.5 — Cập nhật `llms.txt` → CLI-only import paths
- [x] 1.6 — Cập nhật `description` trong `package.json`
- [x] 1.7 — Smart dependency install trong CLI (`bin/cli.js`)

---

## Phase 2: Open Source Standards 🟠 HIGH — ✅ HOÀN TẤT

- [x] 2.1 — Tạo `LICENSE` (MIT)
- [x] 2.2 — Tạo `CONTRIBUTING.md`
- [x] 2.3 — Tạo `CHANGELOG.md`
- [x] 2.4 — Tạo `CODE_OF_CONDUCT.md`
- [x] 2.5 — Tạo `.github/ISSUE_TEMPLATE/bug_report.yml`
- [x] 2.6 — Tạo `.github/ISSUE_TEMPLATE/feature_request.yml`
- [x] 2.7 — Tạo `.github/PULL_REQUEST_TEMPLATE.md`
- [x] 2.8 — Viết lại `README.md` (dùng brand.md làm nguồn)

---

## Phase 3: Testing Architecture 🟠 HIGH — Đang thực hiện
### 3A — Test Strategy
- [x] 3A.1 — Risk-based analysis (55 micro + 17 macro)
- [x] 3A.2 — Test strategy document
- [x] 3A.3 — Coverage targets

### 3B — Unit Tests
- [x] 3B.1 — `src/lib/utils.test.ts`
- [x] 3B.2 — `src/hooks/use-mobile.test.ts`
- [x] 3B.3 — Mở rộng `button.test.tsx`

### 3C — Component Tests (Top 15)
- [x] 3C.1 — Button (mở rộng)
- [x] 3C.2 — Input
- [x] 3C.3 — Select
- [x] 3C.4 — Dialog
- [x] 3C.5 — Dropdown Menu
- [x] 3C.6 — Checkbox
- [x] 3C.7 — Switch
- [x] 3C.8 — Tabs
- [x] 3C.9 — Tooltip
- [x] 3C.10 — Badge
- [x] 3C.11 — Card
- [x] 3C.12 — Alert
- [x] 3C.13 — Accordion
- [x] 3C.14 — Popover
- [x] 3C.15 — Sheet

### 3D — CLI Integration Tests
- [x] 3D.1 — CLI smoke test
- [x] 3D.2 — CLI dependency test
- [x] 3D.3 — CLI TypeScript compatibility test

### 3E — E2E Tests (Playwright)
- [x] 3E.1 — Viết lại `showcase.spec.ts`
- [x] 3E.2 — Keyboard navigation E2E
- [x] 3E.3 — Visual regression

---

## Phase 4: CI/CD Pipeline 🟡 MEDIUM — ✅ HOÀN TẤT

- [x] 4.1 — Cập nhật `.github/workflows/ci.yml` (pnpm)
- [x] 4.2 — Thêm CLI smoke test job vào CI
- [x] 4.3 — Thêm E2E test job vào CI
- [x] 4.4 — Vercel Preview Deployments
- [x] 4.5 — Automated npm publish workflow

---

## Phase 5: Developer Experience Polish 🟢 NICE-TO-HAVE — Chưa bắt đầu

- [ ] 5.1 — JSDoc cho Top 15 components
- [ ] 5.2 — Dọn file rác ở root
- [ ] 5.3 — Dọn thư mục `scripts/`
- [ ] 5.4 — CLI `add` command (`npx gladvn add button`)
- [ ] 5.5 — Trang "Why gladvn?" trên Showcase

---

## Lịch sử cập nhật

| Ngày | Phase | Cập nhật |
|------|-------|----------|
| 2026-07-24 | Phase 0 | Hoàn tất toàn bộ 4 tasks. Tagline E + USP #3 được chọn. |
| 2026-07-24 | Phase 1 & 2 | Hoàn tất dọn dẹp package và chuẩn hóa mã nguồn mở. CLI support smart deps. |
| 2026-07-24 | Phase 3 | Hoàn tất 3A (Test Strategy) và 3B (Unit Tests). Cài đặt thành công Vitest, React Testing Library. |
| 2026-07-24 | Phase 3 | Hoàn tất 3C (Component Tests) đạt 100/100 điểm review. Hoàn tất 3D (CLI Integration Tests). |
| 2026-07-24 | Phase 3 | Hoàn tất 3E (E2E Tests) với Playwright (Showcase, Keyboard navigation, Visual regression). |
| 2026-07-24 | Phase 4 | Hoàn tất thiết lập CI/CD (GitHub Actions) cho luồng test tự động và tự động publish NPM. Vercel tự động handle Preview URLs. |
