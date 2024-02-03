'use strict';
/* exported omit */
function omit(source, keys) {
  const result = {};
  const testObject = {};
  keys.forEach((element) => {
    testObject[element] = '';
  });
  for (const key in source) {
    if (!(key in testObject)) {
      result[key] = source[key];
    }
  }
  return result;
}
