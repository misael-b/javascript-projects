//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let startingFuelUser;
let numOfAstronautsUser;
let altitude = 0;




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

const input = require('readline-sync');
startingFuelUser = Number(input.question('Please enter the starting fuel level: \n'));
while ((startingFuelUser < 5000) || (startingFuelUser > 30000) || (startingFuelUser % 1 != 0)) {
  startingFuelUser = Number(input.question('ERROR!!! Please enter a valid (greater than 5000 but less than 30000) starting fuel level: \n'));
}




//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
numOfAstronautsUser = Number(input.question('Please enter the number of astronauts aboard: (up to a maximum of 7) \n'));
while ((numOfAstronautsUser > 7) || (numOfAstronautsUser % 1 != 0) || (numOfAstronautsUser < 0)) {
  numOfAstronautsUser = Number(input.question('ERROR!!! Please enter the number of astronauts aboard: (up to a maximum of 7)\n'));
}
  
// //c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while ((startingFuelUser - (100 * numOfAstronautsUser)) >= 0) {
  startingFuelUser -= (100 * numOfAstronautsUser);
  altitude += 50;
}

// /*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

// If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${altitude} km.`)
if (altitude >= 2000) {
  console.log('Orbit Achieved')
} else {
  console.log('Failed to reach orbit (2000km).')
}