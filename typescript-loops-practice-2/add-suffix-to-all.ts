/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const suffixedWords = words.map((word) => `${word}${suffix}`);
  return suffixedWords;
}
