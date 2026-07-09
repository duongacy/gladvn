import { useState } from "react";
import { toast } from "sonner";
import { SectionHeader, ExampleSection } from "@/dev/components/showcase";

import { type Size } from "@/lib/types";
import { Button } from "@/components/micro/button";
import { SelectPreset } from "@/components/macro/select-preset";

export default function ToastShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Toast"
        description="Một thông báo ngắn gọn được hiển thị tạm thời."
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

      <ExampleSection
        label="Toast Notifications"
        description="Nhấp để kích hoạt các lời chúc mừng khác nhau."
      
      codeString={`<div className="flex flex-wrap gap-3">
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
`}>
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
