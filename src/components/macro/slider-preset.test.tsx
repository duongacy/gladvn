import { act, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SliderPreset } from "./slider-preset";

describe("SliderPreset", () => {
  it("renders slider", async () => {
    const { container } = render(<SliderPreset />);
    await act(async () => {});
    const slider = container.querySelector("[data-slot='slider']");
    expect(slider).toBeInTheDocument();
  });

  it("renders label when provided", async () => {
    render(<SliderPreset label="Volume" />);
    await act(async () => {});
    expect(screen.getByText("Volume")).toBeInTheDocument();
  });

  it("renders description when provided", async () => {
    render(<SliderPreset label="Volume" description="Adjust volume" />);
    await act(async () => {});
    expect(screen.getByText("Adjust volume")).toBeInTheDocument();
  });

  it("renders error message when provided", async () => {
    render(<SliderPreset errorMessage="Invalid range" />);
    await act(async () => {});
    expect(screen.getByText("Invalid range")).toBeInTheDocument();
  });

  it("renders track and indicator", async () => {
    const { container } = render(<SliderPreset />);
    await act(async () => {});
    expect(
      container.querySelector("[data-slot='slider-track']"),
    ).toBeInTheDocument();
    expect(
      container.querySelector("[data-slot='slider-indicator']"),
    ).toBeInTheDocument();
  });

  it("renders thumb", async () => {
    const { container } = render(<SliderPreset />);
    await act(async () => {});
    expect(
      container.querySelector("[data-slot='slider-thumb']"),
    ).toBeInTheDocument();
  });
});
