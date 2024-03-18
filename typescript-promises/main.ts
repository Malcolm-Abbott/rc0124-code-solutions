import { takeAChance } from './take-a-chance.js';

const chance1: Promise<string> = takeAChance('Malcolm');

chance1
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error.message);
  });
