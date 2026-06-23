import { describe, it } from "node:test";
import assert from "node:assert";
import { validateCpf } from "../index.js";

describe("validateCpf", () => {
  it("should return true for a valid CPF", () => {
    assert.strictEqual(validateCpf("035.523.640-05"), true);
  });

  it("should return false for an invalid CPF", () => {
    assert.strictEqual(validateCpf("035.523.640-06"), false);
  });

  it("should return false for a CPF with invalid length", () => {
    assert.strictEqual(validateCpf("035.523.640-056"), false);
  });

  it("should return false for a CPF with all digits the same", () => {
    assert.strictEqual(validateCpf("111.111.111-11"), false);
  });
});
