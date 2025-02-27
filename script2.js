// Exercises 2

// You have an array of user objects, each one has user.name.
// Write the code that converts it into an array of names.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let persons = [john, pete, mary];

let persons = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 },
];

let names = persons.map((user) => user.name);

alert(names); // John, Pete, Mary
