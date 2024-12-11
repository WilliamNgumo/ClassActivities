/ bracket and dot notation
const key = "1";
const obj = {
  key: console.log("the key is 'key'"),
  1: console.log("the key is 1")
};
// what will the following lines print?
obj[key]; // 1
obj.key; //the key is the key
obj["key"]; //key
// Create an object with at least four properties, each with a different data type.
// Name one of the four properties "collection" and set its value to an Array or Object.
const myObject = {
  name: "Hannah",
  number: "719-388-6770",
  id: 439435794,
  collection: ["cheese", "art", "movies", "Some guy named Joe"]
};
// Access a value in the "collection" property
console.log(myObject.collection[2]);
// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];
// Add a method to an Object
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};
//calling on x method
console.log(obj.method());
// Fill in your favorite movie, number and color below
obj["favorites"] = {
  movie: "FrozenOZ",
  number: 2,
  color: "Teal"
};
//accessing an object within an object
console.log(obj.favorites.movie);
// Add a list (a.k.a array) to an Object
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];
//accessing array within an array
console.log(obj.list[4][0]);
//accessing objects within an array
console.log(obj.list[5].f);
// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print?
// what do you expect to see on each line?
for (let key in keys) {
  console.log(Key is: ${key} and value is: ${obj[key]});
}
// Use a template literal to print a sentence about your favorite things
console.log(My favorite movie is ${obj.favorites.movie}.);
// Access the values "b", 4, and 6 from obj.list
console.log(obj.list[1]);
console.log(obj.list[4][1]);
console.log(obj.list[5].f);
