import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/index";
import { useState } from "react";
import { Button } from "@/index";
import { toast } from "sonner";
import { SectionHeader, ExampleSection } from "@/dev/components/showcase";

import { type Size } from "@/lib/types";

export default function ToastShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Toast"
        description="A succinct message that is displayed temporarily."
      >
        <Select value={globalSize} onValueChange={(v) => setGlobalSize(v as Size)}>
          <SelectTrigger className="w-[120px] h-8 text-xs bg-background">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sm">Size: sm</SelectItem>
            <SelectItem value="md">Size: md</SelectItem>
            <SelectItem value="lg">Size: lg</SelectItem>
          </SelectContent>
        </Select>
      </SectionHeader>

      <ExampleSection
        label="Toast Notifications"
        description="Click to trigger different toasts."
      >
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            size={globalSize}
            onClick={() => {
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              });
            }}
          >
            Show Toast
          </Button>
          <Button
            variant="outline"
            color="success"
            size={globalSize}
            onClick={() => {
              toast.success("Profile updated successfully");
            }}
          >
            Success Toast
          </Button>
          <Button
            variant="outline"
            color="destructive"
            size={globalSize}
            onClick={() => {
              toast.error("Failed to update profile");
            }}
          >
            Error Toast
          </Button>
        </div>
      </ExampleSection>
    </div>
  );
}
