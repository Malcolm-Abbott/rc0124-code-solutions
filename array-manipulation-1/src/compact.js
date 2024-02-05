'use strict';
/* exported compact */
function compact(array) {
  const result = [];
  array.forEach((element) => {
    if (element) result.push(element);
  });
  return result;
}
