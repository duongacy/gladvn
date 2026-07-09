import { SectionHeader, ExampleSection } from "@/dev/components/showcase";
import { useState } from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  MenubarGroup,
  MenubarLabel,
} from "@/components/micro/menubar";

export default function MenubarShowcase() {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(false);
  const [profile, setProfile] = useState("pedro");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Menubar"
        description="Một menu liên tục trực quan phổ biến trong các ứng dụng máy tính để bàn."
      />

      <ExampleSection
        label="Full Menubar"
        description="Thanh menu với các menu con, hộp kiểm và các mục radio."
      >
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
                  <MenubarItem>Messages</MenubarItem>
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
      </ExampleSection>
    </div>
  );
}
