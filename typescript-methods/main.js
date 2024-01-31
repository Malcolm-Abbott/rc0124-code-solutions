'use strict';
const heroes = ['a', 'b', 'c', 'd'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log(`randomHero: ${randomHero}`);
const library = [
  {
    title: "The Razor's Edge",
    author: 'W. Somerset Maugham',
  },
  {
    title: 'On The Road',
    author: 'Jack Kerouac',
  },
  {
    title: 'Ham On Rye',
    author: 'Charles Bukowski',
  },
];
const lastBook = library.pop();
const firstBook = library.shift();
console.log('lastBook:', lastBook);
console.log('firstBook:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);
const fullName = 'Malcolm Abbott';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
const employee = {
  name: 'Malcolm Abbott',
  age: 33,
  position: 'Student',
};
const employeeKeys = Object.keys(employee);
const employeeValues = Object.values(employee);
const employeePairs = Object.entries(employee);
console.log('employeeKeys:', employeeKeys);
console.log('employeeValues:', employeeValues);
console.log('employeePairs:', employeePairs);
