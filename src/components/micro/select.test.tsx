import * as React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

describe("Select", () => {
  it("[3C.3-01] [P1] renders correctly with default closed state", () => {
    // Given
    render(
      <Select>
        <SelectTrigger aria-label="Food">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>,
    );

    // The trigger should be visible
    const trigger = screen.getByRole("combobox", { name: "Food" });
    // Then
    expect(trigger).toBeInTheDocument();

    // Check placeholder
    expect(trigger).toHaveTextContent("Select a fruit");

    // The popup content should not be in the document initially
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("[3C.3-02] [P1] opens the popup on click and allows selection", async () => {
    // Given
    const user = userEvent.setup();

    const ControlledSelect = () => {
      const [val, setVal] = React.useState<string | null>("apple");
      return (
        <Select value={val} onValueChange={setVal}>
          <SelectTrigger aria-label="Food">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectContent>
        </Select>
      );
    };

    render(<ControlledSelect />);

    const trigger = screen.getByRole("combobox", { name: "Food" });

    // Click trigger to open
    // When
    await user.click(trigger);

    // Wait for the popup to appear in the document
    // Then
    await waitFor(() => {
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    // Select Banana
    const bananaItem = screen.getByRole("option", { name: "Banana" });
    await user.click(bananaItem);

    // Wait for the trigger to update
    await waitFor(() => {
      expect(trigger).toHaveTextContent(/banana/i);
    });
  });

  it("[3C.3-03] [P1] can be navigated via keyboard", async () => {
    // Given
    const user = userEvent.setup();
    render(
      <Select defaultValue="apple">
        <SelectTrigger aria-label="Food">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>,
    );

    const trigger = screen.getByRole("combobox", { name: "Food" });

    // Focus trigger
    // When
    await user.tab();
    // Then
    expect(trigger).toHaveFocus();

    // Open menu with Enter (or Space)
    await user.keyboard("[Enter]");

    await waitFor(() => {
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    // Pressing Escape should close it
    await user.keyboard("[Escape]");

    await waitFor(() => {
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });
  });
});
