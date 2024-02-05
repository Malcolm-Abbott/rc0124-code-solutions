/* exported getWords */
function getWords(string: string): any[] {
  let result = string.split(' ');
  if (string === '') result = [];
  return result;
}
