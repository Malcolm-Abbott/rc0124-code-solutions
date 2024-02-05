/* exported getValue */
/*
PSEUDOCODE
Define a function named getValue that accepts two parameters: object, of data type object | dictionary, and
key, of data type string.
Return the object at key using indexing.
*/
function getValue(object: Record<string, unknown>, key: string): any {
  return object[key];
}
