### Bank account
Suppose you have a bank account that offers variable interest rates:

- 0.5 per cent for the first 10000 kr credit
- 1 per cent for the next 10000 kr
- 1.5 per cent for the rest

If you wanted to check that the bank was handling your account correctly: 
1. What input partitions might you use?
2. What test case values could be inferred from said partitions?

<sub>Adapted from Hambling, Brian (2019). *Software Testing: An ISTQB-BCS Certified Tester Foundation Guide*, 4th ed.</sub>

Partitions:

input:

1.
minus kr --> test -5 
0 kr --> test 0 kr
0.01-10.000 kr --> test 5.000 kr
10.000.01-20.000 kr --> test 15.000 kr
20.000.01-MAX DOUBLE kr --> test 50.000 kr

2. 
test: -5
test: 0 kr
test: 5.000 kr
test: 15.000 kr
test: 50.000 kr
strings
symbols
boundaries for each range: ?
1
10.000 
10.001
20.000
20.001
max float
min float
decimals: 1.01 + -1.01


