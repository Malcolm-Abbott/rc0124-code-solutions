function convertMinutesToSeconds(minutes: number): number {
  const seconds: number = minutes * 60;
  return seconds;
}

const convertMinutesToSecondsResult: number = convertMinutesToSeconds(5);

console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name: string): string {
  return `Hey ${name}!`;
}

const greetResult: string = greet('Beavis');

console.log('greetResult:', greetResult);

const getArea: any = (width: number, height: number): number => {
  const area: number = width * height;
  return area;
};

const getAreaResult: number = getArea(17, 42);

console.log('getAreaResult:', getAreaResult);

interface Person {
  firstName: string;
  lastName: string;
}

const getFirstName: any = (person: Person): string => {
  const firstName: string = person.firstName;
  return firstName;
};

const getFirstNameResult: string = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
});

console.log('getFirstNameResult:', getFirstNameResult);

const getLastElement: any = (array: string[]): string => array.at(-1);

const getLastElementResult: string = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);

console.log('getLastElementResult:', getLastElementResult);

function callOtherFunction(otherFunction: any, params: unknown): any {
  return otherFunction(params);
}

const callOtherFunctionResult: any = callOtherFunction(
  convertMinutesToSeconds,
  10
);

console.log('callOtherFunctionResult:', callOtherFunctionResult);
