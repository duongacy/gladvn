import { Kbd, KbdGroup } from "@/components/micro/kbd";
import {
  DocsP,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "@/dev/components/showcase";

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content (không export)
// ──────────────────────────────────────────────────────────
function KbdMicroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ExampleSection
        label="Default"
        description="Chỉ báo phím tắt."
        codeString={`<p className="text-sm text-muted-foreground">
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
`}
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

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point (export default)
// ──────────────────────────────────────────────────────────
export default function KbdShowcase() {
  return (
    <Showcase
      title="Keyboard Shortcut"
      description="Hiển thị phím tắt nội tuyến."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            Sử dụng thẻ Kbd (Keyboard Shortcut) để biểu diễn các phím trên bàn
            phím, giúp người dùng dễ dàng nhận biết phím tắt để thực hiện hành
            động.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[{ label: "Micro (Primitive)", content: <KbdMicroShowcase /> }]}
    />
  );
}
