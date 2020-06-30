var array = [0, 1, 1, 2, 3, 4, 4, 5]
var models = []

for (let i = 0; i < array.length; i++) {
  if (array.indexOf(array[i]) === i) {
    models.push(array[i])
  }
}

console.log('Models: ' + models)

var uniqueNumbers = array.filter((number, i, numbers) => numbers.indexOf(number) === i)

console.log(`uniqueNumbers: ${uniqueNumbers}`)