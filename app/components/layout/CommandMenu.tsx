import React from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/macro/command-preset";
import { COMPONENTS } from "~app/config/data";

interface CommandMenuProps {
  cmdOpen: boolean;
  setCmdOpen: (open: boolean) => void;
  language: "vi" | "en";
  setActive: (id: string) => void;
}

export function CommandMenu({
  cmdOpen,
  setCmdOpen,
  language,
  setActive,
}: CommandMenuProps) {
  return (
    <CommandDialog
      open={cmdOpen}
      onOpenChange={setCmdOpen}
      title={language === "en" ? "Search components" : "Tìm component"}
      description={
        language === "en"
          ? "Quickly search components in Gladvn UI"
          : "Tìm kiếm nhanh component trong Gladvn UI"
      }
    >
      <Command size="lg">
        <CommandInput
          placeholder={
            language === "en"
              ? "Type a component name..."
              : "Nhập tên component..."
          }
          autoFocus
        />
        <CommandList className="max-h-96">
          <CommandEmpty>
            {language === "en"
              ? "No components found."
              : "Không tìm thấy component nào."}
          </CommandEmpty>

          <CommandGroup>
            {COMPONENTS.map(({ id, label, category }) => (
              <CommandItem
                key={id}
                value={`${label} ${category}`}
                onSelect={() => setActive(id)}
              >
                {label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
