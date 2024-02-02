/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    words[i] += suffix;
    result.push(words[i]);
  }
  return result;
}
