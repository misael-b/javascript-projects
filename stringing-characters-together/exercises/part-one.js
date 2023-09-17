let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
let numInString = String(num);
console.log(numInString.length)
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let num2 = 123.45
let num2InString = String(num2);
console.log(num2InString.length - 1);
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
num = 98;

if ((num % 1) === 0) {
    numInString = String(num);
    console.log(numInString.length)
} else {
    numInString = String(num);
    console.log(numInString.length - 1);
}