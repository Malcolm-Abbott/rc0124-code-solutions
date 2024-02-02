/* exported filterOutStrings */
function filterOutStrings(values) {
  var result = [];
  values.forEach(function (value) {
    if (typeof value !== 'string') result.push(value);
  });
  return result;
}
