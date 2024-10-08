let numbers = [1, 2, 3, 4];
const newNumbers = numbers.map(function (num) {
  return num + 1;
});

console.log(newNumbers); // [2, 3, 4, 5]

numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers); // [1, 4, 9, 16]