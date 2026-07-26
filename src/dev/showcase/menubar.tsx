import { useState } from "react";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,

  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
} from "../../components/micro/menubar";
import {
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs
} from "../../dev/components/showcase";

function MenubarMicroShowcase() {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(false);
  const [profile, setProfile] = useState("pedro");

  return (
    <div className="space-y-10 mt-6">
      {}
      <ExampleSection
        label="Full Menubar"
        description="Thanh menu đầy đủ: Items, Checkbox, Radio, Submenu, Shortcut, Separator."
        codeString={`<Menubar className="w-fit">
    <MenubarMenu>
      <MenubarTrigger>Tệp</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          New Window <MenubarShortcut>⌘N</MenubarShortcut>
        </MenubarItem>
        <MenubarItem disabled>
          New Incognito Window
        </MenubarItem>
        <MenubarSeparator />
        <MenubarSub>
          <MenubarSubTrigger>Chia sẻ</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Email link</MenubarItem>
            <MenubarItem>Tin nhắn</MenubarItem>
            <MenubarItem>Ghi chú</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarSeparator />
        <MenubarItem>
          Print... <MenubarShortcut>⌘P</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>Xem</MenubarTrigger>
      <MenubarContent>
        <MenubarCheckboxItem
          checked={showBookmarks}
          onCheckedChange={setShowBookmarks}
        >
          Always Show Bookmarks Bar
        </MenubarCheckboxItem>
        <MenubarCheckboxItem
          checked={showFullUrls}
          onCheckedChange={setShowFullUrls}
        >
          Always Show Full URLs
        </MenubarCheckboxItem>
        <MenubarSeparator />
        <MenubarItem inset>
          Reload <MenubarShortcut>⌘R</MenubarShortcut>
        </MenubarItem>
        <MenubarItem disabled inset>
          Force Reload{" "}
          <MenubarShortcut>⇧⌘R</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>Profiles</MenubarTrigger>
      <MenubarContent>
        <MenubarGroup>
          <MenubarLabel inset>Select Profile</MenubarLabel>
          <MenubarSeparator />
          <MenubarRadioGroup
            value={profile}
            onValueChange={setProfile}
          >
            <MenubarRadioItem value="pedro">
              Pedro
            </MenubarRadioItem>
            <MenubarRadioItem value="colm">
              Colm
            </MenubarRadioItem>
            <MenubarRadioItem value="andy">
              Andy
            </MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarGroup>
        <MenubarSeparator />
        <MenubarItem inset>Edit...</MenubarItem>
        <MenubarSeparator />
        <MenubarItem inset>Add Profile...</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>`}
      >
        <Menubar className="w-fit">
          <MenubarMenu>
            <MenubarTrigger>Tệp</MenubarTrigger>
            
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Window <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>New Incognito Window</MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Chia sẻ</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email link</MenubarItem>
                    <MenubarItem>Tin nhắn</MenubarItem>
                    <MenubarItem>Ghi chú</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>
                  Print... <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Xem</MenubarTrigger>
            
              <MenubarContent>
                <MenubarCheckboxItem
                  checked={showBookmarks}
                  onCheckedChange={setShowBookmarks}
                >
                  Always Show Bookmarks Bar
                </MenubarCheckboxItem>
                <MenubarCheckboxItem
                  checked={showFullUrls}
                  onCheckedChange={setShowFullUrls}
                >
                  Always Show Full URLs
                </MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarItem inset>
                  Reload <MenubarShortcut>⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled inset>
                  Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Profiles</MenubarTrigger>
            
              <MenubarContent>
                <MenubarGroup>
                  <MenubarLabel inset>Select Profile</MenubarLabel>
                  <MenubarSeparator />
                  <MenubarRadioGroup value={profile} onValueChange={setProfile}>
                    <MenubarRadioItem value="pedro">Pedro</MenubarRadioItem>
                    <MenubarRadioItem value="colm">Colm</MenubarRadioItem>
                    <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarItem inset>Edit...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Add Profile...</MenubarItem>
              </MenubarContent>
            
          </MenubarMenu>
        </Menubar>
      </ExampleSection>

      {}
      <ExampleGrid>
        <ExampleSection
          label="Checkbox Items"
          description="MenubarCheckboxItem cho phép bật/tắt từng tùy chọn độc lập nhau."
          codeString={`<Menubar className="w-fit">
    <MenubarMenu>
      <MenubarTrigger>Xem</MenubarTrigger>
      <MenubarContent>
        <MenubarCheckboxItem
          checked={showBookmarks}
          onCheckedChange={setShowBookmarks}
        >
          Show Bookmarks Bar
        </MenubarCheckboxItem>
        <MenubarCheckboxItem
          checked={showFullUrls}
          onCheckedChange={setShowFullUrls}
        >
          Show Full URLs
        </MenubarCheckboxItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>`}
        >
          <Menubar className="w-fit">
            <MenubarMenu>
              <MenubarTrigger>Xem</MenubarTrigger>
              
                <MenubarContent>
                  <MenubarCheckboxItem
                    checked={showBookmarks}
                    onCheckedChange={setShowBookmarks}
                  >
                    Show Bookmarks Bar
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem
                    checked={showFullUrls}
                    onCheckedChange={setShowFullUrls}
                  >
                    Show Full URLs
                  </MenubarCheckboxItem>
                </MenubarContent>
              
            </MenubarMenu>
          </Menubar>
        </ExampleSection>

        <ExampleSection
          label="Radio Group"
          description="MenubarRadioGroup cho phép chọn một giá trị duy nhất từ danh sách."
          codeString={`<Menubar className="w-fit">
    <MenubarMenu>
      <MenubarTrigger>Profile</MenubarTrigger>
      <MenubarContent>
        <MenubarLabel inset>Account</MenubarLabel>
        <MenubarSeparator />
        <MenubarRadioGroup
          value={profile}
          onValueChange={setProfile}
        >
          <MenubarRadioItem value="pedro">
            Pedro
          </MenubarRadioItem>
          <MenubarRadioItem value="colm">
            Colm
          </MenubarRadioItem>
          <MenubarRadioItem value="andy">
            Andy
          </MenubarRadioItem>
        </MenubarRadioGroup>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>`}
        >
          <Menubar className="w-fit">
            <MenubarMenu>
              <MenubarTrigger>Profile</MenubarTrigger>
              
                <MenubarContent>
                  <MenubarLabel inset>Account</MenubarLabel>
                  <MenubarSeparator />
                  <MenubarRadioGroup value={profile} onValueChange={setProfile}>
                    <MenubarRadioItem value="pedro">Pedro</MenubarRadioItem>
                    <MenubarRadioItem value="colm">Colm</MenubarRadioItem>
                    <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarContent>
              
            </MenubarMenu>
          </Menubar>
        </ExampleSection>
      </ExampleGrid>

      {}
      <ExampleGrid>
        <ExampleSection
          label="Submenu"
          description="MenubarSub tạo menu lồng nhau. Hover hoặc click vào SubTrigger để mở."
          codeString={`<Menubar className="w-fit">
    <MenubarMenu>
      <MenubarTrigger>Tệp</MenubarTrigger>
      <MenubarContent>
        <MenubarSub>
          <MenubarSubTrigger>Chia sẻ</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Email link</MenubarItem>
            <MenubarItem>Tin nhắn</MenubarItem>
            <MenubarItem>Ghi chú</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarItem>
          Print... <MenubarShortcut>⌘P</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>`}
        >
          <Menubar className="w-fit">
            <MenubarMenu>
              <MenubarTrigger>Tệp</MenubarTrigger>
              
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>Chia sẻ</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Email link</MenubarItem>
                      <MenubarItem>Tin nhắn</MenubarItem>
                      <MenubarItem>Ghi chú</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem>
                    Print... <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              
            </MenubarMenu>
          </Menubar>
        </ExampleSection>

        <ExampleSection
          label="Disabled Items"
          description="Items bị vô hiệu hóa không thể tương tác và hiển thị ở trạng thái mờ."
          codeString={`<Menubar className="w-fit">
    <MenubarMenu>
      <MenubarTrigger>Chỉnh sửa</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Undo <MenubarShortcut>⌘Z</MenubarShortcut>
        </MenubarItem>
        <MenubarItem disabled>
          Redo <MenubarShortcut>⌘Y</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem disabled>
          Cut <MenubarShortcut>⌘X</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Copy <MenubarShortcut>⌘C</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>`}
        >
          <Menubar className="w-fit">
            <MenubarMenu>
              <MenubarTrigger>Chỉnh sửa</MenubarTrigger>
              
                <MenubarContent>
                  <MenubarItem>
                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>
                    Redo <MenubarShortcut>⌘Y</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem disabled>
                    Cut <MenubarShortcut>⌘X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Copy <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              
            </MenubarMenu>
          </Menubar>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

export default function MenubarShowcase() {
  return (
    <Showcase
      title="Menubar"
      description="Thanh menu cố định dạng ngang — phổ biến trong các desktop app (File, Edit, View...)."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            Menubar cung cấp thanh điều hướng ngang với các menu dropdown
            (thường thấy trên thanh công cụ của hệ điều hành như macOS). Nó hỗ
            trợ nhiều tính năng phức tạp như sub-menus, checkbox, radio group,
            và shortcut keys.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[{ label: "Micro (Primitive)", content: <MenubarMicroShowcase /> }]}
    />
  );
}
