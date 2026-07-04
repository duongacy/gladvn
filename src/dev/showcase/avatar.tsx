import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

const users = [
  { src: "https://github.com/shadcn.png", alt: "@shadcn", initials: "CN" },
  { src: "https://github.com/vercel.png", alt: "@vercel", initials: "VC" },
  { src: "https://github.com/leerob.png", alt: "@leerob", initials: "LR" },
  { src: "https://github.com/rauchg.png", alt: "@rauchg", initials: "GR" },
  {
    src: "https://github.com/timneutkens.png",
    alt: "@timneutkens",
    initials: "TN",
  },
];

import { type Size } from "@/lib/types";
import { Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup, AvatarGroupCount } from "@/components/micro/avatar";
import { SelectPreset } from "@/components/macro/select-preset";

export default function AvatarShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Avatar"
        description="An image element with a fallback for representing the user."
      >
        <SelectPreset
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
          className="w-[120px] h-8 text-xs bg-background"
        />
      </SectionHeader>

      {/* ── With Image ── */}
      <ExampleSection
        label="With Image"
        description="Avatars displaying user photos with fallback initials."
      >
        <div className="flex items-center gap-4">
          <Avatar size={globalSize}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar size={globalSize}>
            <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <Avatar size={globalSize}>
            <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </div>
      </ExampleSection>

      <ExampleGrid columns={2}>
        {/* ── Fallback Only ── */}
        <ExampleSection
          label="Fallback Only"
          description="When no image is provided, initials are displayed."
        >
          <div className="flex items-center gap-4">
            <Avatar size={globalSize}>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar size={globalSize}>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar size={globalSize}>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </ExampleSection>

        {/* ── Broken Image (triggers fallback) ── */}
        <ExampleSection
          label="Broken Image"
          description="Fallback shown when the image URL fails to load."
        >
          <div className="flex items-center gap-4">
            <Avatar size={globalSize}>
              <AvatarImage
                src="https://broken-url.invalid/avatar.png"
                alt="broken"
              />
              <AvatarFallback>BR</AvatarFallback>
            </Avatar>
            <Avatar size={globalSize}>
              <AvatarImage src="" alt="empty" />
              <AvatarFallback>EM</AvatarFallback>
            </Avatar>
          </div>
        </ExampleSection>
      </ExampleGrid>

      {/* ── With Badge ── */}
      <ExampleSection
        label="With Badge"
        description="Status indicator badge positioned at the bottom-right corner."
      >
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Avatar size={globalSize}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
              <AvatarBadge className="absolute z-10 right-0 bottom-0 bg-green-500" />
            </Avatar>
            <span className="text-xs text-muted-foreground">Online</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size={globalSize}>
              <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
              <AvatarFallback>VC</AvatarFallback>
              <AvatarBadge className="absolute z-10 right-0 bottom-0 bg-yellow-500" />
            </Avatar>
            <span className="text-xs text-muted-foreground">Away</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size={globalSize}>
              <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
              <AvatarFallback>LR</AvatarFallback>
              <AvatarBadge className="absolute z-10 right-0 bottom-0 bg-muted-foreground/50" />
            </Avatar>
            <span className="text-xs text-muted-foreground">Offline</span>
          </div>
        </div>
      </ExampleSection>

      {/* ── Avatar Group ── */}
      <ExampleSection
        label="Avatar Group"
        description="Stacked avatars with overlapping layout for teams or collaborators."
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground font-medium">
              Basic group
            </span>
            <AvatarGroup>
              {users.slice(0, 4).map((user) => (
                <Avatar key={user.alt} size={globalSize}>
                  <AvatarImage src={user.src} alt={user.alt} />
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground font-medium">
              With overflow count
            </span>
            <AvatarGroup>
              {users.slice(0, 3).map((user) => (
                <Avatar key={user.alt} size={globalSize}>
                  <AvatarImage src={user.src} alt={user.alt} />
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
              ))}
              <AvatarGroupCount size={globalSize}>+12</AvatarGroupCount>
            </AvatarGroup>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground font-medium">
              Fallback-only group
            </span>
            <AvatarGroup>
              <Avatar size={globalSize}>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar size={globalSize}>
                <AvatarFallback>CD</AvatarFallback>
              </Avatar>
              <Avatar size={globalSize}>
                <AvatarFallback>EF</AvatarFallback>
              </Avatar>
              <AvatarGroupCount size={globalSize}>+5</AvatarGroupCount>
            </AvatarGroup>
          </div>
        </div>
      </ExampleSection>
    </div>
  );
}
