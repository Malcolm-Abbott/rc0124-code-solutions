const heroes: string[] = ['a', 'b', 'c', 'd'];
let randomNumber: number = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero: string = heroes[randomIndex];
console.log(`randomHero: ${randomHero}`);

interface Library {
  title: string;
  author: string;
}

const library: Library[] = [
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

const lastBook: Library = library.pop();
const firstBook: Library = library.shift();

console.log('lastBook:', lastBook);
console.log('firstBook:', firstBook);

const js: Library = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};

const css: Library = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

const fullName: string = 'Malcolm Abbott';
const firstAndLastName: string[] = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

const firstName: string = firstAndLastName[0];
const sayMyName: string = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);

interface Employee {
  name: string;
  age: number;
  position: string;
}

const employee: Employee = {
  name: 'Malcolm Abbott',
  age: 33,
  position: 'Student',
};

const employeeKeys: string[] = Object.keys(employee);
const employeeValues: string[] = Object.values(employee);
const employeePairs: any = Object.entries(employee);

console.log('employeeKeys:', employeeKeys);
console.log('employeeValues:', employeeValues);
console.log('employeePairs:', employeePairs);
