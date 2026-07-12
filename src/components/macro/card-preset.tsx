import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/micro/card";
import * as React from "react";

export type CardPresetProps = Omit<
  React.ComponentProps<typeof Card>,
  "title"
> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
};

const CardPreset = React.forwardRef<HTMLDivElement, CardPresetProps>(
  ({ title, description, footer, children, className, ...props }, ref) => {
    return (
      <div className={className} ref={ref}>
        <div className="@container/card size-full">
          <Card className="size-full" {...props}>
            {(title || description) && (
              <CardHeader>
                {title && <CardTitle>{title}</CardTitle>}
                {description && (
                  <CardDescription>{description}</CardDescription>
                )}
              </CardHeader>
            )}
            {children && <CardContent>{children}</CardContent>}
            {footer && <CardFooter>{footer}</CardFooter>}
          </Card>
        </div>
      </div>
    );
  },
);
CardPreset.displayName = "CardPreset";

export { CardPreset };
