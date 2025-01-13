/* exported filterOutStrings */
function filterOutStrings(values: any[]): any[] {
  const filteredValues = values.filter((value) => typeof value !== 'string');
  return filteredValues;
}
