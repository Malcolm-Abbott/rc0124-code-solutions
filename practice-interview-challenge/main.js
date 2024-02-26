'use strict';
function getRangeReport(start, end) {
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  let total = 0;
  range.forEach((number) => {
    total += number;
  });
  const odds = [];
  const evens = [];
  range.forEach((number) => {
    if (number % 2 !== 0) {
      odds.push(number);
    } else {
      evens.push(number);
    }
  });
  let sum = 0;
  range.forEach((number) => {
    sum += number;
  });
  const average = sum / range.length;
  const result = {
    total,
    odds,
    evens,
    range,
    average,
  };
  return result;
}
getRangeReport(1, 3);
getRangeReport(1, 4);
getRangeReport(0, 10);
getRangeReport(11, 20);
