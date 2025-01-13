/* exported filterOutStrings */
function filterOutStrings(values) {
  var filteredValues = values.filter(function (value) {
    return typeof value !== 'string';
  });
  return filteredValues;
}
