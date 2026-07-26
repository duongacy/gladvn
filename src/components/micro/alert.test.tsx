
import { render, screen } from "@testing-library/react";
import { InfoIcon } from "lucide-react";
import { describe, expect, it } from "vitest";

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "./alert";

describe("Alert", () => {
  it("[3C.12-01] [P1] renders all alert parts correctly", () => {
    
    render(
      <Alert data-testid="alert">
        <AlertIcon render={<InfoIcon />} data-testid="alert-icon" />
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert Description</AlertDescription>
        <AlertAction data-testid="alert-action">Action</AlertAction>
      </Alert>,
    );

    expect(screen.getByTestId("alert")).toBeInTheDocument();
    expect(screen.getByTestId("alert-icon")).toBeInTheDocument();
    expect(screen.getByText("Alert Title")).toBeInTheDocument();
    expect(screen.getByText("Alert Description")).toBeInTheDocument();
    expect(screen.getByTestId("alert-action")).toHaveTextContent("Action");
  });

  it("[3C.12-02] [P1] applies the color variants correctly", () => {
    
    const { rerender } = render(
      <Alert color="destructive" data-testid="alert-destructive">
        Error
      </Alert>,
    );
    
    expect(screen.getByTestId("alert-destructive")).toHaveAttribute(
      "data-color",
      "destructive",
    );

    rerender(
      <Alert color="success" data-testid="alert-success">
        Success
      </Alert>,
    );
    expect(screen.getByTestId("alert-success")).toHaveAttribute(
      "data-color",
      "success",
    );
  });

  it("[3C.12-03] [P1] applies the size variants correctly", () => {
    
    const { rerender } = render(
      <Alert size="sm" data-testid="alert-sm">
        Small
      </Alert>,
    );
    
    expect(screen.getByTestId("alert-sm")).toHaveAttribute("data-size", "sm");

    rerender(
      <Alert size="lg" data-testid="alert-lg">
        Large
      </Alert>,
    );
    expect(screen.getByTestId("alert-lg")).toHaveAttribute("data-size", "lg");
  });
});
