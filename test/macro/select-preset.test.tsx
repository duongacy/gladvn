import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { SelectPreset } from "@/components/macro/select-preset";
import { ThemeProvider } from "@/components/micro/theme-provider";

const SAMPLE_OPTIONS = [
  { value: "react", label: "React", group: "Frontend" },
  { value: "vue", label: "Vue", group: "Frontend" },
  { value: "node", label: "Node.js", group: "Backend" },
];

describe("SelectPreset", () => {
  it("renders label, description, errorMessage, and sets aria-invalid on trigger", () => {
    render(
      <SelectPreset
        label="Framework"
        description="Choose your primary stack"
        errorMessage="Selection is required"
        placeholder="Select framework"
        options={SAMPLE_OPTIONS}
      />,
    );

    const trigger = screen.getByRole("combobox", { name: "Framework" });
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText("Choose your primary stack")).toBeInTheDocument();
    expect(screen.getByText("Selection is required")).toBeInTheDocument();
  });

  it("opens grouped options and calls onValueChange when an item is selected", async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();

    render(
      <SelectPreset
        label="Framework"
        options={SAMPLE_OPTIONS}
        onValueChange={handleValueChange}
      />,
    );

    const trigger = screen.getByRole("combobox", { name: "Framework" });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Frontend")).toBeInTheDocument();
      expect(screen.getByText("Backend")).toBeInTheDocument();
    });

    await user.click(screen.getByRole("option", { name: "React" }));
    expect(handleValueChange).toHaveBeenCalledWith("react");
  });

  it("preserves scoped theme tunnel when portalled inside ThemeProvider", async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider defaultMode="dark">
        <SelectPreset label="Framework" options={SAMPLE_OPTIONS} />
      </ThemeProvider>,
    );

    await user.click(screen.getByRole("combobox", { name: "Framework" }));

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "React" })).toBeInTheDocument();
    });

    const option = screen.getByRole("option", { name: "React" });
    expect(option.closest(".dark")).toBeInTheDocument();
  });
});
