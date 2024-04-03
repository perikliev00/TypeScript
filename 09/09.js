var numbers = [1, 2, 3, 4, 5];
var evens = numbers.filter(function (num) { return num % 2 === 0; });
console.log("Even number:", evens);
var squares = numbers.map(function (num) { return Math.pow(num, 2); });
console.log("Squares:", squares);
var sum = numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
console.log("Sum:", sum);
