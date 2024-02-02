/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  const char1 = string[firstIndex];
  const char2 = string[secondIndex];
  const myArray = string.split('');
  myArray[firstIndex] = char2;
  myArray[secondIndex] = char1;
  const result = myArray.join('');
  return result;
}
