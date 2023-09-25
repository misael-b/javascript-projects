const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newCharacter = ''; 
let newStrEnd = str.slice(0, 3);
let newsStrStart = str.slice(3, str.length);
// console.log(newStrEnd);
// console.log(newsStrStart);
newCharacter = newsStrStart + newStrEnd;



//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original word is '${str}' and the new word is '${newCharacter}'`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let info = input.question('Please enter the number of letters that will be relocated:  ');
let numInput = Number(info);
let newStrEndInput = str.slice(0, numInput);
let newsStrStartInput = str.slice(numInput, str.length);
let newCharacterInput = newsStrStartInput + newStrEndInput;

console.log(`The original word is '${str}' and the new word is '${newCharacterInput}' based on your choice of ${numInput} letters`);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numInput > str.length) {
    console.log(`The number of letters is bigger than the string! It is defaulted 3 letters!!!`)
    newStrEnd = str.slice(0, 3);
    newsStrStart = str.slice(3, str.length);
    newCharacter = newsStrStart + newStrEnd;
    console.log(`The original word is '${str}' and the new word is '${newCharacter}'`);
} else {
    newStrEndInput = str.slice(0, numInput);
    newsStrStartInput = str.slice(numInput, str.length);
    newCharacterInput = newsStrStartInput + newStrEndInput;

    console.log(`The original word is '${str}' and the new word is '${newCharacterInput}' based on your choice of ${numInput} letters`);
}