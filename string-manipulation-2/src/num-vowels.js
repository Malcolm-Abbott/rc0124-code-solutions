'use strict';
/* exported numVowels */
/*
Define a function named numVowels that accepts one parameter: string, of type string
The return value will be a number representing the number of vowels present in the inputted string.
Declare a variable that can be reassigned and assign it a value of 0.
Iterate through the string.
Declare a variable to track the current string.
If the current string in lower case form (use the appropriate method) is 'a' | 'e' | 'i' | 'o' | 'u' use the
addition assignment operator to add 1 to result.
Return result.
*/
function numVowels(string) {
  let result = 0;
  for (let i = 0; i < string.length; i++) {
    let element = string[i];
    switch (element.toLowerCase()) {
      case 'a':
        result += 1;
        break;
      case 'e':
        result += 1;
        break;
      case 'i':
        result += 1;
        break;
      case 'o':
        result += 1;
        break;
      case 'u':
        result += 1;
        break;
    }
  }
  return result;
}
