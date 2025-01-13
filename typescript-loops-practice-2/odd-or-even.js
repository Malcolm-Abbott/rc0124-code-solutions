/* exported oddOrEven */
function oddOrEven(numbers) {
  var result = numbers.map(function (number) {
    return number % 2 === 0 ? 'even' : 'odd';
  });
  return result;
}
