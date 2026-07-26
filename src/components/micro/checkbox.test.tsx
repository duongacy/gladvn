import * as React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  it("[3C.6-01] [P1] renders correctly", () => {
    
    render(<Checkbox aria-label="Accept terms" />);
    const checkbox = screen.getByRole("checkbox", { name: "Accept terms" });
    
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute("data-slot", "checkbox");
  });

  it("[3C.6-02] [P1] handles user click to toggle state", async () => {
    
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();
    render(
      <Checkbox aria-label="Toggle" onCheckedChange={handleCheckedChange} />,
    );

    const checkbox = screen.getByRole("checkbox", { name: "Toggle" });

    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(handleCheckedChange).toHaveBeenCalledWith(true, expect.anything());

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(handleCheckedChange).toHaveBeenCalledWith(false, expect.anything());
  });

  it("[3C.6-03] [P1] can be focused and toggled via keyboard (Space)", async () => {
    
    const user = userEvent.setup();
    render(<Checkbox aria-label="Keyboard toggle" />);

    const checkbox = screen.getByRole("checkbox", { name: "Keyboard toggle" });

    await user.tab();
    
    expect(checkbox).toHaveFocus();

    await user.keyboard("[Space]");
    expect(checkbox).toBeChecked();
  });

  it("[3C.6-04] [P1] handles disabled state correctly and blocks clicks", async () => {
    
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
    
    expect(checkbox).toHaveAttribute("aria-disabled", "true");

    await user.click(checkbox);
    expect(handleCheckedChange).not.toHaveBeenCalled();
    expect(checkbox).not.toBeChecked();
  });

  it("[3C.6-05] [P1] forwards the ref to the underlying DOM element", () => {
    
    const ref = React.createRef<HTMLSpanElement>();
    render(<Checkbox ref={ref} aria-label="Ref checkbox" />);
    
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
