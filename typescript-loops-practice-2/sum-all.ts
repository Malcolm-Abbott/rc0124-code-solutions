/* exported sumAll */
function sumAll(numbers: number[]): number {
  let sum = 0;

  numbers.forEach((number) => {
    sum += number;
    return sum;
  });

  return sum;
}
