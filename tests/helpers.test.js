import { describe, it, expect } from "vitest";
import { isValidEmail, classNames } from "../src/utils/helpers";

describe("isValidEmail", () => {
  it("accepts a well-formed email", () => {
    expect(isValidEmail("hello@fieldstonestudio.example")).toBe(true);
  });

  it("rejects a missing @", () => {
    expect(isValidEmail("hello.fieldstonestudio.example")).toBe(false);
  });

  it("rejects a missing domain", () => {
    expect(isValidEmail("hello@")).toBe(false);
  });

  it("trims whitespace before validating", () => {
    expect(isValidEmail("  hello@fieldstonestudio.example  ")).toBe(true);
  });
});

describe("classNames", () => {
  it("joins truthy class names with a space", () => {
    expect(classNames("a", "b", "c")).toBe("a b c");
  });

  it("drops falsy values", () => {
    expect(classNames("a", false, null, undefined, "", "b")).toBe("a b");
  });
});
