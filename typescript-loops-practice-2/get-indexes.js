/* exported getIndexes */
function getIndexes(array) {
  var index = 0;
  var indexes = [];
  var linterForcingUseOfElement = [];
  array.forEach(function (element) {
    indexes.push(index++);
    linterForcingUseOfElement.push(element);
  });
  return indexes;
}
