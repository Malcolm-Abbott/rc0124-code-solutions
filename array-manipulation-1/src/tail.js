'use strict';
/* exported tail */
/*
PSEUDOCODE
Define a function named tail that accepts one parameter: array || list made up of any data types
Declare a variable named result and assign it a value of an empty array literal.
Declare a variable named i and assign it a value of 0.
Iterate through the array parameter, and if i is not strictly equal to 0, push the element into the result variable.
Increment i.
Return the result variable.
*/
function tail(array) {
  const result = [];
  let i = 0;
  array.forEach((element) => {
    if (i !== 0) result.push(element);
    i++;
  });
  return result;
}
