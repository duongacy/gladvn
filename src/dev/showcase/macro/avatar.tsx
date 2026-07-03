import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { AvatarPreset } from "@/components/macro/avatar-preset";

export default function MacroAvatarShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Avatar (Macro)"
        description="A preset component that renders an Avatar with fallback initials."
      />

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="Avatar with image and fallback.">
          <div className="flex items-center gap-4">
            <AvatarPreset src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarPreset alt="John Doe" />
            <AvatarPreset />
          </div>
        </ExampleSection>

        <ExampleSection label="Custom Sizes" description="Using className to adjust the avatar size.">
          <div className="flex items-center gap-4">
            <AvatarPreset alt="Small" className="h-6 w-6 text-xs" />
            <AvatarPreset alt="Medium" className="h-10 w-10" />
            <AvatarPreset alt="Large" className="h-16 w-16 text-xl" />
          </div>
        </ExampleSection>

        <ExampleSection label="Avatar Group" description="Stacking avatars together to represent a group of users.">
          <div className="flex items-center -space-x-3">
            <AvatarPreset src="https://github.com/shadcn.png" alt="@shadcn" className="ring-2 ring-background" />
            <AvatarPreset alt="Alice Smith" className="ring-2 ring-background" />
            <AvatarPreset alt="Bob Jones" className="ring-2 ring-background" />
            <AvatarPreset alt="+3" className="ring-2 ring-background" />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
