'use strict';
/* exported dropRight */
function dropRight(array, count) {
  const result = array.slice(0, -count);
  return result;
}
