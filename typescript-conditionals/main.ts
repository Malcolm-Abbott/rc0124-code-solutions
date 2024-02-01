/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number: number): boolean {
  return number < 5;
}

console.log('isUnderFive(4):', isUnderFive(4));
console.log('isUnderFive(10):', isUnderFive(10));
console.log('isUnderFive(5):', isUnderFive(5));

function isEven(number: number): boolean {
  return number % 2 === 0;
}

console.log('isEven(4):', isEven(4));
console.log('isEven(10):', isEven(10));
console.log('isEven(5):', isEven(5));

function startsWithJ(string: string): boolean {
  return string[0] === 'J';
}

console.log('startsWithJ("JavaScript"):', startsWithJ('JavaScript'));
console.log(`startsWithJ('PHP'):`, startsWithJ('PHP'));
console.log(`startsWithJ('HTML'):`, startsWithJ('HTML'));
console.log(`startsWithJ('Java'):`, startsWithJ('Java'));
console.log(`startsWithJ('Kotlin'):`, startsWithJ('Kotlin'));
console.log(`startsWithJ('C#'):`, startsWithJ('C#'));
console.log(`startsWithJ('job')`, startsWithJ('job'));

interface Person {
  name: string;
  age: number;
}

const bart: Person = {
  name: 'Bartholomew JoJo Simpson',
  age: 10,
};

const tart: Person = {
  name: 'Tartelius JoJo Simpson',
  age: 21,
};

function isOldEnoughToDrink(person: Person): boolean {
  return person.age >= 21;
}

console.log('isOldEnoughToDrink(bart):', isOldEnoughToDrink(bart));
console.log('isOldEnoughToDrink(tart):', isOldEnoughToDrink(tart));

function isOldEnoughToDrive(person: Person): boolean {
  return person.age >= 16;
}

console.log('isOldEnoughToDrive(bart):', isOldEnoughToDrive(bart));
console.log('isOldEnoughToDrive(tart):', isOldEnoughToDrive(tart));

function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  return !person;
}

console.log(
  'isOldEnoughToDrinkAndDrive(bart):',
  isOldEnoughToDrinkAndDrive(bart)
);
console.log(
  'isOldEnoughToDrinkAndDrive(tart):',
  isOldEnoughToDrinkAndDrive(tart)
);

function categorizeAcidity(pH: number): any {
  switch (true) {
    case pH < 0 || pH > 14:
      console.log('invalid pH level');
      break;
    case pH >= 0 && pH < 7:
      console.log('acid');
      break;
    case pH === 7:
      console.log('neutral');
      break;
    case pH > 7 && pH < 14:
      console.log('base');
      break;
  }
}

categorizeAcidity(-1);
categorizeAcidity(14.0000001);
categorizeAcidity(7);
categorizeAcidity(2);
categorizeAcidity(9);

function introduceWarnerBro(name: string): any {
  switch (name) {
    case 'yakko':
      console.log("We're the warner brothers!");
      break;
    case 'wakko':
      console.log("We're the warner brothers!");
      break;
    case 'dot':
      console.log(`I'm cute~`);
      break;
    default:
      console.log('Goodnight everybody!');
  }
}

introduceWarnerBro('yakko');
introduceWarnerBro('wakko');
introduceWarnerBro('dot');
introduceWarnerBro('cody');
introduceWarnerBro('minerva');

function recommendMovie(genre: string): any {
  switch (genre) {
    case 'action':
      console.log('Die hard');
      break;
    case 'comedy':
      console.log('The Big Lebowski');
      break;
    case 'horror':
      console.log('Halloween');
      break;
    case 'drama':
      console.log(`Don't watch drama!`);
      break;
    case 'musical':
      console.log('Pippin');
      break;
    case 'sci-fi':
      console.log(`Ender's Game`);
      break;
    default:
      console.log(
        `Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi`
      );
  }
}

recommendMovie('action');
recommendMovie('comedy');
recommendMovie('random');
