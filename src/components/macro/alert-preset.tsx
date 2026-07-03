import * as React from "react";
import { XIcon } from "lucide-react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AlertAction,
  type AlertProps,
} from "@/components/micro/alert";
import { Button } from "@/components/micro/button";

export type AlertPresetProps = AlertProps & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactElement;
  action?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  defaultOpen?: boolean;
};

const AlertPreset = React.forwardRef<HTMLDivElement, AlertPresetProps>(
  (
    {
      title,
      description,
      icon,
      action,
      dismissible = false,
      onDismiss,
      defaultOpen = true,
      children,
      color = "info",
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);

    if (!isOpen) return null;

    const handleDismiss = () => {
      setIsOpen(false);
      onDismiss?.();
    };

    return (
      <Alert ref={ref} color={color} {...props}>
        {icon && <AlertIcon render={icon} />}
        {title && <AlertTitle>{title}</AlertTitle>}
        {description && <AlertDescription>{description}</AlertDescription>}
        {children}
        {(action || dismissible) && (
          <AlertAction>
            {action || (
              <Button
                variant="ghost"
                color={color as React.ComponentProps<typeof Button>["color"]}
                size="sm"
                className="p-0 size-6 group-data-[size=sm]/alert:size-5 group-data-[size=lg]/alert:size-7"
                onClick={handleDismiss}
                aria-label="Dismiss alert"
              >
                <XIcon className="size-3.5 group-data-[size=sm]/alert:size-3 group-data-[size=lg]/alert:size-4" />
              </Button>
            )}
          </AlertAction>
        )}
      </Alert>
    );
  }
);

AlertPreset.displayName = "AlertPreset";

export { AlertPreset };
