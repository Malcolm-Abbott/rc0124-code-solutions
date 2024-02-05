'use strict';
/* exported take */
/*
PSEUDOCODE
Define a function named take
This function accepts 2 parameters: array (array|list data type), count (number | int data type)
Declare a variable named result and assign to it a value of the array parameter starting from index zero and
ending 1 index less than the count variable
Return result
*/
function take(array, count) {
  const result = array.slice(0, count);
  return result;
}
