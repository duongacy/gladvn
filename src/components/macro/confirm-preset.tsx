"use client";

import * as React from "react";

import { Button } from "../../components/micro/button";
import {
  Confirm,
  ConfirmContent,
  ConfirmDescription,
  ConfirmFooter,
  ConfirmHeader,
  ConfirmTitle,
} from "../../components/micro/confirm";
import type { Color, Size, Variant } from "../../lib/types";
import { cn } from "../../lib/utils";

export type ConfirmPresetProps = {
  open: boolean;
  /** Dialog title. @default "Are you sure?" */
  title?: React.ReactNode;
  /** Optional description rendered below the title. */
  description?: React.ReactNode;
  /** Called when the user clicks the yes button. */
  onYes: () => void;
  /** Called when the user clicks the no button (or closes the dialog). */
  onNo: () => void;
  /** Label for the yes button. @default "Confirm" */
  yesLabel?: string;
  /** Label for the no button. @default "Cancel" */
  noLabel?: string;
  /** Semantic color for the yes button. @default "destructive" */
  yesColor?: Color;
  /** Semantic color for the no button. @default "secondary" */
  noColor?: Color;
  /** Button variant for the yes button. @default "solid" */
  yesVariant?: Variant;
  /** Button variant for the no button. @default "outline" */
  noVariant?: Variant;
  /** Optional icon rendered beside the title. */
  icon?: React.ReactNode;
  /** Whether an async operation is in progress (disables yes button). */
  isLoading?: boolean;
  /** Label shown on the yes button while loading. @default "Processing..." */
  loadingLabel?: string;
  /** Dialog size. @default "sm" */
  size?: Size;
  /** Optional custom content rendered below the header. */
  children?: React.ReactNode;
};

/**
 * @description A pre-composed confirmation dialog. Pair with `useConfirm` for
 * a promise-based API:
 *
 * ```tsx
 * const { isOpen, ask, confirm, cancel } = useConfirm();
 *
 * const handleDelete = async () => {
 *   const ok = await ask();
 *   if (!ok) return;
 *   await deleteItem();
 * };
 *
 * <ConfirmPreset open={isOpen} onYes={yes} onNo={no} title="…" />
 * ```
 */
const ConfirmPreset = React.forwardRef<HTMLDivElement, ConfirmPresetProps>(
  (
    {
      open,
      title = "Are you sure?",
      description,
      onYes,
      onNo,
      yesLabel = "Confirm",
      noLabel = "Cancel",
      yesColor = "destructive",
      noColor = "secondary",
      yesVariant = "solid",
      noVariant = "outline",
      icon,
      isLoading = false,
      loadingLabel = "Processing...",
      size = "sm",
      children,
    },
    ref,
  ) => {
    return (
      <Confirm
        open={open}
      >
        <ConfirmContent
          ref={ref}
          className={cn(
            "flex flex-col gap-0 p-0 overflow-hidden",
            {
              "sm:max-w-md": size === "sm",
              "sm:max-w-lg": size === "md",
              "sm:max-w-xl": size === "lg",
            }
          )}
        >
          <ConfirmHeader className="shrink-0 p-4">
            <div className="flex items-center gap-3">
              {icon && <div className="shrink-0">{icon}</div>}
              <ConfirmTitle>{title}</ConfirmTitle>
            </div>
            {description && (
              <ConfirmDescription>{description}</ConfirmDescription>
            )}
          </ConfirmHeader>

          {children && (
            <div className="px-4 pb-4">
              {children}
            </div>
          )}

          <ConfirmFooter className="shrink-0 rounded-b-xl border-t border-t-border bg-muted/50 p-4">
            <Button
              variant={noVariant}
              color={noColor}
              onClick={onNo}
              disabled={isLoading}
            >
              {noLabel}
            </Button>
            <Button
              variant={yesVariant}
              color={yesColor}
              onClick={onYes}
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? loadingLabel : yesLabel}
            </Button>
          </ConfirmFooter>
        </ConfirmContent>
      </Confirm>
    );
  },
);
ConfirmPreset.displayName = "ConfirmPreset";

export { ConfirmPreset };
