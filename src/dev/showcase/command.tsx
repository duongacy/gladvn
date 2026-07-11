import { Button } from "@/components/micro/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/micro/command";
import {
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "@/dev/components/showcase";
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";

function CommandMicroShowcase() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Default"
          description="Bảng lệnh có thể tìm kiếm với các mục được nhóm."
          codeString={`<Command className="border rounded-xl shadow-sm overflow-hidden bg-background w-full">
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
        >
          <Command className="border rounded-xl shadow-sm overflow-hidden bg-background w-full">
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
        </ExampleSection>

        <ExampleSection
          label="Flat List"
          description="Nhóm duy nhất không có tiêu đề."
          codeString={`<Command className="border rounded-xl shadow-sm overflow-hidden bg-background w-full">
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
        >
          <Command className="border rounded-xl shadow-sm overflow-hidden bg-background w-full">
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
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Dialog Menu"
        description="Menu lệnh được hiển thị bên trong hộp thoại."
        codeString={`<Button onClick={() => setOpen(true)}>Open Command Palette</Button>
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
`}
      >
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
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function CommandShowcase() {
  return (
    <Showcase
      title="Command"
      description="Menu lệnh nhanh, có thể kết hợp, không theo kiểu cho React."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            Dùng để tạo các bảng lệnh (command palette) hoặc menu chọn có khả
            năng tìm kiếm nhanh, thường kích hoạt bằng phím tắt (như Cmd+K).
            Thích hợp cho các ứng dụng có nhiều chức năng phức tạp cần điều
            hướng nhanh.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <CommandMicroShowcase />,
        },
      ]}
    />
  );
}
