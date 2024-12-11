// / TODO: using the function expressions below, refactor them into function declarations

// function expression

const greet = function() {
  console.log("Hello!");
};
// funtion declaration
function greet(){
  console.log("hello!");
}
// funtion expression
const threeModTwo = function() {
  console.log(3 % 2);
};

// function declaration
function threeModTwo(){
  console.log(3 % 2);
}

// funtion exprestion
let age = 18;
const checkDrivingAge = function() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
};
// function declaration

 function checkDrivingAge(){
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
 }
