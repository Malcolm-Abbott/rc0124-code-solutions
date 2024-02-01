/* exported includesSeven */
function includesSeven(array: any[]): boolean {
  let result = false;
  array.forEach((element) => {
    if (element === 7) result = true;
  });
  return result;
}
