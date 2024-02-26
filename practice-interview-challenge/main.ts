interface Result {
  total: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
}

function getRangeReport(start: number, end: number): Result {
  const range: number[] = [];

  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  let total = 0;

  range.forEach((number) => {
    total += number;
  });

  const odds: number[] = [];
  const evens: number[] = [];

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

  const result: Result = {
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
