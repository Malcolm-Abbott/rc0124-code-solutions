/* exported getIndexes */
function getIndexes(array: any[]): number[] {
  let index = 0;
  const indexes: number[] = [];
  const linterForcingUseOfElement = [];

  array.forEach((element) => {
    indexes.push(index++);
    linterForcingUseOfElement.push(element);
  });

  return indexes;
}
