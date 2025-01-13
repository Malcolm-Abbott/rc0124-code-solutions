/* exported filterOutNulls */
function filterOutNulls(values) {
  var filteredValues = values.filter(function (value) {
    return value !== null;
  });
  return filteredValues;
}
