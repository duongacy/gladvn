
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

describe("Card", () => {
  it("[3C.11-01] [P1] renders all card parts correctly", () => {
    // Given
    render(
      <Card data-testid="card">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>,
    );

    // Then
    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Description")).toBeInTheDocument();
    expect(screen.getByText("Card Content")).toBeInTheDocument();
    expect(screen.getByText("Card Footer")).toBeInTheDocument();
  });

  it("[3C.11-02] [P1] applies the size variants correctly", () => {
    // Given
    const { rerender } = render(
      <Card size="sm" data-testid="card-sm">
        Content
      </Card>,
    );
    // Then
    expect(screen.getByTestId("card-sm")).toHaveAttribute("data-size", "sm");

    // When
    rerender(
      <Card size="lg" data-testid="card-lg">
        Content
      </Card>,
    );
    expect(screen.getByTestId("card-lg")).toHaveAttribute("data-size", "lg");
  });
});
