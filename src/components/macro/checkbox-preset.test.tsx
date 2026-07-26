import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CheckboxPreset } from "./checkbox-preset";

describe("CheckboxPreset", () => {
  it("renders checkbox", () => {
    render(<CheckboxPreset />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(<CheckboxPreset label="Accept terms" />);
    expect(screen.getByText("Accept terms")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(<CheckboxPreset label="Terms" description="You must accept" />);
    expect(screen.getByText("You must accept")).toBeInTheDocument();
  });

  it("renders error message when provided", () => {
    render(<CheckboxPreset errorMessage="Required" />);
    expect(screen.getByText("Required")).toBeInTheDocument();
  });

  it("sets aria-invalid when errorMessage is provided", () => {
    render(<CheckboxPreset errorMessage="Required" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("aria-invalid", "true");
  });

  it("renders the check indicator", () => {
    const { container } = render(<CheckboxPreset />);
    
    const checkbox = container.querySelector("[data-slot='checkbox']");
    expect(checkbox).toBeInTheDocument();
  });

  it("links label to checkbox", () => {
    render(<CheckboxPreset label="Agree" />);
    const checkbox = screen.getByRole("checkbox");
    const label = screen.getByText("Agree");
    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    
    expect(label.getAttribute("for")).toBeTruthy();
  });
});
