import * as React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "./popover";

describe("Popover", () => {
  it("[3C.14-01] [P1] renders trigger correctly and content is hidden initially", () => {
    // Given
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>
          <PopoverTitle>Popover Title</PopoverTitle>
          <PopoverDescription>Popover Description</PopoverDescription>
        </PopoverContent>
      </Popover>,
    );

    const trigger = screen.getByRole("button", { name: "Open Popover" });
    // Then
    expect(trigger).toBeInTheDocument();

    // Content should not be in the document
    expect(screen.queryByText("Popover Title")).not.toBeInTheDocument();
  });

  it("[3C.14-02] [P1] opens the popover when trigger is clicked", async () => {
    // Given
    const user = userEvent.setup();
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>
          <PopoverTitle>Popover Title</PopoverTitle>
        </PopoverContent>
      </Popover>,
    );

    const trigger = screen.getByRole("button", { name: "Open Popover" });
    // When
    await user.click(trigger);

    // Then
    await waitFor(() => {
      expect(screen.getByText("Popover Title")).toBeInTheDocument();
    });
  });

  it("[3C.14-03] [P1] closes the popover when Escape is pressed", async () => {
    // Given
    const user = userEvent.setup();
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>
          <PopoverTitle>Popover Title</PopoverTitle>
        </PopoverContent>
      </Popover>,
    );

    // When
    await user.click(screen.getByRole("button", { name: "Open Popover" }));

    // Then
    await waitFor(() => {
      expect(screen.getByText("Popover Title")).toBeInTheDocument();
    });

    await user.keyboard("[Escape]");

    await waitFor(() => {
      expect(screen.queryByText("Popover Title")).not.toBeInTheDocument();
    });
  });
});
