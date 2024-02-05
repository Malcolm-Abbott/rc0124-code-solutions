/* exported compact */
function compact(array: any[]): any[] {
  const result: any[] = [];
  array.forEach((element) => {
    if (element) result.push(element);
  });
  return result;
}
