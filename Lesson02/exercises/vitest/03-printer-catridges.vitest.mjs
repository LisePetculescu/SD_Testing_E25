import { expect, test } from 'vitest'
import { catridgeOrderPrice } from '../03-printer-catridges.mjs'

// ```
// partitions:

// valid range: 5 - MAX DOUBLE
// test: 
// valid: 5, 6, 5.000, 100.000, int,
// invalid: 4, 0, -1, 0.5, str, float, Infinity?
// test for 20 % discount: 99, 100, 101 pcs --> discount true/false | 1 or 0.80

// ```


// positive tests

test("order quantity 5 equals price multiplier 1", () => {
  // Arrange
  const quantity = 5;

  // Act
    const multiplier = catridgeOrderPrice(quantity);

  // Assert
    expect(multiplier).toBe(1)
});


test(`order quantity 6 equals price multiplier 1`, () => {

    expect(catridgeOrderPrice(6)).toBe(1);
})

test(`order quantity 5000 equals price multiplier 0.8`, () => {

    expect(catridgeOrderPrice(5000)).toBe(0.8);
})

test(`order quantity 100000 equals price multiplier 0.8`, () => {

    expect(catridgeOrderPrice(100000)).toBe(0.8);
})

// test(`order quantity int to be true`, () => {

//     expect(catridgeOrderPrice(100000)).toBeInteger();
// })

test.each([
  [5, 1],
  [6, 1],
//   [100000, 0.8],
])('order quantity 5+ equals price multiplier 1', (a, expected) => {
  expect(catridgeOrderPrice(a)).toBe(expected)
})


// ___________________________________________________________

// negative tests

test(`order quantity 4 equals price multiplier 0`, () => {

    expect(catridgeOrderPrice(4)).toBe(0);
})

test(`order quantity 0 equals price multiplier 0`, () => {

    expect(catridgeOrderPrice(0)).toBe(0);
})

test(`order quantity -1 equals price multiplier 0`, () => {

    expect(catridgeOrderPrice(-1)).toBe(0);
})

test(`order quantity 0.5 equals price multiplier 0`, () => {

    expect(catridgeOrderPrice(0.5)).toBe(0);
})

test(`order quantity "" (string) equals price multiplier 0`, () => {

    expect(catridgeOrderPrice("")).toBe(0);
})

test(`order quantity 4 equals price multiplier 0`, () => {

    expect(catridgeOrderPrice(4)).toBe(0);
})