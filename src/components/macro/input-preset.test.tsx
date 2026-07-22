import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { InputPreset } from "./input-preset";

describe("InputPreset", () => {
  it("renders with default props", () => {
    render(<InputPreset />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(<InputPreset label="Email" />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(
      <InputPreset label="Email" description="Enter your email address" />,
    );
    expect(screen.getByText("Enter your email address")).toBeInTheDocument();
  });

  it("renders error message when provided", () => {
    render(<InputPreset errorMessage="This field is required" />);
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("sets aria-invalid when errorMessage is provided", () => {
    render(<InputPreset errorMessage="Required" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("passes placeholder to input", () => {
    render(<InputPreset placeholder="Type here..." />);
    expect(screen.getByPlaceholderText("Type here...")).toBeInTheDocument();
  });

  it("applies className to wrapper", () => {
    const { container } = render(<InputPreset className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("generates unique id linking label and input", () => {
    render(<InputPreset label="Username" />);
    const input = screen.getByRole("textbox");
    const label = screen.getByText("Username");
    expect(input.id).toBeTruthy();
    expect(label).toHaveAttribute("for", input.id);
  });
});
