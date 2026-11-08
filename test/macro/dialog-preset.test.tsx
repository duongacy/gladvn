import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { DialogPreset } from "@/components/macro/dialog-preset";
import { Button } from "@/components/micro/button";
import { ThemeProvider } from "@/components/micro/theme-provider";

describe("DialogPreset", () => {
  it("opens dialog via trigger and renders title, description, body, and footer", async () => {
    const user = userEvent.setup();

    render(
      <DialogPreset
        trigger={<Button>Edit Profile</Button>}
        title="Profile Settings"
        description="Update your personal details below."
        footer={<Button>Save Changes</Button>}
      >
        <p>Dialog body content</p>
      </DialogPreset>,
    );

    await user.click(screen.getByRole("button", { name: "Edit Profile" }));

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    expect(screen.getByText("Profile Settings")).toBeInTheDocument();
    expect(
      screen.getByText("Update your personal details below."),
    ).toBeInTheDocument();
    expect(screen.getByText("Dialog body content")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Save Changes" }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Close" }));

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("provides sr-only fallback title when title prop is omitted and inherits scoped theme", async () => {
    render(
      <ThemeProvider defaultMode="dark">
        <DialogPreset open showCloseButton={false}>
          <p>Minimal modal</p>
        </DialogPreset>
      </ThemeProvider>,
    );

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    expect(screen.getByRole("dialog").closest(".dark")).toBeInTheDocument();
    expect(screen.getByText("Dialog")).toHaveClass("sr-only");
    expect(
      screen.queryByRole("button", { name: "Close" }),
    ).not.toBeInTheDocument();
  });
});
