const { basename } = require("path");

let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = false;
y = null;
z = false;


// print x, y, and z
console.log(x, y, and z)

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
a = false;
b = false ;
c = faslse;

// using BRACKET NOTATION, assign a value to b
b[0] = "Learsi"

// using DOT NOTATION, assign a PROPERTY to c
c.name = "Learsi";
c.age = "too Young";
c.age = "21";

// using DOT NOTATION, assign a METHOD to c
c.output = function(name) {console.log(name) };
c. output(c.name);



// using BRACKET NOTATION, call the method in c
const command = 'output';
c[command](c.name);

//c. command <- this doesn't work


// print a, b, and c
console.log('a', a);
console.log('b', b);
console.log('c', c);
