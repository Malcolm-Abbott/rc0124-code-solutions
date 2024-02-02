'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  let currentNumber = 1;
  const numbers = [];
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('getNumbersToTen():', getNumbersToTen());
console.log('getNumbersToTen():', getNumbersToTen());
function getEvenNumbersToTwenty() {
  let currentNumber = 2;
  const evenNumbers = [];
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('getEvenNumbersToTwenty():', getEvenNumbersToTwenty());
console.log('getEvenNumbersToTwenty():', getEvenNumbersToTwenty());
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log('repeatWord("hey", 3):', repeatWord('hey', 3));
console.log('repeatWord("hey", 3):', repeatWord('hey', 3));
function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(`string[${i}]: ${string[i]}`);
  }
}
logEachCharacter('Malcolm');
logEachCharacter('');
logEachCharacter('This is a full sentence.');
function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('doubleAll:', doubleAll([1, 2, 3]));
console.log('doubleAll:', doubleAll([10, 20, 30]));
function getKeys(object) {
  const keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
}
console.log(
  `getKeys({a: 'hello', b: 'world'}:`,
  getKeys({ a: 'hello', b: 'world' })
);
console.log(
  `getKeys({c: 'learning', d: 'fuze'}:`,
  getKeys({ c: 'learning', d: 'fuze' })
);
function getValues(object) {
  const values = [];
  for (let key in object) {
    values.push(object[key]);
  }
  return values;
}
console.log(
  `getValues({a: 'hello', b: 'world'}:`,
  getValues({ a: 'hello', b: 'world' })
);
console.log(
  `getValues({c: 'learning', d: 'fuze'}:`,
  getValues({ c: 'learning', d: 'fuze' })
);
