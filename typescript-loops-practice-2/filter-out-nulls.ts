/* exported filterOutNulls */
function filterOutNulls(values: any[]): any[] {
  const filteredValues: any[] = values.filter((value) => value !== null);
  return filteredValues;
}
