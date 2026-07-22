import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProgressPreset } from "./progress-preset";

describe("ProgressPreset", () => {
  it("renders progress bar", () => {
    const { container } = render(<ProgressPreset value={50} />);
    const progress = container.querySelector("[data-slot='progress']");
    expect(progress).toBeInTheDocument();
  });

  it("renders track and indicator", () => {
    const { container } = render(<ProgressPreset value={50} />);
    expect(
      container.querySelector("[data-slot='progress-track']"),
    ).toBeInTheDocument();
    expect(
      container.querySelector("[data-slot='progress-indicator']"),
    ).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    const { container } = render(
      <ProgressPreset value={75} label="Uploading" />,
    );
    const label = container.querySelector("[data-slot='progress-label']");
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent("Uploading");
  });

  it("renders value display when label and showValue are set", () => {
    const { container } = render(
      <ProgressPreset value={75} label="Loading" showValue />,
    );
    const valueEl = container.querySelector("[data-slot='progress-value']");
    expect(valueEl).toBeInTheDocument();
  });

  it("does not render label or value when label is not provided", () => {
    const { container } = render(<ProgressPreset value={50} />);
    expect(
      container.querySelector("[data-slot='progress-label']"),
    ).not.toBeInTheDocument();
    expect(
      container.querySelector("[data-slot='progress-value']"),
    ).not.toBeInTheDocument();
  });

  it("supports indeterminate state (no value)", () => {
    const { container } = render(<ProgressPreset />);
    const progress = container.querySelector("[data-slot='progress']");
    expect(progress).toBeInTheDocument();
  });

  it("accepts custom children for composition mode", () => {
    const { container } = render(
      <ProgressPreset value={30}>
        <div data-testid="custom-child">Custom</div>
      </ProgressPreset>,
    );
    expect(
      container.querySelector("[data-testid='custom-child']"),
    ).toBeInTheDocument();
  });
});
