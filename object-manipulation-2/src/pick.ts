/* exported pick */
function pick(source: Record<string, unknown>, keys: string[]): unknown {
  const result: any = {};
  keys.forEach((key) => {
    if (key in source && source[key] !== undefined) {
      result[key] = source[key];
    }
  });
  return result;
}
