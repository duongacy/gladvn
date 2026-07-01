import { Separator } from "@/index";;
import { SectionHeader, ExampleSection } from "@/dev/components/showcase";

export default function SeparatorShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Separator"
        description="Visually or semantically separates content."
      />

      <ExampleSection
        label="Default"
        description="Horizontal and vertical separators."
      >
        <div className="w-full max-w-sm">
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">
              Radix Primitives
            </h4>
            <p className="text-sm text-muted-foreground">
              An open-source UI component library.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
      </ExampleSection>
    </div>
  );
}
