import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/micro/card";

export type CardPresetProps = Omit<React.ComponentProps<typeof Card>, "title"> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
};

const CardPreset = React.forwardRef<HTMLDivElement, CardPresetProps>(
  ({ title, description, footer, children, ...props }, ref) => {
    return (
      <Card ref={ref} {...props}>
        {(title || description) && (
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        )}
        {children && <CardContent>{children}</CardContent>}
        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>
    );
  }
);
CardPreset.displayName = "CardPreset";

export { CardPreset };
