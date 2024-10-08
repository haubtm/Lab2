let numbers = [1, 2, 3, 4];
const newNumbers = numbers.map(function (num) {
  return num + 1;
});

console.log(newNumbers); // [2, 3, 4, 5]

numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers); // [1, 4, 9, 16]

numbers = [1, 2, 3, 4];
numbers.forEach(function (num) {
  console.log(num * 2);
});

const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers);

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);

const found = numbers.find(function (num) {
  return num > 3;
});

console.log(found);

const hasEven = numbers.some(function (num) {
  return num % 2 === 0;
});

console.log(hasEven);