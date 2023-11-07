xyz();
let x;
console.log(x);
x = 1;

app();

function app() {
  let x = 150;
  console.log("this is app", x);
  function child() {
    let x = 20;
    console.log(x);
  }
  child();
}

function xyz() {
  let x = 1500;
  console.log(x);
}
console.log(x);

// closure is a phenomena in javascript where we can access function or variable before its been initialzed.
console.log(y); //index.js:25 Uncaught ReferenceError: Cannot access 'y' before initialization  this is in temporal dead zone using let and const they will assgined with separate memoery allocation
let y = 10;
console.log("y", y);

console.log(z); // undefined closures like using var the varibale is created in global scope and in execution context by default the variable will be undefined in allocation phase and in execution phase the value will be added to the varivale and then the execution context will be removed after completion or executing all the code in the file.
var z = 50;
console.log(z);
