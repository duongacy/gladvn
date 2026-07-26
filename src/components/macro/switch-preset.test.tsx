import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SwitchPreset } from "./switch-preset";

describe("SwitchPreset", () => {
  it("renders switch", () => {
    render(<SwitchPreset />);
    const switchEl = screen.getByRole("switch");
    expect(switchEl).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(<SwitchPreset label="Airplane mode" />);
    expect(screen.getByText("Airplane mode")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(
      <SwitchPreset
        label="Notifications"
        description="Enable push notifications"
      />,
    );
    expect(screen.getByText("Enable push notifications")).toBeInTheDocument();
  });

  it("renders error message when provided", () => {
    render(<SwitchPreset errorMessage="Must enable" />);
    expect(screen.getByText("Must enable")).toBeInTheDocument();
  });

  it("sets aria-invalid when errorMessage is provided", () => {
    render(<SwitchPreset errorMessage="Required" />);
    const switchEl = screen.getByRole("switch");
    expect(switchEl).toHaveAttribute("aria-invalid", "true");
  });

  it("renders the switch thumb", () => {
    const { container } = render(<SwitchPreset />);
    const thumb = container.querySelector("[data-slot='switch-thumb']");
    expect(thumb).toBeInTheDocument();
  });

  it("links label to switch", () => {
    render(<SwitchPreset label="Dark mode" />);
    const switchEl = screen.getByRole("switch");
    const label = screen.getByText("Dark mode");
    expect(switchEl).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    
    expect(label.getAttribute("for")).toBeTruthy();
  });
});
