import React from "react";
import { toast } from "sonner";

import { Button } from "../../components/micro/button";
import { useI18n, useDevContext } from "../components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsH3,
  DocsP,
} from "../components/showcase";

function useToastExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: "Toast Notifications",
        description: t(
          "Nhấp để kích hoạt các loại toast khác nhau.",
          "Click to trigger different types of toasts."
        ),
        microCode: `<div className="flex flex-wrap gap-3">
  <Button
    variant="outline"
    onClick={() => {
      toast("Event created", {
        description:
          "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo") } })
    }}
  >
    Show Toast
  </Button>
  <Button
    variant="outline"
    color="success"
    onClick={() => {
      toast.success("Profile updated successfully")
    }}
  >
    Success Toast
  </Button>
  <Button
    variant="outline"
    color="destructive"
    onClick={() => {
      toast.error("Failed to update profile")
    }}
  >
    Error Toast
  </Button>
</div>`,
        microPreview: (
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              size={globalSize}
              onClick={() => {
                toast("Event created", {
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
        ),
      },
    ],
    [t, globalSize]
  );
}

export default function ToastShowcase() {
  const t = useI18n();
  const examples = useToastExamples();

  return (
    <ConfigurableShowcase
      title="Toast"
      description={t(
        "Một thông báo ngắn gọn được hiển thị tạm thời.",
        "A brief message that is displayed temporarily."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsH3>Toast (Sonner)</DocsH3>
          <DocsP>
            {t(
              "Sử dụng để hiển thị các thông báo nhanh cho người dùng.",
              "Use to display quick notifications to users."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
