
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

describe("Tooltip", () => {
  it("[3C.9-01] [P1] renders trigger and hides content initially", () => {
    // Given
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip info</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );

    // Then
    expect(
      screen.getByRole("button", { name: "Hover me" }),
    ).toBeInTheDocument();

    // Content should not be visible initially
    expect(screen.queryByText("Tooltip info")).not.toBeInTheDocument();
  });

  it("[3C.9-02] [P1] shows tooltip content on hover", async () => {
    // Given
    const user = userEvent.setup();
    render(
      <TooltipProvider delay={0}>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip info</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );

    const trigger = screen.getByRole("button", { name: "Hover me" });
    // When
    await user.hover(trigger);

    // Then
    await waitFor(() => {
      expect(screen.getByText("Tooltip info")).toBeVisible();
    });
  });

  it("[3C.9-03] [P1] shows tooltip content on focus", async () => {
    // Given
    const user = userEvent.setup();
    render(
      <TooltipProvider delay={0}>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip info</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );

    const trigger = screen.getByRole("button", { name: "Hover me" });

    // When
    await user.tab();
    // Then
    expect(trigger).toHaveFocus();

    await waitFor(() => {
      expect(screen.getByText("Tooltip info")).toBeVisible();
    });
  });

  it("[3C.9-04] [P1] hides tooltip when Escape is pressed", async () => {
    // Given
    const user = userEvent.setup();
    render(
      <TooltipProvider delay={0}>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip info</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );

    const trigger = screen.getByRole("button", { name: "Hover me" });
    // When
    await user.hover(trigger);

    // Then
    await waitFor(() => {
      expect(screen.getByText("Tooltip info")).toBeVisible();
    });

    await user.keyboard("[Escape]");

    await waitFor(() => {
      expect(screen.queryByText("Tooltip info")).not.toBeInTheDocument();
    });
  });
});
