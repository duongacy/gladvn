import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../../index";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "../components/showcase";

export default function CommandShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Command"
        description="Fast, composable, unstyled command menu for React."
      />

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Default"
          description="Searchable command palette with grouped items."
        >
          <div className="border rounded-xl shadow-sm overflow-hidden bg-background w-full">
            <Command>
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
          </div>
        </ExampleSection>

        <ExampleSection
          label="Flat List"
          description="Single group without heading."
        >
          <div className="border rounded-xl shadow-sm overflow-hidden bg-background w-full">
            <Command>
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
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
