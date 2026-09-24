
import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

describe("Card", () => {
  it("[3C.11-01] [P1] renders all card parts correctly", () => {
    render(
      <Card data-testid="card">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>,
    );

    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Description")).toBeInTheDocument();
    expect(screen.getByText("Card Content")).toBeInTheDocument();
    expect(screen.getByText("Card Footer")).toBeInTheDocument();
  });

  it("[3C.11-02] [P1] applies the size variants correctly", () => {
    const { rerender } = render(
      <Card size="sm" data-testid="card-sm">
        Content
      </Card>,
    );

    expect(screen.getByTestId("card-sm")).toHaveAttribute("data-size", "sm");

    rerender(
      <Card size="lg" data-testid="card-lg">
        Content
      </Card>,
    );
    expect(screen.getByTestId("card-lg")).toHaveAttribute("data-size", "lg");
  });
});

describe("Card - Defensive Context", () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnMock.mockRestore();
  });

  it("✅ KHÔNG warn khi tất cả thẻ con nằm bên trong <Card>", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Desc</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  it("🚨 PHẢI warn khi <CardHeader> dùng ngoài <Card>", () => {
    render(<CardHeader>test</CardHeader>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining("[gladvn] <CardHeader> phải được dùng bên trong <Card>"),
    );
  });

  it("🚨 PHẢI warn khi <CardTitle> dùng ngoài <Card>", () => {
    render(<CardTitle>test</CardTitle>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining("[gladvn] <CardTitle> phải được dùng bên trong <Card>"),
    );
  });

  it("🚨 PHẢI warn khi <CardDescription> dùng ngoài <Card>", () => {
    render(<CardDescription>test</CardDescription>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining("[gladvn] <CardDescription> phải được dùng bên trong <Card>"),
    );
  });

  it("🚨 PHẢI warn khi <CardContent> dùng ngoài <Card>", () => {
    render(<CardContent>test</CardContent>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining("[gladvn] <CardContent> phải được dùng bên trong <Card>"),
    );
  });

  it("🚨 PHẢI warn khi <CardFooter> dùng ngoài <Card>", () => {
    render(<CardFooter>test</CardFooter>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining("[gladvn] <CardFooter> phải được dùng bên trong <Card>"),
    );
  });
});

