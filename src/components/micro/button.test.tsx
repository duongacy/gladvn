import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders correctly with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
    // Default variant is "solid" and color is "primary"
    expect(button).toHaveAttribute("data-variant", "solid");
    expect(button).toHaveAttribute("data-color", "primary");
  });

  it("applies custom variants and colors", () => {
    render(
      <Button variant="outline" color="destructive">
        Delete
      </Button>
    );
    const button = screen.getByRole("button", { name: "Delete" });
    expect(button).toHaveAttribute("data-variant", "outline");
    expect(button).toHaveAttribute("data-color", "destructive");
  });
});
