import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { AccordionPreset } from "@/components/macro/accordion-preset";
import { CardPreset } from "@/components/macro/card-preset";
import { CheckboxPreset } from "@/components/macro/checkbox-preset";
import { FieldPreset } from "@/components/macro/field-preset";
import { RadioGroupPreset } from "@/components/macro/radio-group-preset";
import { SwitchPreset } from "@/components/macro/switch-preset";
import { TabsPreset } from "@/components/macro/tabs-preset";

describe("Form and Layout Macro Presets", () => {
  it("FieldPreset renders label, children, description, and conditional errorMessage", () => {
    render(
      <FieldPreset
        label="Full Name"
        htmlFor="full-name"
        description="Enter your legal name"
        errorMessage="Name is required"
      >
        <input id="full-name" />
      </FieldPreset>,
    );

    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    expect(screen.getByText("Enter your legal name")).toBeInTheDocument();
    expect(screen.getByText("Name is required")).toBeInTheDocument();
  });

  it("CheckboxPreset links label and description/error via aria-describedby and toggles state", async () => {
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();

    render(
      <CheckboxPreset
        id="terms-cb"
        label="Accept terms"
        description="Read our privacy policy"
        errorMessage="You must accept terms"
        onCheckedChange={handleCheckedChange}
      />,
    );

    const checkbox = screen.getByRole("checkbox", { name: "Accept terms" });
    expect(checkbox).toHaveAttribute("aria-invalid", "true");
    expect(checkbox).toHaveAttribute(
      "aria-describedby",
      "terms-cb-desc terms-cb-error",
    );

    await user.click(checkbox);
    expect(handleCheckedChange).toHaveBeenCalled();
  });

  it("RadioGroupPreset renders options with descriptions and handles selection", async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();

    render(
      <RadioGroupPreset
        label="Plan"
        errorMessage="Please select a plan"
        onValueChange={handleValueChange}
        options={[
          { value: "free", label: "Free", description: "For hobbyists" },
          { value: "pro", label: "Pro", description: "For teams" },
        ]}
      />,
    );

    expect(screen.getByText("Please select a plan")).toBeInTheDocument();
    expect(screen.getByText("For hobbyists")).toBeInTheDocument();

    await user.click(screen.getByRole("radio", { name: "Pro" }));
    expect(handleValueChange).toHaveBeenCalled();
  });

  it("SwitchPreset renders label, description, errorMessage, and toggles switch", async () => {
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();

    render(
      <SwitchPreset
        label="Airplane Mode"
        description="Disable all wireless connections"
        errorMessage="Cannot toggle while syncing"
        onCheckedChange={handleCheckedChange}
      />,
    );

    const switchEl = screen.getByRole("switch", { name: "Airplane Mode" });
    expect(switchEl).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText("Cannot toggle while syncing")).toBeInTheDocument();

    await user.click(switchEl);
    expect(handleCheckedChange).toHaveBeenCalled();
  });

  it("TabsPreset renders tab triggers and switches panel content", async () => {
    const user = userEvent.setup();

    render(
      <TabsPreset
        defaultValue="account"
        items={[
          {
            value: "account",
            title: "Account",
            content: <div>Account Panel</div>,
          },
          {
            value: "security",
            title: "Security",
            content: <div>Security Panel</div>,
          },
        ]}
      />,
    );

    expect(screen.getByText("Account Panel")).toBeInTheDocument();
    await user.click(screen.getByRole("tab", { name: "Security" }));
    expect(screen.getByText("Security Panel")).toBeInTheDocument();
  });

  it("AccordionPreset renders items and expands content when trigger is clicked", async () => {
    const user = userEvent.setup();

    render(
      <AccordionPreset
        items={[
          {
            value: "item-1",
            title: "What is Gladvn?",
            content: "A modern UI library built on Base UI and Tailwind v4.",
          },
        ]}
      />,
    );

    const trigger = screen.getByRole("button", { name: "What is Gladvn?" });
    await user.click(trigger);
    expect(
      screen.getByText("A modern UI library built on Base UI and Tailwind v4."),
    ).toBeInTheDocument();
  });

  it("CardPreset renders title, description, content, and footer", () => {
    render(
      <CardPreset
        title="Revenue"
        description="Monthly recurring revenue"
        footer={<span>Updated just now</span>}
      >
        <div>$12,450</div>
      </CardPreset>,
    );

    expect(screen.getByText("Revenue")).toBeInTheDocument();
    expect(screen.getByText("Monthly recurring revenue")).toBeInTheDocument();
    expect(screen.getByText("$12,450")).toBeInTheDocument();
    expect(screen.getByText("Updated just now")).toBeInTheDocument();
  });
});
