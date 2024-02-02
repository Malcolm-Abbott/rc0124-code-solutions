/* exported filterOutNulls */
function filterOutNulls(values: any[]): number[] {
  const result = [];
  values.forEach((value) => {
    if (value !== null) result.push(value);
  });
  return result;
}
