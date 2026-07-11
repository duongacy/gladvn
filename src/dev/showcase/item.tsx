import { useDevContext } from "@/dev/components/dev-context";
import { useState } from "react";
import { CheckIcon, HeartIcon, MoreVerticalIcon, UserIcon } from "lucide-react";

import { Button } from "@/components/micro/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/micro/item";
import { type Size } from "@/lib/types";
import {
  DocsH3,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "@/dev/components/showcase";

function ItemMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid >
        <ExampleSection
          label="Basic Content"
          description="Một mục có cấu trúc với tiêu đề và mô tả."
          codeString={`<Item className="w-full">
  <ItemContent>
    <ItemTitle>Basic Item Content</ItemTitle>
    <ItemDescription>
      This item shows structured text.
    </ItemDescription>
  </ItemContent>
</Item>
`}
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
          codeString={`<Item className="w-full">
  <ItemMedia className="bg-primary/10 text-primary rounded-md p-2">
    <UserIcon className="size-4" />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>User Profile</ItemTitle>
    <ItemDescription>Manage your account</ItemDescription>
  </ItemContent>
</Item>
`}
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

      <ExampleGrid >
        <ExampleSection
          label="Variants"
          description="Các phong cách hình ảnh khác nhau (phác thảo, tắt tiếng)."
          codeString={`<div className="flex flex-col gap-3 w-full">
  <Item variant="outline">
    <ItemContent>
      <ItemTitle>Outline Variant</ItemTitle>
    </ItemContent>
  </Item>
  <Item variant="muted">
    <ItemContent>
      <ItemTitle>Muted Variant</ItemTitle>
    </ItemContent>
  </Item>
</div>
`}
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
          codeString={`<div className="flex flex-col gap-3 w-full">
  <Item>
    <ItemMedia variant="icon" className="bg-primary/10 text-primary">
      <CheckIcon className="size-4" />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>Icon Variant</ItemTitle>
    </ItemContent>
  </Item>
  <Item>
    <ItemMedia variant="image" className="bg-muted">
      <UserIcon className="size-4 text-muted-foreground" />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>Image Variant</ItemTitle>
    </ItemContent>
  </Item>
</div>
`}
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
          codeString={`<Item className="w-full">
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
`}
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
        codeString={`<ItemGroup className="w-full max-w-sm mx-auto">
  <Item>
    <ItemContent>
      <ItemTitle>Account Settings</ItemTitle>
    </ItemContent>
  </Item>
  <ItemSeparator />
  <Item>
    <ItemContent>
      <ItemTitle>Notification Preferences</ItemTitle>
    </ItemContent>
  </Item>
  <ItemSeparator />
  <Item>
    <ItemContent>
      <ItemTitle className="text-destructive">Delete Account</ItemTitle>
    </ItemContent>
  </Item>
</ItemGroup>
`}
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
        codeString={`<Item
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
`}
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

export default function ItemShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Item"
      description="Một vùng chứa linh hoạt cho các mục danh sách hoặc khối nội dung có cấu trúc."
      generalConcept={
        <ShowcaseDocs>
          <DocsH3>Item</DocsH3>
          <DocsP>
            Sử dụng để tạo danh sách hoặc khối nội dung có biểu tượng, tiêu đề,
            mô tả và hành động.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <ItemMicroShowcase globalSize={globalSize} />,
        },
      ]}
    />
  );
}
