import { useState } from "react";

import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon
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
  CommandShortcut
} from "../../components/micro/command";
import {
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample
} from "../../dev/components/showcase";

function CommandMicroShowcase() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="Default" description="Bảng lệnh có thể tìm kiếm với các mục được nhóm." code={`<Command className="border border-border rounded-xl shadow-sm overflow-hidden bg-background w-full">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>Không tìm thấy kết quả.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span>Calendar</span>
        </CommandItem>
        <CommandItem>
          <SmileIcon className="mr-2 h-4 w-4" />
          <span>Tìm kiếm Emoji</span>
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
          <span>Hồ sơ</span>
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <CreditCardIcon className="mr-2 h-4 w-4" />
          <span>Billing</span>
          <CommandShortcut>⌘B</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <SettingsIcon className="mr-2 h-4 w-4" />
          <span>Cài đặt</span>
          <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
`} preview={
                      <>
              <Command className="border border-border rounded-xl shadow-sm overflow-hidden bg-background w-full">
                          <CommandInput placeholder="Type a command or search..." />
                          <CommandList>
                            <CommandEmpty>Không tìm thấy kết quả.</CommandEmpty>
                            <CommandGroup heading="Suggestions">
                              <CommandItem>
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                <span>Calendar</span>
                              </CommandItem>
                              <CommandItem>
                                <SmileIcon className="mr-2 h-4 w-4" />
                                <span>Tìm kiếm Emoji</span>
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
                                <span>Hồ sơ</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                              </CommandItem>
                              <CommandItem>
                                <CreditCardIcon className="mr-2 h-4 w-4" />
                                <span>Billing</span>
                                <CommandShortcut>⌘B</CommandShortcut>
                              </CommandItem>
                              <CommandItem>
                                <SettingsIcon className="mr-2 h-4 w-4" />
                                <span>Cài đặt</span>
                                <CommandShortcut>⌘S</CommandShortcut>
                              </CommandItem>
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </>
                    } />

        <ShowcaseExample title="Flat List" description="Nhóm duy nhất không có tiêu đề." code={`<Command className="border border-border rounded-xl shadow-sm overflow-hidden bg-background w-full">
    <CommandInput placeholder="Tìm kiếm hành động..." />
    <CommandList>
      <CommandEmpty>No actions found.</CommandEmpty>
      <CommandGroup>
        <CommandItem>
          <UserIcon className="mr-2 h-4 w-4" />
          <span>Xem hồ sơ</span>
        </CommandItem>
        <CommandItem>
          <SettingsIcon className="mr-2 h-4 w-4" />
          <span>Mở cài đặt</span>
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
`} preview={
                      <>
              <Command className="border border-border rounded-xl shadow-sm overflow-hidden bg-background w-full">
                          <CommandInput placeholder="Tìm kiếm hành động..." />
                          <CommandList>
                            <CommandEmpty>No actions found.</CommandEmpty>
                            <CommandGroup>
                              <CommandItem>
                                <UserIcon className="mr-2 h-4 w-4" />
                                <span>Xem hồ sơ</span>
                              </CommandItem>
                              <CommandItem>
                                <SettingsIcon className="mr-2 h-4 w-4" />
                                <span>Mở cài đặt</span>
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
                    } />
      </ExampleGrid>

      <ShowcaseExample title="Dialog Menu" description="Menu lệnh được hiển thị bên trong dialog." code={`<Button onClick={() => setOpen(true)}>
    Open Command Palette
  </Button>
  <CommandDialog open={open} onOpenChange={setOpen}>
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>Không tìm thấy kết quả.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span>Calendar</span>
        </CommandItem>
        <CommandItem>
          <SmileIcon className="mr-2 h-4 w-4" />
          <span>Tìm kiếm Emoji</span>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>`} preview={
                  <>
          <Button onClick={() => setOpen(true)}>Mở Command Palette</Button><CommandDialog open={open} onOpenChange={setOpen}>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                      <CommandEmpty>Không tìm thấy kết quả.</CommandEmpty>
                      <CommandGroup heading="Suggestions">
                        <CommandItem>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          <span>Calendar</span>
                        </CommandItem>
                        <CommandItem>
                          <SmileIcon className="mr-2 h-4 w-4" />
                          <span>Tìm kiếm Emoji</span>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </CommandDialog>
                  </>
                } />
    </div>
  );
}

export default function CommandShowcase() {
  return (
    <Showcase
      title="Command"
      description="Command palette có tìm kiếm, kích hoạt bằng phím tắt (⌘K)."
      guideline={
        <ShowcaseDocs>
          <DocsP>
            Dùng để tạo các bảng lệnh (command palette) hoặc menu chọn có khả
            năng tìm kiếm nhanh, thường kích hoạt bằng phím tắt (như Cmd+K).
            Thích hợp cho các ứng dụng có nhiều chức năng phức tạp cần điều
            hướng nhanh.
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <CommandMicroShowcase /> }}
    />
  );
}
