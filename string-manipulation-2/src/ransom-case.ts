/* exported ransomCase */
/*
PSEUDOCODE
Define a function named ransomCase that accepts one parameter: string, of data type string
The return value will be of data type string
Assign an empty string to a variable named result that has the ability to be reassigned.
Iterate through the string parameter.
If your counter variable modulo | remainder 2 is strictly equal to 0 => use the addition assignment operator to
concatenate string at counter variable to lower case (using the appropriate method).
Otherwise, use the addition assignment operator to concatenate string at counter variable to upper case (use the
  appropriate method).
Return result.
*/
function ransomCase(string: string): string {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      result += string[i].toLowerCase();
    } else {
      result += string[i].toUpperCase();
    }
  }
  return result;
}
