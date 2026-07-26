import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon
} from "lucide-react";

import {
  ToggleGroup,
  ToggleGroupItem
} from "../../components/micro/toggle-group";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  ShowcaseExample,
  Showcase,
  ShowcaseDocs
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function ToggleGroupMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="Single Selection" description="Chỉ có một mục có thể hoạt động tại một thời điểm." code={`<ToggleGroup defaultValue={["center"]}>
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
  </ToggleGroup>`} preview={
                      <>
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
                      </>
                    } />

        <ShowcaseExample title="Multiple Selection" description="Nhiều mục có thể được kích hoạt đồng thời." code={`<ToggleGroup defaultValue={["bold", "italic"]}>
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
  </ToggleGroup>`} preview={
                      <>
              <ToggleGroup defaultValue={["bold", "italic"]} size={globalSize}>
                          <ToggleGroupItem value="bold" aria-label="Toggle bold">
                            <BoldIcon />
                          </ToggleGroupItem>
                          <ToggleGroupItem value="italic" aria-label="Toggle italic">
                            <ItalicIcon />
                          </ToggleGroupItem>
                          <ToggleGroupItem value="underline" aria-label="Toggle underline">
                            <UnderlineIcon />
                          </ToggleGroupItem>
                        </ToggleGroup>
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="Outline Variant" description='variant="outline" — viền bao quanh từng item.' code={`<ToggleGroup variant="outline">
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
  </ToggleGroup>`} preview={
                      <>
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
                      </>
                    } />

        <ShowcaseExample title="Compact (spacing={0})" description="spacing={0} — các nút dính liền nhau, phù hợp với toolbar." code={`<ToggleGroup variant="outline" spacing={0}>
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
  </ToggleGroup>`} preview={
                      <>
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
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="Vertical" description='orientation="vertical" — sắp xếp các nút theo chiều dọc.' code={`<ToggleGroup orientation="vertical">
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
  </ToggleGroup>`} preview={
                      <>
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
                      </>
                    } />

        <ShowcaseExample title="Disabled Items" description="Từng ToggleGroupItem có thể bị vô hiệu hóa riêng lẻ." code={`<ToggleGroup>
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
  </ToggleGroup>`} preview={
                      <>
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
                      </>
                    } />
      </ExampleGrid>
    </div>
  );
}

export default function ToggleGroupShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Toggle Group"
      description="Một tập hợp các nút hai trạng thái có thể bật hoặc tắt, hỗ trợ đơn và đa lựa chọn."
      guideline={
        <ShowcaseDocs>
          <DocsH3>Toggle Group</DocsH3>
          <DocsP>
            <DocsCode>ToggleGroup</DocsCode> nhóm nhiều{" "}
            <DocsCode>ToggleGroupItem</DocsCode> lại với nhau. Props{" "}
            <DocsCode>variant</DocsCode> và <DocsCode>size</DocsCode> được
            truyền qua Context xuống tất cả items — không cần set trên từng
            item. Dùng <DocsCode>{"spacing={0}"}</DocsCode> để tạo toolbar
            compact với các nút dính liền nhau.
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <ToggleGroupMicroShowcase globalSize={globalSize} /> }}
    />
  );
}
