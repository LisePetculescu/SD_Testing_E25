function formatAmount(amount) {
  let ore = Math.round(amount * 100);
  let rounded = ore / 100;

  return rounded
  // forcing amount to have 2 decimals - no more, no less
//   return (ore / 100).toFixed(2);
}

function discountMultiplier(amountToTwoDecimals) {
    const discount = { noDiscount: 0, midDiscount: 5, highDiscount: 10 };

    const lowRangeMin = 0.01;
    const lowRangeMax = 300;
    const midRangeLow = 300.01;
    const midRangeHigh = 800;
    const highRangeLow = 800.01;

    let discountMultiplier = 0;


    if ( amountToTwoDecimals >= lowRangeMin && amountToTwoDecimals <= lowRangeMax) {
        discountMultiplier = 1 - discount.noDiscount / 100;
        return discountMultiplier;
     

    } else if ( amountToTwoDecimals >= midRangeLow && amountToTwoDecimals <= midRangeHigh ) {
        discountMultiplier = 1 - discount.midDiscount / 100;
        return discountMultiplier;
     

    } else if (amountToTwoDecimals >= highRangeLow) {
        discountMultiplier = 1 - discount.highDiscount / 100;
        return discountMultiplier;
     
    } else {
        return null;
    }

    // return discountMultiplier;
}

export function discountCalculator(amount) {
  if (typeof amount !== "number") {
    return null;
  }

  let amountToTwoDecimals = formatAmount(amount);

  const multiplier = discountMultiplier(amountToTwoDecimals);
  let discountAmount = 0;
  

  if (multiplier !== null) {
    // returns the amount to pay after discount
    const amountAfterDiscount = formatAmount(amountToTwoDecimals * multiplier);
    
    // returns the discount amount
    discountAmount = formatAmount(amountToTwoDecimals * (1 - multiplier));
  } else {
    discountAmount = null;
    
  }




  // returns the amount to pay after discount
//   const amountAfterDiscount = formatAmount(amountToTwoDecimals * discountMultiplier(amountToTwoDecimals));

  // returns the discount amount
//   const discountAmount = formatAmount((1 - discountMultiplier(amountToTwoDecimals)) * amountToTwoDecimals)

//   console.log("Amount before discount calculation: ", amountToTwoDecimals);
  
//   console.log("discount Amount: ", discountAmount);
//   console.log("amount after discount: ", amountAfterDiscount);
  
  

  return discountAmount;
}



// console.log(discountCalculator("1"));
// console.log(discountCalculator(1));
// console.log(discountCalculator(1.111));
// console.log(discountCalculator(1.94));
// console.log(discountCalculator(1.95));
// console.log(discountCalculator(1.96));
// console.log(discountCalculator(1.99));
// console.log(discountCalculator(500.99));
// console.log(discountCalculator(5000.99));


// console.log("discountmultiplier: ", discountMultiplier(500.99));