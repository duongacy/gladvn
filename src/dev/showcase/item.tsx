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
  ItemTitle
} from "../../components/micro/item";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsH3,
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function ItemMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="Nội dung cơ bản" description="Item cơ bản với tiêu đề và mô tả." code={`<Item className="w-full">
    <ItemContent>
      <ItemTitle>Basic Item Content</ItemTitle>
      <ItemDescription>
        Mục này hiển thị văn bản có cấu trúc.
      </ItemDescription>
    </ItemContent>
  </Item>`} preview={
                      <>
              <Item size={globalSize} className="w-full">
                          <ItemContent>
                            <ItemTitle>Basic Item Content</ItemTitle>
                            <ItemDescription>
                              Mục này hiển thị văn bản có cấu trúc.
                            </ItemDescription>
                          </ItemContent>
                        </Item>
                      </>
                    } />

        <ShowcaseExample title="Có hình ảnh" description="Item kèm icon hoặc avatar." code={`<Item className="w-full">
    <ItemMedia className="bg-primary/10 text-primary rounded-md p-2">
      <UserIcon className="size-4" />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>User Profile</ItemTitle>
      <ItemDescription>Manage your account</ItemDescription>
    </ItemContent>
  </Item>`} preview={
                      <>
              <Item size={globalSize} className="w-full">
                          <ItemMedia className="bg-primary/10 text-primary rounded-md p-2">
                            <UserIcon className="size-4" />
                          </ItemMedia>
                          <ItemContent>
                            <ItemTitle>User Profile</ItemTitle>
                            <ItemDescription>Manage your account</ItemDescription>
                          </ItemContent>
                        </Item>
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="Variants" description="Các variant khác nhau: outline, muted." code={`<div className="flex flex-col gap-3 w-full">
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
  </div>`} preview={
                      <>
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
                      </>
                    } />

        <ShowcaseExample title="Loại hình ảnh" description="ItemMedia hỗ trợ các variant riêng: icon và image." code={`<div className="flex flex-col gap-3 w-full">
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
  </div>`} preview={
                      <>
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
                      </>
                    } />

        <ShowcaseExample title="Kèm nút thao tác" description="Item có các nút hành động ở cuối (ItemActions)." code={`<Item className="w-full">
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
  </Item>`} preview={
                      <>
              <Item size={globalSize} className="w-full">
                          <ItemContent>
                            <ItemTitle>Actionable Item</ItemTitle>
                          </ItemContent>
                          <ItemActions>
                            <Button variant="ghost" size="sm" className="size-8 p-0" iconOnly>
                              <HeartIcon className="size-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="size-8 p-0" iconOnly>
                              <MoreVerticalIcon className="size-4" />
                            </Button>
                          </ItemActions>
                        </Item>
                      </>
                    } />
      </ExampleGrid>

      <ShowcaseExample title="Nhóm Item" description="Nhóm các Item và phân cách bằng ItemSeparator." code={`<ItemGroup className="w-full max-w-sm mx-auto">
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
          Xóa tài khoản
        </ItemTitle>
      </ItemContent>
    </Item>
  </ItemGroup>`} preview={
                  <>
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
                        <ItemTitle className="text-destructive">Xóa tài khoản</ItemTitle>
                      </ItemContent>
                    </Item>
                  </ItemGroup>
                  </>
                } />

      <ShowcaseExample title="Có Header và Footer" description="Item phức tạp với ItemHeader và ItemFooter." code={`<Item className="w-full max-w-sm mx-auto flex-col items-start gap-2">
    <ItemHeader className="text-xs text-muted-foreground">
      Order #12345
    </ItemHeader>
    <ItemContent>
      <ItemTitle>Mechanical Keyboard v2</ItemTitle>
    </ItemContent>
    <ItemFooter className="text-xs text-success flex items-center gap-1">
      <CheckIcon className="size-3" /> Delivered
    </ItemFooter>
  </Item>`} preview={
                  <>
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
                  </>
                } />
    </div>
  );
}

export default function ItemShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Item"
      description="Container linh hoạt cho danh sách hoặc khối nội dung có cấu trúc."
      guideline={
        <ShowcaseDocs>
          <DocsH3>Item</DocsH3>
          <DocsP>
            Sử dụng để tạo danh sách hoặc khối nội dung có icon, tiêu đề, mô tả
            và hành động.
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <ItemMicroShowcase globalSize={globalSize} /> }}
    />
  );
}
