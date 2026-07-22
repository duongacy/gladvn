import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SliderPreset } from "./slider-preset";

describe("SliderPreset", () => {
  it("renders slider", () => {
    const { container } = render(<SliderPreset />);
    const slider = container.querySelector("[data-slot='slider']");
    expect(slider).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(<SliderPreset label="Volume" />);
    expect(screen.getByText("Volume")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(<SliderPreset label="Volume" description="Adjust volume" />);
    expect(screen.getByText("Adjust volume")).toBeInTheDocument();
  });

  it("renders error message when provided", () => {
    render(<SliderPreset errorMessage="Invalid range" />);
    expect(screen.getByText("Invalid range")).toBeInTheDocument();
  });

  it("renders track and indicator", () => {
    const { container } = render(<SliderPreset />);
    expect(
      container.querySelector("[data-slot='slider-track']"),
    ).toBeInTheDocument();
    expect(
      container.querySelector("[data-slot='slider-indicator']"),
    ).toBeInTheDocument();
  });

  it("renders thumb", () => {
    const { container } = render(<SliderPreset />);
    expect(
      container.querySelector("[data-slot='slider-thumb']"),
    ).toBeInTheDocument();
  });
});
