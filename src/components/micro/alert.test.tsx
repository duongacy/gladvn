
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

import { afterEach, beforeEach, vi } from "vitest";

describe("Alert - Defensive Context", () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnMock.mockRestore();
  });

  it("✅ KHÔNG warn khi tất cả thẻ con nằm bên trong <Alert>", () => {
    render(
      <Alert>
        <AlertIcon render={<InfoIcon />} />
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
        <AlertAction>Action</AlertAction>
      </Alert>,
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  it("🚨 PHẢI warn khi <AlertTitle> dùng ngoài <Alert>", () => {
    render(<AlertTitle>test</AlertTitle>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining("[gladvn] <AlertTitle> phải được dùng bên trong"),
    );
  });

  it("🚨 PHẢI warn khi <AlertDescription> dùng ngoài <Alert>", () => {
    render(<AlertDescription>test</AlertDescription>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining("[gladvn] <AlertDescription> phải được dùng bên trong"),
    );
  });

  it("🚨 PHẢI warn khi <AlertIcon> dùng ngoài <Alert>", () => {
    render(<AlertIcon render={<InfoIcon />} />);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining("[gladvn] <AlertIcon> phải được dùng bên trong"),
    );
  });

  it("🚨 PHẢI warn khi <AlertAction> dùng ngoài <Alert>", () => {
    render(<AlertAction>test</AlertAction>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining("[gladvn] <AlertAction> phải được dùng bên trong"),
    );
  });

  it("✅ Root có data-size đúng trên DOM", () => {
    const { getByTestId } = render(<Alert size="lg" data-testid="root" />);
    expect(getByTestId("root")).toHaveAttribute("data-size", "lg");
  });
});
