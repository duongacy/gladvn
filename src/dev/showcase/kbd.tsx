import { Kbd, KbdGroup } from "@/index";;
import { SectionHeader, ExampleSection } from "@/dev/components/showcase";

export default function KbdShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Keyboard Shortcut"
        description="Displays a keyboard shortcut inline."
      />

      <ExampleSection
        label="Default"
        description="Keyboard shortcut indicators."
      >
        <p className="text-sm text-muted-foreground">
          Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command menu.
        </p>
        <p className="text-sm text-muted-foreground mt-4 flex items-center gap-2">
          Or using group:
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>Shift</Kbd>
            <Kbd>P</Kbd>
          </KbdGroup>
        </p>
      </ExampleSection>
    </div>
  );
}
