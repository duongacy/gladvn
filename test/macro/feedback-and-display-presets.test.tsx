import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AlertPreset } from "@/components/macro/alert-preset";
import { AvatarPreset } from "@/components/macro/avatar-preset";
import { EmptyPreset } from "@/components/macro/empty-preset";
import { Button } from "@/components/micro/button";

describe("Feedback and Display Macro Presets", () => {
  it("AlertPreset renders title, description, action, and dismiss button", () => {
    render(
      <AlertPreset
        title="System Update"
        description="A new version is available."
        action={<Button size="sm">Update Now</Button>}
        dismissible
      />,
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("System Update")).toBeInTheDocument();
    expect(screen.getByText("A new version is available.")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Update Now" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Dismiss alert" }),
    ).toBeInTheDocument();
  });

  it("AvatarPreset computes initials from alt and renders status badge", () => {
    const { rerender } = render(
      <AvatarPreset alt="Nguyen Van An" status="online" />,
    );

    expect(screen.getByText("NA")).toBeInTheDocument();
    expect(screen.getByLabelText("online")).toBeInTheDocument();

    rerender(<AvatarPreset alt="SingleName" fallback="CUSTOM" status="busy" />);
    expect(screen.getByText("CUSTOM")).toBeInTheDocument();
    expect(screen.getByLabelText("busy")).toBeInTheDocument();
  });

  it("EmptyPreset renders title, description, icon, and action slot", () => {
    render(
      <EmptyPreset
        icon={<span data-testid="empty-icon">Box</span>}
        title="No projects found"
        description="Get started by creating your first project."
        action={<Button>Create Project</Button>}
      />,
    );

    expect(screen.getByTestId("empty-icon")).toBeInTheDocument();
    expect(screen.getByText("No projects found")).toBeInTheDocument();
    expect(
      screen.getByText("Get started by creating your first project."),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Create Project" }),
    ).toBeInTheDocument();
  });
});
