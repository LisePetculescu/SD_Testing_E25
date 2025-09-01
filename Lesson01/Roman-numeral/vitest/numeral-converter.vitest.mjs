import { expect, test } from 'vitest'
import { romanNumeralsToDecimals } from '../numeral-converter.mjs'

// 3A testing --> Arrange, Act, Assert" (AAA)

// Positive Testing


// 3A test pattern
test("Roman Numeral: MMM should equal Decimal: 3000", () => {
  // Arrange
  const romanNum = "MMM";
  const expected = 3000;

  // Act
  const actual = romanNumeralsToDecimals(romanNum);

  // Assert
  expect(actual).toBe(expected);
});


test(`Roman Numeral: MMMCMXCIX to equal Decimal: 3999`, () => {
    const romanNum = "MMMCMXCIX";
    const result = 3999;

    expect(romanNumeralsToDecimals(romanNum)).toBe(result);
})


test(`Roman Numeral: CMXCIX to equal Decimal: 999`, () => {
    expect(romanNumeralsToDecimals("CMXCIX")).toBe(999);
})



// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// Negative Testing

test(`Roman Numeral: CMCCIX to be null`, () => {
    expect(romanNumeralsToDecimals("CMCCIX")).toBeNull();
})

test(`Expect decimals input to be null`, () => {
    expect(romanNumeralsToDecimals(1230)).toBeNull();
})

test(`Expect invalid letters to be null`, () => {
    expect(romanNumeralsToDecimals("aBcdE")).toBeNull();
})

test(`Expect too big number to be null`, () => {
    expect(romanNumeralsToDecimals("MMMM")).toBeNull();
})

test(`Expect too many repetitions to be null`, () => {
    expect(romanNumeralsToDecimals("MMMM")).toBeNull();
})

test(`Illegal subtractive pair: "IL" to be null`, () => {
    expect(romanNumeralsToDecimals("IL")).toBeNull();
})

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------