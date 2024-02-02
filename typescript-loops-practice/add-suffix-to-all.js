/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var result = [];
  for (var i = 0; i < words.length; i++) {
    words[i] += suffix;
    result.push(words[i]);
  }
  return result;
}
