import React from "react";

import { Skeleton } from "../../components/micro/skeleton";
import { useI18n } from "../components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsH3,
  DocsP,
  DocsCode,
} from "../components/showcase";

function useSkeletonExamples() {
  const t = useI18n();

  return React.useMemo(
    () => [
      {
        title: t("Hình dáng cơ bản", "Basic Shapes"),
        description: t(
          "Thay đổi hình dạng thông qua các class Tailwind: w-..., h-..., rounded-full, v.v.",
          "Change shapes via Tailwind classes: w-..., h-..., rounded-full, etc."
        ),
        microCode: `<div className="flex flex-wrap items-center gap-6 w-full p-4 border border-border rounded-lg bg-card">
  <Skeleton className="h-4 w-48" />
  <Skeleton className="h-4 w-32" />
  <Skeleton className="h-4 w-64" />
  <Skeleton className="size-12 rounded-full" />
  <Skeleton className="h-24 w-40 rounded-xl" />
  <Skeleton className="h-10 w-24 rounded-md" />
</div>`,
        microPreview: (
          <div className="flex flex-wrap items-center gap-6 w-full p-4 border border-border rounded-lg bg-card">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-64" />
            <Skeleton className="size-12 rounded-full" />
            <Skeleton className="h-24 w-40 rounded-xl" />
            <Skeleton className="h-10 w-24 rounded-md" />
          </div>
        ),
      },
      {
        title: "Card Profile",
        description: t(
          "Khung xương mô phỏng ảnh đại diện, tên người dùng và số liệu.",
          "Skeleton simulating an avatar, username, and metrics."
        ),
        microCode: `<div className="space-y-6 w-full max-w-sm rounded-lg border border-border bg-card p-4">
  <div className="flex items-center space-x-4">
    <Skeleton className="h-12 w-12 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-50" />
      <Skeleton className="h-4 w-[150px]" />
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4">
    <Skeleton className="h-24 rounded-xl" />
    <Skeleton className="h-24 rounded-xl" />
  </div>
</div>`,
        microPreview: (
          <div className="space-y-6 w-full max-w-sm rounded-lg border border-border bg-card p-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-50" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-24 rounded-xl" />
              <Skeleton className="h-24 rounded-xl" />
            </div>
          </div>
        ),
      },
      {
        title: "Article / Blog Post",
        description: t(
          "Khung xương mô phỏng các đoạn văn bản (text blocks).",
          "Skeleton simulating text blocks."
        ),
        microCode: `<div className="space-y-4 w-full max-w-sm rounded-lg border border-border bg-card p-4">
  <Skeleton className="h-6 w-3/4" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-5/6" />
  <div className="pt-2" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-4/5" />
  <Skeleton className="h-4 w-2/3" />
</div>`,
        microPreview: (
          <div className="space-y-4 w-full max-w-sm rounded-lg border border-border bg-card p-4">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="pt-2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ),
      },
      {
        title: "List Items / Table Rows",
        description: t(
          "Sử dụng vòng lặp hoặc nhiều thẻ lặp lại để mô phỏng danh sách.",
          "Use loops or multiple repeated tags to simulate a list."
        ),
        microCode: `<div className="space-y-4 w-full max-w-sm rounded-lg border border-border bg-card p-4">
  <div className="flex items-center space-x-4">
    <Skeleton className="h-8 w-8 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-3 w-45" />
      <Skeleton className="h-3 w-25" />
    </div>
  </div>
  <div className="flex items-center space-x-4">
    <Skeleton className="h-8 w-8 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-3 w-[150px]" />
      <Skeleton className="h-3 w-30" />
    </div>
  </div>
  <div className="flex items-center space-x-4">
    <Skeleton className="h-8 w-8 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-3 w-[170px]" />
      <Skeleton className="h-3 w-[90px]" />
    </div>
  </div>
</div>`,
        microPreview: (
          <div className="space-y-4 w-full max-w-sm rounded-lg border border-border bg-card p-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-45" />
                <Skeleton className="h-3 w-25" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-[150px]" />
                <Skeleton className="h-3 w-30" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-[170px]" />
                <Skeleton className="h-3 w-[90px]" />
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Media / Image Placeholder",
        description: t(
          "Khung xương lớn mô phỏng hình ảnh hoặc video player.",
          "Large skeleton simulating an image or video player."
        ),
        microCode: `<div className="space-y-4 w-full max-w-sm rounded-lg border border-border bg-card p-4">
  <Skeleton className="h-48 w-full rounded-md" />
  <div className="flex justify-between items-center pt-2">
    <div className="space-y-2">
      <Skeleton className="h-4 w-[150px]" />
      <Skeleton className="h-3 w-25" />
    </div>
    <Skeleton className="h-8 w-16 rounded-md" />
  </div>
</div>`,
        microPreview: (
          <div className="space-y-4 w-full max-w-sm rounded-lg border border-border bg-card p-4">
            <Skeleton className="h-48 w-full rounded-md" />
            <div className="flex justify-between items-center pt-2">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-3 w-25" />
              </div>
              <Skeleton className="h-8 w-16 rounded-md" />
            </div>
          </div>
        ),
      },
    ],
    [t]
  );
}

export default function SkeletonShowcase() {
  const t = useI18n();
  const examples = useSkeletonExamples();

  return (
    <ConfigurableShowcase
      title="Skeleton"
      description={t(
        "Thành phần tạo ra hiệu ứng nhấp nháy, mô phỏng bố cục hiển thị để giữ chỗ (placeholder) trong khi chờ dữ liệu đang tải.",
        "A component that creates a pulsing effect, simulating the layout placeholder while waiting for data to load."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsH3>Skeleton</DocsH3>
          <DocsP>
            {t(
              <>
                <DocsCode>Skeleton</DocsCode> không có phiên bản Macro. Nó là
                một thẻ <DocsCode>div</DocsCode> có sẵn hiệu ứng nhấp nháy mờ
                (pulse animation). Bạn kết hợp với Tailwind CSS classes (chiều
                cao, chiều rộng, bo góc) để mô phỏng hình dáng của nội dung chưa
                được tải xong.
              </>,
              <>
                <DocsCode>Skeleton</DocsCode> does not have a Macro version. It
                is a <DocsCode>div</DocsCode> tag with a built-in pulse
                animation. You combine it with Tailwind CSS classes (height,
                width, border radius) to simulate the shape of the content that
                has not finished loading.
              </>
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
