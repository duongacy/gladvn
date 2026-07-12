import {
  Empty,
  EmptyAction,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../../components/micro/empty";
import { cn } from "../../lib/utils";
import * as React from "react";

type EmptyPresetProps = {
  icon?: React.ReactNode;
  title: string;
  description?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
};

function EmptyPreset({
  icon,
  title,
  description,
  action,
  className,
}: EmptyPresetProps) {
  return (
    <Empty className={cn(className)}>
      <EmptyHeader>
        {icon && <EmptyMedia variant="icon">{icon}</EmptyMedia>}
        <EmptyTitle>{title}</EmptyTitle>
        {description && <EmptyDescription>{description}</EmptyDescription>}
      </EmptyHeader>
      {action && (
        <EmptyContent>
          <EmptyAction>{action}</EmptyAction>
        </EmptyContent>
      )}
    </Empty>
  );
}
EmptyPreset.displayName = "EmptyPreset";

export { EmptyPreset };
export type { EmptyPresetProps };
