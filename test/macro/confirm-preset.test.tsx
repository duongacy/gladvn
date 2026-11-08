import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { ConfirmPreset } from "@/components/macro/confirm-preset";
import { Button } from "@/components/micro/button";
import { ThemeProvider } from "@/components/micro/theme-provider";

describe("ConfirmPreset", () => {
  it("opens declaratively via trigger and calls onYes / onNo callbacks", async () => {
    const user = userEvent.setup();
    const handleYes = vi.fn();
    const handleNo = vi.fn();

    render(
      <ConfirmPreset
        trigger={<Button>Delete Project</Button>}
        title="Delete this project?"
        description="This action cannot be undone."
        yesLabel="Delete"
        noLabel="Keep"
        onYes={handleYes}
        onNo={handleNo}
      />,
    );

    await user.click(screen.getByRole("button", { name: "Delete Project" }));

    await waitFor(() => {
      expect(screen.getByText("Delete this project?")).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: "Delete" }));
    expect(handleYes).toHaveBeenCalledTimes(1);

    await user.click(screen.getByRole("button", { name: "Keep" }));
    expect(handleNo).toHaveBeenCalledTimes(1);
  });

  it("disables action buttons and shows loadingLabel when isLoading is true", async () => {
    render(
      <ThemeProvider defaultMode="dark">
        <ConfirmPreset
          open
          title="Confirm Action"
          isLoading
          loadingLabel="Deleting..."
        />
      </ThemeProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("Confirm Action")).toBeInTheDocument();
    });

    const loadingBtn = screen.getByRole("button", { name: "Deleting..." });
    expect(loadingBtn.closest(".dark")).toBeInTheDocument();
    expect(loadingBtn).toBeDisabled();
    expect(loadingBtn).toHaveAttribute("aria-busy", "true");
    expect(screen.getByRole("button", { name: "Cancel" })).toBeDisabled();
  });
});
