
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Badge } from "./badge";

describe("Badge", () => {
  it("[3C.10-01] [P1] renders correctly with default styles", () => {
    // Given
    render(<Badge data-testid="badge">Hello</Badge>);
    const badge = screen.getByTestId("badge");

    // Then
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent("Hello");
  });

  it("[3C.10-02] [P1] applies variant and color correctly", () => {
    // Given
    const { rerender } = render(
      <Badge
        variant="outline"
        color="destructive"
        data-testid="badge-outline-destructive"
      >
        Error
      </Badge>,
    );
    const outlineBadge = screen.getByTestId("badge-outline-destructive");
    // Then
    expect(outlineBadge).toHaveClass("border-destructive", "text-destructive");

    // When
    rerender(
      <Badge variant="soft" color="success" data-testid="badge-soft-success">
        Success
      </Badge>,
    );
    const softBadge = screen.getByTestId("badge-soft-success");
    expect(softBadge).toHaveClass("bg-success/15", "text-success");
  });

  it("[3C.10-03] [P1] supports polymorphism via render prop", () => {
    // Given
    render(
      <Badge render={<a href="/test" data-testid="badge-link" />}>
        Link Badge
      </Badge>,
    );

    const link = screen.getByTestId("badge-link");
    // Then
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/test");
    expect(link).toHaveTextContent("Link Badge");
  });
});
