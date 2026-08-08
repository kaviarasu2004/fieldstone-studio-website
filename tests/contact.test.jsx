import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../src/pages/Contact/Contact";

describe("Contact form", () => {
  it("shows validation errors when submitted empty", () => {
    render(<Contact />);
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByText("Enter your name.")).toBeInTheDocument();
    expect(screen.getByText("Enter your email.")).toBeInTheDocument();
    expect(screen.getByText("Tell us a bit about the project.")).toBeInTheDocument();
  });

  it("flags an invalid email format", () => {
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "not-an-email" } });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByText("Enter a valid email address.")).toBeInTheDocument();
  });

  it("shows a success message on valid submission", () => {
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/^name$/i), { target: { value: "Asha Kapoor" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "asha@example.com" } });
    fireEvent.change(screen.getByLabelText(/project details/i), {
      target: { value: "We need a new brand identity and website for our studio." },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByRole("status")).toHaveTextContent(/thanks/i);
  });
});
