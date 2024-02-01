/* exported oddOrEven */
function oddOrEven(numbers) {
  var result = [];
  numbers.forEach(function (number) {
    if (number % 2 === 0) {
      result.push('even');
    } else {
      result.push('odd');
    }
  });
  return result;
}
