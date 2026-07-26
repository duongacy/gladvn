import * as React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

describe("Select", () => {
  it("[3C.3-01] [P1] renders correctly with default closed state", () => {
    
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

    const trigger = screen.getByRole("combobox", { name: "Food" });
    
    expect(trigger).toBeInTheDocument();

    expect(trigger).toHaveTextContent("Select a fruit");

    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("[3C.3-02] [P1] opens the popup on click and allows selection", async () => {
    
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

    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    const bananaItem = screen.getByRole("option", { name: "Banana" });
    await user.click(bananaItem);

    await waitFor(() => {
      expect(trigger).toHaveTextContent(/banana/i);
    });
  });

  it("[3C.3-03] [P1] can be navigated via keyboard", async () => {
    
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

    await user.tab();
    
    expect(trigger).toHaveFocus();

    await user.keyboard("[Enter]");

    await waitFor(() => {
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    await user.keyboard("[Escape]");

    await waitFor(() => {
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });
  });
});
