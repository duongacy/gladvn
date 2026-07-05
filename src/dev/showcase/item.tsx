import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { CheckIcon, HeartIcon, MoreVerticalIcon, UserIcon } from "lucide-react";
import { type Size } from "@/lib/types";
import { Item, ItemGroup, ItemHeader, ItemFooter, ItemSeparator, ItemMedia, ItemActions, ItemContent, ItemTitle, ItemDescription } from "@/components/micro/item";
import { Button } from "@/components/micro/button";
import { SelectPreset } from "@/components/macro/select-preset";

export default function ItemShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>(
    "md",
  );

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Item"
        description="Một vùng chứa linh hoạt cho các mục danh sách hoặc khối nội dung có cấu trúc."
      >
        <SelectPreset
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
          className="w-[120px] h-8 text-xs bg-background"
        />
      </SectionHeader>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Basic Content"
          description="Một mục có cấu trúc với tiêu đề và mô tả."
        >
          <Item size={globalSize} className="w-full">
            <ItemContent>
              <ItemTitle>Basic Item Content</ItemTitle>
              <ItemDescription>
                This item shows structured text.
              </ItemDescription>
            </ItemContent>
          </Item>
        </ExampleSection>

        <ExampleSection
          label="With Media"
          description="Vật phẩm có biểu tượng hoặc hình đại diện."
        >
          <Item size={globalSize} className="w-full">
            <ItemMedia className="bg-primary/10 text-primary rounded-md p-2">
              <UserIcon className="size-4" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>User Profile</ItemTitle>
              <ItemDescription>Manage your account</ItemDescription>
            </ItemContent>
          </Item>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Variants"
          description="Các phong cách hình ảnh khác nhau (phác thảo, tắt tiếng)."
        >
          <div className="flex flex-col gap-3 w-full">
            <Item variant="outline" size={globalSize}>
              <ItemContent>
                <ItemTitle>Outline Variant</ItemTitle>
              </ItemContent>
            </Item>
            <Item variant="muted" size={globalSize}>
              <ItemContent>
                <ItemTitle>Muted Variant</ItemTitle>
              </ItemContent>
            </Item>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Media Variants"
          description="Mục có thể được tạo kiểu cho phương tiện cụ thể như biểu tượng hoặc hình ảnh."
        >
          <div className="flex flex-col gap-3 w-full">
            <Item size={globalSize}>
              <ItemMedia variant="icon" className="bg-primary/10 text-primary">
                <CheckIcon className="size-4" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Icon Variant</ItemTitle>
              </ItemContent>
            </Item>
            <Item size={globalSize}>
              <ItemMedia variant="image" className="bg-muted">
                <UserIcon className="size-4 text-muted-foreground" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Image Variant</ItemTitle>
              </ItemContent>
            </Item>
          </div>
        </ExampleSection>

        <ExampleSection
          label="With Actions"
          description="Mục có các nút hành động ở cuối."
        >
          <Item size={globalSize} className="w-full">
            <ItemContent>
              <ItemTitle>Actionable Item</ItemTitle>
            </ItemContent>
            <ItemActions>
              <Button variant="ghost" size="sm" className="size-8 p-0">
                <HeartIcon className="size-4" />
              </Button>
              <Button variant="ghost" size="sm" className="size-8 p-0">
                <MoreVerticalIcon className="size-4" />
              </Button>
            </ItemActions>
          </Item>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Item Group"
        description="Các mục được nhóm bằng dấu phân cách."
      >
        <ItemGroup className="w-full max-w-sm mx-auto">
          <Item size={globalSize}>
            <ItemContent>
              <ItemTitle>Account Settings</ItemTitle>
            </ItemContent>
          </Item>
          <ItemSeparator />
          <Item size={globalSize}>
            <ItemContent>
              <ItemTitle>Notification Preferences</ItemTitle>
            </ItemContent>
          </Item>
          <ItemSeparator />
          <Item size={globalSize}>
            <ItemContent>
              <ItemTitle className="text-destructive">Delete Account</ItemTitle>
            </ItemContent>
          </Item>
        </ItemGroup>
      </ExampleSection>

      <ExampleSection
        label="With Header and Footer"
        description="Mục phức tạp với các vùng vị trí cụ thể."
      >
        <Item
          size={globalSize}
          className="w-full max-w-sm mx-auto flex-col items-start gap-2"
        >
          <ItemHeader className="text-xs text-muted-foreground">
            Order #12345
          </ItemHeader>
          <ItemContent>
            <ItemTitle>Mechanical Keyboard v2</ItemTitle>
          </ItemContent>
          <ItemFooter className="text-xs text-success flex items-center gap-1">
            <CheckIcon className="size-3" /> Delivered
          </ItemFooter>
        </Item>
      </ExampleSection>
    </div>
  );
}
