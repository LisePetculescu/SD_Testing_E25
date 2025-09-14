### Input form
An input form has two textboxes ("Username" and "Password"). Access to the homepage will be granted only if both fields are correct. Represent the situation in a decision table.



user validation for login | rule 1 | rule 2 | rule 3 |
______________________________________________________
_condition_                        
_______________________________________________________
_______________________________________________________
username                  |   T    |   F     |   T      
_______________________________________________________
password                  |   T    |   N/A   |   F       
_______________________________________________________
_______________________________________________________
_Action_                        
_______________________________________________________
login success             |   Y    |   N    |    N     
_______________________________________________________


#### Solution

||R1|R2|R3|R4|
|-|-|-|-|-|
|**Conditions**|||||
|Username correct|F|T|F|T|
|Password correct|F|F|T|T|
|**Actions**|||||
|Go to homepage|N|N|N|Y|

Reduced solution:

||R1|R2|R3|
|-|-|-|-|
|**Conditions**||||
|Username correct|F|-|T|
|Password correct|-|F|T|
|**Actions**||||
|Go to homepage|N|N|Y|
