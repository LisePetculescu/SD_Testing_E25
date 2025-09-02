import { expect, test } from "vitest";
import { checkPasswordInput } from "../04-password-field.mjs";


// positive tests

test(`check pw "ab12cd34" (8 chars) is valid password`, () => {

    expect(checkPasswordInput("ab12cd34")).toBe(true);
})

test.each([
  ["ab12cd34", true],
  ["ab12cd", true],
  ["ab12cd3", true],
  ["ab12cd34e", true],
  ["ab12cd34ef", true],
])('check pw with amount of 6, 7, 9 & 10 chars is valid passwords', (a, expected) => {
  expect(checkPasswordInput(a)).toBe(expected)
})

// Negative tests

test.each([
  ["ab12c", false],
  ["ab12cd34ef5", false],
])('check pw with amount of 5 & 11 chars is invalid passwords', (a, expected) => {
  expect(checkPasswordInput(a)).toBe(expected)
})

test.each([
  ["", false],
  ["   ", false],
  ["æøåøøøæå", false],
  ["ÆÆØØÅÅ", false],
])('check pw with other chars is invalid passwords', (a, expected) => {
  expect(checkPasswordInput(a)).toBe(expected)
})


