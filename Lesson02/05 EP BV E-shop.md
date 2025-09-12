### E-shop
You are testing the payment functionality of an e-shop. The system receives a positive amount of purchases in kroner with an accuracy of 1 øre. Based on this value, a discount is calculated according to the following rules:

|Amount|Discount|
|-|--:|
|Up to 300 kr|0%|
|Over 300 kr, up to 800 kr|5%|
|Over 800 kr|10%|

Use black-box analysis to identify a comprehensive series of test cases:
1. Identify the corresponding equivalence partitions and propose test cases based on them
2. Use 3-value boundary value analysis to identify further test cases
3. Write down the full resulting list of test cases
4. Implement the discount calculation function in code and write the corresponding unit tests in the language and unit test framework of your choice

<sub>Adapted from Stapp, Lucjan, Roman, Adam, and Michaël Pilaeten (2024). _ISTQB Certified Tester Foundation Level: A Self-Study Guide Syllabus v4.0_. Springer.</sub>

| Partition             | Partition type         | Test case values |
_____________________________________________________________________________________

>= 0.1 & max            | Valid                  | 550.01 kr 
_____________________________________________________________________________________

< 0.01 kr                | inValid                | -50.01 kr
_____________________________________________________________________________________

>= 0.01 & <= 300.9 kr    | Valid   (low)          | 150.01 kr --> 0% discount
_____________________________________________________________________________________

>= 300.01 & <= 800.9 kr  | Valid  (mid)           | 550.01 kr --> 5% discout
_____________________________________________________________________________________

>= 800.01  kr            | Valid  (high)          | 2000.01 kr --> 10% discount
_____________________________________________________________________________________

0.01 - 300.0 kr          | (low range) valid boundary   |  0.01, 1.01, 299.01, 300.01
_____________________________________________________________________________________

0.01 - 300.0 kr          | (low range) invalid boundary  |  -1.01, 0.00, 0
_____________________________________________________________________________________

300.01 - 800.0 kr        | (mid range) valid boundary   |  300.01, 301.01, 799.01, 800.0
_____________________________________________________________________________________
 
800.01 kr - < infinity   | (high range) valid boundary  |  800.01, 801.01, 2500.01
_____________________________________________________________________________________
 
800.01 kr - < infinity   | (high range) invalid boundary  |  infinity _____________________________________________________________________________________

other                   | Invalid             | "" (empty string), " " (spaces), strings, null, NaN, undefined, [object, object],
_____________________________________________________________________________________

test if discountedAmount = amount / discount 

#### Solution

1. Equivalence partitions

|Partitions|Test cases|Expected output|
|-|--:|--:|
|0-300|150 kr|0%|
|300.01-800|550 kr|5%|
|800.01-MAX DOUBLE|900 kr|10%|

Potential test case values: `150 kr` `550 kr` `900 kr`.
   
2. 3-value boundary value analysis

|Partitions|Boundary values|Test case values|
|-|-|-|
|0-300|0 300|0 0.01 299.99 300 300.01|
|300.01-800|300.01 800|300 300.01 300.02 799.99 800 800.01|
|800.01-MAX DOUBLE|800.01|800 800.01 800.02|

3. List of test cases

|Input value|Expected output|
|--:|--:|
|0.00 kr|0%|
|0.01 kr|0%|
|150.00 kr|0%|
|299.99 kr|0%|
|300.00 kr|0%|
|300.01 kr|5%|
|300.02 kr|5%|
|550.00 kr|5%|
|799.99 kr|5%|
|800.00 kr|5%|
|800.01 kr|10%|
|800.02 kr|10%|
|900.00 kr|10%|

4. Code solution
- Python (Pytest): https://github.com/arturomorarioja/py_eshop_unit_tests
- JavaScript (Jest): https://github.com/arturomorarioja/js_eshop_unit_tests
- PHP8 (PHPUnit): https://github.com/arturomorarioja/php_eshop_unit_tests
