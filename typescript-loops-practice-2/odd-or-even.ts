/* exported oddOrEven */
function oddOrEven(numbers: number[]): string[] {
  const result = numbers.map((number) => (number % 2 === 0 ? 'even' : 'odd'));
  return result;
}
