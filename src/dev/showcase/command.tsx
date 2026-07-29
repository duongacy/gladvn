import { useState } from "react";

import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";

import { CommandDialog } from "../../components/macro/command-preset";
import { Button } from "../../components/micro/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../../components/micro/command";
import { useI18n } from "../../dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";

function CommandMicroShowcase() {
  const t = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Mặc định", "Default")}
          description={t(
            "Bảng lệnh có thể tìm kiếm với các mục được nhóm.",
            "Searchable command palette with grouped items.",
          )}
          code={`<Command className="border border-border rounded-xl shadow-sm overflow-hidden bg-background w-full">
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
`}
          preview={
            <>
              <Command className="border border-border rounded-xl shadow-sm overflow-hidden bg-background w-full">
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
            </>
          }
        />

        <ShowcaseExample
          title={t("Danh sách phẳng", "Flat List")}
          description={t(
            "Nhóm duy nhất không có tiêu đề.",
            "A single group without a heading.",
          )}
          code={`<Command className="border border-border rounded-xl shadow-sm overflow-hidden bg-background w-full">
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
`}
          preview={
            <>
              <Command className="border border-border rounded-xl shadow-sm overflow-hidden bg-background w-full">
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
            </>
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title={t("Menu Dialog", "Dialog Menu")}
        description={t(
          "Menu lệnh được hiển thị bên trong dialog.",
          "Command menu displayed inside a dialog.",
        )}
        code={`<Button onClick={() => setOpen(true)}>
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
  </CommandDialog>`}
        preview={
          <>
            <Button onClick={() => setOpen(true)}>Open Command Palette</Button>
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
        }
      />
    </div>
  );
}

export default function CommandShowcase() {
  const t = useI18n();
  return (
    <Showcase
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
      micro={{ content: <CommandMicroShowcase /> }}
    />
  );
}
