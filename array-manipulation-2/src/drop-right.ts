/* exported dropRight */
function dropRight(array: any[], count: number): any[] {
  const result = array.slice(0, -count);
  return result;
}
