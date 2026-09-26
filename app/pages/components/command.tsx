import React, { useState } from "react";
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";

import {
  CommandDialog,
  CommandPreset,
} from "@/components/macro/command-preset";
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

// ---------------------------------------------------------------------------
// Shared data for CommandPreset examples
// ---------------------------------------------------------------------------

const COMMAND_GROUPS = [
  {
    heading: "Suggestions",
    items: [
      { value: "calendar", label: "Calendar", icon: <CalendarIcon aria-hidden="true" /> },
      { value: "emoji", label: "Search Emoji", icon: <SmileIcon aria-hidden="true" /> },
      { value: "calculator", label: "Calculator", icon: <CalculatorIcon aria-hidden="true" />, disabled: true },
    ],
  },
  {
    heading: "Settings",
    items: [
      { value: "profile", label: "Profile", icon: <UserIcon aria-hidden="true" />, shortcut: "⌘P" },
      { value: "billing", label: "Billing", icon: <CreditCardIcon aria-hidden="true" />, shortcut: "⌘B" },
      { value: "settings", label: "Settings", icon: <SettingsIcon aria-hidden="true" />, shortcut: "⌘S" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Dialog preview sub-component (needs local state, so extracted)
// ---------------------------------------------------------------------------

function DialogPreview({ globalSize }: { globalSize: any }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button size={globalSize} onClick={() => setOpen(true)}>Open Command Palette</Button>
      <CommandDialog open={open} onOpenChange={setOpen} size={globalSize}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <CalendarIcon aria-hidden="true" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <SmileIcon aria-hidden="true" />
              <span>Search Emoji</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

// ---------------------------------------------------------------------------
// Examples
// ---------------------------------------------------------------------------

function useCommandExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Mặc định", "Default"),
        description: t(
          "Bảng lệnh có thể tìm kiếm với các mục được nhóm.",
          "Searchable command palette with grouped items.",
        ),
        microCode: `<Command size={globalSize} className="border border-border rounded-xl shadow-sm overflow-hidden bg-background w-full max-w-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <CalendarIcon aria-hidden="true" />
        <span>Calendar</span>
      </CommandItem>
      <CommandItem>
        <SmileIcon aria-hidden="true" />
        <span>Search Emoji</span>
      </CommandItem>
      <CommandItem disabled>
        <CalculatorIcon aria-hidden="true" />
        <span>Calculator</span>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
        <UserIcon aria-hidden="true" />
        <span>Profile</span>
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <CreditCardIcon aria-hidden="true" />
        <span>Billing</span>
        <CommandShortcut>⌘B</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <SettingsIcon aria-hidden="true" />
        <span>Settings</span>
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
        microPreview: (
          <Command
            size={globalSize}
            className="border border-border rounded-xl shadow-sm overflow-hidden bg-background w-full max-w-md"
          >
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <CalendarIcon aria-hidden="true" />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <SmileIcon aria-hidden="true" />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem disabled>
                  <CalculatorIcon aria-hidden="true" />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <UserIcon aria-hidden="true" />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCardIcon aria-hidden="true" />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <SettingsIcon aria-hidden="true" />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        ),
        macroCode: `<CommandPreset
  size={globalSize}
  className="w-full max-w-md"
  placeholder="Type a command or search..."
  onSelect={(value) => console.log("Selected:", value)}
  groups={[
    {
      heading: "Suggestions",
      items: [
        { value: "calendar", label: "Calendar", icon: <CalendarIcon aria-hidden="true" /> },
        { value: "emoji", label: "Search Emoji", icon: <SmileIcon aria-hidden="true" /> },
        { value: "calculator", label: "Calculator", icon: <CalculatorIcon aria-hidden="true" />, disabled: true },
      ],
    },
    {
      heading: "Settings",
      items: [
        { value: "profile", label: "Profile", icon: <UserIcon aria-hidden="true" />, shortcut: "⌘P" },
        { value: "billing", label: "Billing", icon: <CreditCardIcon aria-hidden="true" />, shortcut: "⌘B" },
        { value: "settings", label: "Settings", icon: <SettingsIcon aria-hidden="true" />, shortcut: "⌘S" },
      ],
    },
  ]}
/>`,
        macroPreview: (
          <CommandPreset
            size={globalSize}
            className="w-full max-w-md"
            placeholder="Type a command or search..."
            groups={COMMAND_GROUPS}
          />
        ),
      },
      {
        title: t("Danh sách phẳng", "Flat List"),
        description: t(
          "Nhóm duy nhất không có tiêu đề.",
          "A single group without a heading.",
        ),
        microCode: `<Command size={globalSize} className="border border-border rounded-xl shadow-sm overflow-hidden bg-background w-full max-w-md">
  <CommandInput placeholder="Search actions..." />
  <CommandList>
    <CommandEmpty>No actions found.</CommandEmpty>
    <CommandGroup>
      <CommandItem>
        <UserIcon aria-hidden="true" />
        <span>View Profile</span>
      </CommandItem>
      <CommandItem>
        <SettingsIcon aria-hidden="true" />
        <span>Open Settings</span>
      </CommandItem>
      <CommandItem>
        <CalendarIcon aria-hidden="true" />
        <span>Schedule Meeting</span>
      </CommandItem>
      <CommandItem>
        <CreditCardIcon aria-hidden="true" />
        <span>Manage Billing</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
        microPreview: (
          <Command
            size={globalSize}
            className="border border-border rounded-xl shadow-sm overflow-hidden bg-background w-full max-w-md"
          >
            <CommandInput placeholder="Search actions..." />
            <CommandList>
              <CommandEmpty>No actions found.</CommandEmpty>
              <CommandGroup>
                <CommandItem>
                  <UserIcon aria-hidden="true" />
                  <span>View Profile</span>
                </CommandItem>
                <CommandItem>
                  <SettingsIcon aria-hidden="true" />
                  <span>Open Settings</span>
                </CommandItem>
                <CommandItem>
                  <CalendarIcon aria-hidden="true" />
                  <span>Schedule Meeting</span>
                </CommandItem>
                <CommandItem>
                  <CreditCardIcon aria-hidden="true" />
                  <span>Manage Billing</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        ),
        macroCode: `<CommandPreset
  size={globalSize}
  className="w-full max-w-md"
  placeholder="Search actions..."
  groups={[
    {
      items: [
        { value: "profile", label: "View Profile", icon: <UserIcon aria-hidden="true" /> },
        { value: "settings", label: "Open Settings", icon: <SettingsIcon aria-hidden="true" /> },
        { value: "calendar", label: "Schedule Meeting", icon: <CalendarIcon aria-hidden="true" /> },
        { value: "billing", label: "Manage Billing", icon: <CreditCardIcon aria-hidden="true" /> },
      ],
    },
  ]}
/>`,
        macroPreview: (
          <CommandPreset
            size={globalSize}
            className="w-full max-w-md"
            placeholder="Search actions..."
            groups={[
              {
                items: [
                  { value: "profile", label: "View Profile", icon: <UserIcon aria-hidden="true" /> },
                  { value: "settings", label: "Open Settings", icon: <SettingsIcon aria-hidden="true" /> },
                  { value: "calendar", label: "Schedule Meeting", icon: <CalendarIcon aria-hidden="true" /> },
                  { value: "billing", label: "Manage Billing", icon: <CreditCardIcon aria-hidden="true" /> },
                ],
              },
            ]}
          />
        ),
      },
      {
        title: t("Menu Dialog", "Dialog Menu"),
        description: t(
          "Menu lệnh được hiển thị bên trong dialog.",
          "Command menu displayed inside a dialog.",
        ),
        microCode: `<Button size={globalSize} onClick={() => setOpen(true)}>
  Open Command Palette
</Button>
<CommandDialog open={open} onOpenChange={setOpen} size={globalSize}>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <CalendarIcon aria-hidden="true" />
        <span>Calendar</span>
      </CommandItem>
      <CommandItem>
        <SmileIcon aria-hidden="true" />
        <span>Search Emoji</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`,
        microPreview: <DialogPreview globalSize={globalSize} />,
      },
    ],
    [globalSize, t],
  );
}

// ---------------------------------------------------------------------------
// Showcase
// ---------------------------------------------------------------------------

export default function CommandShowcase() {
  const t = useI18n();
  const examples = useCommandExamples();

  return (
    <ConfigurableShowcase
      title="Command"
      description={t(
        "Command palette có tìm kiếm, kích hoạt bằng phím tắt (⌘K).",
        "Searchable command palette, triggered by a keyboard shortcut (⌘K).",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để tạo các bảng lệnh (command palette) hoặc menu chọn có khả năng tìm kiếm nhanh, thường kích hoạt bằng phím tắt (như Cmd+K). Thích hợp cho các ứng dụng có nhiều chức năng phức tạp cần điều hướng nhanh.",
              "Used to create command palettes or fast-searchable selection menus, typically activated via shortcuts (like Cmd+K). Suitable for complex apps requiring quick navigation.",
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
