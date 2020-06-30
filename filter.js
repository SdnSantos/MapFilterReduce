const pets = [
  {
    name: 'rex',
    type: 'dog',
    age: 10
  },
  {
    name: 'miau',
    type: 'cat',
    age: 2
  },
  {
    name: 'gulp',
    type: 'fish',
    age: 1
  }
];

const newPets = pets.filter(({ age }) => age <= 5);

console.log('Pets: ', pets);
console.log('newPets: ', newPets);