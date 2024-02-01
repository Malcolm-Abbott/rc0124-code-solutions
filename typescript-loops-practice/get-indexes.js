/* exported getIndexes */
function getIndexes(array) {
  var result = [];
  var i = 0;
  array.forEach(function (element) {
    result.push(i);
    i++;
  });
  return result;
}
