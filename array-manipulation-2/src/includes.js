'use strict';
/* exported includes */
/*
PSEUDOCODE
Define a function named includes that accepts two parameters:
array (data type array | list)
value (any data type)
The return value of the function will be a boolean value indicating whether or not the value is present in the
array argument
Define a variable that can be reassigned named result and assign to it a value of false;
Iterate through the array.
Provided conditional logic whereas is the current index element is strictly equal to the value parameter, then
result will be reassigned to the value of true.
Return result.
*/
function includes(array, value) {
  let result = false;
  array.forEach((element) => {
    if (element === value) result = true;
  });
  return result;
}
