/* exported omit */
function omit(source: Record<string, unknown>, keys: string[]): any {
  const result: any = {};
  const testObject: any = {};
  keys.forEach((element) => {
    testObject[element] = '';
  });
  for (const key in source) {
    if (!(key in testObject)) {
      result[key] = source[key];
    }
  }
  return result;
}
