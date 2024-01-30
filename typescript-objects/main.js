'use strict';
const student = {
  firstName: 'Malcolm',
  lastName: 'Abbott',
  age: 33,
};
const fullName = `${student.firstName} ${student.lastName}`;
console.log(`fullName: ${fullName}`);
student.livesInIrvine = false;
student.previousOccupation = 'EMT';
console.log('student.livesInIrvine:', student.livesInIrvine);
console.log('student.previousOccupation:', student.previousOccupation);
console.log('student:', student);
const vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: 2015,
};
vehicle['color'] = 'dark grey';
vehicle['isConvertible'] = false;
console.log(`vehicle['color']: ${vehicle['color']}`);
console.log('vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('vehicle:', vehicle);
const pet = {
  name: 'Rose',
  kind: 'dog',
};
delete pet.name;
delete pet.kind;
console.log('pet:', pet);
