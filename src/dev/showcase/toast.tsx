import { useState } from "react";
import { Button, MonoSelect } from "../../index";
import { toast } from "sonner";
import { SectionHeader, ExampleSection } from "../components/showcase";

export default function ToastShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Toast"
        description="A succinct message that is displayed temporarily."
      >
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as any)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
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
