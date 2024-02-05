'use strict';
/* exported drop */
/*
PSEUDOCODE
Define a function named drop that accepts two parameters:
array(of array | list data type)
count(of number | int data type)
The return value will be an array | list.
Declare a variable named result and assign to it a value of the array starting at the count parameter and ending
at the end of the array (use the appropriate method)
Return result
*/
function drop(array, count) {
  const result = array.slice(count);
  return result;
}
