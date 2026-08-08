import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FeatureCard from "../src/components/FeatureCard/FeatureCard";
import PortfolioCard from "../src/components/PortfolioCard/PortfolioCard";

describe("FeatureCard", () => {
  it("renders the spec label, title, and copy", () => {
    render(<FeatureCard spec="01 / STRATEGY" title="Brand foundations" copy="We define the position." />);
    expect(screen.getByText("01 / STRATEGY")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Brand foundations" })).toBeInTheDocument();
    expect(screen.getByText("We define the position.")).toBeInTheDocument();
  });
});

describe("PortfolioCard", () => {
  it("renders the client name and a human-readable category label", () => {
    render(<PortfolioCard client="Marrow Coffee Roasters" category="brand" year="2025" summary="Identity system." />);
    expect(screen.getByRole("heading", { name: "Marrow Coffee Roasters" })).toBeInTheDocument();
    expect(screen.getByText("Brand Identity")).toBeInTheDocument();
    expect(screen.getByText("2025")).toBeInTheDocument();
  });

  it("falls back to the raw category if unrecognized", () => {
    render(<PortfolioCard client="Test Client" category="unknown-cat" year="2025" summary="Summary." />);
    expect(screen.getByText("unknown-cat")).toBeInTheDocument();
  });
});
