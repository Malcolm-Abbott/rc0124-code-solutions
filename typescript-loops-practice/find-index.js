/* exported findIndex */
function findIndex(array, value) {
  var result = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return (result = i);
  }
  return result;
}
