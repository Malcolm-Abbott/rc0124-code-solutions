/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen(): number[] {
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

function getEvenNumbersToTwenty(): number[] {
  let currentNumber: number = 2;
  const evenNumbers: number[] = [];
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('getEvenNumbersToTwenty():', getEvenNumbersToTwenty());
console.log('getEvenNumbersToTwenty():', getEvenNumbersToTwenty());

function repeatWord(word: string, times: number): string {
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

function logEachCharacter(string: string): any {
  for (let i = 0; i < string.length; i++) {
    console.log(`string[${i}]: ${string[i]}`);
  }
}

logEachCharacter('Malcolm');
logEachCharacter('');
logEachCharacter('This is a full sentence.');

function doubleAll(numbers: number[]): number[] {
  const doubled: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

console.log('doubleAll:', doubleAll([1, 2, 3]));
console.log('doubleAll:', doubleAll([10, 20, 30]));

function getKeys(object: Record<string, unknown>): string[] {
  const keys = [];
  for (const key in object) {
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

function getValues(object: Record<string, unknown>): unknown[] {
  const values = [];
  for (const key in object) {
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
