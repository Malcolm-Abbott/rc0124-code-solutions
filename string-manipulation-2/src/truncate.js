'use strict';
/* exported truncate */
/*
PSEUDOCODE
Define a function named truncate that accepts two parameters: length, of data type number, and string, of data
type string.
The return value will be a string.
Define a variable that can be reassigned and assign it a value of the string parameter converted into an array
using the appropriate method.
Reassign the length of the array with the value of the parameter length.
Define a variable that can be reassigned named result and assign it a variable of the array converted back into a
string using the appropriate method.
Use the addition assignment operator to concatenate an ellipsis with the result variable.
Return the result variable.
*/
function truncate(length, string) {
  let myArray = string.split('');
  myArray.length = length;
  let result = myArray.join('');
  result += '...';
  return result;
}
