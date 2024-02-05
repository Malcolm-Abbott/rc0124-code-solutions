'use strict';
/* exported lastChars */
function lastChars(length, string) {
  if (length > string.length) return string;
  const result = string.substring(string.length - length);
  return result;
}
