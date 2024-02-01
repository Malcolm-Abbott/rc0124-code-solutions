/* exported findIndex */
function findIndex(array: any[], value: number): number {
  let result = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) result = i;
  }
  return result;
}
