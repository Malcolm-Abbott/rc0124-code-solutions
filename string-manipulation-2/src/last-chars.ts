/* exported lastChars */
function lastChars(length: number, string: string): string {
  if (length > string.length) return string;
  const result = string.substring(string.length - length);
  return result;
}
