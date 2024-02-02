'use strict';
/* exported firstChars */
function firstChars(length, string) {
  let myArray = string.split('');
  myArray.length = length;
  const result = myArray.join('');
  return result;
}
