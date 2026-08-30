import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";

import { cn } from "../../lib/utils";

/**
 * @description Visually or semantically separates content.
 * @example
 * <Separator orientation="vertical" />
 */
function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:w-px",
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
