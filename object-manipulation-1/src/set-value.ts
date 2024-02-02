/* exported setValue */
function setValue(
  object: Record<string, unknown>,
  key: string,
  value: any
): any {
  object[key] = value;
}
