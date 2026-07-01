import { useState } from "react";
import { Button, Spinner ,
  SelectPreset} from "@/index";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { MailIcon, DownloadIcon, PlusIcon } from "lucide-react";

import { type Size } from "@/lib/types";

export default function ButtonShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => setIsDeleting(false), 1500);
  };

  const handleSend = () => {
    setIsSending(true);
    setTimeout(() => setIsSending(false), 1500);
  };

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Button"
        description="Triggers an action or event, such as submitting a form or opening a dialog."
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

      {/* ── Variants ── */}
      <ExampleSection
        label="Variants"
        description="All available visual styles."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button size={globalSize} variant="solid">
            Solid
          </Button>
          <Button size={globalSize} variant="outline">
            Outline
          </Button>
          <Button size={globalSize} variant="soft">
            Soft
          </Button>
          <Button size={globalSize} variant="ghost">
            Ghost
          </Button>
          <Button size={globalSize} variant="link">
            Link
          </Button>
        </div>
      </ExampleSection>

      {/* ── Colors ── */}
      <ExampleSection
        label="Colors"
        description="Semantic color tokens paired with the solid variant."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button size={globalSize} color="primary">
            Primary
          </Button>
          <Button size={globalSize} color="secondary">
            Secondary
          </Button>
          <Button size={globalSize} color="destructive">
            Destructive
          </Button>
          <Button size={globalSize} color="warning">
            Warning
          </Button>
          <Button size={globalSize} color="success">
            Success
          </Button>
          <Button size={globalSize} color="info">
            Info
          </Button>
          <Button size={globalSize} color="tertiary">
            Tertiary
          </Button>
          <Button size={globalSize} color="muted">
            Muted
          </Button>
          <Button size={globalSize} color="accent">
            Accent
          </Button>
        </div>
      </ExampleSection>

      {/* ── With Icon ── */}
      <ExampleGrid columns={2}>
        <ExampleSection
          label="With Icon"
          description="Buttons with leading or trailing icons."
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button size={globalSize} variant="outline">
              <MailIcon />
              Login with Email
            </Button>
            <Button size={globalSize}>
              <DownloadIcon />
              Download
            </Button>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Icon Only"
          description="Square buttons with only an icon."
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button size={globalSize} variant="outline" className="px-2.5">
              <PlusIcon />
            </Button>
            <Button size={globalSize} variant="ghost" className="px-2.5">
              <MailIcon />
            </Button>
            <Button size={globalSize} variant="soft" className="px-2.5">
              <DownloadIcon />
            </Button>
          </div>
        </ExampleSection>
      </ExampleGrid>

      {/* ── Disabled ── */}
      <ExampleSection
        label="Disabled"
        description="Non-interactive button states."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button size={globalSize} disabled>
            Solid Disabled
          </Button>
          <Button size={globalSize} variant="outline" disabled>
            Outline Disabled
          </Button>
          <Button size={globalSize} variant="soft" disabled>
            Soft Disabled
          </Button>
          <Button size={globalSize} variant="ghost" disabled>
            Ghost Disabled
          </Button>
          <Button size={globalSize} variant="link" disabled>
            Link Disabled
          </Button>
        </div>
      </ExampleSection>

      {/* ── Real-world examples ── */}
      <ExampleGrid columns={2}>
        <ExampleSection
          label="Loading State"
          description="Button with spinner during async action."
          fullWidth
        >
          <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
            <Button
              size={globalSize}
              color="primary"
              className="w-full"
              disabled={isSending}
              onClick={handleSend}
            >
              {isSending && <Spinner />}
              {isSending ? "Sending..." : "Send Message"}
            </Button>
            <Button size={globalSize} variant="outline" className="w-full">
              Save Draft
            </Button>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Destructive"
          description="Confirming a dangerous action."
          fullWidth
        >
          <div className="w-full max-w-xs mx-auto rounded-lg border border-destructive/20 bg-destructive/5 p-4 flex flex-col gap-2">
            <p className="text-sm font-medium">Delete Workspace</p>
            <p className="text-xs text-muted-foreground">
              This action cannot be undone. All data will be lost.
            </p>
            <Button
              size={globalSize}
              color="destructive"
              className="w-full mt-1"
              disabled={isDeleting}
              onClick={handleDelete}
            >
              {isDeleting && <Spinner />}
              {isDeleting ? "Deleting..." : "Delete Permanently"}
            </Button>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
