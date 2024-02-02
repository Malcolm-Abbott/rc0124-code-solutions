'use strict';
/* exported capitalizeWord */
/*
Define a function named capitalizeWord with one parameter: word, of data type string
The return value will be of data type string
Declare a variable named result with the ability to be reassigned and assign it a value of an empty string.
Use conditional logical to evaluate if word in lower cased or upper cased form (use the appropriate method) is
strictly equal to the string 'javascript' if lower cased or 'JAVASCRIPT' if upper cased and return the result
variable with the string 'JavaScript' assigned as it's value.
Iterate through the word parameter
Use conditional logic, so that if i is strictly equal to 0, use the addition assignment operator to add word at
index 0 to upper case, otherwise use the addition assignment operator to add word at index to lower case.
Return the result variable.
*/
function capitalizeWord(word) {
  let result = '';
  if (word.toLowerCase() === 'javascript') return 'JavaScript';
  for (let i = 0; i < word.length; i++) {
    switch (i) {
      case 0:
        result += word[i].toUpperCase();
        break;
      default:
        result += word[i].toLowerCase();
    }
  }
  return result;
}
