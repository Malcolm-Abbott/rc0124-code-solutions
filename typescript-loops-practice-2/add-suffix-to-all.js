/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixedWords = words.map(function (word) {
    return ''.concat(word).concat(suffix);
  });
  return suffixedWords;
}
