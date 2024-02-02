/* exported getKeys */
function getKeys(object: Record<string, unknown>): any[] {
  const result: any[] = [];
  for (const key in object) {
    result.push(key);
  }
  return result;
}
