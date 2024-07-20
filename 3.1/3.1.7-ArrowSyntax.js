// refactor the functions below into arrow syntax
// function declaration
function myNumberFunction() {
  return ((2 ** 2 + 3) % 4) * 14;
}

// arrow syntax
const myNumberFunction = () =>((2 ** 2 + 3) % 4) * 14;


// "block body"
// function declaration
function greet(name) {
  return `Hello, ${name}`;
}

// arrow syntax

// function declaration
const timeOfDayGreet = function(name, timeOfDay) {
  return `Hello, ${name}, good ${timeOfDay}`;
};

// arrow syntax

// function declaration
function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}

// arrow syntax

// function declaration
function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}

// arrow syntax
