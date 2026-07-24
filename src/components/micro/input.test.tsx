import * as React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Input } from "./input";

describe("Input", () => {
  // 1. Rendering & Attributes (API Surface)
  it("[3C.2-01] [P1] renders correctly with default props", () => {
    // Given
    render(<Input placeholder="Enter email" />);
    const input = screen.getByPlaceholderText("Enter email");
    // Then
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe("INPUT");
    expect(input).toHaveAttribute("data-slot", "input");
  });

  it("[3C.2-02] [P1] applies sizing correctly", () => {
    // Given
    render(<Input placeholder="Small input" size="sm" />);
    const input = screen.getByPlaceholderText("Small input");
    // We check the merged class string instead of exact match to avoid fragility,
    // but a basic check that it received the size classes is fine.
    // The cva variant for sm contains "h-7"
    // Then
    expect(input.className).toContain("h-7");
  });

  it("[3C.2-03] [P1] merges custom classNames properly", () => {
    // Given
    render(<Input placeholder="Classy input" className="custom-test-class" />);
    const input = screen.getByPlaceholderText("Classy input");
    // Then
    expect(input).toHaveClass("custom-test-class");
  });

  // 2. Behaviors (Interaction & Events)
  it("[3C.2-04] [P1] handles user typing correctly", async () => {
    // Given
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Input placeholder="Type here" onChange={handleChange} />);

    const input = screen.getByPlaceholderText("Type here");
    // When
    await user.type(input, "Hello");

    // Then
    expect(input).toHaveValue("Hello");
    expect(handleChange).toHaveBeenCalled();
  });

  it("[3C.2-05] [P1] can be focused and activated via keyboard", async () => {
    // Given
    const user = userEvent.setup();
    render(<Input placeholder="Focus me" />);

    const input = screen.getByPlaceholderText("Focus me");

    // Test focus
    // When
    await user.tab();
    // Then
    expect(input).toHaveFocus();
  });

  it("[3C.2-06] [P1] handles disabled state correctly and blocks typing", async () => {
    // Given
    const user = userEvent.setup();
    render(<Input placeholder="Disabled" disabled />);

    const input = screen.getByPlaceholderText("Disabled");
    // Then
    expect(input).toBeDisabled();

    // When
    await user.type(input, "Hello");
    expect(input).toHaveValue("");
  });

  // 3. Architecture & Integration
  it("[3C.2-07] [P1] forwards the ref to the underlying DOM element", () => {
    // Given
    const ref = React.createRef<HTMLInputElement>();
    render(
      <Input ref={ref} placeholder="Ref input" defaultValue="ref value" />,
    );
    // Then
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.value).toBe("ref value");
  });
});
