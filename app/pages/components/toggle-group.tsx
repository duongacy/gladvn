import React from "react";
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/micro/toggle-group";
import { useI18n, useDevContext } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsH3,
  DocsP,
  DocsCode,
} from "~app/components/showcase";

function useToggleGroupExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: "Single Selection",
        description: t(
          "Chỉ có một mục có thể hoạt động tại một thời điểm.",
          "Only one item can be active at a time."
        ),
        microCode: `<ToggleGroup defaultValue={["center"]}>
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeftIcon />
  </ToggleGroupItem>
  <ToggleGroupItem
    value="center"
    aria-label="Align center"
  >
    <AlignCenterIcon />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRightIcon />
  </ToggleGroupItem>
</ToggleGroup>`,
        microPreview: (
          <ToggleGroup defaultValue={["center"]} size={globalSize}>
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeftIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenterIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRightIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        ),
      },
      {
        title: "Multiple Selection",
        description: t(
          "Nhiều mục có thể được kích hoạt đồng thời.",
          "Multiple items can be active simultaneously."
        ),
        microCode: `<ToggleGroup defaultValue={["bold", "italic"]}>
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <BoldIcon />
  </ToggleGroupItem>
  <ToggleGroupItem
    value="italic"
    aria-label="Toggle italic"
  >
    <ItalicIcon />
  </ToggleGroupItem>
  <ToggleGroupItem
    value="underline"
    aria-label="Toggle underline"
  >
    <UnderlineIcon />
  </ToggleGroupItem>
</ToggleGroup>`,
        microPreview: (
          <ToggleGroup defaultValue={["bold", "italic"]} size={globalSize}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <BoldIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <ItalicIcon />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="underline"
              aria-label="Toggle underline"
            >
              <UnderlineIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        ),
      },
      {
        title: "Outline Variant",
        description: t(
          'variant="outline" — viền bao quanh từng item.',
          'variant="outline" — border around each item.'
        ),
        microCode: `<ToggleGroup variant="outline">
  <ToggleGroupItem value="bold" aria-label="Bold">
    <BoldIcon />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Italic">
    <ItalicIcon />
  </ToggleGroupItem>
  <ToggleGroupItem
    value="underline"
    aria-label="Underline"
  >
    <UnderlineIcon />
  </ToggleGroupItem>
</ToggleGroup>`,
        microPreview: (
          <ToggleGroup variant="outline" size={globalSize}>
            <ToggleGroupItem value="bold" aria-label="Bold">
              <BoldIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <ItalicIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <UnderlineIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        ),
      },
      {
        title: "Compact (spacing={0})",
        description: t(
          "spacing={0} — các nút dính liền nhau, phù hợp với toolbar.",
          "spacing={0} — items stick together, suitable for toolbars."
        ),
        microCode: `<ToggleGroup variant="outline" spacing={0}>
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeftIcon />
  </ToggleGroupItem>
  <ToggleGroupItem
    value="center"
    aria-label="Align center"
  >
    <AlignCenterIcon />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRightIcon />
  </ToggleGroupItem>
</ToggleGroup>`,
        microPreview: (
          <ToggleGroup variant="outline" spacing={0} size={globalSize}>
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeftIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenterIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRightIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        ),
      },
      {
        title: "Vertical",
        description: t(
          'orientation="vertical" — sắp xếp các nút theo chiều dọc.',
          'orientation="vertical" — arrange items vertically.'
        ),
        microCode: `<ToggleGroup orientation="vertical">
  <ToggleGroupItem value="bold" aria-label="Bold">
    <BoldIcon />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Italic">
    <ItalicIcon />
  </ToggleGroupItem>
  <ToggleGroupItem
    value="underline"
    aria-label="Underline"
  >
    <UnderlineIcon />
  </ToggleGroupItem>
</ToggleGroup>`,
        microPreview: (
          <ToggleGroup orientation="vertical" size={globalSize}>
            <ToggleGroupItem value="bold" aria-label="Bold">
              <BoldIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <ItalicIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <UnderlineIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        ),
      },
      {
        title: "Disabled Items",
        description: t(
          "Từng ToggleGroupItem có thể bị vô hiệu hóa riêng lẻ.",
          "Each ToggleGroupItem can be disabled individually."
        ),
        microCode: `<ToggleGroup>
  <ToggleGroupItem value="bold" aria-label="Bold">
    <BoldIcon />
  </ToggleGroupItem>
  <ToggleGroupItem
    value="italic"
    disabled
    aria-label="Italic (disabled)"
  >
    <ItalicIcon />
  </ToggleGroupItem>
  <ToggleGroupItem
    value="underline"
    aria-label="Underline"
  >
    <UnderlineIcon />
  </ToggleGroupItem>
</ToggleGroup>`,
        microPreview: (
          <ToggleGroup size={globalSize}>
            <ToggleGroupItem value="bold" aria-label="Bold">
              <BoldIcon />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="italic"
              disabled
              aria-label="Italic (disabled)"
            >
              <ItalicIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <UnderlineIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        ),
      },
    ],
    [t, globalSize]
  );
}

export default function ToggleGroupShowcase() {
  const t = useI18n();
  const examples = useToggleGroupExamples();

  return (
    <ConfigurableShowcase
      title="Toggle Group"
      description={t(
        "Một tập hợp các nút hai trạng thái có thể bật hoặc tắt, hỗ trợ đơn và đa lựa chọn.",
        "A set of two-state buttons that can be toggled on or off, supporting single and multiple selection."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsH3>Toggle Group</DocsH3>
          <DocsP>
            <DocsCode>ToggleGroup</DocsCode> nhóm nhiều{" "}
            <DocsCode>ToggleGroupItem</DocsCode> lại với nhau. Props{" "}
            <DocsCode>variant</DocsCode> {t("và", "and")}{" "}
            <DocsCode>size</DocsCode>{" "}
            {t(
              "được truyền qua Context xuống tất cả items — không cần set trên từng item. Dùng",
              "are passed down via Context to all items — no need to set on each item. Use"
            )}{" "}
            <DocsCode>{"spacing={0}"}</DocsCode>{" "}
            {t(
              "để tạo toolbar compact với các nút dính liền nhau.",
              "to create a compact toolbar with adjacent buttons."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
