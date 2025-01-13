/* exported countdown */
function countdown(number: number): number[] {
  const values = [];

  while (number >= 0) {
    values.push(number--);
  }

  return values;
}
