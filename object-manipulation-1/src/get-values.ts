/* exported getValues */
function getValues(object: Record<string, unknown>): any[] {
  const result: unknown[] = [];
  for (const key in object) {
    result.push(object[key]);
  }
  return result;
}
