/* exported getIndexes */
function getIndexes(array: string[]): number[] {
  const result = [];
  const letMeCommit = [];
  let i = 0;
  array.forEach((element) => {
    result.push(i);
    letMeCommit.push(element);
    i++;
  });
  return result;
}
