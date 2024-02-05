/* exported capitalize */
/*
PSEUDOCODE
Define a function named capitalize that accepts one parameter: word, which will be of data type string.
Declare a variable which will be able to have it's value reassigned, and assign this variable and empty string.
Iterate through the parameter.
In your loop provide conditional logic where as the first index element of the word parameter will be capitalized
using the appropriate method and use the addition assignment operator on the result variable to add this value to
the result variable.
Otherwise, use the addition assignment operator to reassign the value of result to have the other index elements
with the appropriate method to make them lower cased.
Return the result variable.
*/
function capitalize(word: string): string {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      result += word[i].toUpperCase();
    } else {
      result += word[i].toLowerCase();
    }
  }
  return result;
}
