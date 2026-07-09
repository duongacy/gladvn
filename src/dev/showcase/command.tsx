import { useState } from "react";
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  CommandDialog,
} from "@/components/micro/command";
import { Button } from "@/components/micro/button";

export default function CommandShowcase() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Command"
        description="Menu lệnh nhanh, có thể kết hợp, không theo kiểu cho React."
      />

      <ExampleGrid columns={2}>
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
