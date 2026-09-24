import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "./avatar";

describe("Avatar", () => {
  it("[3C.13-01] [P1] renders all avatar parts correctly", () => {
    render(
      <Avatar data-testid="avatar">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>,
    );

    expect(screen.getByTestId("avatar")).toBeInTheDocument();
    expect(screen.getByText("CN")).toBeInTheDocument();
  });

  it("[3C.13-02] [P1] applies the size variants correctly", () => {
    const { rerender } = render(
      <Avatar size="sm" data-testid="avatar-sm">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>,
    );

    expect(screen.getByTestId("avatar-sm")).toHaveAttribute("data-size", "sm");

    rerender(
      <Avatar size="lg" data-testid="avatar-lg">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId("avatar-lg")).toHaveAttribute("data-size", "lg");
  });

  it("[3C.13-03] [P1] renders AvatarBadge inside Avatar", () => {
    render(
      <Avatar data-testid="avatar">
        <AvatarFallback>AB</AvatarFallback>
        <AvatarBadge data-testid="badge" />
      </Avatar>,
    );

    expect(screen.getByTestId("badge")).toBeInTheDocument();
  });

  it("[3C.13-04] [P1] renders AvatarGroup with AvatarGroupCount", () => {
    render(
      <AvatarGroup data-testid="group">
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <AvatarGroupCount data-testid="count">+5</AvatarGroupCount>
      </AvatarGroup>,
    );

    expect(screen.getByTestId("group")).toBeInTheDocument();
    expect(screen.getByTestId("count")).toHaveTextContent("+5");
  });
});

describe("Avatar - Defensive Context", () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnMock.mockRestore();
  });

  it("✅ KHÔNG warn khi tất cả thẻ con nằm bên trong <Avatar>", () => {
    render(
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
        <AvatarBadge />
      </Avatar>,
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  it("🚨 PHẢI throw / warn khi <AvatarImage> dùng ngoài <Avatar>", () => {
    expect(() => render(<AvatarImage src="" alt="test" />)).toThrow(
      /AvatarRootContext is missing/,
    );
  });

  it("🚨 PHẢI throw / warn khi <AvatarFallback> dùng ngoài <Avatar>", () => {
    expect(() => render(<AvatarFallback>test</AvatarFallback>)).toThrow(
      /AvatarRootContext is missing/,
    );
  });

  it("🚨 PHẢI warn khi <AvatarBadge> dùng ngoài <Avatar>", () => {
    render(<AvatarBadge />);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining("[gladvn] <AvatarBadge> phải được dùng bên trong"),
    );
  });

  it("✅ Root có data-size đúng trên DOM", () => {
    const { getByTestId } = render(<Avatar size="lg" data-testid="root" />);
    expect(getByTestId("root")).toHaveAttribute("data-size", "lg");
  });
});
