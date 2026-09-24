"use client";

import * as React from "react";

import { Button } from "../../components/micro/button";
import {
  Confirm,
  ConfirmContent,
  ConfirmDescription,
  ConfirmFooter,
  ConfirmHeader,
  ConfirmMedia,
  ConfirmTitle,
  ConfirmTrigger,
} from "../../components/micro/confirm";
import type { Color, Size, Variant } from "../../lib/types";

export type ConfirmPresetProps = {
  /** If provided, renders a trigger element that opens the dialog declaratively (no need to manage `open` state). */
  trigger?: React.ReactElement;
  /** Controlled open state. Required when `trigger` is not provided. */
  open?: boolean;
  /** Dialog title. @default "Are you sure?" */
  title?: React.ReactNode;
  /** Optional description rendered below the title. */
  description?: React.ReactNode;
  /** Called when the user confirms. */
  onYes?: () => void;
  /** Called when the user cancels or closes the dialog (including ESC key). */
  onNo?: () => void;
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
  /** Dialog size — delegates to ConfirmContent which handles child scaling via CSS Context. @default "sm" */
  size?: Size;
  /** Optional custom content rendered below the header (e.g. a confirmation input). */
  children?: React.ReactNode;
};

/**
 * @description A pre-composed confirmation dialog.
 *
 * **Declarative mode** (trigger-based, no state needed):
 * ```tsx
 * <ConfirmPreset
 *   trigger={<Button color="destructive">Delete</Button>}
 *   title="Are you sure?"
 *   onYes={() => deleteItem()}
 * />
 * ```
 *
 * **Imperative mode** (controlled via `useConfirm` hook):
 * ```tsx
 * const { isOpen, ask, yes, no } = useConfirm();
 * <button onClick={async () => { const ok = await ask(); if (ok) await deleteItem(); }}>
 *   Delete
 * </button>
 * <ConfirmPreset open={isOpen} onYes={yes} onNo={no} title="Are you sure?" />
 * ```
 */
const ConfirmPreset = React.forwardRef<HTMLDivElement, ConfirmPresetProps>(
  (
    {
      trigger,
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
        onOpenChange={(val) => {
          // Catches ESC key and backdrop dismiss to prevent dangling promises
          if (!val) onNo?.();
        }}
      >
        {trigger && <ConfirmTrigger render={trigger} />}

        {/* size prop delegated to ConfirmContent — CSS Context handles child scaling */}
        <ConfirmContent ref={ref} size={size}>
          <ConfirmHeader>
            {icon && <ConfirmMedia>{icon}</ConfirmMedia>}
            <ConfirmTitle>{title}</ConfirmTitle>
            {description && (
              <ConfirmDescription>{description}</ConfirmDescription>
            )}
          </ConfirmHeader>

          {children && <div className="px-0">{children}</div>}

          <ConfirmFooter>
            {/* Cancel renders first → receives auto-focus, preventing accidental confirmation */}
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
