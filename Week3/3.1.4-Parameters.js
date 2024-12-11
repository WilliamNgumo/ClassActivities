// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function functionWithTwoParams (param1, param2){
console.log(param1,param2);
return param1 + param2;
}
// invoke the function and pass in two numbers
console.log(functionWithTwoParams(5, 10));
// invoke the function and pass in more than two numbers
console.log(functionWithTwoParams(5, 10, 4, 60));
// invoke the function and pass in only one number
console.log(functionWithTwoParams(5));
// change the function to set default values for the parameters
function functionWithDefultParams (param1 = 0, param2 = 9){
  console.log(param1,param2);
  return param1 + param2;
  }
// again, invoke the function and pass in only one number
console.log(functionWithDefultParams(5));
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function functionWithReturnParams (param1 = 0, param2 = 9){
  console.log(param1,param2);
  console.log(param3)
  return param1 + param2
}
// again, invoke the function and pass in more than two numbers
console.log(functionWithReturnParams(10, 20, 40, 52));

