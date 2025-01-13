/* exported findIndex */
function findIndex(array: any[], value: any): any {
  // Iterate through array
  // Each iteration
  // check if element equals value, if so, end loop and return index
  // check if element is last element and not equal to value, if so, return -1
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element === value) return i;
    if (element !== value && i === array.length - 1) return -1;
  }
}
