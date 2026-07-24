import * as React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Button } from "./button";

describe("Button", () => {
  // 1. Rendering & Attributes (API Surface)
  it("[3C.1-01] [P1] renders correctly with default props", () => {
    // Given
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    // Then
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("data-variant", "solid");
    expect(button).toHaveAttribute("data-color", "primary");
  });

  it("[3C.1-02] [P1] applies custom variants and colors", () => {
    // Given
    render(
      <Button variant="outline" color="destructive">
        Delete
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Delete" });
    // Then
    expect(button).toHaveAttribute("data-variant", "outline");
    expect(button).toHaveAttribute("data-color", "destructive");
  });

  it("[3C.1-03] [P1] merges custom classNames properly", () => {
    // Given
    render(<Button className="custom-test-class">Classy Button</Button>);
    const button = screen.getByRole("button", { name: "Classy Button" });
    // Then
    expect(button).toHaveClass("custom-test-class");
  });

  it("[3C.1-04] [P1] supports iconOnly attribute to render as square", () => {
    // Given
    render(<Button iconOnly>Icon</Button>);
    const button = screen.getByRole("button", { name: "Icon" });
    // Then
    expect(button).toHaveAttribute("data-icon", "true");
  });

  // 2. Behaviors (Interaction & Events)
  it("[3C.1-05] [P1] fires onClick event when clicked", async () => {
    // Given
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    const button = screen.getByRole("button", { name: "Click" });
    // When
    await user.click(button);

    // Then
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("[3C.1-06] [P1] can be focused and activated via keyboard", async () => {
    // Given
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Submit</Button>);

    const button = screen.getByRole("button", { name: "Submit" });

    // Test focus
    // When
    await user.tab();
    // Then
    expect(button).toHaveFocus();

    // Test keyboard activation (Enter)
    await user.keyboard("{Enter}");
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("[3C.1-07] [P1] handles disabled state correctly and blocks clicks", async () => {
    // Given
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled Button
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Disabled Button" });
    // Then
    expect(button).toBeDisabled();

    // When
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  // 3. Architecture & Integration
  it("[3C.1-08] [P1] forwards the ref to the underlying DOM element", () => {
    // Given
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref Button</Button>);
    // Then
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current?.textContent).toBe("Ref Button");
  });

  it("[3C.1-09] [P1] supports polymorphism via render prop (Base UI 'render' pattern)", () => {
    // Given
    render(<Button render={<a href="/home" />}>Link Button</Button>);
    const link = screen.getByText("Link Button");
    // Then
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/home");
    expect(link).toHaveAttribute("data-variant", "solid");
  });
});
