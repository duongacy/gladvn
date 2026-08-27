import React from "react";
import { CheckIcon, HeartIcon, MoreVerticalIcon, UserIcon } from "lucide-react";

import { Button } from "../../components/micro/button";
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
} from "../../components/micro/item";
import { useI18n, useDevContext } from "../components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsH3,
  DocsP,
} from "../components/showcase";

function useItemExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Nội dung cơ bản", "Basic Content"),
        description: t(
          "Item cơ bản với tiêu đề và mô tả.",
          "Basic item with title and description."
        ),
        microCode: `<Item className="w-full">
  <ItemContent>
    <ItemTitle>Basic Item Content</ItemTitle>
    <ItemDescription>
      This item displays structured text.
    </ItemDescription>
  </ItemContent>
</Item>`,
        microPreview: (
          <Item size={globalSize} className="w-full">
            <ItemContent>
              <ItemTitle>Basic Item Content</ItemTitle>
              <ItemDescription>
                This item displays structured text.
              </ItemDescription>
            </ItemContent>
          </Item>
        ),
      },
      {
        title: t("Có hình ảnh", "With Media"),
        description: t("Item kèm icon hoặc avatar.", "Item with icon or avatar."),
        microCode: `<Item className="w-full">
  <ItemMedia className="bg-primary/10 text-primary rounded-md p-2">
    <UserIcon className="size-4" />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>User Profile</ItemTitle>
    <ItemDescription>Manage your account</ItemDescription>
  </ItemContent>
</Item>`,
        microPreview: (
          <Item size={globalSize} className="w-full">
            <ItemMedia className="bg-primary/10 text-primary rounded-md p-2">
              <UserIcon className="size-4" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>User Profile</ItemTitle>
              <ItemDescription>Manage your account</ItemDescription>
            </ItemContent>
          </Item>
        ),
      },
      {
        title: t("Variants", "Variants"),
        description: t(
          "Các variant khác nhau: outline, muted.",
          "Different variants: outline, muted."
        ),
        microCode: `<div className="flex flex-col gap-3 w-full">
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
</div>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Loại hình ảnh", "Media Type"),
        description: t(
          "ItemMedia hỗ trợ các variant riêng: icon và image.",
          "ItemMedia supports specific variants: icon and image."
        ),
        microCode: `<div className="flex flex-col gap-3 w-full">
  <Item>
    <ItemMedia
      variant="icon"
      className="bg-primary/10 text-primary"
    >
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
</div>`,
        microPreview: (
          <div className="flex flex-col gap-3 w-full">
            <Item size={globalSize}>
              <ItemMedia
                variant="icon"
                className="bg-primary/10 text-primary"
              >
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
        ),
      },
      {
        title: t("Kèm nút thao tác", "With Actions"),
        description: t(
          "Item có các nút hành động ở cuối (ItemActions).",
          "Item has action buttons at the end (ItemActions)."
        ),
        microCode: `<Item className="w-full">
  <ItemContent>
    <ItemTitle>Actionable Item</ItemTitle>
  </ItemContent>
  <ItemActions>
    <Button
      variant="ghost"
      size="sm"
      className="size-8 p-0"
    >
      <HeartIcon className="size-4" />
    </Button>
    <Button
      variant="ghost"
      size="sm"
      className="size-8 p-0"
    >
      <MoreVerticalIcon className="size-4" />
    </Button>
  </ItemActions>
</Item>`,
        microPreview: (
          <Item size={globalSize} className="w-full">
            <ItemContent>
              <ItemTitle>Actionable Item</ItemTitle>
            </ItemContent>
            <ItemActions>
              <Button
                variant="ghost"
                size={globalSize}
                className="size-8 p-0"
                iconOnly
              >
                <HeartIcon className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size={globalSize}
                className="size-8 p-0"
                iconOnly
              >
                <MoreVerticalIcon className="size-4" />
              </Button>
            </ItemActions>
          </Item>
        ),
      },
      {
        title: t("Nhóm Item", "Item Group"),
        description: t(
          "Nhóm các Item và phân cách bằng ItemSeparator.",
          "Group Items and separate with ItemSeparator."
        ),
        microCode: `<ItemGroup className="w-full max-w-sm mx-auto">
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
      <ItemTitle className="text-destructive">
        Delete Account
      </ItemTitle>
    </ItemContent>
  </Item>
</ItemGroup>`,
        microPreview: (
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
                <ItemTitle className="text-destructive">
                  Delete Account
                </ItemTitle>
              </ItemContent>
            </Item>
          </ItemGroup>
        ),
      },
      {
        title: t("Có Header và Footer", "With Header and Footer"),
        description: t(
          "Item phức tạp với ItemHeader và ItemFooter.",
          "Complex Item with ItemHeader and ItemFooter."
        ),
        microCode: `<Item className="w-full max-w-sm mx-auto flex-col items-start gap-2">
  <ItemHeader className="text-xs text-muted-foreground">
    Order #12345
  </ItemHeader>
  <ItemContent>
    <ItemTitle>Mechanical Keyboard v2</ItemTitle>
  </ItemContent>
  <ItemFooter className="text-xs text-success flex items-center gap-1">
    <CheckIcon className="size-3" /> Delivered
  </ItemFooter>
</Item>`,
        microPreview: (
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
        ),
      },
    ],
    [t, globalSize]
  );
}

export default function ItemShowcase() {
  const t = useI18n();
  const examples = useItemExamples();

  return (
    <ConfigurableShowcase
      title={t("Mục danh sách", "Item")}
      description={t(
        "Container linh hoạt cho danh sách hoặc khối nội dung có cấu trúc.",
        "Flexible container for lists or structured content blocks."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsH3>Item</DocsH3>
          <DocsP>
            {t(
              "Sử dụng để tạo danh sách hoặc khối nội dung có icon, tiêu đề, mô tả và hành động.",
              "Use to create lists or content blocks with an icon, title, description, and actions."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
