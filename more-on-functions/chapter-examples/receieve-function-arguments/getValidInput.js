const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let isValid = function (word) {
  return word[0] === 'a'
}
console.log(getValidInput('input starts with "a"', isValid));
 

// TODO 2: write a validator 
// that ensures input is a vowel
let isValidVowel = function (wordVowel) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (i = 0; i < vowels.length; i++){
    if (wordVowel.toLowerCase() === vowels[i]) {
      return true
    }
  }
  
  return false
}

console.log(getValidInput('Enter a vowel: ', isValidVowel));

// Be sure to test your code!
