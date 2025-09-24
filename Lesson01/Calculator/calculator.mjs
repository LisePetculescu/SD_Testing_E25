

function sum(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Incorrect parameter type');
    }
    return a + b;
};


function subtract(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Incorrect parameter type');
    }
    return a - b;
};

function multiply(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Incorrect parameter type');
    }
    return a * b;
};

function divide(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Incorrect parameter type');
    }
    return a / b;
}


export { sum, subtract, multiply, divide };

