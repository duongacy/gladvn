import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { InputPreset } from "@/components/macro/input-preset";

describe("InputPreset", () => {
  it("links label and input via generated id and renders description", () => {
    render(
      <InputPreset
        label="Email Address"
        description="We will never share your email."
        placeholder="you@example.com"
      />,
    );

    const input = screen.getByLabelText("Email Address");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "you@example.com");
    expect(input).toHaveAttribute("aria-invalid", "false");
    expect(
      screen.getByText("We will never share your email."),
    ).toBeInTheDocument();
  });

  it("sets aria-invalid and renders errorMessage unless showError is false", () => {
    const { rerender } = render(
      <InputPreset label="Username" errorMessage="Username is already taken" />,
    );

    const input = screen.getByLabelText("Username");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText("Username is already taken")).toBeInTheDocument();

    rerender(
      <InputPreset
        label="Username"
        errorMessage="Username is already taken"
        showError={false}
      />,
    );

    expect(screen.getByLabelText("Username")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    expect(
      screen.queryByText("Username is already taken"),
    ).not.toBeInTheDocument();
  });

  it("renders startAdornment and endAdornment inside InputGroup", () => {
    render(
      <InputPreset
        label="Website"
        startAdornment="https://"
        endAdornment=".com"
      />,
    );

    expect(screen.getByText("https://")).toBeInTheDocument();
    expect(screen.getByText(".com")).toBeInTheDocument();
    expect(screen.getByLabelText("Website")).toBeInTheDocument();
  });

  it("toggles password visibility when type is password", async () => {
    const user = userEvent.setup();
    render(<InputPreset label="Password" type="password" />);

    const input = screen.getByLabelText("Password");
    expect(input).toHaveAttribute("type", "password");

    const toggleBtn = screen.getByRole("button", { name: "Show password" });
    expect(toggleBtn).toHaveAttribute("aria-pressed", "false");

    await user.click(toggleBtn);
    expect(input).toHaveAttribute("type", "text");
    expect(
      screen.getByRole("button", { name: "Hide password" }),
    ).toHaveAttribute("aria-pressed", "true");

    await user.click(screen.getByRole("button", { name: "Hide password" }));
    expect(input).toHaveAttribute("type", "password");
  });
});
