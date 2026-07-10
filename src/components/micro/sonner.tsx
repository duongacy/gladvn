/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
"use client";

import { Spinner } from "@/components/micro/spinner";
import { useTheme } from "@/components/micro/theme-provider";
import {
  CircleCheckIcon,
  InfoIcon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const themeContext = useTheme();
  const theme = themeContext?.mode;

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Spinner size="md" />,
      }}
      richColors
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",

          /* Map Sonner's internal variables to our design system variables */
          "--success-bg":
            "color-mix(in srgb, var(--success) 10%, var(--popover))",
          "--success-text": "var(--success)",
          "--success-border":
            "color-mix(in srgb, var(--success) 20%, var(--popover))",

          "--error-bg":
            "color-mix(in srgb, var(--destructive) 10%, var(--popover))",
          "--error-text": "var(--destructive)",
          "--error-border":
            "color-mix(in srgb, var(--destructive) 20%, var(--popover))",

          "--warning-bg":
            "color-mix(in srgb, var(--warning) 10%, var(--popover))",
          "--warning-text": "var(--warning)",
          "--warning-border":
            "color-mix(in srgb, var(--warning) 20%, var(--popover))",

          "--info-bg": "color-mix(in srgb, var(--info) 10%, var(--popover))",
          "--info-text": "var(--info)",
          "--info-border":
            "color-mix(in srgb, var(--info) 20%, var(--popover))",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "group toast",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
