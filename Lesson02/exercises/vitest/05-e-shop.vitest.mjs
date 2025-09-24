import { expect, test } from "vitest";
import { discountCalculator } from "../05-e-shop.mjs";



function sonarTest() {
  
  let hello = "Hi There!";

}

sonarTest(1)




// positive tests

test(`check basket amount: 550.1 kr equals discount amount: 27.51kr `, () => {

    expect(discountCalculator(550.1)).toBe(27.51);
})

test.each([
  [150.1, 0],
  [550.1, 27.51],
  [2000.1, 200.01],
])('check input-amount are valid for discount calculation', (inputAmount, expectedDiscountAmount) => {
  expect(discountCalculator(inputAmount)).toBe(expectedDiscountAmount)
})

test.each([
    [150.01, 0],
    [550.01, 5],
    [2000.01, 10],
])('check input-amount fits right discount percentage', (inputAmount, expectedDiscountPercentage) => {
   const discountAmount = discountCalculator(inputAmount);
   const discountPercentage = (discountAmount / inputAmount) * 100;
   expect(discountPercentage).toBeCloseTo(expectedDiscountPercentage, 2); 
});

test.each([
    [0.01, 0],
    [1.01, 0],
    [299.01, 0],
    [300.00, 0],
])('check low-range boundary input-amount fits 0 kr discount', (inputAmount, expectedDiscountAmount) => {
  expect(discountCalculator(inputAmount)).toBe(expectedDiscountAmount)
})

test.each([
    [300.01, 5],
    [301.01, 5],
    [799.01, 5],
    [800.00, 5],
])('check mid-range boundary input-amount fits 5% discount', (inputAmount, expectedDiscountPercentage) => {
   const discountAmount = discountCalculator(inputAmount);
   const discountPercentage = (discountAmount / inputAmount) * 100;
   expect(discountPercentage).toBeCloseTo(expectedDiscountPercentage, 2); 
})

test.each([
    [800.01, 10],
    [801.01, 10],
])('check high-range boundary input-amount fits 10% discount', (inputAmount, expectedDiscountPercentage) => {
   const discountAmount = discountCalculator(inputAmount);
   const discountPercentage = (discountAmount / inputAmount) * 100;
   expect(discountPercentage).toBeCloseTo(expectedDiscountPercentage, 2); 
})



// negative tests

test.each([
  [-50.1, null],
  [-1.01, null],
  [0.00, null],
  [0, null],
  ["", null],
  ["   ", null],
  ["a string", null],
  [null, null],
  [NaN, null],
  [undefined, null],
  [[123], null],
  [{123: 123}, null],
])('check invalid input returns null', (inputAmount, expectedDiscountAmount) => {
  expect(discountCalculator(inputAmount)).toBe(expectedDiscountAmount)
})



