'use strict';
/* exported capitalizeWords */
function capitalizeWords(string) {
  const myArray = string.split(' ');
  const finalArray = [];
  for (let i = 0; i < myArray.length; i++) {
    let currentWord = myArray[i];
    currentWord =
      currentWord[0].toUpperCase() + currentWord.substring(1).toLowerCase();
    finalArray.push(currentWord);
  }
  const result = finalArray.join(' ');
  return result;
}
