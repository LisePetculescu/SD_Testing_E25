// ### Printer cartridges
// A wholesaler sells printer cartridges. The minimum order quantity is 5.
// There is a 20% discount for orders of 100 or more printer cartridges.
// You have been asked to prepare test cases using various values for the number of printer cartridges ordered.

// Use black-box analysis to identify a comprehensive series of test cases:
// 1. Identify the corresponding equivalence partitions and propose test cases based on them
// 2. Use 3-value boundary value analysis to identify further test cases
// 3. Write down the full resulting list of test cases
// 4. Implement the discount calculation function in code and write the corresponding unit tests in the language and unit test framework of your choice

// <sub>Adapted from Hambling, Brian (2019). *Software Testing: An ISTQB-BCS Certified Tester Foundation Guide*, 4th ed.</sub>

// ```
// partitions:

// valid range: 5 - MAX DOUBLE
// test: 
// valid: 5, 6, 5.000, 100.000, 
// invalid: 4, 0, -1, 0.5, str, int, float, Infinity?
// test for 20 % discount: 99, 100, 101 pcs --> discount true/false | 1 or 0.80

// ```

export function catridgeOrderPrice(OrderQuantity) {
  const discountPercentage = 20;
  const normalPriceMultiplier = 1; 

  const discount = 1 - discountPercentage / 100;

  let discountMultiplier = { discount: discount, nonDiscount: normalPriceMultiplier };
  const minOrderQuantity = 5;
  const discountValidatorQuantity = 100;

  if (OrderQuantity < minOrderQuantity | !Number.isInteger(OrderQuantity) ) {
    return 0;
  } else if ( OrderQuantity >= discountValidatorQuantity ) {
    return discountMultiplier.discount;

  } else {

    console.log(discountMultiplier);
    return discountMultiplier.nonDiscount;
  } 

  
  

  // either 1 or 0.8
  // return discountMultiplier;
}

// console.log(catridgeOrderPrice(5));
// console.log(catridgeOrderPrice(4));
// console.log(catridgeOrderPrice("5"));
// console.log(catridgeOrderPrice(100));
 