import React, { useState } from "react";
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";

import { CommandDialog } from "@/components/macro/command-preset";
import { Button } from "@/components/micro/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/micro/command";
import { useDevContext, useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "~app/components/showcase";

function DialogPreview({ globalSize }: { globalSize: any }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button size={globalSize} onClick={() => setOpen(true)}>Open Command Palette</Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <SmileIcon className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

function useCommandExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Mặc định", "Default"),
        description: t(
          "Bảng lệnh có thể tìm kiếm với các mục được nhóm.",
          "Searchable command palette with grouped items."
        ),
        microCode: `<Command className="border border-border rounded-xl shadow-sm overflow-hidden bg-background w-full max-w-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <CalendarIcon className="mr-2 h-4 w-4" />
        <span>Calendar</span>
      </CommandItem>
      <CommandItem>
        <SmileIcon className="mr-2 h-4 w-4" />
        <span>Search Emoji</span>
      </CommandItem>
      <CommandItem disabled>
        <CalculatorIcon className="mr-2 h-4 w-4" />
        <span>Calculator</span>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
        <UserIcon className="mr-2 h-4 w-4" />
        <span>Profile</span>
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <CreditCardIcon className="mr-2 h-4 w-4" />
        <span>Billing</span>
        <CommandShortcut>⌘B</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <SettingsIcon className="mr-2 h-4 w-4" />
        <span>Settings</span>
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
        microPreview: (
          <Command className="border border-border rounded-xl shadow-sm overflow-hidden bg-background w-full max-w-md">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <SmileIcon className="mr-2 h-4 w-4" />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem disabled>
                  <CalculatorIcon className="mr-2 h-4 w-4" />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCardIcon className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        ),
      },
      {
        title: t("Danh sách phẳng", "Flat List"),
        description: t(
          "Nhóm duy nhất không có tiêu đề.",
          "A single group without a heading."
        ),
        microCode: `<Command className="border border-border rounded-xl shadow-sm overflow-hidden bg-background w-full max-w-md">
  <CommandInput placeholder="Search actions..." />
  <CommandList>
    <CommandEmpty>No actions found.</CommandEmpty>
    <CommandGroup>
      <CommandItem>
        <UserIcon className="mr-2 h-4 w-4" />
        <span>View Profile</span>
      </CommandItem>
      <CommandItem>
        <SettingsIcon className="mr-2 h-4 w-4" />
        <span>Open Settings</span>
      </CommandItem>
      <CommandItem>
        <CalendarIcon className="mr-2 h-4 w-4" />
        <span>Schedule Meeting</span>
      </CommandItem>
      <CommandItem>
        <CreditCardIcon className="mr-2 h-4 w-4" />
        <span>Manage Billing</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
        microPreview: (
          <Command className="border border-border rounded-xl shadow-sm overflow-hidden bg-background w-full max-w-md">
            <CommandInput placeholder="Search actions..." />
            <CommandList>
              <CommandEmpty>No actions found.</CommandEmpty>
              <CommandGroup>
                <CommandItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>View Profile</span>
                </CommandItem>
                <CommandItem>
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  <span>Open Settings</span>
                </CommandItem>
                <CommandItem>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>Schedule Meeting</span>
                </CommandItem>
                <CommandItem>
                  <CreditCardIcon className="mr-2 h-4 w-4" />
                  <span>Manage Billing</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        ),
      },
      {
        title: t("Menu Dialog", "Dialog Menu"),
        description: t(
          "Menu lệnh được hiển thị bên trong dialog.",
          "Command menu displayed inside a dialog."
        ),
        microCode: `<Button onClick={() => setOpen(true)}>
  Open Command Palette
</Button>
<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <CalendarIcon className="mr-2 h-4 w-4" />
        <span>Calendar</span>
      </CommandItem>
      <CommandItem>
        <SmileIcon className="mr-2 h-4 w-4" />
        <span>Search Emoji</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`,
        microPreview: <DialogPreview globalSize={globalSize} />,
      },
    ],
    [globalSize, t]
  );
}

export default function CommandShowcase() {
  const t = useI18n();
  const examples = useCommandExamples();

  return (
    <ConfigurableShowcase
      title="Command"
      description={t(
        "Command palette có tìm kiếm, kích hoạt bằng phím tắt (⌘K).",
        "Searchable command palette, triggered by a keyboard shortcut (⌘K)."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để tạo các bảng lệnh (command palette) hoặc menu chọn có khả năng tìm kiếm nhanh, thường kích hoạt bằng phím tắt (như Cmd+K). Thích hợp cho các ứng dụng có nhiều chức năng phức tạp cần điều hướng nhanh.",
              "Used to create command palettes or fast-searchable selection menus, typically activated via shortcuts (like Cmd+K). Suitable for complex apps requiring quick navigation."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
