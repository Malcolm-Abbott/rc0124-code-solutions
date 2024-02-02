/* exported getKeys */
/*
PSEUDOCODE
Define a function named getKeys that accepts one paramter: object, of an object | dictionary data type
Your return value will be an array | list.
Declare a variable named result and assign an empty array literal as it's value.
Iterate through the object paramter, and push | append the keys into the variable result.
Return the variable result.
*/
function getKeys(object: Record<string, unknown>): any[] {
  const result: any[] = [];
  for (const key in object) {
    result.push(key);
  }
  return result;
}
