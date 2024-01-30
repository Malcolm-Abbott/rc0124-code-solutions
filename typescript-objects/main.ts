interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const student: StudentProps = {
  firstName: 'Malcolm',
  lastName: 'Abbott',
  age: 33,
};

const fullName: string = `${student.firstName} ${student.lastName}`;

console.log(`fullName: ${fullName}`);

student.livesInIrvine = false;
student.previousOccupation = 'EMT';

console.log('student.livesInIrvine:', student.livesInIrvine);
console.log('student.previousOccupation:', student.previousOccupation);
console.log('student:', student);

const vehicle: Vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: 2015,
};

vehicle['color'] = 'dark grey';
vehicle['isConvertible'] = false;

console.log(`vehicle['color']: ${vehicle['color']}`);
console.log('vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('vehicle:', vehicle);

const pet: Pet = {
  name: 'Rose',
  kind: 'dog',
};

delete pet.name;
delete pet.kind;

console.log('pet:', pet);
