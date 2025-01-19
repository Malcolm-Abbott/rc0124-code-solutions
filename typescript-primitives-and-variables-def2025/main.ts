const fullName: string = 'Malcolm Abbott';
const isCool: boolean = true;
const totalPets: number = 3;
const myInfoArray: any[] = [fullName, isCool, totalPets];

myInfoArray.forEach((element, i) => {
  switch (i) {
    case 0:
      console.log('fullName:', element);
      console.log('typeOf fullName:', typeof element);
      break;
    case 1:
      console.log('isCool:', element);
      console.log('typeof isCool:', typeof element);
      break;
    case 2:
      console.log('totalPets:', element);
      console.log('typeof totalPets:', typeof element);
  }
});

const unknown: null = null;
let never: undefined;
const absenceOfValues: any[] = [unknown, never];

absenceOfValues.forEach((oddity, i) => {
  if (!i) {
    console.log('unknown:', oddity);
    console.log('typeof unknown:', typeof oddity);
  } else {
    console.log('never:', oddity);
    console.log('typeof never:', oddity);
  }
});
