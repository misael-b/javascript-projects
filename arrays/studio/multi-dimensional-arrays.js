let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray = food.split(',').sort();
let equipmentArray = equipment.split(',').sort();
let petsArray = pets.split(',').sort();
let sleepAidsArray = sleepAids.split(',').sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(foodArray, equipmentArray, petsArray, sleepAidsArray);
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');


let info = input.question("Please select a cabinet (0 - 3) in the cargoHold:  ");
userNum = Number(info);
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if ((userNum >= 0) && (userNum <= 3) && (userNum % 1 === 0)) {
    console.log(`The contents of the selected cabinet are ${cargoHold[userNum]}`);
} else {
    console.log('ERROR! You have entered aninvalid number');
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let num2 = Number(input.question("Please select a cabinet (0 - 3) in the cargoHold:  "));
let userItem = input.question("Please enter an item you think is in this cabinet:  ");
if ((num2 >= 0) && (num2 <= 3) && (num2 % 1 === 0)) {
    userCabinet = cargoHold[num2];
} else {
    console.log('ERROR! You have entered aninvalid number');
}

if (userCabinet.includes(userItem)) {
    console.log(`Cabinet ${num2} DOES contain ${userItem}`);
} else {
    console.log(`Cabinet ${num2} DOES NOT contain ${userItem}`);
}