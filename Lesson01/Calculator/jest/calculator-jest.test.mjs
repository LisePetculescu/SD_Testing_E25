

import { sum, subtract, multiply, divide } from "../calculator.mjs";


// Sum - positive tests

test(`add 2 + 5 to equal 7`, () => {
    expect(sum(2, 5)).toBe(7);
});

test(`sum -10 + 5 equals -5`, () => {
    expect(sum(-10, 5)).toBe(-5);
})

test(`sum 2.5 + 3.75 equals 6.25`, () => {
    expect(sum(2.5, 3.75)).toBe(6.25);
})


// Sum - negative tests

test(`sum 2.5 + 3.75 to not equal 1`, () => {
    expect(sum(2.5, 3.75)).not.toBe(1);
})

// test(`sum 1 + 1 to be a number`, () => {
//     const value = sum(1, 1);

//     expect(value).not.toBeNaN;
//     expect(typeof value).toBe('number')
//     expect(typeof value).not.toBe('string')
//     expect(value).not.toBe(1)
// })

test(`sum 1 + 1 to not be NaN`, () => {
    const value = sum(1, 1);

    expect(value).not.toBeNaN;
})

test(`sum 1 + 1 to be a number`, () => {
    const value = sum(1, 1);

    expect(typeof value).toBe('number')

})

test(`sum 1 + 1 to not be a string`, () => {
    const value = sum(1, 1);

    expect(typeof value).not.toBe('string')

})

test(`sum 1 + 1 to not be 1`, () => {
    const value = sum(1, 1);

      expect(value).not.toBe(1)

})


// _____________________________________________________

// subtract - positive tests

test(`subtract 2 - 5 to equal -3`, () => {
    expect(subtract(2, 5)).toBe(-3);
});

test(`subtract 2.5 - 3 to equal -0.5`, () => {
    expect(subtract(2.5, 3)).toBe(-0.5);
})


// Subtract - negative tests

test(`subtract 2.5 - 3 to not equal 1`, () => {
    expect(subtract(2.5, 3.75)).not.toBe(1);
})

test(`subtract 1 - 1 to be a number`, () => {
    const value = subtract(1, 1);

    expect(typeof value).toBe('number')

})

// _____________________________________________________

// Multiply - positive tests

test(`multiply 2 * 5 to equal 10`, () => {
    expect(multiply(2, 5)).toBe(10);
});

test(`multiply 2.5 * -3 to equal -7.5`, () => {
    expect(multiply(2.5, -3)).toBe(-7.5);
})


// Multiply - negative tests

test(`multiply 2.5 * 3 to not equal 1`, () => {
    expect(multiply(2.5, 3.75)).not.toBe(1);
})

test(`multiply 1 * 1 to be a number`, () => {
    const value = multiply(1, 1);

    expect(typeof value).toBe('number')

})

// _____________________________________________________

// Divide - positive tests

test(`divide 2 / 5 to equal 0.4`, () => {
    expect(divide(2, 5)).toBe(0.4);
});

test(`divide 2.5 / -2 to equal -1.25`, () => {
    expect(divide(2.5, -2)).toBe(-1.25);
})


// Divide - negative tests

test(`divide 2.5 / 3 to not equal 1`, () => {
    expect(divide(2.5, 3.75)).not.toBe(1);
})

test(`divide 1 / 1 to be a number`, () => {
    const value = divide(1, 1);

    expect(typeof value).toBe('number')

})

