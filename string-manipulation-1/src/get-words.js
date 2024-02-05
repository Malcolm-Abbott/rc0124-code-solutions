'use strict';
/* exported getWords */
function getWords(string) {
  let result = string.split(' ');
  if (string === '') result = [];
  return result;
}
