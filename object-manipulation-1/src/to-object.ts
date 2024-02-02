/* exported toObject */
function toObject(keyValuePair: any[]): any {
  const value = keyValuePair[1];
  const key = keyValuePair[0];
  const result = {};
  result[key] = value;
  return result;
}
