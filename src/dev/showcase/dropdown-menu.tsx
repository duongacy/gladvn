import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import {
  UserIcon,
  SettingsIcon,
  LogOutIcon,
  CreditCardIcon,
  HelpCircleIcon,
} from "lucide-react";

import { type Size } from "@/lib/types";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuShortcut,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/micro/dropdown-menu";
import { Button } from "@/components/micro/button";
import { SelectPreset } from "@/components/macro/select-preset";

export default function DropdownMenuShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Dropdown Menu"
        description="Hiển thị một menu cho người dùng—chẳng hạn như một tập hợp các hành động hoặc chức năng—được kích hoạt bằng một nút."
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
          label="Standard Dropdown"
          description="Menu cơ bản với các phím tắt và action nguy hiểm."
          codeString={`<DropdownMenu>
  <DropdownMenuTrigger
    render={
      <Button variant="outline">
        Open Menu
      </Button>
    }
  />
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <UserIcon className="mr-2 h-4 w-4" />
        <span>Profile</span>
        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <SettingsIcon className="mr-2 h-4 w-4" />
        <span>Settings</span>
        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <CreditCardIcon className="mr-2 h-4 w-4" />
        <span>Billing</span>
        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <LogOutIcon className="mr-2 h-4 w-4" />
      <span>Log out</span>
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">
      <LogOutIcon className="mr-2 h-4 w-4" />
      <span>Delete Account</span>
      <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Open Menu
                </Button>
              }
            />
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCardIcon className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOutIcon className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <LogOutIcon className="mr-2 h-4 w-4" />
                <span>Delete Account</span>
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ExampleSection>

        <ExampleSection
          label="With Disabled Items"
          description="Một số mục không tương tác."
          codeString={`<DropdownMenu>
  <DropdownMenuTrigger
    render={
      <Button variant="outline">
        Actions
      </Button>
    }
  />
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <UserIcon className="mr-2 h-4 w-4" />
      <span>Edit Profile</span>
    </DropdownMenuItem>
    <DropdownMenuItem disabled>
      <CreditCardIcon className="mr-2 h-4 w-4" />
      <span>Upgrade Plan</span>
    </DropdownMenuItem>
    <DropdownMenuItem disabled>
      <HelpCircleIcon className="mr-2 h-4 w-4" />
      <span>Support (Offline)</span>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <LogOutIcon className="mr-2 h-4 w-4" />
      <span>Log out</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Actions
                </Button>
              }
            />
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserIcon className="mr-2 h-4 w-4" />
                <span>Edit Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <CreditCardIcon className="mr-2 h-4 w-4" />
                <span>Upgrade Plan</span>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <HelpCircleIcon className="mr-2 h-4 w-4" />
                <span>Support (Offline)</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOutIcon className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ExampleSection>
        <ExampleSection
          label="Advanced Dropdown"
          description="Menu có các hộp kiểm, mục radio và menu con."
        >
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Advanced
                </Button>
              }
            />
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                Show Status Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem disabled>
                Show Activity Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
              >
                Show Panel
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Light</DropdownMenuItem>
                  <DropdownMenuItem>Dark</DropdownMenuItem>
                  <DropdownMenuItem>System</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value="bottom">
                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  Bottom
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  Right
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </ExampleSection>
        <ExampleSection
          label="Inset Items"
          description="Dùng prop inset trên label và items khi menu không có icon — giữ alignment đồng đều."
        >
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  View Options
                </Button>
              }
            />
            <DropdownMenuContent className="w-48">
              <DropdownMenuLabel inset>View</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem inset>Zoom In</DropdownMenuItem>
              <DropdownMenuItem inset>Zoom Out</DropdownMenuItem>
              <DropdownMenuItem inset>Reset Zoom</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel inset>Layout</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem inset>Single Column</DropdownMenuItem>
              <DropdownMenuItem inset>Two Columns</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
