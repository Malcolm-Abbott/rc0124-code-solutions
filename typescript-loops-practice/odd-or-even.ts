/* exported oddOrEven */
function oddOrEven(numbers: number[]): string[] {
  const result = [];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      result.push('even');
    } else {
      result.push('odd');
    }
  });
  return result;
}
