import React, { useState } from "react";

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
  MenubarTrigger,
} from "@/components/micro/menubar";
import { useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "~app/components/showcase";

function useMenubarExamples() {
  const t = useI18n();
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(false);
  const [profile, setProfile] = useState("pedro");

  return React.useMemo(
    () => [
      {
        title: t("Thanh Menu đầy đủ", "Full Menubar"),
        description: t(
          "Thanh menu đầy đủ: Items, Checkbox, Radio, Submenu, Shortcut, Separator.",
          "Full menubar: Items, Checkbox, Radio, Submenu, Shortcut, Separator."
        ),
        microCode: `<Menubar className="w-fit">
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
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
        <MenubarSubTrigger>Share</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>Email link</MenubarItem>
          <MenubarItem>Message</MenubarItem>
          <MenubarItem>Notes</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
      <MenubarSeparator />
      <MenubarItem>
        Print... <MenubarShortcut>⌘P</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
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
</Menubar>`,
        microPreview: (
          <Menubar className="w-fit">
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>

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
                  <MenubarSubTrigger>Share</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email link</MenubarItem>
                    <MenubarItem>Message</MenubarItem>
                    <MenubarItem>Notes</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>
                  Print... <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>

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
        ),
      },
      {
        title: t("Mục Checkbox", "Checkbox Items"),
        description: t(
          "MenubarCheckboxItem cho phép bật/tắt từng tùy chọn độc lập nhau.",
          "MenubarCheckboxItem allows toggling each option independently."
        ),
        microCode: `<Menubar className="w-fit">
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
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
</Menubar>`,
        microPreview: (
          <Menubar className="w-fit">
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>

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
        ),
      },
      {
        title: t("Nhóm Radio", "Radio Group"),
        description: t(
          "MenubarRadioGroup cho phép chọn một giá trị duy nhất từ danh sách.",
          "MenubarRadioGroup allows selecting a single value from a list."
        ),
        microCode: `<Menubar className="w-fit">
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
</Menubar>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Menu con", "Submenu"),
        description: t(
          "MenubarSub tạo menu lồng nhau. Hover hoặc click vào SubTrigger để mở.",
          "MenubarSub creates a nested menu. Hover or click on SubTrigger to open."
        ),
        microCode: `<Menubar className="w-fit">
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarSub>
        <MenubarSubTrigger>Share</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>Email link</MenubarItem>
          <MenubarItem>Message</MenubarItem>
          <MenubarItem>Notes</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
      <MenubarItem>
        Print... <MenubarShortcut>⌘P</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
        microPreview: (
          <Menubar className="w-fit">
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>

              <MenubarContent>
                <MenubarSub>
                  <MenubarSubTrigger>Share</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email link</MenubarItem>
                    <MenubarItem>Message</MenubarItem>
                    <MenubarItem>Notes</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarItem>
                  Print... <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ),
      },
      {
        title: t("Mục bị vô hiệu hóa", "Disabled Items"),
        description: t(
          "Items bị vô hiệu hóa không thể tương tác và hiển thị ở trạng thái mờ.",
          "Disabled items cannot be interacted with and appear dimmed."
        ),
        microCode: `<Menubar className="w-fit">
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
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
</Menubar>`,
        microPreview: (
          <Menubar className="w-fit">
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>

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
        ),
      },
    ],
    [t, profile, showBookmarks, showFullUrls]
  );
}

export default function MenubarShowcase() {
  const t = useI18n();
  const examples = useMenubarExamples();

  return (
    <ConfigurableShowcase
      title="Menubar"
      description={t(
        "Thanh menu cố định dạng ngang — phổ biến trong các desktop app (File, Edit, View...).",
        "Horizontal fixed menubar — common in desktop apps (File, Edit, View...)."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Menubar cung cấp thanh điều hướng ngang với các menu dropdown (thường thấy trên thanh công cụ của hệ điều hành như macOS). Nó hỗ trợ nhiều tính năng phức tạp như sub-menus, checkbox, radio group, và shortcut keys.",
              "Menubar provides a horizontal navigation bar with dropdown menus (often seen on OS toolbars like macOS). It supports complex features like sub-menus, checkbox, radio group, and shortcut keys."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
