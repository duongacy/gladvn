import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.ComponentProps<"div"> {
  as?: React.ElementType;
}

export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, as: Component = "div", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn("container max-w-6xl mx-auto px-4", className)}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";
