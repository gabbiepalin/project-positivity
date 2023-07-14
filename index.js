function add7(number) {
    let result = number + 7
    return result;
}

/* let myNumber = 5; */
/* let result = add7(myNumber);
console.log(result); */

function multiply (number1, number2) {
    let result = number1 * number2;
    return result;
}

/* let num1 = 4;
let num2 = 3;
let result = multiply(num1, num2);
console.log(result) */

var x = 100
var y = 50

// console.log(getSum(x,y));

function getSum (n1, n2){
    var sum = n1 + n2
    return sum
}
var sum1 = getSum(x, y)
var sum2 = getSum(10, 5)

const limit = 50; // Define the limit

for (let number = 1; number <= limit; number++) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}