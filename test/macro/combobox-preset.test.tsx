import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { ComboboxPreset } from "@/components/macro/combobox-preset";
import { ThemeProvider } from "@/components/micro/theme-provider";

const SAMPLE_OPTIONS = [
  { value: "hanoi", label: "Hanoi" },
  { value: "tokyo", label: "Tokyo" },
  { value: "seoul", label: "Seoul" },
];

describe("ComboboxPreset", () => {
  it("links label, description, and errorMessage via aria-describedby and aria-invalid", () => {
    render(
      <ComboboxPreset
        id="city-combo"
        label="City"
        description="Select destination city"
        errorMessage="City is required"
        options={SAMPLE_OPTIONS}
      />,
    );

    const input = screen.getByLabelText("City");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute(
      "aria-describedby",
      "city-combo-description city-combo-error",
    );
    expect(screen.getByText("Select destination city")).toBeInTheDocument();
    expect(screen.getByText("City is required")).toBeInTheDocument();
  });

  it("opens options list and triggers onValueChange in single selection mode", async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();

    render(
      <ComboboxPreset
        label="City"
        options={SAMPLE_OPTIONS}
        onValueChange={handleValueChange}
      />,
    );

    const input = screen.getByLabelText("City");
    await user.click(input);

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "Tokyo" })).toBeInTheDocument();
    });

    await user.click(screen.getByRole("option", { name: "Tokyo" }));
    expect(handleValueChange).toHaveBeenCalled();
  });

  it("renders selected chips in multiple mode and preserves scoped theme", async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider defaultMode="dark">
        <ComboboxPreset
          label="Cities"
          multiple
          value={["hanoi", "tokyo"]}
          options={SAMPLE_OPTIONS}
        />
      </ThemeProvider>,
    );

    expect(screen.getByText("Hanoi")).toBeInTheDocument();
    expect(screen.getByText("Tokyo")).toBeInTheDocument();

    const input = screen.getByLabelText("Cities");
    await user.click(input);

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "Seoul" })).toBeInTheDocument();
    });

    expect(
      screen.getByRole("option", { name: "Seoul" }).closest(".dark"),
    ).toBeInTheDocument();
  });
});
