/* exported filterOutNulls */
function filterOutNulls(values) {
  var result = [];
  values.forEach(function (value) {
    if (value !== null) result.push(value);
  });
  return result;
}
