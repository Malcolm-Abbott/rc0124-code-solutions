/* exported sumAll */
function sumAll(numbers) {
  var answer = 0;
  numbers.forEach(function (number) {
    answer += number;
  });
  return answer;
}
