let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split(" "));
console.log(str);
// Parameter is the character that will identify the breaks in the string when converting into an array

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join(''))
console.log(arr);
// Parameter is the character that will seperate each content of the array in the new string.

//3) Do split or join change the original string/array?
// No these do not change the original string/array.

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
cargoHoldarray = cargoHold.split(",").sort();
cargoHold2 = cargoHoldarray.join(",");
console.log(cargoHold2);