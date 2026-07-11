import { useDevContext } from "@/dev/components/dev-context";
import {
  DocsH3,
  DocsP,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "@/dev/components/showcase";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/micro/button";
import { type Size } from "@/lib/types";

function ToastMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ExampleSection
        label="Toast Notifications"
        description="Nhấp để kích hoạt các lời chúc mừng khác nhau."
        codeString={`<div className="flex flex-wrap gap-3">
  <Button
    variant="outline"
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
    onClick={() => {
      toast.success("Profile updated successfully");
    }}
  >
    Success Toast
  </Button>
  <Button
    variant="outline"
    color="destructive"
    onClick={() => {
      toast.error("Failed to update profile");
    }}
  >
    Error Toast
  </Button>
</div>
`}
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

export default function ToastShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Toast"
      description="Một thông báo ngắn gọn được hiển thị tạm thời."
      generalConcept={
        <ShowcaseDocs>
          <DocsH3>Toast (Sonner)</DocsH3>
          <DocsP>Sử dụng để hiển thị các thông báo nhanh cho người dùng.</DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <ToastMicroShowcase globalSize={globalSize} />,
        },
      ]}
    />
  );
}
