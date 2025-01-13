/* exported countdown */
function countdown(number) {
  var values = [];
  while (number >= 0) {
    values.push(number--);
  }
  return values;
}
