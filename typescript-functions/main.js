'use strict';
function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);
function greet(name) {
  return `Hey ${name}!`;
}
const greetResult = greet('Beavis');
console.log('greetResult:', greetResult);
const getArea = (width, height) => {
  const area = width * height;
  return area;
};
const getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);
const getFirstName = (person) => {
  const firstName = person.firstName;
  return firstName;
};
const getFirstNameResult = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
});
console.log('getFirstNameResult:', getFirstNameResult);
const getLastElement = (array) => array.at(-1);
const getLastElementResult = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('getLastElementResult:', getLastElementResult);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
const callOtherFunctionResult = callOtherFunction(convertMinutesToSeconds, 10);
console.log('callOtherFunctionResult:', callOtherFunctionResult);
