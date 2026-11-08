import React, { useCallback } from "react";

import { toast } from "sonner";
import { useDevContext, useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  DocsH3,
  DocsP,
  ShowcaseDocs,
} from "~app/components/showcase";

import { Button } from "@/components/micro/button";

function useToastExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  const handleDefaultToast = useCallback(() => {
    toast("Event created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  }, []);

  const handleSuccessToast = useCallback(() => {
    toast.success("Profile updated successfully");
  }, []);

  const handleErrorToast = useCallback(() => {
    toast.error("Failed to update profile");
  }, []);

  return React.useMemo(
    () => [
      {
        title: "Toast Notifications",
        description: t(
          "Nhấp để kích hoạt các loại toast khác nhau.",
          "Click to trigger different types of toasts.",
        ),
        microCode: `<div className="flex flex-wrap gap-3">
  <Button
    variant="outline"
    onClick={handleDefaultToast}
  >
    Show Toast
  </Button>
  <Button
    variant="outline"
    color="success"
    onClick={handleSuccessToast}
  >
    Success Toast
  </Button>
  <Button
    variant="outline"
    color="destructive"
    onClick={handleErrorToast}
  >
    Error Toast
  </Button>
</div>`,
        microPreview: (
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              size={globalSize}
              onClick={handleDefaultToast}
            >
              Show Toast
            </Button>
            <Button
              variant="outline"
              color="success"
              size={globalSize}
              onClick={handleSuccessToast}
            >
              Success Toast
            </Button>
            <Button
              variant="outline"
              color="destructive"
              size={globalSize}
              onClick={handleErrorToast}
            >
              Error Toast
            </Button>
          </div>
        ),
      },
    ],
    [t, globalSize, handleDefaultToast, handleSuccessToast, handleErrorToast],
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
        "A brief message that is displayed temporarily.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsH3>Toast (Sonner)</DocsH3>
          <DocsP>
            {t(
              "Sử dụng để hiển thị các thông báo nhanh cho người dùng.",
              "Use to display quick notifications to users.",
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
