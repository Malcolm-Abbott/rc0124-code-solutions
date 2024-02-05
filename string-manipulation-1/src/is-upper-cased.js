'use strict';
/* exported isUpperCased */
/*
PSEUDOCODE
Define a function named isUpperCased that accepts one parameter: word, a string data type.
The return value will be a boolean value referencing whether or not all the characters in the word argument provided
are upper cased or not.
Write an expression to evaluate whether or not the word parameter is strictly equal to the word parameter with the
appropriate method to make all elements in the string upper cased and return the result of that expression.
*/
function isUpperCased(word) {
  return word === word.toUpperCase();
}
