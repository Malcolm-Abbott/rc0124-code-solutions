/* exported filterOutStrings */
function filterOutStrings(values: any[]): any[] {
  const result = [];
  values.forEach((value) => {
    if (typeof value !== 'string') result.push(value);
  });
  return result;
}
