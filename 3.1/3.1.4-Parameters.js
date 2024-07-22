 // Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function functionwithtwoParams(x, y){

}console.log("first param is:", x);
console.log("second param is:", y);
return x + y;
}

// invoke the function and pass in two numbers
functionwithtwoParams(5, 10);
// Prints
//first param is: 5
//second param is: 10

// return
//15

// invoke the function and pass in more than two numbers
functionwithtwoParams(5, 10, 15, 20);
// prints
// first param is: 5
// second param is: 10

// invoke the function and pass in only one number
functionwithtwoParams(5);
// prints
// first param is: 5
// second param is: undefined
