import * as React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Switch, SwitchThumb } from "./switch";

describe("Switch", () => {
  it("[3C.7-01] [P1] renders correctly", () => {
    // Given
    render(
      <Switch aria-label="Toggle setting">
        <SwitchThumb />
      </Switch>,
    );
    const switchEl = screen.getByRole("switch", { name: "Toggle setting" });
    // Then
    expect(switchEl).toBeInTheDocument();
    expect(switchEl).toHaveAttribute("data-slot", "switch");
  });

  it("[3C.7-02] [P1] handles user click to toggle state", async () => {
    // Given
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();
    render(
      <Switch aria-label="Airplane mode" onCheckedChange={handleCheckedChange}>
        <SwitchThumb />
      </Switch>,
    );

    const switchEl = screen.getByRole("switch", { name: "Airplane mode" });

    // Initially unchecked (base-ui uses aria-checked)
    // Then
    expect(switchEl).toHaveAttribute("aria-checked", "false");

    // Click to check
    // When
    await user.click(switchEl);
    expect(switchEl).toHaveAttribute("aria-checked", "true");
    expect(handleCheckedChange).toHaveBeenCalledWith(true, expect.anything());

    // Click to uncheck
    await user.click(switchEl);
    expect(switchEl).toHaveAttribute("aria-checked", "false");
    expect(handleCheckedChange).toHaveBeenCalledWith(false, expect.anything());
  });

  it("[3C.7-03] [P1] can be focused and toggled via keyboard (Space)", async () => {
    // Given
    const user = userEvent.setup();
    render(
      <Switch aria-label="Keyboard toggle">
        <SwitchThumb />
      </Switch>,
    );

    const switchEl = screen.getByRole("switch", { name: "Keyboard toggle" });

    // Test focus
    // When
    await user.tab();
    // Then
    expect(switchEl).toHaveFocus();

    // Test keyboard activation (Space for switch/checkbox)
    await user.keyboard("[Space]");
    expect(switchEl).toHaveAttribute("aria-checked", "true");
  });

  it("[3C.7-04] [P1] handles disabled state correctly and blocks clicks", async () => {
    // Given
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();
    render(
      <Switch
        disabled
        aria-label="Disabled switch"
        onCheckedChange={handleCheckedChange}
      >
        <SwitchThumb />
      </Switch>,
    );

    const switchEl = screen.getByRole("switch", { name: "Disabled switch" });
    // Then
    expect(switchEl).toHaveAttribute("aria-disabled", "true");

    // When
    await user.click(switchEl);
    expect(handleCheckedChange).not.toHaveBeenCalled();
    expect(switchEl).toHaveAttribute("aria-checked", "false");
  });

  it("[3C.7-05] [P1] forwards the ref to the underlying DOM element", () => {
    // Given
    const ref = React.createRef<HTMLSpanElement>();
    render(
      <Switch ref={ref} aria-label="Ref switch">
        <SwitchThumb />
      </Switch>,
    );
    // Then
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
