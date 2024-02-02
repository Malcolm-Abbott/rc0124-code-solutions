/* exported getLastChar */
/*
PSEUDOCODE
Define a function named getLastChar that accepts one parameter: string
Return the last character in the string using any given method or indexing.
*/
function getLastChar(string: string): string | undefined {
  return string.at(-1);
}
