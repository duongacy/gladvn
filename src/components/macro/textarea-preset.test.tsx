import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TextareaPreset } from "./textarea-preset";

describe("TextareaPreset", () => {
  it("renders textarea", () => {
    render(<TextareaPreset />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(<TextareaPreset label="Bio" />);
    expect(screen.getByText("Bio")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(<TextareaPreset label="Bio" description="Tell us about yourself" />);
    expect(screen.getByText("Tell us about yourself")).toBeInTheDocument();
  });

  it("renders error message when provided", () => {
    render(<TextareaPreset errorMessage="Too short" />);
    expect(screen.getByText("Too short")).toBeInTheDocument();
  });

  it("sets aria-invalid when errorMessage is provided", () => {
    render(<TextareaPreset errorMessage="Required" />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveAttribute("aria-invalid", "true");
  });

  it("passes placeholder to textarea", () => {
    render(<TextareaPreset placeholder="Write something..." />);
    expect(
      screen.getByPlaceholderText("Write something..."),
    ).toBeInTheDocument();
  });
});
