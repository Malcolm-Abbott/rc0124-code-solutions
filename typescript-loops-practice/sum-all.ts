/* exported sumAll */
function sumAll(numbers: number[]): number {
  let answer = 0;
  numbers.forEach((number) => {
    answer += number;
  });
  return answer;
}
