/* exported sumAll */
function sumAll(numbers) {
  var sum = 0;
  numbers.forEach(function (number) {
    sum += number;
    return sum;
  });
  return sum;
}
