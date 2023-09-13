var input = require('readline-sync');

let name = input.question("Enter your name: ");
let lastName = input.question("Enter your last name: ");


console.log("First Name: " + name);
console.log("Last Name: " + lastName);
console.log("Last, First: " + lastName + ', ' + name);
