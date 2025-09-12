### Password field
A password field accepts a minimum of 6 characters and a maximum of 10 characters. Define:

1. Its corresponding equivalence partitions and test case values
2. The boundary values and resulting test case values with a 3-boundary value approach
3. The final list of test case values


| Partition      | Partition type      | Test case values |
__________________________________________________________

6 - 10 char      | Valid               | "ab12cd34" 8 chars
__________________________________________________________

6                | lower boundary      | "ab12c" (5), "ab12cd" (6), "ab12cd3" (7)
__________________________________________________________

10               | upper boundary      | "ab12cd34e" (9), "ab12cd34ef" (10), "ab12cd34ef5" (11)
__________________________________________________________

other            | Invalid             | 0, (æ, ø, å?), "" (empty string), non-latin alphabet chars?, " " (spaces), 
__________________________________________________________

other            | valid             | string
__________________________________________________________

#### Solution

1. and 2. Equivalence partitions and boundary value analysis
   
|Partition type|Partitions|Test case values|Boundary values|Test case values|
|-|--:|--:|--:|--:|
|Invalid|0-5|3|0 5|0 1 4 5 6|
|Valid|6-10|8|6 10|5 6 7 9 10 11|
|Invalid|11-MAX INTEGER|15|11|10 11 12|

3. List of test case values

`0` `1` `3` `4` `5` `6` `7` `8` `9` `10` `11` `12` `15`
