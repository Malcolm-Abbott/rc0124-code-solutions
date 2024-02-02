/* exported includesSeven */
function includesSeven(array) {
  var result = false;
  array.forEach(function (element) {
    if (element === 7) result = true;
  });
  return result;
}
