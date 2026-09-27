/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 * - Zero-Specificity Contextual Sizing (:where)
 * - Defensive Context (CardContext)
 */
import * as React from "react";

import { type Size } from "../../lib/types";
import { cn } from "../../lib/utils";

const CardContext = React.createContext(false);

function useCardContext(componentName: string) {
  const isInsideCard = React.useContext(CardContext);
  if (process.env.NODE_ENV !== "production" && !isInsideCard) {
    console.warn(
      `[gladvn] <${componentName}> phải được dùng bên trong <Card>. ` +
        `Nếu dùng bên ngoài, contextual sizing sẽ không hoạt động.`,
    );
  }
}

/**
 * @description Displays a card with header, content, and footer.
 * @requires CardHeader, CardTitle, CardDescription, CardContent, CardFooter
 * @example
 * <Card>
 *   <CardHeader><CardTitle>Title</CardTitle></CardHeader>
 *   <CardContent>Content here</CardContent>
 * </Card>
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { size?: Size }
>(({ className, size = "md", children, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card"
    data-size={size}
    className={cn(
      "group/card flex flex-col overflow-hidden rounded-xl bg-card text-card-foreground ring-1 ring-foreground/10",
      className,
    )}
    {...props}
  >
    <CardContext value={true}>{children}</CardContext>
  </div>
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  useCardContext("CardHeader");
  return (
    <div
      ref={ref}
      data-slot="card-header"
      className={cn(
        "flex flex-col gap-1.5",
        "group-data-[size=sm]/card:p-4",
        "group-data-[size=md]/card:p-6",
        "group-data-[size=lg]/card:p-8",
        className,
      )}
      {...props}
    />
  );
});
CardHeader.displayName = "CardHeader";

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, as: Tag = "h3", ...props }, ref) => {
    useCardContext("CardTitle");
    return (
      <Tag
        ref={ref}
        data-slot="card-title"
        className={cn(
          "font-heading leading-snug font-medium",
          "group-data-[size=sm]/card:text-sm",
          "group-data-[size=md]/card:text-base",
          "group-data-[size=lg]/card:text-lg",
          className,
        )}
        {...props}
      />
    );
  },
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<"p">
>(({ className, ...props }, ref) => {
  useCardContext("CardDescription");
  return (
    <p
      ref={ref}
      data-slot="card-description"
      className={cn(
        "text-muted-foreground",
        "group-data-[size=sm]/card:text-xs",
        "group-data-[size=md]/card:text-sm",
        "group-data-[size=lg]/card:text-base",
        className,
      )}
      {...props}
    />
  );
});
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  useCardContext("CardContent");
  return (
    <div
      ref={ref}
      data-slot="card-content"
      className={cn(
        "group-data-[size=sm]/card:p-4",
        "group-data-[size=sm]/card:pt-0",
        "group-data-[size=md]/card:p-6",
        "group-data-[size=md]/card:pt-0",
        "group-data-[size=lg]/card:p-8",
        "group-data-[size=lg]/card:pt-0",
        className,
      )}
      {...props}
    />
  );
});
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  useCardContext("CardFooter");
  return (
    <div
      ref={ref}
      data-slot="card-footer"
      className={cn(
        "flex items-center gap-2",
        "group-data-[size=sm]/card:p-4",
        "group-data-[size=sm]/card:pt-0",
        "group-data-[size=md]/card:p-6",
        "group-data-[size=md]/card:pt-0",
        "group-data-[size=lg]/card:p-8",
        "group-data-[size=lg]/card:pt-0",
        className,
      )}
      {...props}
    />
  );
});
CardFooter.displayName = "CardFooter";

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
