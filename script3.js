// Exercises 3

// Write the function getAverageAge(users) that gets an array of
// objects with property age and gets the average.

// The formula for the average is (age1 + age2 + ... + ageN) / N. For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let users = [john, pete, mary];

let users = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
];

function getAverageAge(users) {
  let totalAge = 0;

  users.forEach((user) => (totalAge += user.age));

  return totalAge / users.length;
}
console.log(getAverageAge(users));
