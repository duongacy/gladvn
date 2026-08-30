import React, { useState } from "react";
import {
  CreditCardIcon,
  HelpCircleIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

import { Button } from "@/components/micro/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/micro/dropdown-menu";
import { useDevContext, useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "~app/components/showcase";

function AdvancedDropdownPreview({ globalSize }: { globalSize: string }) {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showPanel, setShowPanel] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" size={globalSize as any}>
            Advanced
          </Button>
        }
      />

      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
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
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function useDropdownMenuExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Dropdown Tiêu chuẩn", "Standard Dropdown"),
        description: t(
          "Menu cơ bản với các phím tắt và action nguy hiểm.",
          "Basic menu with shortcuts and destructive actions."
        ),
        microCode: `<DropdownMenu>
  <DropdownMenuTrigger
    render={<Button variant="outline">Open Menu</Button>}
  />
  <DropdownMenuContent className="w-56">
    <DropdownMenuGroup>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
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
</DropdownMenu>`,
        microPreview: (
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Open Menu
                </Button>
              }
            />

            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
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
        ),
      },
      {
        title: t("Mục bị Vô hiệu hóa", "With Disabled Items"),
        description: t(
          "Một số mục không tương tác.",
          "Some non-interactive items."
        ),
        microCode: `<DropdownMenu>
  <DropdownMenuTrigger
    render={<Button variant="outline">Actions</Button>}
  />
  <DropdownMenuContent className="w-56">
    <DropdownMenuGroup>
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <UserIcon className="mr-2 h-4 w-4" />
        <span>Edit profile</span>
      </DropdownMenuItem>
      <DropdownMenuItem disabled>
        <CreditCardIcon className="mr-2 h-4 w-4" />
        <span>Upgrade Plan</span>
      </DropdownMenuItem>
      <DropdownMenuItem disabled>
        <HelpCircleIcon className="mr-2 h-4 w-4" />
        <span>Support (Offline)</span>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <LogOutIcon className="mr-2 h-4 w-4" />
      <span>Log out</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
        microPreview: (
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Actions
                </Button>
              }
            />

            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Edit profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  <CreditCardIcon className="mr-2 h-4 w-4" />
                  <span>Upgrade Plan</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  <HelpCircleIcon className="mr-2 h-4 w-4" />
                  <span>Support (Offline)</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOutIcon className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
      {
        title: t("Dropdown Nâng cao", "Advanced Dropdown"),
        description: t(
          "Menu có các hộp kiểm, mục radio và menu con.",
          "Menu with checkboxes, radio items, and submenus."
        ),
        microCode: `<DropdownMenu>
  <DropdownMenuTrigger
    render={<Button variant="outline">Advanced</Button>}
  />
  <DropdownMenuContent className="w-56">
    <DropdownMenuGroup>
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
        <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>`,
        microPreview: <AdvancedDropdownPreview globalSize={globalSize} />,
      },
      {
        title: t("Mục Lùi lề", "Inset Items"),
        description: t(
          "Dùng prop inset trên label và items khi menu không có icon — giữ alignment đồng đều.",
          "Use the inset prop on labels and items when the menu has no icons — keeping alignment consistent."
        ),
        microCode: `<DropdownMenu>
  <DropdownMenuTrigger
    render={
      <Button variant="outline">View Options</Button>
    }
  />
  <DropdownMenuContent className="w-48">
    <DropdownMenuGroup>
      <DropdownMenuLabel inset>View</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem inset>Zoom In</DropdownMenuItem>
      <DropdownMenuItem inset>Zoom Out</DropdownMenuItem>
      <DropdownMenuItem inset>Reset Zoom</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuLabel inset>Layout</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem inset>Single Column</DropdownMenuItem>
      <DropdownMenuItem inset>Two Columns</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>`,
        microPreview: (
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  View Options
                </Button>
              }
            />

            <DropdownMenuContent className="w-48">
              <DropdownMenuGroup>
                <DropdownMenuLabel inset>View</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem inset>Zoom In</DropdownMenuItem>
                <DropdownMenuItem inset>Zoom Out</DropdownMenuItem>
                <DropdownMenuItem inset>Reset Zoom</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuLabel inset>Layout</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem inset>Single Column</DropdownMenuItem>
                <DropdownMenuItem inset>Two Columns</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ],
    [globalSize, t]
  );
}

export default function DropdownMenuShowcase() {
  const t = useI18n();
  const examples = useDropdownMenuExamples();

  return (
    <ConfigurableShowcase
      title="Dropdown Menu"
      description={t(
        "Menu thả xuống kích hoạt bằng nút — chứa actions, checkbox, radio, và submenu.",
        "Dropdown menu triggered by a button — containing actions, checkboxes, radios, and submenus."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dropdown Menu dùng để hiển thị các hành động liên quan tới một đối tượng khi click vào nút Trigger.",
              "Dropdown Menu is used to display actions related to an object when the Trigger button is clicked."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
