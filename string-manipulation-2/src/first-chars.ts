/* exported firstChars */
function firstChars(length: number, string: string): string {
  const myArray = string.split('');
  myArray.length = length;
  const result = myArray.join('');
  return result;
}
