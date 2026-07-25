import * as React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  it("[3C.6-01] [P1] renders correctly", () => {
    // Given
    render(<Checkbox aria-label="Accept terms" />);
    const checkbox = screen.getByRole("checkbox", { name: "Accept terms" });
    // Then
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute("data-slot", "checkbox");
  });

  it("[3C.6-02] [P1] handles user click to toggle state", async () => {
    // Given
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();
    render(
      <Checkbox aria-label="Toggle" onCheckedChange={handleCheckedChange} />,
    );

    const checkbox = screen.getByRole("checkbox", { name: "Toggle" });

    // Initially unchecked
    // Then
    expect(checkbox).not.toBeChecked();

    // Click to check
    // When
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(handleCheckedChange).toHaveBeenCalledWith(true, expect.anything());

    // Click to uncheck
    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(handleCheckedChange).toHaveBeenCalledWith(false, expect.anything());
  });

  it("[3C.6-03] [P1] can be focused and toggled via keyboard (Space)", async () => {
    // Given
    const user = userEvent.setup();
    render(<Checkbox aria-label="Keyboard toggle" />);

    const checkbox = screen.getByRole("checkbox", { name: "Keyboard toggle" });

    // Test focus
    // When
    await user.tab();
    // Then
    expect(checkbox).toHaveFocus();

    // Test keyboard activation (Space for checkbox)
    await user.keyboard("[Space]");
    expect(checkbox).toBeChecked();
  });

  it("[3C.6-04] [P1] handles disabled state correctly and blocks clicks", async () => {
    // Given
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();
    render(
      <Checkbox
        disabled
        aria-label="Disabled"
        onCheckedChange={handleCheckedChange}
      />,
    );

    const checkbox = screen.getByRole("checkbox", { name: "Disabled" });
    // Then
    expect(checkbox).toHaveAttribute("aria-disabled", "true");

    // When
    await user.click(checkbox);
    expect(handleCheckedChange).not.toHaveBeenCalled();
    expect(checkbox).not.toBeChecked();
  });

  it("[3C.6-05] [P1] forwards the ref to the underlying DOM element", () => {
    // Given
    const ref = React.createRef<HTMLSpanElement>();
    render(<Checkbox ref={ref} aria-label="Ref checkbox" />);
    // Then
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
