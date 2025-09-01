// ### Roman Numerals

// **Part I**

// Implement a function/method that converts from Roman to decimal numerals, taking into account the following rules:

// Relationship between figures
// ```
// I          1
// V          5
// X         10
// L         50
// C        100
// D        500
// M       1000
// ```

// In Roman numbers:
// - Larger values preceding smaller or equal ones keep their value (e.g., `MDCCCLXVII = 1000 + 500 + (100 * 3) + 50 + 10 + 5 + (1 * 2) = 1867`)
// - When a value precedes a larger one, it means subtraction (e.g, `XCIV = (100 – 10) + (5 – 1) = 94`)
// - `I, X, C, M` can be repeated up to 3 times consecutively (e.g., 4 is `IV`, not `IIII`)
// - `V, L, D` cannot be repeated
// - Only `I, X, C` can be used as subtractive numerals
// - The largest value that can be represented is 3999 (`MMMCMXCIX`)

function romanNumeralValue(char) {

    if (char == 'I')
        return 1;
    if (char == 'V')
        return 5;
    if (char == 'X')
        return 10;
    if (char == 'L')
        return 50;
    if (char == 'C')
        return 100;
    if (char == 'D')
        return 500;
    if (char == 'M')
        return 1000;
    return -1;
}

export function romanNumeralsToDecimals(numerals) {
   
    let upperCaseNumerals;
    if (isValidRoman(numerals)) {

        // make sure they're always uppercase
        upperCaseNumerals = numerals.toUpperCase();
        // console.log(upperCaseNumerals); 
    } else {
        return null;
    };
    // console.log("vi er videre: ", upperCaseNumerals)

    const romNum = upperCaseNumerals;
    let result = 0;
    for (let i = 0; i < romNum.length; i++) {

        // to get value of current char
        let currentNumber = romanNumeralValue(romNum.charAt(i));

        // to get value of next char
        let nextNumber  = romanNumeralValue(romNum.charAt(i + 1));

        // comparing values
        if (currentNumber >= nextNumber) {
            result = result + currentNumber;
            // console.log("if result: ", result);
            
        } else {
            result = result + nextNumber - currentNumber;
            // console.log("else result: ", result);
            
            i++;
        }
        
        if (result > 3999) {
            return null;
        }
    }

    // console.log("RESULT: ", result);
    return result
}


function isValidRoman(numerals) {
    if (typeof numerals !== "string") return false;

    const roman = numerals.toUpperCase();
    const romanNums = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    // Only allowed letters
    for (const char of roman) {
        if (!romanNums[char]) return false;
    }
    
    
    // Check for repetitions

    // // the long way:
    // if (roman.includes("IIII") | roman.includes("XXXX") | roman.includes("CCCC") | roman.includes("MMMM")) {
    //      console.log("repetition");
    //      return false ;
    // };
    
    // with regexp
    if (/IIII|XXXX|CCCC|MMMM/.test(roman)) return false; // I, X, C, M can't repeat 4 times
    if (/VV|LL|DD/.test(roman)) return false;            // V, L, D can't repeat

    // Check for illegal subtraction
    const illegalSubs = ["IL","IC","ID","IM","VX","VL","VC","VD","VM","XD","XM","LC","LD","LM","DM"];
    for (const pair of illegalSubs) {
        if (roman.includes(pair)) return false;
    }

    const romanRegex = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    return romanRegex.test(numerals.toUpperCase());

    // romanRegex explained:
    ```
    M{0,3} --> only M, MM, MMM is valid (1000-3000)

    (CM|CD|D?C{0,3}) --> only valid hundreds (100-900) & max 3 C's next to each other
        like: C (100), CC (200), CCC (300), DC (600), DCCC (800)
    
    (XC|XL|L?X{0,3}) --> only valid tens (10-90) & max 3 X's next to each other
        like: XC (90), XL (40), XX (20), LXXX (80)

    (IX|IV|V?I{0,3}) --> only valid ones (0-9) & max 3 I's next to each other
        like: I (1), III (3), v (5), IV (4), VI (6), VIII (8)

    it also does so there can't be illegal pairs, or invalid substraction as it will break the rules of the regex
    ```

}

// TEST
// console.log(isValidRoman("MCM"));   // true
// console.log(isValidRoman("IV"));    // true
// console.log(isValidRoman("DMVX"));  // false
// console.log(isValidRoman("IIII"));  // false
// console.log(isValidRoman("MMMCMXCIX"));  // true
// console.log(isValidRoman("VX"));    // false


// console.log(romanNumeralsToDecimals("mcm"));
// console.log(romanNumeralsToDecimals("fcg"));
// const aNumber = 123
// console.log(romanNumeralsToDecimals(aNumber));
// console.log(romanNumeralsToDecimals("mmmxx"));
// console.log(romanNumeralsToDecimals("xcxi"));
// console.log(romanNumeralsToDecimals("ccc"));
// console.log(romanNumeralsToDecimals("MMMCMXCXX"));  // null




