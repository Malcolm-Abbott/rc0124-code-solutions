'use strict';
/* exported pick */
function pick(source, keys) {
  const result = {};
  keys.forEach((key) => {
    if (key in source && source[key] !== undefined) {
      result[key] = source[key];
    }
  });
  return result;
}
