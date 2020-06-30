const pets = [
  {
    type: 'dog',
    name: 'bolinha',
    age: 15,
    weight: 30
  },
  {
    type: 'cat',
    name: 'mingal',
    age: 6,
    weight: 2
  },
  {
    type: 'dog',
    name: 'rex',
    age: 4,
    weight: 5
  },
  {
    type: 'cat',
    name: 'marrom',
    age: 2,
    weight: 1
  },
  {
    type: 'fish',
    name: 'gulp',
    age: 1,
    weight: 0.01
  },
  {
    type: 'horse',
    name: 'pé de pano',
    age: 1,
    weight: 70
  }
]

// Desestructing ({ name }) === pet.name
const petNames = pets.map(({ name }) => name)

console.log('Pets: ', pets)
console.log('petNames: ', petNames)


// FOR
const newPets = []

for (let index = 0; index < pets.length; index++) {
  newPets.push(pets[index].name)  
}

console.log('newPets: ', newPets)


// FOREACH
const newPetsForEach = []

pets.forEach((_, index, pets) => {
  newPetsForEach.push(pets[index].name) 
})

console.log('newPetsForEach: ', newPets)
