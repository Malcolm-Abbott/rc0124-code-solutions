'use strict';
const colors = ['red', 'white', 'blue'];
let i = 0;
colors.forEach((number) => {
  console.log(`colors[${i++}]: ${number}`);
});
console.log(`America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);
colors[2] = 'green';
console.log(`Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);
console.log('colors:', colors);
const students = ['Malcolm', 'Nate', 'Eduardo', 'Connie'];
const numberOfStudents = students.length;
console.log(`There are ${numberOfStudents} students in the class.`);
const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log(`The last student in the array is ${lastStudent}`);
console.log('students:', students);
