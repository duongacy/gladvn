import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FieldPreset } from "./field-preset";

describe("FieldPreset", () => {
  it("renders children", () => {
    render(<FieldPreset><input data-testid="child-input" /></FieldPreset>);
    expect(screen.getByTestId("child-input")).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(<FieldPreset label="Name"><input /></FieldPreset>);
    expect(screen.getByText("Name")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(<FieldPreset description="Enter your name"><input /></FieldPreset>);
    expect(screen.getByText("Enter your name")).toBeInTheDocument();
  });

  it("renders error message when provided", () => {
    render(<FieldPreset errorMessage="Field is required"><input /></FieldPreset>);
    expect(screen.getByText("Field is required")).toBeInTheDocument();
  });

  it("does not render error when showError is false", () => {
    render(<FieldPreset errorMessage="Required" showError={false}><input /></FieldPreset>);
    expect(screen.queryByText("Required")).not.toBeInTheDocument();
  });

  it("sets invalid state on field wrapper", () => {
    const { container } = render(<FieldPreset errorMessage="Bad"><input /></FieldPreset>);
    const field = container.querySelector("[data-slot='field']");
    expect(field).toHaveAttribute("data-invalid", "true");
  });

  it("applies className to field wrapper", () => {
    const { container } = render(<FieldPreset className="my-class"><input /></FieldPreset>);
    const field = container.querySelector("[data-slot='field']");
    expect(field).toHaveClass("my-class");
  });
});
