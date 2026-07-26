import * as React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Switch, SwitchThumb } from "./switch";

describe("Switch", () => {
  it("[3C.7-01] [P1] renders correctly", () => {
    
    render(
      <Switch aria-label="Toggle setting">
        <SwitchThumb />
      </Switch>,
    );
    const switchEl = screen.getByRole("switch", { name: "Toggle setting" });
    
    expect(switchEl).toBeInTheDocument();
    expect(switchEl).toHaveAttribute("data-slot", "switch");
  });

  it("[3C.7-02] [P1] handles user click to toggle state", async () => {
    
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();
    render(
      <Switch aria-label="Airplane mode" onCheckedChange={handleCheckedChange}>
        <SwitchThumb />
      </Switch>,
    );

    const switchEl = screen.getByRole("switch", { name: "Airplane mode" });

    expect(switchEl).toHaveAttribute("aria-checked", "false");

    await user.click(switchEl);
    expect(switchEl).toHaveAttribute("aria-checked", "true");
    expect(handleCheckedChange).toHaveBeenCalledWith(true, expect.anything());

    await user.click(switchEl);
    expect(switchEl).toHaveAttribute("aria-checked", "false");
    expect(handleCheckedChange).toHaveBeenCalledWith(false, expect.anything());
  });

  it("[3C.7-03] [P1] can be focused and toggled via keyboard (Space)", async () => {
    
    const user = userEvent.setup();
    render(
      <Switch aria-label="Keyboard toggle">
        <SwitchThumb />
      </Switch>,
    );

    const switchEl = screen.getByRole("switch", { name: "Keyboard toggle" });

    await user.tab();
    
    expect(switchEl).toHaveFocus();

    await user.keyboard("[Space]");
    expect(switchEl).toHaveAttribute("aria-checked", "true");
  });

  it("[3C.7-04] [P1] handles disabled state correctly and blocks clicks", async () => {
    
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
    
    expect(switchEl).toHaveAttribute("aria-disabled", "true");

    await user.click(switchEl);
    expect(handleCheckedChange).not.toHaveBeenCalled();
    expect(switchEl).toHaveAttribute("aria-checked", "false");
  });

  it("[3C.7-05] [P1] forwards the ref to the underlying DOM element", () => {
    
    const ref = React.createRef<HTMLSpanElement>();
    render(
      <Switch ref={ref} aria-label="Ref switch">
        <SwitchThumb />
      </Switch>,
    );
    
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
